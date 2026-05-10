# Fatiha Rahmat - Mobile Engineer Portfolio

A minimalist personal portfolio built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). Content is kept in reusable components and data files so the site can be built for local preview, GitHub Pages, or another static host without machine-specific paths.

## Features

- Portfolio sections for profile, experience, projects, resume, current focus, and contact.
- Project content stored in `src/data/projects.js`.
- Base-path aware links and assets through `src/utils/paths.js`.
- Static resume and project assets served from `public/`.
- Markdown blog support under `src/pages/blogs/`.
- GitHub Pages workflow included in `.github/workflows/deploy.yml`.

## Tech Stack

- Framework: [Astro v6](https://astro.build/)
- Styling: [Tailwind CSS v4](https://tailwindcss.com/)
- Typography: IBM Plex Mono

## Project Structure

- `src/components/`: reusable UI sections and cards.
- `src/data/`: portfolio data such as projects.
- `src/layouts/`: shared page layouts.
- `src/pages/`: Astro routes and Markdown blog posts.
- `src/styles/`: global CSS.
- `src/utils/`: deploy-safe URL helpers.
- `public/`: static assets copied directly to the build output.
- `.github/workflows/`: GitHub Pages deployment workflow.

## Environment

Copy `.env.example` when you need custom deployment values:

```bash
cp .env.example .env
```

Default deployment values:

```bash
SITE_URL=https://fatlhr.github.io
BASE_PATH=/fatihas-portofolio
```

For root-domain deployments such as Vercel or Netlify, set `BASE_PATH=/`.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deployment

GitHub Pages is configured through `.github/workflows/deploy.yml`. The workflow uses GitHub Pages' generated `site` and `base_path` values during build, so deployment does not depend on local filesystem paths.

For other static hosts:

1. Set the build command to `npm run build`.
2. Set the publish directory to `dist`.
3. Configure `SITE_URL` and `BASE_PATH` for the target host.
