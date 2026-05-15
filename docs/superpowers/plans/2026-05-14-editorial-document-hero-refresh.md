# Editorial Document Hero Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the homepage hero so the first viewport reads like a polished editorial portfolio document for a mobile engineer.

**Architecture:** Keep the existing Astro page/component structure and change only the hero path. Store the quick-index content in `src/data/profile.js`, render it from `src/components/HeroSection.astro`, and add focused CSS utilities in `src/styles/global.css` for the document-cover layout.

**Tech Stack:** Astro 6, Tailwind CSS 4, plain CSS utilities, existing IBM Plex Mono font.

---

## File Structure

- `src/data/profile.js`
  - Add `heroHighlights`, an array of short strings used by the hero quick index.

- `src/components/HeroSection.astro`
  - Replace the current plain heading/social-links hero with the approved editorial document hero.
  - Continue reading `profile.name`, `profile.role`, `profile.location`, `profile.email`, `profile.linkedin`, and `profile.summary`.
  - Add a resume link using `withBasePath('resume.pdf')`.

- `src/styles/global.css`
  - Add scoped reusable CSS classes for the hero document panel, metadata row, summary spacing, quick-index panel, and compact action links.
  - Keep the existing global theme variables and typography intact.

- Generated verification output only:
  - `dist/` may be created by `npm run build` but must not be committed.

---

### Task 1: Add Hero Quick-Index Data

**Files:**
- Modify: `src/data/profile.js`

- [ ] **Step 1: Add hero highlights to profile data**

Add this export immediately after the `profile` export:

```js
export const heroHighlights = [
  '3+ years mobile',
  'Flutter / Dart',
  'Android + iOS',
  'Banking + merchant apps',
  'REST API + release work',
];
```

- [ ] **Step 2: Run a syntax check for the data file**

Run:

```bash
rtk node --check src/data/profile.js
```

Expected:

```text
ok
```

- [ ] **Step 3: Inspect the diff**

Run:

```bash
rtk git diff -- src/data/profile.js
```

Expected:

```text
src/data/profile.js shows only the new heroHighlights export.
```

---

### Task 2: Replace Hero Markup With Editorial Document Cover

**Files:**
- Modify: `src/components/HeroSection.astro`

- [ ] **Step 1: Replace the component with the approved hero structure**

Replace the full file with:

```astro
---
import { heroHighlights, profile } from '../data/profile.js';
import { withBasePath } from '../utils/paths.js';

const resumeUrl = withBasePath('resume.pdf');
---
<section id="hero" class="hero-document py-6 sm:py-8">
  <div class="hero-document__meta" aria-label="Portfolio metadata">
    <span>{profile.role}</span>
    <span>{profile.location} / Portfolio 2026</span>
  </div>

  <div class="hero-document__body">
    <div class="hero-document__intro">
      <p class="hero-document__eyebrow">Filed under: Flutter, Android, iOS, product delivery</p>
      <h1 class="mb-6">{profile.name}</h1>

      <div class="hero-document__summary">
        {profile.summary.map((line) => (
          <p class="font-medium text-base sm:text-lg">{line}</p>
        ))}
      </div>

      <div class="hero-document__actions" aria-label="Primary contact links">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" class="hero-document__action">
          LinkedIn
        </a>
        <a href={`mailto:${profile.email}`} class="hero-document__action">
          Email
        </a>
        <a href={resumeUrl} download class="hero-document__action">
          Resume PDF
        </a>
      </div>
    </div>

    <aside class="hero-document__index" aria-label="Mobile engineering quick index">
      <p class="hero-document__index-title">Quick index</p>
      <ol>
        {heroHighlights.map((highlight, index) => (
          <li>
            <span>{String(index + 1).padStart(2, '0')}</span>
            {highlight}
          </li>
        ))}
      </ol>
    </aside>
  </div>
</section>
```

- [ ] **Step 2: Run Astro check through build**

Run:

```bash
rtk npm run build
```

Expected:

```text
ok
```

- [ ] **Step 3: Inspect the hero diff**

Run:

```bash
rtk git diff -- src/components/HeroSection.astro
```

Expected:

```text
HeroSection.astro imports heroHighlights and withBasePath, removes the unused RSS link, and renders LinkedIn, Email, and Resume PDF actions.
```

---

### Task 3: Add Focused Hero CSS Utilities

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Add hero component classes inside `@layer components`**

Append this block after the existing `.text-accent` rule inside `@layer components`:

```css
  .hero-document {
    border: 1px solid var(--color-border);
    background:
      linear-gradient(90deg, transparent 0 4.25rem, var(--color-border) 4.25rem calc(4.25rem + 1px), transparent calc(4.25rem + 1px)),
      color-mix(in srgb, var(--color-bg) 94%, var(--color-accent) 6%);
    @apply px-4 py-5 sm:px-6 sm:py-6;
  }

  .hero-document__meta {
    border-bottom: 1px dashed var(--color-border);
    @apply flex flex-col gap-2 pb-4 text-xs font-medium uppercase tracking-wide opacity-70 sm:flex-row sm:items-center sm:justify-between;
  }

  .hero-document__body {
    @apply grid gap-8 pt-8 lg:grid-cols-[minmax(0,1fr)_17rem];
  }

  .hero-document__eyebrow {
    color: var(--color-accent);
    @apply mb-4 text-xs font-semibold uppercase tracking-wide;
  }

  .hero-document__summary {
    @apply max-w-2xl;
  }

  .hero-document__summary p:last-child {
    @apply mb-0;
  }

  .hero-document__actions {
    @apply mt-8 flex flex-wrap gap-3;
  }

  .hero-document__action {
    border: 1px solid var(--color-border);
    @apply inline-flex min-h-11 items-center px-3 text-sm font-bold hover:border-current hover:text-accent;
  }

  .hero-document__index {
    border-left: 1px dashed var(--color-border);
    @apply pl-5 text-sm;
  }

  .hero-document__index-title {
    @apply mb-4 text-xs font-bold uppercase tracking-wide opacity-70;
  }

  .hero-document__index ol {
    @apply space-y-3;
  }

  .hero-document__index li {
    @apply flex gap-3;
  }

  .hero-document__index li span {
    color: var(--color-accent);
    @apply shrink-0 font-bold;
  }

  @media (max-width: 1023px) {
    .hero-document__index {
      border-left: 0;
      border-top: 1px dashed var(--color-border);
      @apply pl-0 pt-5;
    }
  }
```

- [ ] **Step 2: Run build**

Run:

```bash
rtk npm run build
```

Expected:

```text
ok
```

- [ ] **Step 3: Inspect the CSS diff**

Run:

```bash
rtk git diff -- src/styles/global.css
```

Expected:

```text
global.css keeps existing theme variables and adds only hero-document utilities under @layer components.
```

---

### Task 4: Verify Privacy, SEO Preservation, and Responsive Rendering

**Files:**
- Verify generated output only.

- [ ] **Step 1: Build fresh generated output**

Run:

```bash
rtk npm run build
```

Expected:

```text
ok
```

- [ ] **Step 2: Confirm phone number is not reintroduced**

Run:

```bash
rtk rg -n "phone|tel:|\\+62|081|082|083|085|087|088" src dist
```

Expected:

```text
No public phone number is present. Mentions of the word phone only pass if they are unrelated package/build text and not rendered contact content.
```

- [ ] **Step 3: Confirm existing SEO markers still render**

Run:

```bash
rtk rg -n "Flutter Developer and Mobile Engineer|application/ld\\+json|canonical|og:title|twitter:card" dist/index.html
```

Expected:

```text
dist/index.html contains title/description-related text, JSON-LD, canonical, Open Graph, and Twitter card markers.
```

- [ ] **Step 4: Start local dev server**

Run:

```bash
rtk npm run dev -- --host 127.0.0.1
```

Expected:

```text
Astro dev server starts and prints a localhost URL.
```

- [ ] **Step 5: Browser-check desktop and mobile**

Open the local URL and verify:

```text
Desktop: hero metadata, name, summary, quick index, and actions are visible without overlap.
Mobile: quick index stacks below summary, action links wrap cleanly, and header remains usable.
Theme toggle: light/dark mode still changes colors.
```

- [ ] **Step 6: Inspect final diff**

Run:

```bash
rtk git diff -- src/data/profile.js src/components/HeroSection.astro src/styles/global.css
```

Expected:

```text
Diff only includes hero data, hero markup, and hero CSS. No unrelated sections, SEO files, project data, or contact privacy changes are modified.
```

---

### Task 5: Commit Implementation After Verification

**Files:**
- Stage: `src/data/profile.js`
- Stage: `src/components/HeroSection.astro`
- Stage: `src/styles/global.css`

- [ ] **Step 1: Check status before staging**

Run:

```bash
rtk git status --short --branch
```

Expected:

```text
Only the three implementation files are modified, plus any existing unrelated untracked files that must remain unstaged.
```

- [ ] **Step 2: Stage only implementation files**

Run:

```bash
rtk git add src/data/profile.js src/components/HeroSection.astro src/styles/global.css
```

Expected:

```text
Only the three implementation files are staged.
```

- [ ] **Step 3: Review staged diff**

Run:

```bash
rtk git diff --cached --stat
rtk git diff --cached
```

Expected:

```text
Staged diff contains only the approved editorial hero refresh.
```

- [ ] **Step 4: Commit**

Run:

```bash
rtk git commit -m "feat: refresh portfolio hero"
```

Expected:

```text
Commit succeeds with the approved hero implementation.
```
