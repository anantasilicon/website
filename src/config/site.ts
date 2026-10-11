import legalGate from "./legal.json";

/**
 * Single configuration point for site-wide facts.
 *
 * LAUNCH REQUIREMENTS (see docs/legal/launch-checklist.md; run `npm run launch-check`):
 * - `contactEmail` is the founders' address; confirm the mailbox receives mail.
 * - `legalEntity` and `schedulingUrl`: `null` / empty means "not supplied"; nothing is invented.
 * - `legal` (from ./legal.json) controls whether /privacy and /terms exist in the build and whether
 *   footer and contact links to them are shown. See the note inside that file.
 */
export const siteConfig = {
  name: "Ananta",
  wordmark: "ANANTA",
  description:
    "Ananta is building tools to help design teams resynchronize RTL with the netlist after engineering change orders.",

  contactEmail: "mail@anantasilicon.com",
  contactSubject: "Ananta research conversation",

  /** Optional scheduling link (e.g. a Cal.com URL). Empty string hides the button. */
  schedulingUrl: "",

  /** Registered legal entity name and address. `null` = not supplied (footer omits the line; legal drafts keep a placeholder). */
  legalEntity: null as string | null,

} as const;

export const contactIsPlaceholder = siteConfig.contactEmail.endsWith(".invalid");

export const contactHref = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
  siteConfig.contactSubject,
)}`;

/** Legal-page gate. Edit src/config/legal.json (next.config.ts reads it too). */
export const legal = {
  published: legalGate.published,
  effectiveDate: legalGate.effectiveDate as string | null,
};

/** Header tabs. "/#id" works from every page (on / it scrolls to the section). */
export const navLinks = [
  { href: "/#problem", label: "Problem" },
  { href: "/#audience", label: "Who it’s for" },
  { href: "/founders/", label: "Founders" },
] as const;
