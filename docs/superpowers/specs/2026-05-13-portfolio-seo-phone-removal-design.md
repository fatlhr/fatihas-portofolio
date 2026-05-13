# Portfolio SEO and Phone Removal Design

## Goal

Improve the Astro portfolio for recruiter-oriented search intent while removing public phone number content from the site. The target search context is hiring and portfolio discovery for Flutter Developer, Mobile Engineer, Android, iOS, Jakarta, and Indonesia.

## Scope

- Remove phone number content from source data and rendered contact UI.
- Keep email, LinkedIn, and location as public contact channels.
- Improve homepage metadata for recruiter/search intent.
- Keep technical SEO tags consistent across pages: title, description, canonical, Open Graph, Twitter Card, sitemap, robots, and JSON-LD.
- Avoid broad visual redesign or large copy rewrites.

## Current State

- `src/layouts/BaseLayout.astro` already provides description, canonical URL, Open Graph, Twitter Card, favicon, and optional JSON-LD.
- `src/pages/index.astro` already provides Person JSON-LD.
- `astro.config.mjs` already uses `@astrojs/sitemap`.
- `public/robots.txt` points to `https://fatiharahmat.dev/sitemap-index.xml`.
- `src/data/profile.js` stores a public `phone` field.
- `src/components/ContactSection.astro` renders the phone number.

## Proposed Changes

### Contact Privacy

Remove the `phone` field from `profile` and remove the phone line from the Contact section. The Contact section should keep email, LinkedIn, and Jakarta/Indonesia location visible.

### Homepage SEO

Update homepage title and description so they naturally include recruiter-facing terms:

- Flutter Developer
- Mobile Engineer
- Android and iOS
- Jakarta or Indonesia
- portfolio

The wording should stay readable and not repeat keywords unnaturally.

### Structured Data

Keep Person JSON-LD and update it to better represent the portfolio:

- Keep `name`, `jobTitle`, `url`, `email`, `sameAs`, `address`, and `knowsAbout`.
- Add occupation-style data if it fits cleanly.
- Do not include telephone data.

### Shared Metadata

Keep `BaseLayout` as the shared SEO surface. Improve default title and description so secondary pages have useful fallbacks. Keep canonical URL generation tied to `Astro.site` and `Astro.url.pathname`.

### Blog Listing Metadata

Replace the generic blog listing description with copy that reflects Flutter, mobile engineering, and app development topics.

### Robots and Sitemap

Keep robots simple and crawlable. Since the static `public/robots.txt` cannot read runtime environment variables, keep it aligned with the primary public domain unless the deployment target changes. Sitemap XML generation remains handled by `@astrojs/sitemap`.

## Testing

- Run `npm run build`.
- Inspect generated `dist` output for the removed phone number and common phone patterns.
- Verify generated HTML still contains canonical, description, Open Graph, Twitter Card, and JSON-LD.

## Out of Scope

- Visual redesign.
- New blog content.
- Lighthouse score chasing.
- Adding analytics.
- Changing deployment workflow.
