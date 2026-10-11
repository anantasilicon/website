# Privacy and accessibility checklist

> **Privacy and legal items are now tracked in `docs/legal/`** (inventory, launch checklist, review questions). The privacy notice and terms are unpublished drafts. This file keeps the accessibility record and a summary of verified behavior.

Status key: ✅ verified on the built site (how), 🟡 partially verified or judgment call, ⛔ open (needs founder/legal input). **This checklist is not a statement of legal compliance.**

## Actual site behavior (verified 2026-10-10 against `out/` and the running site)

| Item | Status | Evidence |
|---|---|---|
| No cookies set | ✅ | `document.cookie` empty in headless Chrome; no `document.cookie` use in shipped JS |
| No localStorage / sessionStorage use | ✅ | Both length 0; no references in shipped JS |
| No third-party requests at runtime | ✅ | `performance.getEntriesByType("resource")` shows only same-origin; no external `<script>/<link>/<img>/<iframe>` tags in built HTML |
| No analytics, ads, embeds, SDKs | ✅ | None in `package.json`; none in output |
| Fonts self-hosted | ✅ | `.woff2` files served from `/_next/static/media`; no `fonts.googleapis.com` reference |
| No forms / no personal data collected by the page | ✅ | Contact is a `mailto:` link only |
| Hosting provider logs (IP, UA, URL, time) | ⛔ | Planned: Cloudflare Pages. Settings and logs must be confirmed on the live site (`docs/legal/launch-checklist.md`, section D). Keep host analytics features off. |
| Email correspondence is personal data | 🟡 | Covered in the unpublished draft notice; retention, process and legal basis are open founder inputs |

## Privacy to-do before publishing

- [ ] Choose host; confirm what it logs and any default analytics; fill `hosting.provider` in `src/config/site.ts`.
- [ ] Founders define retention period, deletion-request process and response time; fill the notice.
- [ ] Legal review of the privacy notice and terms (applicable law, legal basis, any controller/representative details).
- [ ] Decide whether Terms are needed. None are drafted; none appear necessary for an informational page, but this is a legal call.
- [ ] Cookie banner: **not needed only while no cookies/trackers exist.** Re-assess if anything is added (scheduling embeds such as Cal.com, analytics, fonts from a CDN).
- [ ] If a form is ever added: essential fields only, visible labels, error messages, purpose statement, unticked optional consent, a real deletion process, and an updated notice.
- [ ] Do not describe the site as "collecting no data" once hosted; the notice already says logs may be kept.

## Accessibility (target WCAG 2.2 AA)

| Check | Status | Evidence |
|---|---|---|
| Automated axe-core 4.14 (wcag2a/aa, 2.1, 2.2 AA, best-practice) | ✅ | 0 violations, 0 incomplete, on `/`, `/founders/` (and the draft `/privacy/`, `/terms/`) at 1440px and 375px |
| Text contrast of every rendered text node | ✅ | Script computed 0 failures (4.5:1, or 3:1 for large text) |
| Non-text contrast of control borders | 🟡 | Secondary-button border raised to ≥3:1 on dark/paper surfaces by calculation; not re-measured on every surface |
| Keyboard: logical tab order, skip link first | ✅ | Scripted Tab sequence: skip link → logo → Founders → Contact → page CTAs → email links → footer |
| Visible focus on every stop | ✅ | 2px solid ring (`#3cc4a0`) reported on all 12 stops tested |
| Focus not obscured by sticky header | 🟡 | `scroll-padding-top` set; the scripted tab check showed no obscured element below the header, but not tested on every viewport height |
| One `h1`; heading levels sequential | ✅ | Outline extracted: H1 → H2 → H3, no skips |
| Landmarks, `lang="en"`, no zoom lock | ✅ | `header`/`nav`/`main`/`footer`; viewport meta default |
| Reduced motion | ✅ | With `prefers-reduced-motion: reduce` emulated, the only animation is `none`; otherwise `trace-down` runs once |
| No information by color alone | ✅ (design) | Nothing is conveyed by color; the hero line art is decorative |
| Responsive, no horizontal scroll | ✅ | `scrollWidth == clientWidth` at 375, 768, 1024, 1440 on both pages |
| Illustrations | ✅ | The only graphic is the decorative hero line art (`aria-hidden`); it carries no information |
| Screen-reader testing (VoiceOver, NVDA) | ⛔ | **Not done.** Automated tools catch a fraction of issues; do a manual pass before launch. |
| Real-device testing | ⛔ | Not done. |

## Tracking and consent design

- No dark patterns, no urgency, no preselected consent, no age gate, no popups.
