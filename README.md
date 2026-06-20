# Mason's Apron — Multipage Website

A 5-page static site for Mason's Apron, Virginia, Co. Cavan. Ready to deploy on Vercel.

## Pages

- `index.html` — Homepage
- `menu.html` — Full menu (breakfast, lunch, mains, bakery, sweets, drinks)
- `catering.html` — Catering services & platters
- `about.html` — Story, values, team, areas served
- `contact.html` — Hours, contact form, map, FAQ

## Shared assets

- `styles.css` — All styling
- `script.js` — Footer, WhatsApp button, chatbot, scroll reveal, nav, FAQ
- `sitemap.xml`
- `robots.txt`
- `vercel.json` — Clean URLs config

## Deploy to Vercel

1. Push the `site-multi` folder to a new GitHub repo
2. Import into Vercel — no build step, framework set to "Other"
3. Connect domain `themasonsapron.ie`

Or drag and drop the folder at vercel.com/new.

## TODOs before going live

1. **Formspree form ID** — replace `[FORM-ID]` in `contact.html` with your real form ID from formspree.io
2. **Opening hours** — confirm the times in `contact.html` and `script.js` (chatbot KB) with the business
3. **Instagram URL** — placeholder in `script.js` footer; remove the icon if no Instagram, or paste real URL
4. **Google Business Profile URL** — placeholder in footer and homepage reviews button; swap for real GBP link
5. **Reviews** — anonymised Tripadvisor quotes; swap for named reviews if you have permission, or leave as-is
6. **Menu prices** — review and replace with actual prices on `menu.html`
7. **Catering platter prices** — review on `catering.html`
8. **Open Graph image** — add an `og.jpg` image to root (1200x630) for nicer link previews

## Tech notes

- Pure HTML/CSS/JS, no build step, no dependencies (except Google Fonts CDN)
- Single shared `styles.css` and `script.js` so updates apply across all pages
- Footer, chatbot, WhatsApp button injected by `script.js` so they only need to be edited in one place
- Scroll-reveal animations on all `[data-reveal]` elements
- Mobile-first, hamburger nav under 900px, optimised down to 480px
- JSON-LD: Restaurant schema on home, FAQPage schema on contact
