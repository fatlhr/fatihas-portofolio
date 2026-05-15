# Project Evidence Sheet Design

## Goal

Adjust the `Projects` section so the cards feel closer to the document-style language already used in the hero and about sections. The visual change should make project previews read like case evidence rather than generic portfolio thumbnails.

## Scope

- Keep the `Projects` section structure and ordering.
- Keep the recent copy and tag refinement already made in `src/data/projects.js`.
- Replace the repeated placeholder project SVGs with four project-specific `Evidence Sheet` previews.
- Update the project card visual treatment so the preview area feels like a supporting artifact, not a gallery image.
- Genericize internal project names while keeping the company names visible.

## Naming Rules

- Keep `Bebas & BebasMaju` as-is.
- Rename `JForm` to `Internal Workflow App`.
- Rename `Smartcampus BRI` to `Campus Services App`.
- Keep the existing company labels visible in the subtitle line.
- Leave `NoLimit Pemda` unchanged for now.

## Card Treatment

- Preserve the current two-column desktop layout and stacked mobile layout.
- The text column remains the primary reading path: title, company, description, then tags.
- The visual column becomes an `Evidence Sheet` panel with a tighter frame, small header, and structured blocks that suggest product evidence.
- The frame should use the same border and dashed-line language already present elsewhere in the site.
- The preview should not look like a clickable product mockup grid. It should feel more like a case note or document attachment.

## Preview Asset Direction

Each SVG should be unique and aligned to the project content:

- `project-4.svg`: banking and merchant evidence for `Bebas & BebasMaju`
- `project-1.svg`: workflow and approval evidence for `Internal Workflow App`
- `project-2.svg`: monitoring and analytics evidence for `NoLimit Pemda`
- `project-3.svg`: campus services and integration evidence for `Campus Services App`

Each preview should:

- use simple SVG only
- stay in the current monochrome/editorial family with light accent usage
- avoid fake phone screenshots
- include enough structure that the preview reads differently across the four projects

## Files

- `src/components/ProjectCard.astro`
- `src/styles/global.css`
- `src/data/projects.js`
- `public/images/project-1.svg`
- `public/images/project-2.svg`
- `public/images/project-3.svg`
- `public/images/project-4.svg`

## Verification

- `rtk npm run build`
- check `dist/index.html` for the genericized project names
- browser-check the `Projects` section to confirm the new previews read clearly on desktop and mobile
