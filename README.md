# White Wave Group – Bilingual Funnel Website
Single‑page, framework‑free funnel with **English/Spanish toggle**. All copy lives in `content.json` with `en` and `es` blocks. The current language is saved in `localStorage` and restored on reload.

## Quick Edit
- Change contact email in `content.json` at the root level (`site.contact_email`).
- Edit all text in the `en` and `es` sections.
- Replace `assets/logo.svg` with your logo (same filename).

## Deploy on GitHub Pages
1. New repo → upload files.
2. Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

## PipelinePro integration
Replace the **Step 4** block in `index.html` with your embed and disable `sendSummary()` in `main.js` if you don’t want the `mailto:` flow.
