# Free deployment (no domain required)

The site is a fully static export (`output: "export"`), so any static host works. Nothing here has been deployed; these are instructions, and **host terms, free-tier limits and logging behavior change, so verify them on the provider's current pages before relying on them** (particularly any restrictions on commercial use).

Build once locally to confirm: `npm ci && npm run build` produces `out/`.

## Option A: Cloudflare Pages (git-connected)

1. Push the repo to GitHub/GitLab; create a Pages project and connect it.
2. Root directory: `website` (this project lives in a subfolder of the `ananta` repo). Build command: `npm run build`. Output directory: `out`.
3. You get a `*.pages.dev` preview URL. No `BASE_PATH` is needed.
4. Leave Web Analytics off (it would add tracking and change what the privacy notice must say).

## Option B: Netlify

1. Import the repo. Base directory: `website`. Build command: `npm run build`. Publish directory: `website/out`.
2. You get a `*.netlify.app` URL. No `BASE_PATH`. Do not enable Netlify Analytics or form handling.

## Option C: GitHub Pages (project site, served under `/<repo-name>/`)

GitHub Pages serves a project site from a sub-path, so build with a base path:

```bash
BASE_PATH=/<repo-name> npm run build   # internal links and assets are prefixed
```

Publish the contents of `out/` via a GitHub Actions workflow (set `working-directory: website`, upload `website/out` as the Pages artifact). If you later use a custom domain at the root, build **without** `BASE_PATH`.

## Custom domain (contact email already uses anantasilicon.com)

The contact address is `mail@anantasilicon.com`. Confirm the domain is registered to the founders and email is set up before launch. The steps below cover pointing the domain at the site.

## Adding a custom domain

1. Buy the domain, then add it in the host's dashboard and follow its DNS instructions (CNAME or A/ALIAS records).
2. HTTPS certificates are normally issued by these hosts automatically; confirm after DNS propagates.
3. Remove `BASE_PATH` if it was set. Redeploy.
4. If you add canonical/Open Graph URLs (not currently set), use the real domain then.
5. Re-run the checks in `compliance-checklist.md`; update the privacy notice if the host changed.

## Pre-publish gate

Do not make the site public until `docs/open-inputs.md` items 1–5 and `docs/legal/launch-checklist.md` are resolved. The privacy notice and terms stay unpublished (and absent from the build) until then; decide with counsel whether the site should go live without them. A preview URL is public to anyone who has the link; treat it accordingly.
