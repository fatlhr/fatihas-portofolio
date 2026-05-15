# Project Inline Evidence and Detail Pages Design

## Goal

Reshape the `Projects` section so the homepage cards stay readable and text-first, while project visuals move to dedicated detail pages with enough space to breathe.

## Scope

- Keep the `Projects` section on the homepage.
- Replace the current split card with a cleaner single-flow card layout.
- Keep the sharper project copy and safer generic naming for internal work.
- Remove the large right-side preview panel from homepage project cards.
- Add inline evidence blocks inside each homepage card.
- Make the project card or a clear CTA open a dedicated detail page.
- Move the larger visual artifact to the detail page instead of squeezing it into the homepage card.

## Naming Rules

- Keep `Bebas & BebasMaju` as-is.
- Rename `JForm` to `Internal Workflow App`.
- Rename `Smartcampus BRI` to `Campus Services App`.
- Keep company names visible in the homepage card and detail page.
- Leave `NoLimit Pemda` unchanged for now.

## Homepage Card Treatment

- Each project card should read in one vertical flow:
  - title
  - company
  - summary
  - tags
  - inline evidence blocks
- No right-rail image or narrow preview panel on the homepage.
- Evidence blocks should be compact, readable, and clearly tied to the project.
- Evidence blocks should feel like structured proof points, not badges or thumbnails.
- The card should remain calm and scannable on desktop and mobile.

## Inline Evidence Blocks

Each project should expose three or four evidence points directly in the homepage card. These blocks should summarize concrete angles of the work, for example:

- flow handled
- release or integration focus
- operational domain
- user or business context

These are HTML-rendered blocks, not images. Their job is to add depth without making the card visually heavy.

## Detail Page Direction

Each project gets a dedicated page under a stable route such as:

- `/projects/bebas-bebasmaju`
- `/projects/internal-workflow-app`
- `/projects/nolimit-pemda`
- `/projects/campus-services-app`

Each detail page should include:

- project title
- company
- short summary
- role or scope strip
- fuller evidence blocks
- one larger visual artifact area
- tags or stack as supporting metadata
- a clear link back to the homepage

The detail page is where the visual artifact belongs. The homepage card should invite the click, not carry the full visual load.

## Visual Artifact Rules

- The artifact can still use SVG if needed, but it should live on the detail page.
- The artifact should be large enough to read comfortably.
- Internal projects should keep the safe generic project title on the detail page as well.
- Company attribution may remain visible.

## Files

- `src/data/projects.js`
- `src/components/ProjectsSection.astro`
- `src/components/ProjectCard.astro`
- `src/styles/global.css`
- `src/pages/projects/`
- any supporting layout or data helpers needed for project detail routes
- `public/images/project-1.svg`
- `public/images/project-2.svg`
- `public/images/project-3.svg`
- `public/images/project-4.svg`

## Verification

- `rtk npm run build`
- check `dist/index.html` for the safer project naming
- confirm homepage cards no longer render the cramped right-side preview panel
- confirm each homepage project links to a real detail page
- confirm each detail page renders and includes its larger visual artifact
- browser-check homepage and at least one detail page on desktop and mobile
