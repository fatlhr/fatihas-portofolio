# Editorial Document Hero Refresh Design

## Context

The portfolio already has a clear typewriter-document identity: IBM Plex Mono, narrow reading width, dashed dividers, and plain resume-style sections. The weak point is the first viewport. It communicates the basic profile, but it does not yet feel like a polished portfolio for a mobile engineer.

This design keeps the document feel and improves the hero only. It avoids a terminal-heavy treatment because the approved direction is **Editorial document**, not command-console UI.

## Goal

Make the homepage hero more memorable and recruiter-friendly while keeping the site quiet, readable, and clearly personal.

## Approved Direction

The hero should read like the cover of a technical portfolio document:

- A small document metadata row above the main content.
- A stronger name/title hierarchy.
- A concise role and current-work statement.
- A quick index/sidebar that highlights mobile-engineering signals.
- Clear action links for LinkedIn, email, and resume.

The mood should be editorial, structured, and document-like. It should not feel like a dashboard, landing page, or playful terminal demo.

## Scope

In scope:

- Refresh `HeroSection` layout and copy structure.
- Add small CSS utilities in `global.css` for the hero document panel, metadata row, quick-index panel, and compact action links.
- Add a small `heroHighlights` data array in `profile.js` so quick-index content is not buried in markup.
- Preserve the existing public contact boundary: email, LinkedIn, and location are fine; phone number must not be added.
- Preserve existing SEO metadata and JSON-LD behavior.
- Keep the page static and dependency-free.

Out of scope:

- Full homepage redesign.
- Project-card redesign.
- New animation library.
- New route or CMS layer.
- Broad copy rewrite outside the hero.
- Any implementation commit before the implementation plan is approved.

## Proposed Component Shape

`src/components/HeroSection.astro` should render:

1. Document metadata line:
   - `Mobile Developer`
   - `Jakarta, Indonesia / Portfolio 2026`

2. Main hero body:
   - Name as the primary heading.
   - Existing summary lines in their current order.
   - A current-role line that keeps Bank MAS visible.

3. Quick index panel:
   - `3+ years mobile`
   - `Flutter / Dart`
   - `Android + iOS`
   - `Banking + merchant apps`
   - `REST API + release work`

4. Action links:
   - LinkedIn
   - Email
   - Resume PDF

## Style Rules

- Keep IBM Plex Mono.
- Keep dashed borders and document spacing.
- Use subtle paper-style panels only inside the hero, not across the whole page.
- Avoid oversized marketing hero composition.
- Keep mobile layout stacked and readable.
- Use text links or compact outlined actions, not large rounded buttons.
- Keep color palette close to the current site: neutral document background, dark text, blue accent.

## Verification Plan

After implementation is approved and completed:

- Run `npm run build`.
- Open local preview or dev server.
- Check desktop and mobile widths for overlap or awkward wrapping.
- Confirm source and generated output do not reintroduce a public phone number.
- Confirm existing SEO title, description, canonical, and JSON-LD still render.

## Open Decisions

No open product decisions remain for this design. The user approved the hero focus, the Editorial document direction, and the implementation boundary.
