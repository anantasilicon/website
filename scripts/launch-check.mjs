#!/usr/bin/env node
// Reports what still blocks publishing the legal pages and launching. No dependencies.
//   npm run launch-check            -> report; exits 1 only if the config is inconsistent (published with open items)
//   npm run launch-check -- --strict -> also exits 1 if anything is unresolved
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(join(root, p), "utf8");
const strict = process.argv.includes("--strict");

const gate = JSON.parse(read("src/config/legal.json"));
const site = read("src/config/site.ts");
const pick = (re) => (site.match(re) || [])[1];

const contactEmail = pick(/contactEmail:\s*"([^"]*)"/);
const legalEntity = pick(/legalEntity:\s*(null|"[^"]*")/);
const schedulingUrl = pick(/schedulingUrl:\s*"([^"]*)"/);

const mdDir = join(root, "src/content/legal");
const docs = readdirSync(mdDir).filter((f) => f.endsWith(".md"));
const PH = /\[\[(FOUNDER INPUT|LEGAL REVIEW):\s*([^\]]*?)\]\]/g;
const perDoc = docs.map((f) => ({ f, items: [...read(`src/content/legal/${f}`).matchAll(PH)].map((m) => `${m[1]}: ${m[2].trim()}`) }));
const placeholders = perDoc.reduce((n, d) => n + d.items.length, 0);

const issues = [];
if (!contactEmail || contactEmail.endsWith(".invalid")) issues.push("contactEmail is not set to a real address");
if (legalEntity === "null") issues.push("legalEntity not supplied (needed in footer and legal pages)");
if (!gate.effectiveDate) issues.push("legal effectiveDate not set (set it when publishing)");
if (placeholders > 0) issues.push(`${placeholders} unresolved [[FOUNDER INPUT]]/[[LEGAL REVIEW]] placeholder(s) in src/content/legal/*.md`);

console.log("Ananta launch check\n");
console.log(`legal.published : ${gate.published}`);
console.log(`contactEmail    : ${contactEmail}  (mailbox receipt is NOT verified by this script)`);
console.log(`legalEntity     : ${legalEntity}`);
console.log(`schedulingUrl   : ${schedulingUrl ? schedulingUrl + "  (a third-party embed or link? re-audit and update the privacy notice)" : "(none)"}`);
for (const d of perDoc) {
  console.log(`\n${d.f}: ${d.items.length} unresolved`);
  d.items.forEach((i) => console.log(`  - ${i}`));
}
console.log("\nAlso confirm manually (not detectable from code): docs/legal/launch-checklist.md");
console.log(issues.length ? `\nNOT READY — ${issues.length} blocker(s):\n${issues.map((i) => "  ⛔ " + i).join("\n")}` : "\nNo code-detectable blockers.");

if (gate.published && issues.length) {
  console.error("\nERROR: legal.published is true but blockers remain. Set it to false, or resolve them.");
  process.exit(1);
}
if (strict && issues.length) process.exit(1);
