# Private launch checklist: legal pages

Internal. Tick items as they become **true and verified**, not as they become intended. Run `npm run launch-check` for the code-detectable subset.

## A. Operator identity
- [ ] Decide the operator's legal identity: entity name and address, or individual founders if no entity exists yet. (Counsel may advise on what to publish.)
- [ ] Set `legalEntity` in `src/config/site.ts`. The footer and both legal pages use it.

## B. Contact route
- [ ] `mail@anantasilicon.com` exists, receives external mail (send a test from an outside account), and is monitored by a named person.
- [ ] That same person owns privacy and deletion requests. If a separate address is preferred, add it to the drafts.

## C. Providers (name each in the privacy notice)
- [ ] Email provider hosting the mailbox: ______
- [ ] Hosting provider: Cloudflare Pages (confirm).
- [ ] Domain registrar / DNS provider: ______ (WHOIS privacy on?)
- [ ] Scheduling tool: none. **If one is added**, treat it as a new third-party service: re-audit, update the notice, and reassess consent.

## D. Hosting and analytics settings (verify on the deployed site)
- [ ] Cloudflare Pages: Web Analytics is **off** (Workers & Pages → project → Metrics).
- [ ] Zone security features that set cookies are **off** or understood: Bot Fight Mode, challenges, rate-limiting rules that use a visitor id (see the Cloudflare cookies page).
- [ ] After deployment, run against the real URL, and expect no output from the first two:
  - `curl -sI https://<site>/ | grep -i set-cookie`
  - `curl -s https://<site>/ | grep -iE "cloudflareinsights|beacon\.min\.js|cf-beacon"`
  - In Chrome DevTools: Application → Cookies / Local Storage / Session Storage are empty; Network shows only same-origin requests.
- [ ] Re-run the audit script after deployment and update the date in the privacy notice's "When tested on …" sentence.
- [ ] Know what Cloudflare logs you can see, and for how long. Do not state a log retention period we cannot back up.

## E. Practices the notice will describe (must be real)
- [ ] Retention period for correspondence, and how deletion is carried out.
- [ ] How privacy requests are received, verified and answered, and the target response time.
- [ ] Whether feedback is attributed to named people, and how it is stored.
- [ ] Whether correspondence is ever used to train or evaluate AI models. The notice makes no claim either way until this is decided. Do not add a "we never…" statement unless it will be honored.
- [ ] How material changes to the notice are communicated.

## F. Intended visitor markets
- [ ] Decide: U.S. only, or deliberately inviting EU/UK or other visitors. This drives the questions in `legal-review-questions.md`.

## G. Legal review (see `legal-review-questions.md`)
- [ ] Counsel has reviewed `privacy.md` and `terms.md`, including every `[[LEGAL REVIEW: …]]` item.
- [ ] Decisions recorded on each provision deliberately left out (governing law, arbitration, etc.).

## H. Cookie and consent assessment (current conclusion)
Based on verified code behavior, the site sets **no cookies and uses no local storage or similar technologies**, so **no cookie banner or consent interface is added**. A banner shown for appearance would also imply tracking that does not exist. This conclusion is conditional on section D being true on the live site and on counsel's view for the intended markets (`[[LEGAL REVIEW]]` in the privacy draft). Reassess if any of these change: analytics, an embedded scheduler, a form, a font or script from another origin, Cloudflare features that set cookies.

## I. Publish
1. Edit `src/content/legal/privacy.md` and `terms.md`: replace each `[[…]]` marker with the confirmed fact or reviewed wording (or delete it).
2. Set `effectiveDate` in `src/config/legal.json`, then `"published": true`.
3. `npm run launch-check -- --strict` → no blockers.
4. `npm run lint && npx tsc --noEmit && npm run build` → `out/privacy/` and `out/terms/` exist, the footer links show, and the contact section links to the privacy notice. (The build refuses to proceed while placeholders remain.)
5. Deploy, then repeat section D against the live URL.

## J. After launch: re-audit when anything changes
New third-party service, analytics, form, embed, scheduler, new font source, new hosting setting, new market, or new data practice. Update the drafts, and the effective date, before the change goes live.
