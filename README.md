<p align="center"><img src="site/assets/img/aimway-icon-256.png" alt="Aimway app icon" width="128"></p>

# Aimway landing page

The public website for [Aimway](https://github.com/akhmeddovProfile/aimway): an iPhone app for learning something new every day across six subjects and seeing your progress as a one-year journey.

**Stack:** plain HTML, CSS and JavaScript. No framework and no build step, so the `site/` folder is exactly what gets published.

## Structure

| Path | What it is |
|---|---|
| [`site/index.html`](site/index.html) | The single landing page (hero, subjects, how it works, journey, features, Free & Pro, FAQ, call to action) |
| [`site/css/styles.css`](site/css/styles.css) | All styles. Design tokens at the top mirror `AIMWAY.md` §4 in the app repo. |
| [`site/js/main.js`](site/js/main.js) | Header state, mobile menu, reveal-on-scroll. No dependencies. |
| [`site/assets/img/`](site/assets/img) | Web sizes of the official app icon, favicons, social preview image |
| [`site/assets/fonts/`](site/assets/fonts) | Self-hosted Inter (variable, SIL OFL), so no request goes to Google Fonts |
| [`.github/workflows/site.yml`](.github/workflows/site.yml) | CI: validates the HTML on every push, deploys `site/` to GitHub Pages from `main` |

## Run locally

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Pushes to `main` deploy automatically with GitHub Actions.

One-time setup: in the repository on GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.

For a custom domain later (for example `aimway.app`), add it under Settings → Pages and a `site/CNAME` file containing the domain.

## Content rules

- The copy describes confirmed product decisions from `AIMWAY.md` in the app repo (§15). Don't promise features that are still open there.
- No prices on the site. Prices come from the App Store (OQ-11).
- Terms and Privacy Policy pages are not published yet (OQ-16). The footer says "coming soon".
- The App Store button stays "coming soon" until the app is live. Then replace it with Apple's official "Download on the App Store" badge and the real link.
- Open Trivia DB questions are CC BY-SA 4.0, so the footer keeps the credit.
