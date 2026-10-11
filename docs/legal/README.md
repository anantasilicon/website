# Legal pages: private working notes

**Internal. Not part of the public site.** Nothing here is legal advice, and nothing here says the site is legally compliant.

| File | What it is |
|---|---|
| `audit-inventory.md` | Factual inventory of what the site does: verified, planned, unknown (audited 2026-10-11) |
| `launch-checklist.md` | What the founders must supply or confirm before the legal pages go live, and how to publish |
| `legal-review-questions.md` | Questions for counsel, and provisions deliberately left out (with their purpose) |
| `../../src/content/legal/privacy.md`, `terms.md` | The drafts themselves, as plain Markdown. `[[FOUNDER INPUT: …]]` and `[[LEGAL REVIEW: …]]` mark every open item |

## How publishing is controlled

- The drafts are **not published**. `src/config/legal.json` has `"published": false`.
- While unpublished, a production build (`npm run build`) emits **no** `/privacy` or `/terms` route, and the footer and contact section show no links to them. Review the drafts with `npm run dev` at `http://localhost:3000/privacy/` and `/terms/` (they carry a DRAFT banner and `noindex`).
- Setting `"published": true` while any placeholder remains **fails the build** with the list of open items. This is intentional: placeholders can never ship as final legal text.
- `npm run launch-check` lists what is still open. `npm run launch-check -- --strict` exits non-zero if anything is.
- The page files are `src/app/privacy/page.legal.tsx` and `src/app/terms/page.legal.tsx`. Their `.legal.tsx` extension is registered in `next.config.ts` only when published (or in `next dev`).

## What is on the public site regardless

- A one-line request not to send confidential designs, RTL, netlists or proprietary verification artifacts (contact section).
- A one-line statement that emailing us means we receive the sender's address and message (contact section).
- No cookie banner or consent interface (see the assessment in `launch-checklist.md`).
