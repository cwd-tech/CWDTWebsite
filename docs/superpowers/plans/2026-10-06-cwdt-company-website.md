# CWDT Company Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive Traditional Chinese one-page CWDT corporate website and prepare it for GitHub Pages hosting.

**Architecture:** A standalone React and TypeScript application built with Vite. The page is composed from focused section components and a centralized content object; it uses local CSS and a relative asset base so the same build works at a GitHub Pages project path or a custom domain. A least-privilege GitHub Actions workflow builds and publishes `dist/`.

**Tech Stack:** React, TypeScript, Vite, CSS, npm, GitHub Actions, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-10-06-cwdt-company-website-design.md`

## Global Constraints

- Frontend uses React, TypeScript and Vite; Vite emits static files to `dist/` with no server runtime.
- The site is one page with anchor navigation and no additional client-side routes.
- Use the Vite relative base path `./` so static asset URLs work at both a repository subpath and a custom-domain root.
- Use only project-owned CSS and local assets; do not copy Expetech or Jinteik text, logos, images, or other brand material.
- Until CWDT provides official copy, service details, case details, logo and contact details, render clearly identified neutral placeholders and do not invent company facts.
- The contact section contains information only; do not add a form, data collection, backend API, database, login or analytics.
- Support desktop and mobile widths, keyboard navigation, visible focus, semantic headings and Traditional Chinese document metadata.
- Use Node.js `20.19+` or `22.12+` when installing or building with current Vite.

---

## File Map

| File | Responsibility |
| --- | --- |
| `index.html` | Vite document entry, `zh-Hant` language, page title and description metadata. |
| `vite.config.ts` | React plugin and relative static asset base. |
| `src/main.tsx` | React entry point and global CSS imports. |
| `src/App.tsx` | Compose the page sections in the approved order. |
| `src/content/siteContent.ts` | Typed site copy, navigation labels, service/case cards and contact information placeholders. |
| `src/components/SiteHeader.tsx` | Brand wordmark, desktop anchors and accessible mobile menu. |
| `src/components/HeroSection.tsx` | Full-bleed visual, placeholder headline and primary anchor CTA. |
| `src/components/AboutSection.tsx` | Company introduction with a local visual placeholder. |
| `src/components/ServicesSection.tsx` | Service introduction and responsive service cards. |
| `src/components/CasesSection.tsx` | Responsive case cards with clearly identified placeholder copy. |
| `src/components/ContactSection.tsx` | Contact-information-only layout; links are emitted only for supplied valid details. |
| `src/components/MediaPlaceholder.tsx` | Reusable local CSS-based visual block until approved CWDT images are supplied. |
| `src/components/SiteFooter.tsx` | Brand, copyright placeholder and repeat anchor links. |
| `src/styles/tokens.css` | CWDT-specific color, type, spacing, radius and content-width tokens. |
| `src/styles/site.css` | Header, hero, section, card, contact, footer, responsive, focus and reduced-motion styles. |
| `.github/workflows/deploy-pages.yml` | Build and deploy `dist/` to GitHub Pages on pushes to `main`. |
| `README.md` | Local development, static build, Pages setup and later custom-domain checklist. |

## Task 1: Scaffold the standalone Vite application

**Files:**
- Create from the React TypeScript Vite template: `package.json`, `package-lock.json`, `index.html`, `vite.config.ts`, `tsconfig*.json`, `src/main.tsx`, `src/App.tsx`, `src/vite-env.d.ts`, `.gitignore`.
- Modify: `vite.config.ts`, `index.html`.
- Create: `README.md`.

**Interfaces:**
- Produces the runnable Vite root and the `npm run dev`, `npm run build`, and `npm run preview` scripts used by later tasks.
- `vite.config.ts` exports a Vite config with the React plugin and `base: './'`.

- [x] **Step 1: Scaffold in the already initialized project directory.**

Run from `D:\Work\Develop\CWDT\CWDTWebsite`:

```powershell
npm create vite@latest . -- --template react-ts
```

If create-vite asks how to handle the existing non-empty directory, choose **Ignore files and continue** so the already committed `docs/` and `.git/` remain in place. Keep the generated React TypeScript template; do not add a UI framework or router.

- [x] **Step 2: Install dependencies and set the relative build base.**

Run:

```powershell
npm install
```

Set `vite.config.ts` to keep the generated React plugin and use:

```ts
base: './',
```

This single-page site has no nested client routes, so relative asset URLs support both a GitHub Pages repository path and a custom-domain root.

- [x] **Step 3: Set the document language and initial metadata.**

In `index.html`, set `<html lang="zh-Hant">`, title `CWDT 澄叡｜公司官網`, and a description that explicitly says `公司介紹文案待提供。` Do not insert invented business claims or third-party media links.

- [x] **Step 4: Write local start and build instructions.**

In `README.md`, document the Node requirement (`20.19+` or `22.12+`) and the exact commands `npm install`, `npm run dev`, `npm run build`, and `npm run preview`.

- [x] **Step 5: Build the untouched scaffold and commit.**

Run:

```powershell
npm run build
```

Expected: TypeScript build succeeds and Vite creates `dist/index.html` plus bundled assets. Then commit the scaffold and its lockfile:

```powershell
git add package.json package-lock.json index.html vite.config.ts tsconfig*.json src .gitignore README.md
git commit -m "chore: scaffold CWDT company website"
```

## Task 2: Add typed content and semantic page sections

**Files:**
- Create: `src/content/siteContent.ts`.
- Create: `src/components/SiteHeader.tsx`, `HeroSection.tsx`, `AboutSection.tsx`, `ServicesSection.tsx`, `CasesSection.tsx`, `ContactSection.tsx`, `MediaPlaceholder.tsx`, `SiteFooter.tsx`.
- Modify: `src/App.tsx`, `index.html`.
- Delete unused Vite starter files: `src/App.css`, `src/assets/hero.png`, `src/assets/react.svg`, `src/assets/vite.svg`, `public/favicon.svg`, `public/icons.svg`.

**Interfaces:**

`siteContent.ts` exports the `siteContent` object and these types:

```ts
export interface NavItem {
  id: string;
  label: string;
}

export interface ContentCard {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  visualLabel: string;
}

export interface ContactDetail {
  id: string;
  label: string;
  value: string;
  href?: string;
}

export interface HeroContent {
  title: string;
  description: string;
  ctaLabel: string;
  ctaTarget: string;
  visualLabel: string;
}

export interface StoryContent {
  eyebrow: string;
  title: string;
  description: string;
  visualLabel: string;
}

export interface SiteContent {
  brand: { english: string; chinese: string };
  navigation: NavItem[];
  hero: HeroContent;
  about: StoryContent;
  services: StoryContent & { items: ContentCard[] };
  cases: { eyebrow: string; title: string; items: ContentCard[] };
  contact: { eyebrow: string; title: string; details: ContactDetail[] };
}
```

`siteContent` has `brand`, `navigation`, `hero`, `about`, `services`, `cases`, and `contact` fields. `services` contains three editable card objects; `cases` contains two editable card objects. Service and case card descriptions are the literal replacement-ready copy `正式內容待提供。`; their titles are `服務項目待提供` or `合作案例待提供` as appropriate. Contact details start with labels and `聯絡方式待提供`, with no `href` until a real company value is supplied.

- [x] **Step 1: Define the content types and actual neutral site data.**

Create `siteContent.ts` using the interfaces above. Include navigation anchors `about`, `services`, `cases`, `contact`; use brand text `CWDT` and `澄叡`; set the hero title to `品牌主標題待提供`, its description to `首頁介紹文案待提供。`, CTA label to `探索服務`, target to `#services`, and visual label to `主視覺影像待提供`. Use About title `關於澄叡`, eyebrow `ABOUT CWDT`, description `公司介紹文案待提供。`, and visual label `公司介紹圖片待提供`. Use Services title `服務項目`, eyebrow `WHAT WE DO`, description `服務介紹文案待提供。`, and visual label `服務主視覺待提供`; add three cards whose title is `服務項目待提供`, eyebrow is `SERVICE 01`, `SERVICE 02`, or `SERVICE 03`, description is `正式內容待提供。`, and visual label is `服務圖片待提供`. Use Cases title `合作案例`, eyebrow `SELECTED WORK`, and add two cards titled `合作案例待提供`, with eyebrow `CASE 01` or `CASE 02`, description `正式內容待提供。`, and visual label `案例圖片待提供`. Use Contact title `聯絡資訊`, eyebrow `CONTACT`, and one detail with label `聯絡方式` and value `聯絡方式待提供。`; omit `href`. Keep all strings in this file so future copy changes do not require editing layout components.

- [x] **Step 2: Implement the shared visual placeholder.**

`MediaPlaceholder.tsx` accepts `label: string` and `variant: 'hero' | 'story' | 'card'`, renders a decorative `<div>` with a child label, and sets decorative shape layers to `aria-hidden="true"`. Use no external image URL.

Use this component contract:

```tsx
interface MediaPlaceholderProps {
  label: string;
  variant: 'hero' | 'story' | 'card';
}

export function MediaPlaceholder({ label, variant }: MediaPlaceholderProps) {
  return (
    <div className={`media-placeholder media-placeholder--${variant}`}>
      <span className="media-placeholder__label">{label}</span>
      <span className="media-placeholder__geometry" aria-hidden="true" />
    </div>
  );
}
```

- [x] **Step 3: Implement the independent section components.**

Create one component per file from the File Map. Each component accepts only the corresponding typed section data as props. Use `<header>`, `<nav>`, `<main>`, `<section>`, `<address>` and `<footer>` where appropriate. Give the sections the IDs from `siteContent.navigation`. The CTA uses a real in-page `href`, not a click handler.

For `ContactSection`, render a `mailto:` or `tel:` anchor only when `href` exists; otherwise render the value as plain text. Never render a fake or clickable address, phone number, or email.

Use these component prop contracts: `SiteHeader` and `SiteFooter` receive `{ brand: SiteContent['brand']; navigation: NavItem[] }`; each other section receives a `content` prop with its same-named `SiteContent` field. `ServicesSection` maps `content.items` into `ContentCard` views; `CasesSection` maps its `content.items` in the same way.

The contact detail rendering must follow this branch:

```tsx
{detail.href ? (
  <a href={detail.href}>{detail.value}</a>
) : (
  <span>{detail.value}</span>
)}
```

- [x] **Step 4: Compose the one-page layout.**

Replace the Vite starter content in `App.tsx` with `SiteHeader`, `HeroSection`, `<main>` sections in this order—About, Services, Cases, Contact—and `SiteFooter`, all backed by `siteContent`. Give `SiteHeader` the ID `top`; link the wordmark to `#top`. Preserve a single `<h1>` in the hero and ordered section heading levels. Add this keyboard-only skip link before the header: `<a className="skip-link" href="#main-content">跳至主要內容</a>`. Remove the starter app's `App.css` and all imports/references to Vite/React logos; remove those unused logo files from the project.

Use this composition contract:

```tsx
export default function App() {
  const { brand, navigation } = siteContent;
  return (
    <>
      <a className="skip-link" href="#main-content">跳至主要內容</a>
      <SiteHeader brand={brand} navigation={navigation} />
      <main id="main-content">
        <HeroSection content={siteContent.hero} />
        <AboutSection content={siteContent.about} />
        <ServicesSection content={siteContent.services} />
        <CasesSection content={siteContent.cases} />
        <ContactSection content={siteContent.contact} />
      </main>
      <SiteFooter brand={brand} navigation={navigation} />
    </>
  );
}
```

- [x] **Step 5: Build and commit the content/layout deliverable.**

Run:

```powershell
npm run build
```

Expected: TypeScript accepts all section props and the static build succeeds. Commit:

```powershell
git add -A -- src public index.html
git commit -m "feat: add CWDT website sections"
```

## Task 3: Implement the Expetech-inspired responsive visual system

**Files:**
- Create: `src/styles/tokens.css`, `src/styles/site.css`.
- Modify: `src/main.tsx`, `src/components/SiteHeader.tsx`, `src/components/MediaPlaceholder.tsx`.
- Delete: `src/index.css` after moving its reset/layout responsibility into `site.css`.

**Interfaces:**
- `tokens.css` owns CSS custom properties only.
- `site.css` owns page layout and component classes; components use stable class names rather than inline styles.
- `SiteHeader` exposes an accessible menu toggle on narrow screens, with `aria-expanded` and `aria-controls`.

- [x] **Step 1: Define original CWDT tokens.**

Add CSS variables for deep navy, blue, teal, mint, white, neutral surfaces, body text, muted text, focus outline, content max-width, spacing and radii. Use system Traditional Chinese font fallbacks (`Noto Sans TC`, `PingFang TC`, `Microsoft JhengHei`, sans-serif); do not load a remote font.

Start `tokens.css` with these values:

```css
:root {
  --color-ink: #14232e;
  --color-navy: #082435;
  --color-blue: #176b91;
  --color-teal: #15958d;
  --color-mint: #a8ded2;
  --color-paper: #f5f7f6;
  --color-white: #ffffff;
  --color-muted: #62717a;
  --color-focus: #0b78a5;
  --content-width: 1200px;
  --header-height: 76px;
  --radius-card: 8px;
}
```

- [x] **Step 2: Build the full-bleed hero and navigation treatment.**

Use a compact white header with a text wordmark and quiet navigation. Style the hero as a tall, dark, cinematic block with original CSS gradients and subtle geometric lines, high-contrast centered title, short subtitle and rounded light CTA. Keep the placeholder label visible so the absence of official photography is clear.

- [x] **Step 3: Style story, services, cases, contact and footer.**

Alternate light content sections with a small number of dark bands. Use large media placeholders paired with generous text blocks; service and case cards use consistent aspect ratios, restrained borders, and short labels. Contact displays information blocks only. Match the section rhythm and image emphasis of the reference without copying its exact compositions or assets.

- [x] **Step 4: Add responsive layout and mobile menu behavior.**

At widths below `800px`, collapse the main navigation behind a native button with an accessible name (`aria-label="開啟導覽"` / `aria-label="關閉導覽"`). On activation, update `aria-expanded`; selecting a link closes the menu. Use a two-column layout for story sections and card grids above the breakpoint, and a single-column stack below it. Add `scroll-margin-top` so sticky-header anchor destinations remain visible.

Use native button state so pointer, keyboard and screen-reader behavior stay aligned:

```tsx
const [isOpen, setIsOpen] = useState(false);

<button
  type="button"
  className="nav-toggle"
  aria-controls="site-navigation"
  aria-expanded={isOpen}
  aria-label={isOpen ? '關閉導覽' : '開啟導覽'}
  onClick={() => setIsOpen((open) => !open)}
>
  <span aria-hidden="true">{isOpen ? '×' : '☰'}</span>
</button>
<nav id="site-navigation" className={isOpen ? 'site-navigation is-open' : 'site-navigation'}>
  {navigation.map((item) => (
    <a key={item.id} href={`#${item.id}`} onClick={() => setIsOpen(false)}>
      {item.label}
    </a>
  ))}
</nav>
```

Use the `is-open` class consistently for the expanded navigation, with this responsive contract:

```css
.nav-toggle {
  display: none;
}

@media (max-width: 799px) {
  .nav-toggle {
    display: inline-flex;
  }

  .site-navigation {
    display: none;
  }

  .site-navigation.is-open {
    display: flex;
  }

  .story,
  .card-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
```

- [x] **Step 5: Add accessibility and reduced-motion styling.**

Provide `:focus-visible` rings, sufficient text/background contrast, touch-sized menu controls, decorative placeholders marked as hidden from assistive technology, and a `prefers-reduced-motion: reduce` rule that removes nonessential transitions. Style `.skip-link` off-screen by default and bring it into view on `:focus`. Remove the Vite starter `index.css`; import `tokens.css` before `site.css` from `src/main.tsx`.

- [x] **Step 6: Build and commit the visual system.**

Run `npm run build`; expected: TypeScript and Vite build succeed without external assets. Commit:

```powershell
git add -A -- src
git commit -m "feat: style responsive CWDT landing page"
```

## Task 4: Configure GitHub Pages and document hosting

**Files:**
- Create: `.github/workflows/deploy-pages.yml`.
- Modify: `README.md`.

**Interfaces:**
- Workflow triggers on push to `main` and `workflow_dispatch`.
- Workflow builds the repository root with `npm ci` and `npm run build`, then publishes only `dist/`.
- Workflow uses `contents: read`, `pages: write`, and `id-token: write` permissions; no secrets or DNS credentials are required for static deployment.

- [x] **Step 1: Add the official GitHub Pages Actions workflow shape.**

Create `.github/workflows/deploy-pages.yml` with this complete workflow, using the action SHAs from Vite's current official static deployment example:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1 # v7
      - name: Set up Node
        uses: actions/setup-node@820762786026740c76f36085b0efc47a31fe5020 # v7
        with:
          node-version: lts/*
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Configure Pages
        uses: actions/configure-pages@45bfe0192ca1faeb007ade9deae92b16b8254a0d # v6
      - name: Upload artifact
        uses: actions/upload-pages-artifact@fc324d3547104276b827a68afc52ff2a11cc49c9 # v5
        with:
          path: ./dist
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@368f82528645a54fb793d4d04e342629a3f51346 # v5
```

- [x] **Step 2: Document GitHub Pages settings without inventing a domain.**

Update `README.md` to explain that the repository owner selects **Settings → Pages → Build and deployment → GitHub Actions** after pushing to GitHub. Explain that a custom domain is configured in Pages and at the DNS provider after the official domain is known; do not add a `CNAME` file, DNS record, owner name, repository URL or credential before those values exist.

- [x] **Step 3: Build and commit deployment configuration.**

Run `npm run build`; expected: `dist/` exists and is the artifact path used by the workflow. Commit:

```powershell
git add .github/workflows/deploy-pages.yml README.md
git commit -m "ci: deploy CWDT website to GitHub Pages"
```

## Task 5: Review the built site against the approved spec

**Files:**
- No new test suite. Review the files created in Tasks 1–4 and inspect the built result locally.

- [x] **Step 1: Perform the spec coverage review.**

Confirm the page contains the approved section order, all unknown facts remain neutral placeholders, there is no contact form or backend dependency, and no Expetech/Jinteik assets or copy were added.

- [x] **Step 2: Review the production build in a local browser.**

Run:

```powershell
npm run build
npm run preview -- --host 127.0.0.1
```

Open the printed local URL. Inspect one desktop-width and one mobile-width viewport. Confirm the sticky header, mobile menu keyboard operation, anchor targets, text wrapping, media-placeholder layout, and contact information remain readable without horizontal overflow. Stop the preview server after inspection.

- [x] **Step 3: Confirm final repository state.**

Run `git status --short` and ensure only intentional project files are present. Report the build result, preview review, Pages workflow presence, and remaining user inputs needed before public launch: official copy/assets/contact details, GitHub remote/repository, and custom domain/DNS provider.

## Sources

- [Vite Getting Started](https://vite.dev/guide/) for the React TypeScript create-vite template and current Node.js requirements.
- [Vite Shared Options](https://vite.dev/config/shared-options.html#base) for relative `base: './'` deployment.
- [Vite Static Deployment](https://vite.dev/guide/static-deploy.html) for GitHub Pages workflow structure and Actions deployment.
- [GitHub Pages custom domain setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) for later DNS configuration.
