# AIBOS Marketing Website — unbundled source

Readable, runnable source for the aibos.ph marketing homepage, extracted from the
AIBOS Design System project.

## Run it
Open `index.html` in a browser (or serve the folder with any static server,
e.g. `npx serve .`). Everything compiles in-browser via Babel standalone —
no build step. React, Babel, and Lucide icons load from CDN; fonts (Geist /
Geist Mono) load from Google Fonts.

## Layout
```
index.html          page shell — loads styles, CDN deps, then the JSX below
site-sections.jsx  all page sections: Nav, Hero, Facts ("the math"),
                    Agents (Special Agents roster), CTA, Footer
icon.jsx            <Icon name="…"/> helper around Lucide
ds-runtime.jsx      the 6 design-system components the site uses, flattened
                    into one browser-runnable file (exposes
                    window.AIBOSDesignSystem_087750)
components/         the same 6 components as canonical per-file source
                    (lowercase .jsx + .d.ts, export keyword stripped so they read as reference): pixel-mark, logo, stat, button, card, badge
styles.css          global entry — imports everything in tokens/
tokens/             colors, typography, spacing, radii, shadows, motion,
                    fonts (Google Fonts @import), base reset
assets/             favicon + logo marks (SVG)
```

## Editing notes
- `ds-runtime.jsx` exists because Babel standalone can't resolve ES-module
  imports across files in the browser. The per-file sources in `components/`
  are canonical reference; if you edit a component, mirror the change in
  `ds-runtime.jsx` (or edit only there).
- All styling references CSS custom properties from `tokens/` — change brand
  color/type there, not inline.
- Brand rules: the product term is **"Special Agents"** (capitalized), "your
  agents" in body copy, never "AI agents". No purple, no gradients, no glow,
  no emoji. Mono = facts.
```
