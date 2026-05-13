# Portfolio SEO and Phone Removal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove public phone number content and tighten recruiter-oriented SEO metadata for the Astro portfolio.

**Architecture:** Keep the existing Astro structure. Apply content/privacy changes at the data and component layer, then tighten shared metadata and page-level JSON-LD where SEO already lives. Verification stays build-based because this project does not have an automated test suite for metadata.

**Tech Stack:** Astro 6, TypeScript-flavored Astro components, Tailwind CSS, `@astrojs/sitemap`

---

### Task 1: Remove Public Phone Number Content

**Files:**
- Modify: `src/data/profile.js`
- Modify: `src/components/ContactSection.astro`

- [ ] **Step 1: Remove the phone field from profile data**

```js
export const profile = {
  name: 'Fatiha Rahmat',
  role: 'Mobile Engineer',
  location: 'Jakarta, Indonesia',
  email: 'fatiharahmat257@gmail.com',
  linkedin: 'https://linkedin.com/in/fatiharahmat',
  // remaining fields stay unchanged
};
```

- [ ] **Step 2: Remove phone rendering and keep public channels**

```astro
<div class="space-y-2">
  <div>
    <a href={`mailto:${profile.email}`} class="link-underline font-bold text-accent">
      {profile.email}
    </a>
  </div>
  <div>
    <a href={profile.linkedin} target="_blank" rel="noreferrer" class="link-underline font-bold text-accent">
      LinkedIn
    </a>
  </div>
  <div class="opacity-70">{profile.location}</div>
</div>
```

- [ ] **Step 3: Verify the removed field is not referenced**

Run: `rtk rg -n "profile\\.phone|\\+62|82272826930|telephone" src public`
Expected: no phone number matches in source files, except unrelated documentation if present

### Task 2: Improve Shared Metadata and Homepage Schema

**Files:**
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/pages/blogs.astro`

- [ ] **Step 1: Tighten shared default metadata**

```astro
const {
  title = "Fatiha Rahmat - Flutter Developer and Mobile Engineer",
  description = "Portfolio of Fatiha Rahmat, a Flutter Developer and Mobile Engineer building Android and iOS apps in Jakarta, Indonesia.",
  ogType = "website",
  ogImage,
  jsonLd,
} = Astro.props;
```

- [ ] **Step 2: Improve recruiter-facing homepage metadata**

```astro
<BaseLayout
  title={`${profile.name} - Flutter Developer and Mobile Engineer`}
  description={`${profile.name} is a Flutter Developer and Mobile Engineer in Jakarta, Indonesia, building Android and iOS apps across banking, fintech, and product teams.`}
  jsonLd={personJsonLd}
>
```

- [ ] **Step 3: Strengthen Person JSON-LD without phone data**

```js
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": profile.name,
  "jobTitle": "Flutter Developer and Mobile Engineer",
  "url": "https://fatiharahmat.dev",
  "email": profile.email,
  "sameAs": [profile.linkedin],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jakarta",
    "addressCountry": "ID"
  },
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Mobile Engineer",
    "occupationLocation": {
      "@type": "City",
      "name": "Jakarta"
    }
  }
};
```

- [ ] **Step 4: Make blog listing metadata more descriptive**

```astro
<BaseLayout
  title="Blogs - Fatiha Rahmat"
  description="Notes on Flutter, mobile engineering, Android, iOS, and app delivery from Fatiha Rahmat."
>
```

### Task 3: Verify Build Output and SEO Surface

**Files:**
- Modify: `public/robots.txt` only if needed

- [ ] **Step 1: Review robots.txt against the primary public domain**

Run: `rtk sed -n '1,40p' public/robots.txt`
Expected: sitemap entry matches the primary production domain unless there is a deliberate deployment change

- [ ] **Step 2: Run production build**

Run: `rtk npm run build`
Expected: Astro build completes with exit code 0 and sitemap generation succeeds

- [ ] **Step 3: Verify built output excludes phone content**

Run: `rtk rg -n "\\+62|82272826930|telephone|phone" dist`
Expected: no built HTML or assets expose the removed phone number

- [ ] **Step 4: Verify built HTML still includes SEO tags**

Run: `rtk rg -n "canonical|og:title|twitter:title|application/ld\\+json" dist`
Expected: homepage and blog pages include canonical, social metadata, and JSON-LD markers
