# Kalpana Chip

Landing page for kalpanachip.com — AI-native EDA startup.

Static site hosted on GitHub Pages.

## Files
- `index.html` — the page
- `logo.png` — logo
- `CNAME` — custom domain for GitHub Pages
- `apps-script.gs` — Google Apps Script backend (deploy separately in the Google account that owns the sheet; not served by the site)

## Interest form
The form posts to a Google Apps Script web app. Set the deployment URL in the `ENDPOINT` constant near the bottom of `index.html`.
