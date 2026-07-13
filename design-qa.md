# Design QA — Aconche Decor editorial redesign

- Source visual truth: `design/selected-option-1.png`
- Implementation URL: `http://127.0.0.1:4173/`
- Implementation screenshot: `C:\Users\kaykm\AppData\Local\Temp\aconche-editorial-proof.png`
- Full-view comparison: `C:\Users\kaykm\AppData\Local\Temp\aconche-design-comparison-final.png`
- Responsive evidence: `C:\Users\kaykm\AppData\Local\Temp\aconche-editorial-mobile-proof.png`
- Dark-theme evidence: `C:\Users\kaykm\AppData\Local\Temp\aconche-editorial-dark-proof.png`
- Viewports: 1440 × 1024 desktop and 390 × 844 mobile
- State: home route, light theme for source comparison; dark theme checked separately

## Findings

No actionable P0, P1, or P2 differences remain.

- Fonts and typography: Cormorant Garamond and Manrope reproduce the editorial display/body contrast, compact labels, hierarchy, and optical weight of the source.
- Spacing and layout: the asymmetric rail, 620 px desktop copy column, photographic hero, compact project rail, ruled divisions, and dark transition band preserve the source rhythm without generic cards or excessive radii.
- Colors and tokens: warm porcelain, near-black, tobacco, and terracotta map consistently in light and dark themes; the logo and small controls remain readable in the dark state.
- Image quality: all hero, portfolio, and craft assets load at native raster resolution with intentional crops and no placeholder, CSS-art, or SVG substitute.
- Copy and content: real Aconche Decor contact data and existing conversion message are preserved; generated project photography is marked as illustrative.
- Responsiveness and accessibility: no horizontal page overflow at 390 px; navigation remains reachable; tap targets, alt text, reduced motion, semantic controls, and theme labels are present.

## Focused region evidence

The combined 2880 × 1024 comparison keeps the header, hero typography, CTA treatment, vertical rail, project imagery, captions, and section transition readable at once, so a separate crop was not needed. Mobile navigation and the dark-theme logo/toggle were inspected in dedicated captures.

## Comparison history

1. Initial P2 — above-the-fold proportions were too tall, the hero copy wrapped to four lines, and the project rail appeared too late. Fix: reduced desktop hero height and spacing, widened the copy column, tightened display type, converted portfolio imagery to a wide editorial crop, and compacted the project heading/captions.
2. Post-fix evidence — `aconche-design-comparison-final.png` shows matching three-line hero hierarchy, similar image/text split, compact three-project rail, and dark section transition at the bottom of the same viewport. No actionable P0/P1/P2 difference remained.

## Primary interactions and runtime checks

- Theme switch exercised light → dark and dark → light; DOM class, color scheme, icon, and logo contrast updated.
- Project navigation anchor and all three portfolio images verified in the browser.
- Browser console checked for warnings/errors: none.
- Broken rendered images: none.
- `npm run check`: lint passed, 6 tests passed, TypeScript/Vite production build passed.

## Follow-up polish

- P3: real completed-project photography can replace the marked illustrative images when the client supplies it.

final result: passed
