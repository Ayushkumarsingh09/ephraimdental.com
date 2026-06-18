# Ephraim Family Dental — Premium Redesign

A complete, custom-designed premium website redesign for [Ephraim Family Dental](https://ephraimdental.com/).

## Features

- **14 immersive homepage sections** — hero, storytelling, doctors, patient journey, services, smile showcase, comfort, office tour, patient stories, technology, financing, community, contact, and final CTA
- **Premium design system** — dental blue, soft teal, warm gold accents, Cormorant Garamond + DM Sans typography
- **Authentic content only** — real doctors, staff, office photos, services, and contact info from the original site
- **Smooth scroll reveals, parallax, lightbox gallery, and premium hover interactions**
- **Mobile-first** with sticky call and appointment buttons
- **Lightweight & fast** — vanilla HTML/CSS/JS, no framework overhead

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
```

Output is in the `dist/` folder — upload to any standard web host (Netlify, Vercel, cPanel, etc.).

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── index.html          # Full homepage (all 14 sections)
├── css/styles.css      # Premium design system & components
├── js/main.js          # Scroll reveals, parallax, lightbox, navigation
├── vite.config.js      # Build configuration
└── package.json
```

## Content Notes

- All images are loaded from the existing ephraimdental.com WordPress media library
- Patient reviews link to the practice's Facebook page (no fabricated testimonials)
- Smile showcase uses authentic service imagery (no before/after gallery exists on the current site)
- Dr. Derek Dawson bio is minimal on the current site — placeholder text reflects available information only

## Deployment

The `dist/` folder after `npm run build` contains static files ready for deployment. No server-side requirements.
