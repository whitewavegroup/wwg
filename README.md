
# White Wave Group — NEPQ Funnel (Easy Deploy)

Static funnel site ready for deployment on Vercel.

## Features
- English (`/index`) + Spanish (`/index-es`)
- NEPQ-style multi-step form → emails results to **lorraine@whitewavegroup.com**
- Auto-redirect to Calendly after submit (to be configured)
- Clean URLs set by `vercel.json`

## Deploy on Vercel
1. Create a new GitHub repo (e.g. `wwg`), upload these files.
2. In Vercel: **New Project** → Import repo → Framework: **Other (Static)**.
3. Leave Build Command empty. Set Output Directory `/`.
4. Deploy.

## Customize
- Change recipient email in `index.html` + `index-es.html` form `action`.
- Add Calendly redirect logic if required in JavaScript or thank-you page.
