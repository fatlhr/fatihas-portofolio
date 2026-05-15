# Operating Notes About Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Replace the CV-like About/Experience section with an operating-notes section that explains how Fatih builds mobile products while keeping work history, skills, education, and certifications visible.

**Architecture:** Keep the existing Astro section boundary and move repeated content into structured exports from `src/data/profile.js`. Render the new structure from `src/components/AboutSection.astro`, then add small scoped CSS utilities in `src/styles/global.css` that match the current typewriter-document style.

**Tech Stack:** Astro 6, Tailwind CSS 4, plain CSS utilities, existing profile data module.

---

## Preflight Context

The working tree may already contain uncommitted source changes from the approved hero polish:

- `src/data/profile.js`
- `src/styles/global.css`

Do not revert those changes. Work with them. Stage only files that belong to the task being committed, and inspect diffs before each commit.

---

## File Structure

- `src/data/profile.js`
  - Add `operatingNotes`, `experienceEvidence`, `skillGroups`, and `learningFoundation`.
  - Keep existing `profile`, `heroHighlights`, `experiences`, `skills`, `education`, and `certifications` exports.

- `src/components/AboutSection.astro`
  - Replace the current CV-style list rendering with the approved operating-notes layout.
  - Import the new structured exports.

- `src/styles/global.css`
  - Add scoped classes for operating notes, evidence rows, skill clusters, and learning foundation text.
  - Keep existing hero CSS changes intact.

---

### Task 1: Add Operating Notes Data

**Files:**
- Modify: `src/data/profile.js`

- [x] **Step 1: Add structured exports after `heroHighlights`**

Add this block immediately after the existing `heroHighlights` export:

```js
export const operatingNotes = [
  {
    title: 'Product flow first',
    description:
      'I start from user journey, business rules, empty states, error states, and API contract before polishing UI details.',
  },
  {
    title: 'Release-ready delivery',
    description:
      'I care about build stability, device behavior, handoff quality, QA feedback, and the risks that appear near app release.',
  },
  {
    title: 'Maintainable Flutter code',
    description:
      'I keep state management, API boundaries, local data, and UI structure readable enough for the next developer to continue.',
  },
  {
    title: 'Cross-team implementation',
    description:
      'I work around backend, QA, product, and stakeholder constraints across banking, merchant, and internal workflow domains.',
  },
];

export const experienceEvidence = [
  {
    company: 'Bank MAS',
    role: 'Mobile Developer (Flutter)',
    period: 'Apr 2023 - Present',
    proof: 'Banking, lending, merchant payments, invoices, transaction tracking.',
  },
  {
    company: 'Japfa',
    role: 'Flutter Developer',
    period: 'Nov 2022 - Dec 2023',
    proof: 'Digital forms, workflow, notification, internal task management.',
  },
  {
    company: 'BRI / Sagara',
    role: 'Mobile Developer (Flutter)',
    period: 'May 2022 - Nov 2022',
    proof: 'Maintenance, refactor, library updates, security-related improvements.',
  },
  {
    company: 'Freelance',
    role: 'Mobile Developer',
    period: 'Apr 2022 - Present',
    proof: 'UI implementation and release readiness for client mobile projects.',
  },
];

export const skillGroups = [
  {
    label: 'Mobile',
    items: ['Flutter', 'Dart', 'Android', 'iOS', 'Swift'],
  },
  {
    label: 'Architecture',
    items: ['Riverpod', 'BLoC', 'local database', 'refactoring'],
  },
  {
    label: 'Backend integration',
    items: ['REST API', 'JSON', 'Firebase', 'SQL/NoSQL'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Postman', 'Figma', 'VS Code', 'Xcode'],
  },
];

export const learningFoundation = {
  text: 'Information Systems student at Universitas Siber Asia, with an Informatics Management background from Politeknik Negeri Medan. Flutter certifications helped start the mobile path; production work shaped the rest.',
  items: [
    'Information Systems - Universitas Siber Asia (Nov 2024 - Present)',
    'Informatics Management - Politeknik Negeri Medan (Sept 2018 - Okt 2021)',
    'Flutter Mobile Development - Sanbercode (2021)',
    'Flutter Mobile Development for Beginner - Dicoding (2021)',
  ],
};
```

- [x] **Step 2: Run syntax check**

Run:

```bash
rtk node --check src/data/profile.js
```

Expected:

```text
Command exits with code 0.
```

- [x] **Step 3: Inspect data diff**

Run:

```bash
rtk git diff -- src/data/profile.js
```

Expected:

```text
Diff keeps existing exports and adds only the four new structured exports for the About section, plus any pre-existing hero text change already in the working tree.
```

---

### Task 2: Replace About Section Rendering

**Files:**
- Modify: `src/components/AboutSection.astro`

- [x] **Step 1: Replace the full AboutSection component**

Replace the full file with:

```astro
---
import {
  experienceEvidence,
  learningFoundation,
  operatingNotes,
  skillGroups,
} from '../data/profile.js';
---
<section id="about" class="py-6">
  <div class="about-notes">
    <div class="about-notes__header">
      <p class="about-notes__kicker">About & Experience</p>
      <h2 class="text-2xl font-bold tracking-wide">How I build mobile products</h2>
      <p>
        I build mobile features by connecting product flow, API behavior, state management, and release constraints. Most of my work sits around Flutter apps that need to be reliable across Android and iOS.
      </p>
    </div>

    <div class="about-notes__grid">
      {operatingNotes.map((note, index) => (
        <article class="about-note">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
        </article>
      ))}
    </div>

    <div class="about-notes__section">
      <h3>Selected experience evidence</h3>
      <div class="about-evidence">
        {experienceEvidence.map((experience) => (
          <article class="about-evidence__item">
            <div>
              <h4>{experience.company}</h4>
              <p>{experience.role} / {experience.period}</p>
            </div>
            <p>{experience.proof}</p>
          </article>
        ))}
      </div>
    </div>

    <div class="about-notes__section">
      <h3>Skills in practice</h3>
      <div class="skill-clusters">
        {skillGroups.map((group) => (
          <div class="skill-cluster">
            <h4>{group.label}</h4>
            <p>{group.items.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>

    <div class="about-notes__section">
      <h3>Learning foundation</h3>
      <p class="about-foundation">{learningFoundation.text}</p>
      <ul class="about-foundation__list">
        {learningFoundation.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  </div>
</section>
```

- [x] **Step 2: Run build**

Run:

```bash
rtk npm run build
```

Expected:

```text
Build exits with code 0.
```

- [x] **Step 3: Inspect component diff**

Run:

```bash
rtk git diff -- src/components/AboutSection.astro
```

Expected:

```text
AboutSection imports the new structured data and no longer renders the old company-first CV list, comma-separated skill list, or education/certification list directly.
```

---

### Task 3: Add About Section CSS Utilities

**Files:**
- Modify: `src/styles/global.css`

- [x] **Step 1: Add about-section classes inside `@layer components`**

Append this block after the existing hero document CSS block inside `@layer components`:

```css
  .about-notes {
    @apply space-y-10;
  }

  .about-notes__header {
    @apply max-w-2xl;
  }

  .about-notes__header p:last-child {
    @apply mb-0 mt-4 text-sm leading-relaxed opacity-80;
  }

  .about-notes__kicker {
    color: var(--color-accent);
    @apply mb-3 text-xs font-bold uppercase tracking-wide;
  }

  .about-notes__grid {
    @apply grid gap-4 sm:grid-cols-2;
  }

  .about-note {
    border: 1px solid var(--color-border);
    @apply p-4;
  }

  .about-note span {
    color: var(--color-accent);
    @apply mb-4 block text-xs font-bold;
  }

  .about-note h3,
  .about-notes__section h3,
  .about-evidence__item h4,
  .skill-cluster h4 {
    @apply text-base font-bold;
  }

  .about-note p,
  .about-evidence__item p,
  .skill-cluster p,
  .about-foundation,
  .about-foundation__list {
    @apply text-sm leading-relaxed;
  }

  .about-note p,
  .about-foundation {
    @apply mb-0 opacity-80;
  }

  .about-notes__section {
    border-top: 1px dashed var(--color-border);
    @apply pt-8;
  }

  .about-notes__section > h3 {
    @apply mb-5;
  }

  .about-evidence {
    @apply space-y-5;
  }

  .about-evidence__item {
    @apply grid gap-2 sm:grid-cols-[14rem_minmax(0,1fr)];
  }

  .about-evidence__item p {
    @apply mb-0 opacity-80;
  }

  .skill-clusters {
    @apply grid gap-4 sm:grid-cols-2;
  }

  .skill-cluster {
    border: 1px solid var(--color-border);
    @apply p-4;
  }

  .skill-cluster p {
    @apply mb-0 opacity-80;
  }

  .about-foundation__list {
    @apply mt-4 list-disc space-y-1 pl-5 opacity-80;
  }
```

- [x] **Step 2: Run build**

Run:

```bash
rtk npm run build
```

Expected:

```text
Build exits with code 0.
```

- [x] **Step 3: Inspect CSS diff**

Run:

```bash
rtk git diff -- src/styles/global.css
```

Expected:

```text
Diff preserves existing hero CSS changes and adds only the scoped about-section utility classes.
```

---

### Task 4: Verify Content, Rendering, and Scope

**Files:**
- Verify generated output and diffs only.

- [x] **Step 1: Build**

Run:

```bash
rtk npm run build
```

Expected:

```text
Build exits with code 0.
```

- [x] **Step 2: Confirm required content appears in built homepage**

Run:

```bash
rtk rg -n "How I build mobile products|Product flow first|Release-ready delivery|Maintainable Flutter code|Cross-team implementation|Bank MAS|Japfa|BRI / Sagara|Freelance|Learning foundation|Universitas Siber Asia|Politeknik Negeri Medan|Sanbercode|Dicoding" dist/index.html
```

Expected:

```text
All operating notes, company history, education, and certification references appear in dist/index.html.
```

- [x] **Step 3: Confirm unrelated sections were not edited**

Run:

```bash
rtk git diff --name-only
```

Expected:

```text
Allowed source files are src/data/profile.js, src/components/AboutSection.astro, and src/styles/global.css, plus previously approved pending hero files if still uncommitted. No Projects, Resume, Now, Contact, layout, or SEO files appear.
```

- [x] **Step 4: Browser-check desktop and mobile**

Use the local dev server or preview server. Verify:

```text
Desktop: operating notes appear as a readable grid; experience evidence is compact; skill clusters and learning foundation are visible.
Mobile: notes, evidence, skill clusters, and learning foundation stack without horizontal overflow or text overlap.
Existing hero remains intact.
```

---

### Task 5: Commit Approved About Section Work

**Files:**
- Stage: `src/data/profile.js`
- Stage: `src/components/AboutSection.astro`
- Stage: `src/styles/global.css`
- Stage: `docs/superpowers/plans/2026-05-15-operating-notes-about-section.md`

- [x] **Step 1: Check status**

Run:

```bash
rtk git status --short --branch
```

Expected:

```text
Only approved source/doc files are modified or untracked, plus unrelated `.codex/` and `.superpowers/` that must remain unstaged.
```

- [x] **Step 2: Stage only approved files**

Run:

```bash
rtk git add src/data/profile.js src/components/AboutSection.astro src/styles/global.css docs/superpowers/plans/2026-05-15-operating-notes-about-section.md
```

Expected:

```text
Only those four files are staged.
```

- [x] **Step 3: Review staged diff**

Run:

```bash
rtk git diff --cached --stat
rtk git diff --cached --name-only
```

Expected:

```text
Staged files match the approved About section work and plan doc.
```

- [x] **Step 4: Commit**

Run:

```bash
rtk git commit -m "feat: rework about section as operating notes"
```

Expected:

```text
Commit succeeds.
```
