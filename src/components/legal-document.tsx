import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/page-parts";
import { legal } from "@/config/site";
import { assertPublishable, countUnresolved, legalDocs, readLegal, renderLegalMarkdown, type LegalSlug } from "@/lib/legal";

export function legalMetadata(slug: LegalSlug): Metadata {
  return {
    title: legalDocs[slug].title,
    robots: legal.published ? undefined : { index: false, follow: false },
  };
}

/** Body of /privacy and /terms. Content lives in src/content/legal/*.md. */
export function LegalDocument({ slug }: { slug: LegalSlug }) {
  const md = readLegal(slug);
  assertPublishable(slug, md); // fails the build if published with unresolved placeholders
  const { title, body } = renderLegalMarkdown(md);
  const unresolved = countUnresolved(md);

  return (
    <Container className="py-16 md:py-24">
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-6 max-w-[20ch] text-[clamp(2rem,5vw,3.25rem)] leading-[1.06] tracking-[-0.02em]">{title}</h1>
      {!legal.published ? (
        <p
          role="note"
          className="mt-6 max-w-prose border border-dashed border-annotation px-4 py-3 font-mono text-xs leading-relaxed text-annotation"
        >
          DRAFT — NOT PUBLISHED. For founder and legal review only; this page exists in development builds only.{" "}
          {unresolved} unresolved item{unresolved === 1 ? "" : "s"}. This is not a statement of legal compliance.
        </p>
      ) : null}
      <div className="mt-8 max-w-prose space-y-4">{body}</div>
    </Container>
  );
}
