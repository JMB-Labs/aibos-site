# AIBOS Site — Hosting & Workflow (2026-06-10)

## What changed
Migrated the AIBOS marketing website from a personal repo + paid Netlify hosting to the **JMB-Labs** GitHub account with **free GitHub Pages** hosting.

## Repo
- **Location:** `JMB-Labs/aibos-site` (transferred from `Guelo-spec/aibos-site`)
- **Visibility:** Public (required for free GitHub Pages)
- **Default branch:** `main`
- **My access:** `Guelo-spec` is a **write** collaborator (auto-retained after transfer — no invite needed). I can push directly.

## Site type
- **Fully static.** React 18 + Babel Standalone loaded from CDN (unpkg); JSX is compiled **in the browser** at runtime.
- **No build step, no `package.json`, no node_modules.** GitHub Pages serves the raw files as-is.
- Key files: `index.html`, `styles.css`, `ds-runtime.jsx`, `icon.jsx`, `site-sections.jsx`, `assets/`, `components/`, `tokens/`.
- All asset paths are **relative** (`./styles.css`, `icon.jsx`), so the site works correctly under the `/aibos-site/` subpath.

## Hosting
- **GitHub Pages** enabled, source = `main` branch, root (`/`) folder.
- **Live URL:** https://jmb-labs.github.io/aibos-site/
- **Cost:** $0/month, no build minutes, no credit limit (free for public repos).
- **Netlify:** no longer needed — can be deleted/unlinked.

## My workflow going forward
1. Edit the site locally in my own Claude Code.
2. `git push` to `JMB-Labs/aibos-site` on the `main` branch.
3. GitHub Pages auto-rebuilds in ~1 minute.
4. Live testing happens directly at https://jmb-labs.github.io/aibos-site/ — that IS the live/test environment.

## Notes
- To work locally: `git clone https://github.com/JMB-Labs/aibos-site.git`
- Because JSX compiles in-browser, just opening `index.html` from disk may hit CORS on the `.jsx` fetches — run a tiny local server instead (e.g. `python3 -m http.server`) or just push and check the live URL.
- Future option: a free custom domain (e.g. `aibos.com`) can be attached to GitHub Pages later if desired.
