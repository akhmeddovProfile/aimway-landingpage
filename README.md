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
| [`.github/workflows/site.yml`](.github/workflows/site.yml) | CI: validates the HTML on every push, copies `site/` to the Aimway server from `main` |

## Run locally

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

The site runs on the Aimway server (Hetzner), next to the API: Caddy serves `/opt/aimway/site` with HTTPS
(see `deploy/Caddyfile` and `docs/DEPLOY.md` in the backend repo). Pushes to `main` copy `site/` there
with GitHub Actions.

One-time setup: the same three repository secrets as the backend repo (Settings → Secrets and variables → Actions):

```bash
gh secret set DEPLOY_HOST -R akhmeddovProfile/aimway-landingpage --body "SERVER_IP"
gh secret set DEPLOY_SSH_KEY -R akhmeddovProfile/aimway-landingpage < ~/.ssh/aimway_deploy
ssh-keyscan -t ed25519 SERVER_IP | gh secret set DEPLOY_KNOWN_HOSTS -R akhmeddovProfile/aimway-landingpage
```

The address is `SITE_DOMAIN` in `/opt/aimway/.env` on the server (for now `www.95-217-10-98.sslip.io`).
For a real domain, point its DNS at the server and change `SITE_DOMAIN` there.

## Content rules

- The copy describes confirmed product decisions from `AIMWAY.md` in the app repo (§15). Don't promise features that are still open there.
- No prices on the site. Prices come from the App Store (OQ-11).
- Terms and Privacy Policy pages are not published yet (OQ-16). The footer says "coming soon".
- The App Store button stays "coming soon" until the app is live. Then replace it with Apple's official "Download on the App Store" badge and the real link.
- Open Trivia DB questions are CC BY-SA 4.0, so the footer keeps the credit.
