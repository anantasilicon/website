# Factual inventory of site data practices

Audited **2026-10-11** against the production static export (`npm run build`, served locally) and the source code. "Verified" means observed directly in this audit. It does **not** cover anything that happens on Cloudflare's network after deployment.

## Verified (code and local browser behavior)

| Area | Finding | How verified |
|---|---|---|
| Forms / visitor input | None. No `form`, `input`, `textarea` or `select` elements on any page. | Source grep; DOM count in headless Chrome on `/`, `/founders/` |
| Uploads / product functionality | None | Source review |
| Embeds | None (no `iframe`, `embed`, `object`, `video`, `audio`) | DOM count |
| Third-party requests | None. All 19–20 requests per page go to the site's own origin | Chrome DevTools Protocol request log |
| Scripts, fonts, stylesheets | All self-hosted. Fonts are `.woff2` files bundled at build time (`next/font`); no `fonts.googleapis.com` reference | Request log; built HTML/CSS/JS grep |
| Analytics / tracking / ads / pixels | None in source or runtime dependencies (`next`, `react`, `react-dom` only) | Source and `package.json` review |
| Cookies | None set. `document.cookie` empty and the browser cookie jar empty after loading pages and scrolling | CDP `Network.getAllCookies`; no `Set-Cookie` response header seen (from a local test server, so not representative of Cloudflare) |
| Browser storage | `localStorage`, `sessionStorage`, IndexedDB and service workers: none | Runtime probe |
| External links | None. The only outbound link is `mailto:mail@anantasilicon.com` | DOM scan |
| Scheduling service | None configured (`schedulingUrl` is empty) | `src/config/site.ts` |
| Secrets | No `.env` files; nothing in `public/` | File listing |
| Hosting config in repo | No `_headers`, `_redirects` or `functions/` | File listing |
| Contact route | `mailto:` link only. Visitors' information reaches us only if they choose to email | Source |
| Developer-side telemetry | Next.js collects anonymous usage telemetry about the *developer's* build/dev commands, not about site visitors (disable with `npx next telemetry disable` if undesired) | Seen in build output |

## Planned (not yet true, or not yet done)

- Hosting on **Cloudflare Pages**, with the custom domain `anantasilicon.com`.
- Email as the sole contact channel. No form and no scheduling tool for now.
- Privacy notice and terms published after the open items are resolved (`launch-checklist.md`).

## What Cloudflare's current official documentation says (fetched 2026-10-11)

- **Cookies** (`developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/`): lists cookies Cloudflare sets on visitors to customer sites, mostly tied to specific features, e.g. `__cf_bm` for sites using Bot Management or Bot Fight Mode, `cf_clearance` for challenges, `_cfuvid` for certain rate-limiting rules. The page does **not** mention Pages or static hosting and does **not** say what is set when none of those features are on.
- **Pages Web Analytics** (`developers.cloudflare.com/pages/how-to/web-analytics/`): opt-in. After you enable it in the project's Metrics settings, Cloudflare "will automatically add the JavaScript snippet to your Pages site on the next deployment." The page does not discuss cookies or client-side storage.
- **Cloudflare privacy policy** (`cloudflare.com/privacypolicy/`): Cloudflare describes itself as a processor for End User data on behalf of its customers; End User data processed "may include … IP addresses, traffic routing data"; it states **no specific retention period** for that data; information is stored "primarily … in the United States and the European Economic Area" and may be accessed worldwide; Cloudflare says it has "no direct relationship with End Users" and directs them to the customer (i.e. us). The Customer Data Processing Addendum was not reviewed in this audit.

Consequence for us: the website's *code* sets nothing, but what the live host adds or sets is determined by Cloudflare settings. Those must be checked on the deployed site (see `launch-checklist.md`, section D).

## Unknown (founder input or post-deployment confirmation required)

- Operator's legal identity (entity name, address, or whether Ananta is yet an entity).
- Whether `mail@anantasilicon.com` exists, who hosts the mailbox, and who reads it.
- Whether the founders can see any visitor logs or analytics in Cloudflare, and the actual dashboard settings (Web Analytics, Bot Fight Mode, challenge or WAF rules).
- Live response headers and cookies on the deployed domain.
- Domain registrar and DNS provider, and whether registration details are privacy-protected.
- Retention and deletion practices for email correspondence, notes, and any CRM or spreadsheet.
- Whether outreach emails will be sent proactively (a separate legal regime from the website).
- Intended visitor markets (U.S. only, or EU/UK and others).
- Whether any university policy affects the venture or the use of the university's name.
