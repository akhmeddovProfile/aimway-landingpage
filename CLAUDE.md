# Aimway landing page — working notes for Claude

## Git workflow
- Commit and push **directly to `main`**. Do not create feature branches or pull requests unless Emin asks for one.
- Before pushing, run `npx --yes html-validate@9 site/` and make sure CI (`.github/workflows/site.yml`) stays green after the push.
- A push to `main` copies `site/` to the Aimway server (Caddy serves it; backend repo `deploy/Caddyfile`).

## Project
- Static site in `site/`: plain HTML, CSS, JS. No framework, no build step. Keep it that way unless Emin asks.
- Product source of truth is the app repo: github.com/akhmeddovProfile/aimway (`AIMWAY.md`, decisions in §15, open questions in §14). Only put confirmed decisions on the site.
- Official logo/app icon: `assets/aimway_app_icon_original.png` in the app repo. Never redesign it. Web sizes in `site/assets/img/` are resized from it.
- Colors, spacing and radii come from the tokens at the top of `site/css/styles.css` (mirrors `AIMWAY.md` §4). No one-off colors in components.
- Icons: Lucide outline icons in the SVG sprite at the top of `index.html`. One family only, no emoji.
- No prices on the site (they come from the App Store). Journey numbers (15 questions, 80%, XP, steps, streak bonuses) must match `JourneyRules` in the app repo.
- Check the page at phone width (390 px) and desktop before pushing: no horizontal scroll.
