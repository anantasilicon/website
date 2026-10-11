import fs from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import { legal, siteConfig } from "@/config/site";

/**
 * Legal pages are authored as plain Markdown in src/content/legal/ so counsel can review them as
 * text. This file renders a deliberately small Markdown subset (no raw HTML) and enforces the
 * publishing rule: a build with `legal.published = true` fails while any placeholder is unresolved.
 */

export const legalDocs = {
  privacy: { file: "privacy.md", title: "Privacy notice" },
  terms: { file: "terms.md", title: "Website terms of use" },
} as const;

export type LegalSlug = keyof typeof legalDocs;

export function isLegalSlug(s: string): s is LegalSlug {
  return Object.prototype.hasOwnProperty.call(legalDocs, s);
}

export function readLegal(slug: LegalSlug): string {
  return fs.readFileSync(path.join(process.cwd(), "src/content/legal", legalDocs[slug].file), "utf8");
}

const PLACEHOLDER = /\[\[(FOUNDER INPUT|LEGAL REVIEW):\s*([^\]]*?)\]\]/g;

/** Number of unresolved items: [[...]] markers plus {{tokens}} whose config value is not set. */
export function countUnresolved(md: string): number {
  let n = (md.match(PLACEHOLDER) ?? []).length;
  if (md.includes("{{operator}}") && !siteConfig.legalEntity) n += 1;
  if (md.includes("{{effectiveDate}}") && !legal.effectiveDate) n += 1;
  return n;
}

/** Throws (failing `next build`) if the legal pages are marked published with unresolved items. */
export function assertPublishable(slug: LegalSlug, md: string): void {
  if (!legal.published) return;
  const n = countUnresolved(md);
  if (n > 0) {
    throw new Error(
      `legal.published is true but ${legalDocs[slug].file} still has ${n} unresolved placeholder(s). ` +
        `Resolve every [[FOUNDER INPUT]] / [[LEGAL REVIEW]] marker and set legalEntity and effectiveDate, ` +
        `or set legal.published to false. See docs/legal/launch-checklist.md.`,
    );
  }
}

function Flag({ kind, text }: { kind: string; text: string }) {
  return (
    <span className="inline border border-dashed border-annotation px-1.5 py-0.5 font-mono text-xs text-annotation [overflow-wrap:anywhere]">
      [{kind}: {text}]
    </span>
  );
}

const INLINE = /(\[\[[^\]]*?\]\]|\{\{\w+\}\}|\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g;
const linkCls =
  "t-ui text-accent underline underline-offset-4 decoration-1 hover:decoration-2 [overflow-wrap:anywhere]";

function inline(text: string): ReactNode[] {
  return text.split(INLINE).map((part, i) => {
    if (!part) return null;
    const ph = part.match(/^\[\[(FOUNDER INPUT|LEGAL REVIEW):\s*([^\]]*?)\]\]$/);
    if (ph) return <Flag key={i} kind={ph[1]} text={ph[2]} />;
    const tok = part.match(/^\{\{(\w+)\}\}$/);
    if (tok) {
      switch (tok[1]) {
        case "contactEmail":
          return (
            <a key={i} href={`mailto:${siteConfig.contactEmail}`} className={linkCls}>
              {siteConfig.contactEmail}
            </a>
          );
        case "operator":
          return siteConfig.legalEntity ? (
            <span key={i}>{siteConfig.legalEntity}</span>
          ) : (
            <Flag key={i} kind="FOUNDER INPUT" text="operator’s legal name and address" />
          );
        case "effectiveDate":
          return legal.effectiveDate ? (
            <span key={i}>{legal.effectiveDate}</span>
          ) : (
            <Flag key={i} kind="FOUNDER INPUT" text="effective date, set on publication" />
          );
        default:
          return <Flag key={i} kind="UNKNOWN TOKEN" text={tok[1]} />;
      }
    }
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link && /^(https:\/\/|mailto:|\/)/.test(link[2])) {
      return (
        <a key={i} href={link[2]} className={linkCls}>
          {link[1]}
        </a>
      );
    }
    return part;
  });
}

/** Renders the Markdown subset: #, ##, ###, "- " lists, paragraphs. The first "# " becomes the page <h1>. */
export function renderLegalMarkdown(md: string): { title: string; body: ReactNode[] } {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const body: ReactNode[] = [];
  let title = "";
  let para: string[] = [];
  let list: string[] = [];
  let k = 0;
  const flush = () => {
    if (para.length) {
      body.push(
        <p key={k++} className="leading-relaxed">
          {inline(para.join(" "))}
        </p>,
      );
      para = [];
    }
    if (list.length) {
      body.push(
        <ul key={k++} className="list-disc space-y-2 pl-5 leading-relaxed">
          {list.map((li, i) => (
            <li key={i}>{inline(li)}</li>
          ))}
        </ul>,
      );
      list = [];
    }
  };
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flush();
    } else if (line.startsWith("### ")) {
      flush();
      body.push(
        <h3 key={k++} className="mt-8 text-lg font-medium leading-snug">
          {inline(line.slice(4))}
        </h3>,
      );
    } else if (line.startsWith("## ")) {
      flush();
      body.push(
        <h2 key={k++} className="mt-12 text-2xl leading-snug">
          {inline(line.slice(3))}
        </h2>,
      );
    } else if (line.startsWith("# ")) {
      flush();
      title = line.slice(2);
    } else if (line.startsWith("- ")) {
      if (para.length) flush();
      list.push(line.slice(2));
    } else {
      if (list.length) flush();
      para.push(line.trim());
    }
  }
  flush();
  return { title, body };
}
