# Operating Notes About Section Design

## Context

The current `About & Experience` section reads like a compact CV: company, role, period, bullets, skills, education, and certifications. It is clear, but it does not show enough of how Fatih works as a mobile engineer.

The approved direction is **Approach A - Operating Notes**. Work history must remain visible, but it should support the section instead of becoming the whole section.

## Goal

Turn the About/Experience area into a portfolio section that explains how Fatih builds mobile products, then backs that up with compact work-history evidence and learning background.

## Approved Structure

### 1. Section Title

Use:

```text
How I build mobile products
```

### 2. Opening Statement

Add a short intro paragraph:

```text
I build mobile features by connecting product flow, API behavior, state management, and release constraints. Most of my work sits around Flutter apps that need to be reliable across Android and iOS.
```

### 3. Operating Notes

Render four notes:

1. `Product flow first`
   - Focus on user journey, business rules, empty/error states, and API contract before UI detail.

2. `Release-ready delivery`
   - Show care for build stability, device behavior, handoff, QA feedback, and app release risk.

3. `Maintainable Flutter code`
   - Emphasize state management, readable structure, refactor work, and code that can be continued by a team.

4. `Cross-team implementation`
   - Show ability to work around backend, QA, product, and stakeholder constraints in banking, merchant, and internal workflow domains.

### 4. Selected Experience Evidence

Keep work history visible in a compact proof-oriented format:

- Bank MAS
  - `Mobile Developer (Flutter) / Apr 2023 - Present`
  - `Banking, lending, merchant payments, invoices, transaction tracking.`

- Japfa
  - `Flutter Developer / Nov 2022 - Dec 2023`
  - `Digital forms, workflow, notification, internal task management.`

- BRI / Sagara
  - `Mobile Developer (Flutter) / May 2022 - Nov 2022`
  - `Maintenance, refactor, library updates, security-related improvements.`

- Freelance
  - `Mobile Developer / Apr 2022 - Present`
  - `UI implementation and release readiness for client mobile projects.`

### 5. Skill Clusters

Replace the comma-separated skills list with clusters:

- `Mobile`: Flutter, Dart, Android, iOS, Swift
- `Architecture`: Riverpod, BLoC, local database, refactoring
- `Backend integration`: REST API, JSON, Firebase, SQL/NoSQL
- `Tools`: Git, Postman, Figma, VS Code, Xcode

### 6. Learning Foundation

Keep education and certifications, but write them as a compact foundation note:

```text
Information Systems student at Universitas Siber Asia, with an Informatics Management background from Politeknik Negeri Medan. Flutter certifications helped start the mobile path; production work shaped the rest.
```

## Scope

In scope:

- Update the About/Experience section only.
- Keep work history visible.
- Keep education and certifications visible.
- Add structured data arrays for operating notes, skill clusters, compact experience evidence, and learning foundation copy so the component is not filled with hardcoded repeated markup.
- Keep visual style consistent with the existing typewriter-document site.

Out of scope:

- Projects redesign.
- Resume section changes.
- Now or Contact section changes.
- Hero redesign changes.
- SEO metadata changes.
- Adding new dependencies.

## Component/Data Boundary

- `src/components/AboutSection.astro` should own the rendering structure.
- `src/data/profile.js` should add small arrays/objects such as `operatingNotes`, `skillGroups`, `experienceEvidence`, and `learningFoundation`.
- Existing `experiences`, `skills`, `education`, and `certifications` can remain for reuse or future pages.

## Verification Plan

After implementation is approved and completed:

- Run `npm run build`.
- Check desktop and mobile rendering at local preview.
- Confirm the work-history companies still appear.
- Confirm education and certification references still appear.
- Confirm no unrelated sections changed.

## Open Decisions

No open product decisions remain for this design. The user approved Approach A and confirmed work history should remain visible.
