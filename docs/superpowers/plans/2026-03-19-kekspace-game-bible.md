# Kekspace Game Bible Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page scrolling website that serves as the Kekspace game bible for investors and community, with Pepecoin as the primary CTA.

**Architecture:** Vanilla HTML/CSS/JS built with Vite for dev server and static output. Single `index.html` with section-based structure. CSS organized per-section with shared variables. Minimal JS for navigation, scroll animations, and mobile menu.

**Tech Stack:** Vite 6, vanilla HTML/CSS/JS, CSS custom properties, Intersection Observer API for animations.

**Spec:** `docs/superpowers/specs/2026-03-19-kekspace-game-bible-design.md`

---

## File Structure

```
site/
├── index.html                      # Single-page HTML — all 9 sections
├── package.json                    # Vite dev dependency
├── vite.config.js                  # Vite config — static build output
├── public/
│   ├── favicon.ico                 # Placeholder until brand assets provided
│   ├── og-image.png                # Open Graph preview image
│   └── images/                     # Curated screenshots from /content/
│       ├── hero-bg.png             # Hero background (City West or Spawn)
│       ├── zones/                  # One screenshot per featured zone
│       ├── events/                 # Krakening, Halloween, Christmas screenshots
│       ├── community/              # Community gathering screenshots
│       ├── gameplay/               # KekCreator, minigames, HUD screenshots
│       ├── economy/                # Items, rooms, play-to-value visuals
│       │   ├── icon-explore.png    # Pixel-art loop diagram icons
│       │   ├── icon-gather.png
│       │   ├── icon-craft.png
│       │   ├── icon-equip.png
│       │   └── icon-mint.png
│       └── social/                 # Styled social media post screenshots
├── src/
│   ├── styles/
│   │   ├── reset.css               # CSS reset / normalize
│   │   ├── variables.css           # CSS custom properties — colors, fonts, spacing
│   │   ├── global.css              # Base typography, retro manual motif utilities
│   │   ├── nav.css                 # Sticky nav + mobile hamburger
│   │   ├── hero.css                # Section 1: Hero / Landing
│   │   ├── vision.css              # Section 2: Vision
│   │   ├── economy.css             # Section 3: Economy (3a/3b/3c)
│   │   ├── world.css               # Section 4: World (overview + zone grid + kekpads)
│   │   ├── gameplay.css            # Section 5: Gameplay (kekcreator + minigames + quests + hud)
│   │   ├── events.css              # Section 6: Events & Partnerships
│   │   ├── community.css           # Section 7: Community
│   │   ├── roadmap.css             # Section 8: Roadmap
│   │   ├── closing.css             # Section 9: Closing CTAs
│   │   └── responsive.css          # Mobile breakpoints — all sections
│   └── scripts/
│       ├── main.js                 # Entry point — imports nav + animations
│       ├── nav.js                  # Sticky nav, smooth scroll, hamburger toggle, progress bar
│       └── animations.js           # Intersection Observer — fade-in on scroll
```

**Responsibilities:**
- `index.html` — all content structure and semantic HTML. One file, 9 `<section>` elements.
- `variables.css` — single source of truth for theming. When brand assets arrive, only this file changes.
- `global.css` — retro manual utility classes (`.manual-page`, `.pixel-border`, `.tape-corner`, `.status-tag`)
- Each section CSS file — layout and styling scoped to that section only
- `responsive.css` — all `@media` queries in one place for easier maintenance
- `nav.js` — all navigation behavior (scroll spy, hamburger, progress bar)
- `animations.js` — all scroll-triggered animations via Intersection Observer

---

## Chunk 1: Foundation

### Task 1: Initialize Vite project

**Files:**
- Create: `site/package.json`
- Create: `site/vite.config.js`
- Create: `site/index.html` (skeleton)
- Create: `site/src/styles/reset.css`
- Create: `site/src/styles/variables.css`
- Create: `site/src/styles/global.css`
- Create: `site/src/scripts/main.js`

- [ ] **Step 1: Create project directory and package.json**

```bash
cd "/Volumes/LETS COOK/Projects/Game Manual"
mkdir -p site/public/images/{zones,events,community,gameplay,economy,social}
mkdir -p site/src/styles site/src/scripts
```

```json
// site/package.json
{
  "name": "kekspace-game-bible",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^6.0.0"
  }
}
```

- [ ] **Step 2: Create Vite config**

```js
// site/vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
```

- [ ] **Step 3: Create CSS reset**

```css
/* site/src/styles/reset.css */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

ul, ol {
  list-style: none;
}
```

- [ ] **Step 4: Create CSS variables**

These are placeholder values — will be updated when brand assets arrive.

```css
/* site/src/styles/variables.css */

:root {
  /* Colors — placeholder palette derived from game art */
  --color-bg-primary: #0a0a12;
  --color-bg-secondary: #12121f;
  --color-bg-surface: #1a1a2e;
  --color-bg-manual-page: #f5f0e6;

  --color-text-primary: #ffffff;
  --color-text-secondary: #b0b0c8;
  --color-text-on-surface: #1a1a2e;

  --color-accent-green: #4ade80;
  --color-accent-purple: #a855f7;
  --color-accent-cyan: #22d3ee;
  --color-accent-orange: #fb923c;
  --color-accent-pink: #f472b6;

  --color-cta-primary: #4ade80;
  --color-cta-primary-hover: #22c55e;
  --color-cta-secondary: #a855f7;
  --color-cta-secondary-hover: #9333ea;

  --color-tag-live: #4ade80;
  --color-tag-coming-soon: #fb923c;
  --color-tag-horizon: #a855f7;

  /* Typography — placeholder, replace with brand fonts */
  --font-heading: 'Press Start 2P', monospace;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing scale */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
  --space-2xl: 8rem;

  /* Layout */
  --max-width: 1200px;
  --section-padding: var(--space-2xl) var(--space-lg);

  /* Borders — retro manual motif */
  --pixel-border: 3px solid var(--color-accent-purple);
  --pixel-border-radius: 0;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

- [ ] **Step 5: Create global styles with retro manual utility classes**

```css
/* site/src/styles/global.css */
/* Fonts loaded via <link> in index.html for performance — do not @import here */

body {
  font-family: var(--font-body);
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
}

/* Container */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

/* Section base */
.section {
  padding: var(--section-padding);
  position: relative;
}

.section__title {
  font-family: var(--font-heading);
  font-size: clamp(1.25rem, 3vw, 2rem);
  margin-bottom: var(--space-lg);
}

.section__subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-xl);
  max-width: 600px;
}

/* Retro manual motif utilities */
.manual-page {
  background: var(--color-bg-manual-page);
  color: var(--color-text-on-surface);
  border-radius: 2px;
  padding: var(--space-lg);
  position: relative;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.15);
}

.pixel-border {
  border: var(--pixel-border);
  image-rendering: pixelated;
}

.tape-corner {
  position: relative;
}
.tape-corner::before,
.tape-corner::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 20px;
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(-15deg);
}
.tape-corner::before {
  top: -6px;
  left: 10px;
}
.tape-corner::after {
  bottom: -6px;
  right: 10px;
  transform: rotate(15deg);
}

/* Status tags */
.status-tag {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 0.6rem;
  padding: var(--space-xs) var(--space-sm);
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.status-tag--live {
  background: var(--color-tag-live);
  color: var(--color-bg-primary);
}
.status-tag--coming-soon {
  background: var(--color-tag-coming-soon);
  color: var(--color-bg-primary);
}
.status-tag--horizon {
  background: var(--color-tag-horizon);
  color: var(--color-bg-primary);
}

/* CTA buttons */
.cta {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 0.8rem;
  padding: var(--space-md) var(--space-xl);
  border: none;
  cursor: pointer;
  transition: background var(--transition-fast), transform var(--transition-fast);
  text-align: center;
}
.cta:hover {
  transform: translateY(-2px);
}
.cta--primary {
  background: var(--color-cta-primary);
  color: var(--color-bg-primary);
}
.cta--primary:hover {
  background: var(--color-cta-primary-hover);
}
.cta--secondary {
  background: var(--color-cta-secondary);
  color: var(--color-text-primary);
}
.cta--secondary:hover {
  background: var(--color-cta-secondary-hover);
}

/* Scroll animation base */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Image handling */
img {
  image-rendering: auto;
}
img.pixel-art {
  image-rendering: pixelated;
}
```

- [ ] **Step 6: Create main.js entry point**

```js
// site/src/scripts/main.js
import './nav.js';
import './animations.js';
```

- [ ] **Step 7: Create skeleton index.html**

```html
<!-- site/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kekspace — The Social World Where Meme Culture Meets Real Ownership</title>
  <meta name="description" content="Kekspace is a social virtual world powered by Pepecoin. Hang out, play games, collect items, and own everything on-chain." />

  <!-- Open Graph -->
  <meta property="og:title" content="Kekspace — Own the Meme" />
  <meta property="og:description" content="The social world where meme culture meets real ownership. Powered by Pepecoin." />
  <meta property="og:image" content="/og-image.png" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Kekspace — Own the Meme" />
  <meta name="twitter:description" content="The social world where meme culture meets real ownership. Powered by Pepecoin." />
  <meta name="twitter:image" content="/og-image.png" />

  <link rel="icon" href="/favicon.ico" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@400;500;600;700&display=swap" />

  <!-- Styles -->
  <link rel="stylesheet" href="/src/styles/reset.css" />
  <link rel="stylesheet" href="/src/styles/variables.css" />
  <link rel="stylesheet" href="/src/styles/global.css" />
  <link rel="stylesheet" href="/src/styles/nav.css" />
  <link rel="stylesheet" href="/src/styles/hero.css" />
  <link rel="stylesheet" href="/src/styles/vision.css" />
  <link rel="stylesheet" href="/src/styles/economy.css" />
  <link rel="stylesheet" href="/src/styles/world.css" />
  <link rel="stylesheet" href="/src/styles/gameplay.css" />
  <link rel="stylesheet" href="/src/styles/events.css" />
  <link rel="stylesheet" href="/src/styles/community.css" />
  <link rel="stylesheet" href="/src/styles/roadmap.css" />
  <link rel="stylesheet" href="/src/styles/closing.css" />
  <link rel="stylesheet" href="/src/styles/responsive.css" />
</head>
<body>
  <!-- Navigation -->
  <header class="nav" id="nav">
    <div class="nav__inner container">
      <a href="#" class="nav__logo">KEKSPACE</a>
      <nav class="nav__links" id="nav-links" aria-label="Main navigation">
        <a href="#vision" class="nav__link">Vision</a>
        <a href="#economy" class="nav__link">Economy</a>
        <a href="#world" class="nav__link">World</a>
        <a href="#gameplay" class="nav__link">Gameplay</a>
        <a href="#events" class="nav__link">Events</a>
        <a href="#community" class="nav__link">Community</a>
        <a href="#roadmap" class="nav__link">Roadmap</a>
      </nav>
      <button class="nav__hamburger" id="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="nav__progress" id="nav-progress"></div>
  </header>

  <main>
    <!-- Section 1: Hero -->
    <section class="hero section" id="hero"></section>

    <!-- Section 2: Vision -->
    <section class="vision section" id="vision"></section>

    <!-- Section 3: Economy -->
    <section class="economy section" id="economy"></section>

    <!-- Section 4: World -->
    <section class="world section" id="world"></section>

    <!-- Section 5: Gameplay -->
    <section class="gameplay section" id="gameplay"></section>

    <!-- Section 6: Events -->
    <section class="events section" id="events"></section>

    <!-- Section 7: Community -->
    <section class="community section" id="community"></section>

    <!-- Section 8: Roadmap -->
    <section class="roadmap section" id="roadmap"></section>

    <!-- Section 9: Closing -->
    <section class="closing section" id="closing"></section>
  </main>

  <script type="module" src="/src/scripts/main.js"></script>
</body>
</html>
```

- [ ] **Step 8: Install dependencies and verify dev server starts**

```bash
cd site && npm install
npm run dev
```

Expected: Vite dev server starts on localhost, blank page loads with dark background.

- [ ] **Step 9: Commit**

```bash
git add site/
git commit -m "feat: scaffold Kekspace game bible site with Vite, global styles, and HTML skeleton"
```

---

### Task 2: Navigation component

**Files:**
- Create: `site/src/styles/nav.css`
- Create: `site/src/scripts/nav.js`

- [ ] **Step 1: Write nav.css**

```css
/* site/src/styles/nav.css */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10, 10, 18, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(168, 85, 247, 0.2);
  transition: transform var(--transition-normal);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.nav__logo {
  font-family: var(--font-heading);
  font-size: 0.9rem;
  color: var(--color-accent-green);
  letter-spacing: 0.1em;
}

.nav__links {
  display: flex;
  gap: var(--space-lg);
}

.nav__link {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
  position: relative;
}
.nav__link:hover,
.nav__link.active {
  color: var(--color-text-primary);
}
.nav__link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-accent-green);
}

.nav__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-sm);
}
.nav__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text-primary);
  transition: transform var(--transition-fast), opacity var(--transition-fast);
}
.nav__hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.nav__hamburger.open span:nth-child(2) {
  opacity: 0;
}
.nav__hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.nav__progress {
  height: 2px;
  background: var(--color-accent-green);
  width: 0%;
  transition: width 100ms linear;
}

/* Mobile menu shown state */
.nav__links.open {
  display: flex;
}
```

- [ ] **Step 2: Write nav.js**

```js
// site/src/scripts/nav.js

// Hamburger toggle
const hamburger = document.getElementById('nav-hamburger');
const navLinks = document.getElementById('nav-links');

hamburger?.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu on link click
navLinks?.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Scroll progress bar
const progressBar = document.getElementById('nav-progress');

function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = `${progress}%`;
}

window.addEventListener('scroll', updateProgress, { passive: true });

// Active section highlighting
const sections = document.querySelectorAll('main .section[id]');

function updateActiveLink() {
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav__link[href="#${id}"]`);

    if (link) {
      if (scrollPos >= top && scrollPos < top + height) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
```

- [ ] **Step 3: Verify nav renders and scroll behavior works**

Run: `npm run dev`

Expected: Sticky nav visible at top with logo and section links. Hamburger hidden on desktop. Progress bar fills on scroll. Active link highlights as you scroll.

- [ ] **Step 4: Commit**

```bash
git add site/src/styles/nav.css site/src/scripts/nav.js
git commit -m "feat: add sticky navigation with scroll progress and mobile hamburger"
```

---

### Task 3: Scroll animations

**Files:**
- Create: `site/src/scripts/animations.js`

- [ ] **Step 1: Write animations.js**

```js
// site/src/scripts/animations.js

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
} else {
  // If reduced motion preferred, make everything visible immediately
  document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
}
```

- [ ] **Step 2: Verify fade-in works**

Add `class="fade-in"` to any test element in index.html. Scroll to it — should animate in.

- [ ] **Step 3: Commit**

```bash
git add site/src/scripts/animations.js
git commit -m "feat: add scroll-triggered fade-in animations with reduced motion support"
```

---

## Chunk 2: Above the Fold (Hero, Vision, Economy)

### Task 4: Hero section

**Files:**
- Create: `site/src/styles/hero.css`
- Modify: `site/index.html` (hero section content)

- [ ] **Step 1: Write hero HTML content**

Replace the empty hero section in `index.html`:

```html
<section class="hero section" id="hero">
  <div class="hero__overlay"></div>
  <!-- Animation layer: add sprite sheet GIFs here when assets are provided -->
  <div class="hero__animations" aria-hidden="true"></div>
  <div class="hero__content container">
    <h1 class="sr-only">Kekspace</h1>
    <img src="/images/logo-kekspace.png" alt="Kekspace" class="hero__logo pixel-art" width="400" height="120" />
    <p class="hero__tagline">The social world where meme culture meets real ownership</p>
    <div class="hero__ctas">
      <a href="#" class="cta cta--primary">Get Pepecoin</a>
      <a href="#" class="cta cta--secondary">Play Now</a>
    </div>
  </div>
  <div class="hero__pixel-border"></div>
</section>
```

- [ ] **Step 2: Write hero.css**

```css
/* site/src/styles/hero.css */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/images/hero-bg.png') center / cover no-repeat fixed;
  background-color: var(--color-bg-primary);
  overflow: hidden;
  padding-top: 60px; /* nav height */
}

@media (prefers-reduced-motion: reduce) {
  .hero {
    background-attachment: scroll;
  }
}

/* Animation layer for sprite sheets / GIFs — populated when assets provided */
.hero__animations {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 18, 0.4) 0%,
    rgba(10, 10, 18, 0.6) 50%,
    rgba(10, 10, 18, 0.95) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
}

.hero__logo {
  max-width: 400px;
  width: 80%;
  height: auto;
}

.hero__tagline {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: var(--color-text-secondary);
  max-width: 500px;
}

.hero__ctas {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
  justify-content: center;
}

.hero__pixel-border {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: repeating-linear-gradient(
    90deg,
    var(--color-accent-purple) 0px,
    var(--color-accent-purple) 6px,
    transparent 6px,
    transparent 12px
  );
}
```

- [ ] **Step 3: Copy a hero background image from existing assets**

```bash
# Use the City West or Spawn screenshot as hero background
cp "/Volumes/LETS COOK/Projects/Game Manual/content/8.png" site/public/images/hero-bg.png
```

The user will replace this with a higher-quality or cropped version later.

- [ ] **Step 4: Verify hero section renders**

Run: `npm run dev`

Expected: Full-viewport hero with background image, overlay gradient, centered logo placeholder, tagline, and two CTA buttons. Pixel border at the bottom.

- [ ] **Step 5: Commit**

```bash
git add site/src/styles/hero.css site/index.html site/public/images/hero-bg.png
git commit -m "feat: add hero section with background, tagline, and CTAs"
```

---

### Task 5: Vision section

**Files:**
- Create: `site/src/styles/vision.css`
- Modify: `site/index.html` (vision section content)

- [ ] **Step 1: Write vision HTML content**

```html
<section class="vision section" id="vision">
  <div class="container">
    <h2 class="section__title fade-in">What is Kekspace?</h2>
    <div class="vision__grid">
      <div class="vision__text manual-page fade-in">
        <h3>A world that feels like home</h3>
        <p>Kekspace is a social virtual world powered by Pepecoin where players hang out, play games, collect items, and own everything on-chain. Think of the social worlds you grew up in — rebuilt with real digital ownership.</p>
        <p>It's built for communities, creators, degens, and curious newcomers who want a space that's as fun as it is functional. Every item you earn, every room you build, every skin you wear — it's yours.</p>
      </div>
      <div class="vision__images fade-in">
        <img src="/images/gameplay/community-gathering.png" alt="Players gathering in Kekspace" class="vision__img tape-corner" loading="lazy" />
        <img src="/images/gameplay/character-custom.png" alt="Character customization in KekCreator" class="vision__img" loading="lazy" />
        <img src="/images/zones/arcade-interior.png" alt="The Arcade Saloon zone" class="vision__img" loading="lazy" />
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Write vision.css**

```css
/* site/src/styles/vision.css */
.vision {
  background: var(--color-bg-secondary);
}

.vision__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: start;
}

.vision__text {
  position: relative;
}
.vision__text h3 {
  font-family: var(--font-heading);
  font-size: 0.9rem;
  color: var(--color-accent-green);
  margin-bottom: var(--space-md);
}
.vision__text p {
  margin-bottom: var(--space-md);
  line-height: 1.8;
  color: var(--color-text-on-surface);
}
.vision__text p:last-child {
  margin-bottom: 0;
}

.vision__images {
  display: grid;
  gap: var(--space-md);
}

.vision__img {
  width: 100%;
  border: var(--pixel-border);
}
```

- [ ] **Step 3: Copy placeholder images from existing assets**

```bash
cp "/Volumes/LETS COOK/Projects/Game Manual/content/10.png" site/public/images/gameplay/community-gathering.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/1.png" site/public/images/gameplay/character-custom.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/ZonesArcadeSaloon.png" site/public/images/zones/arcade-interior.png
```

- [ ] **Step 4: Verify vision section renders**

Expected: Two-column layout — left side has the "manual page" styled text block with off-white background, right side has a stack of game screenshots with pixel borders.

- [ ] **Step 5: Commit**

```bash
git add site/src/styles/vision.css site/index.html site/public/images/
git commit -m "feat: add vision section with two-column manual-page layout"
```

---

### Task 6: Economy section

**Files:**
- Create: `site/src/styles/economy.css`
- Modify: `site/index.html` (economy section content)

- [ ] **Step 1: Write economy HTML content**

```html
<section class="economy section" id="economy">
  <div class="container">
    <h2 class="section__title fade-in">Own the Meme</h2>
    <p class="section__subtitle fade-in">The economy isn't a feature — it's the foundation.</p>

    <!-- 3a: Pepecoin -->
    <div class="economy__pepecoin fade-in">
      <div class="economy__pepecoin-text">
        <h3>Pepecoin</h3>
        <p>The first and longest-running Pepe-themed cryptocurrency. Community-mined since 2016 with no presale and no funny business. Pepecoin is the fuel that powers everything in Kekspace — from in-game purchases to NFT minting.</p>
      </div>
      <div class="economy__pepecoin-visual">
        <img src="/images/economy/pepecoin-logo.png" alt="Pepecoin" class="pixel-art" loading="lazy" />
        <span class="economy__fuel-label">Fuel of the world</span>
      </div>
    </div>

    <!-- 3b: Play-to-Value Loop -->
    <div class="economy__loop fade-in">
      <h3>The Play-to-Value Loop</h3>
      <div class="economy__loop-diagram">
        <div class="economy__loop-step">
          <img src="/images/economy/icon-explore.png" alt="" class="economy__loop-icon pixel-art" width="48" height="48" />
          <span class="economy__loop-label">Explore</span>
        </div>
        <span class="economy__loop-arrow pixel-art">&rarr;</span>
        <div class="economy__loop-step">
          <img src="/images/economy/icon-gather.png" alt="" class="economy__loop-icon pixel-art" width="48" height="48" />
          <span class="economy__loop-label">Gather</span>
        </div>
        <span class="economy__loop-arrow pixel-art">&rarr;</span>
        <div class="economy__loop-step">
          <img src="/images/economy/icon-craft.png" alt="" class="economy__loop-icon pixel-art" width="48" height="48" />
          <span class="economy__loop-label">Craft</span>
        </div>
        <span class="economy__loop-arrow pixel-art">&rarr;</span>
        <div class="economy__loop-step">
          <img src="/images/economy/icon-equip.png" alt="" class="economy__loop-icon pixel-art" width="48" height="48" />
          <span class="economy__loop-label">Equip or Sell</span>
        </div>
        <span class="economy__loop-arrow pixel-art">&rarr;</span>
        <div class="economy__loop-step">
          <img src="/images/economy/icon-mint.png" alt="" class="economy__loop-icon pixel-art" width="48" height="48" />
          <span class="economy__loop-label">Mint</span>
        </div>
      </div>
      <p class="economy__loop-copy">Every action feeds a living economy. Resources become items. Items become NFTs. Progress becomes property.</p>
    </div>

    <!-- 3c: NFTs & Digital Ownership -->
    <div class="economy__nfts fade-in">
      <h3>Digital Ownership, Not Just Collectibles</h3>
      <p>Skins, furniture, equipment — everything you earn or create in Kekspace is ownable on-chain. Craft it, upgrade it, enchant it, trade it. Your progress has real value.</p>
      <div class="economy__nft-gallery">
        <img src="/images/economy/nft-gear.png" alt="In-game NFT equipment" class="pixel-border" loading="lazy" />
        <img src="/images/economy/nft-room.png" alt="Player-decorated room" class="pixel-border" loading="lazy" />
        <img src="/images/economy/nft-character.png" alt="Fully customized character" class="pixel-border" loading="lazy" />
      </div>
    </div>

    <!-- CTA -->
    <div class="economy__cta fade-in">
      <a href="#" class="cta cta--primary">Get Pepecoin</a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Write economy.css**

```css
/* site/src/styles/economy.css */
.economy {
  background: var(--color-bg-primary);
}

/* 3a: Pepecoin */
.economy__pepecoin {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-xl);
  align-items: center;
  margin-bottom: var(--space-2xl);
}
.economy__pepecoin-text h3 {
  font-family: var(--font-heading);
  font-size: 1rem;
  color: var(--color-accent-green);
  margin-bottom: var(--space-md);
}
.economy__pepecoin-text p {
  color: var(--color-text-secondary);
  line-height: 1.8;
}
.economy__pepecoin-visual {
  text-align: center;
}
.economy__pepecoin-visual img {
  max-width: 150px;
  margin: 0 auto var(--space-sm);
}
.economy__fuel-label {
  font-family: var(--font-heading);
  font-size: 0.65rem;
  color: var(--color-accent-orange);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* 3b: Play-to-Value Loop */
.economy__loop {
  background: var(--color-bg-surface);
  border: var(--pixel-border);
  padding: var(--space-xl);
  margin-bottom: var(--space-2xl);
  text-align: center;
}
.economy__loop h3 {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  color: var(--color-accent-cyan);
  margin-bottom: var(--space-lg);
}
.economy__loop-diagram {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  flex-wrap: wrap;
  margin-bottom: var(--space-lg);
}
.economy__loop-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
}
.economy__loop-icon {
  width: 48px;
  height: 48px;
}
.economy__loop-label {
  font-family: var(--font-heading);
  font-size: 0.6rem;
  color: var(--color-text-primary);
}
.economy__loop-arrow {
  font-size: 1.5rem;
  color: var(--color-accent-green);
}
.economy__loop-copy {
  color: var(--color-text-secondary);
  font-style: italic;
  max-width: 600px;
  margin: 0 auto;
}

/* 3c: NFTs */
.economy__nfts {
  margin-bottom: var(--space-2xl);
}
.economy__nfts h3 {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  color: var(--color-accent-purple);
  margin-bottom: var(--space-md);
}
.economy__nfts > p {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-lg);
  max-width: 600px;
  line-height: 1.8;
}
.economy__nft-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}
.economy__nft-gallery img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
}

/* CTA */
.economy__cta {
  text-align: center;
  padding-top: var(--space-lg);
}
```

- [ ] **Step 3: Copy placeholder images**

```bash
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/Equipment.png" site/public/images/economy/nft-gear.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/FurnitureSystem2.png" site/public/images/economy/nft-room.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/Cosmetic.png" site/public/images/economy/nft-character.png
```

- [ ] **Step 4: Verify economy section renders**

Expected: Three sub-sections stacked — Pepecoin intro with logo, play-to-value loop as a horizontal flowchart with pixel border, NFT gallery as a 3-column grid, and a centered "Get Pepecoin" CTA.

- [ ] **Step 5: Commit**

```bash
git add site/src/styles/economy.css site/index.html site/public/images/economy/
git commit -m "feat: add economy section with Pepecoin, play-to-value loop, and NFT gallery"
```

---

## Chunk 3: Core Content (World, Gameplay)

### Task 7: World section

**Files:**
- Create: `site/src/styles/world.css`
- Modify: `site/index.html` (world section content)

- [ ] **Step 1: Write world HTML content**

```html
<section class="world section" id="world">
  <div class="container">
    <h2 class="section__title fade-in">Step Into the Grid</h2>
    <p class="section__subtitle fade-in">A sprawling pixel world of shops, nightclubs, secret alleys, and places the community is still discovering.</p>

    <!-- 4a: World Overview -->
    <div class="world__overview fade-in tape-corner">
      <img src="/images/hero-bg.png" alt="Kekspace city overview" class="world__map" loading="lazy" />
    </div>

    <!-- 4b: Zone Highlights -->
    <div class="world__zones">
      <div class="world__zone fade-in">
        <img src="/images/zones/spawn.png" alt="Spawn zone" loading="lazy" />
        <h4>Spawn</h4>
        <p>Where everyone arrives</p>
      </div>
      <div class="world__zone fade-in">
        <img src="/images/zones/arcade-saloon.png" alt="Arcade Saloon" loading="lazy" />
        <h4>Arcade Saloon</h4>
        <p>Games and tickets</p>
      </div>
      <div class="world__zone fade-in">
        <img src="/images/zones/amplexus.png" alt="Amplexus nightclub" loading="lazy" />
        <h4>Amplexus</h4>
        <p>The nightclub that never closes</p>
      </div>
      <div class="world__zone fade-in">
        <img src="/images/zones/kekmart.png" alt="Kekmart" loading="lazy" />
        <h4>Kekmart</h4>
        <p>Shopping</p>
      </div>
      <div class="world__zone fade-in">
        <img src="/images/zones/adventure-guild.png" alt="Adventure Guild" loading="lazy" />
        <h4>Adventure Guild</h4>
        <p>Quests and lore</p>
      </div>
      <div class="world__zone fade-in">
        <img src="/images/zones/cemetery.png" alt="Cemetery and Kekmaze" loading="lazy" />
        <h4>Cemetery / Kekmaze</h4>
        <p>The dark and mysterious side</p>
      </div>
      <div class="world__zone fade-in">
        <img src="/images/zones/gm-coffee.png" alt="GM Coffee" loading="lazy" />
        <h4>GM Coffee</h4>
        <p>The social hangout</p>
      </div>
      <div class="world__zone fade-in">
        <img src="/images/zones/touch-grass-park.png" alt="Touch Grass Park" loading="lazy" />
        <h4>Touch Grass Park</h4>
        <p>The chill zone</p>
      </div>
    </div>

    <!-- 4c: Kekpads -->
    <div class="world__kekpads fade-in">
      <div class="world__kekpads-text">
        <h3>Kekpads <span class="status-tag status-tag--live">Live</span></h3>
        <p>Own and customize your own private room. Decorate it, invite friends, make it yours.</p>
      </div>
      <img src="/images/economy/nft-room.png" alt="A decorated Kekpad room" class="world__kekpads-img pixel-border" loading="lazy" />
    </div>
  </div>
</section>
```

- [ ] **Step 2: Write world.css**

```css
/* site/src/styles/world.css */
.world {
  background: var(--color-bg-secondary);
}

.world__overview {
  margin-bottom: var(--space-2xl);
  border: var(--pixel-border);
  overflow: hidden;
}
.world__map {
  width: 100%;
}

/* Zone grid — RPG map legend style */
.world__zones {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
}
.world__zone {
  background: var(--color-bg-surface);
  border: 1px solid rgba(168, 85, 247, 0.2);
  overflow: hidden;
  transition: border-color var(--transition-fast);
}
.world__zone:hover {
  border-color: var(--color-accent-purple);
}
.world__zone img {
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
}
.world__zone h4 {
  font-family: var(--font-heading);
  font-size: 0.65rem;
  padding: var(--space-sm) var(--space-md) 0;
  color: var(--color-accent-green);
}
.world__zone p {
  font-size: 0.85rem;
  padding: var(--space-xs) var(--space-md) var(--space-md);
  color: var(--color-text-secondary);
}

/* Kekpads */
.world__kekpads {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
}
.world__kekpads-text h3 {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-md);
  display: flex;
  align-items: center;
  gap: var(--space-md);
}
.world__kekpads-text p {
  color: var(--color-text-secondary);
  line-height: 1.8;
}
.world__kekpads-img {
  width: 100%;
}
```

- [ ] **Step 3: Copy zone screenshots from existing assets**

```bash
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/ZonesSpawn.png" site/public/images/zones/spawn.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/ZonesArcadeSaloon.png" site/public/images/zones/arcade-saloon.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/ZonesAmplexus.png" site/public/images/zones/amplexus.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/ZonesKekmart.png" site/public/images/zones/kekmart.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/ZonesAdventureGuild.png" site/public/images/zones/adventure-guild.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/ZonesCementery.png" site/public/images/zones/cemetery.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/ZonesGMCoffee.png" site/public/images/zones/gm-coffee.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/ZonesTouchGrassPark.png" site/public/images/zones/touch-grass-park.png
```

- [ ] **Step 4: Verify world section renders**

Expected: City overview map with tape-corner effect, 4-column zone grid with hover effects, Kekpads teaser with image and "Live" tag.

- [ ] **Step 5: Commit**

```bash
git add site/src/styles/world.css site/index.html site/public/images/zones/
git commit -m "feat: add world section with city overview, zone grid, and kekpads teaser"
```

---

### Task 8: Gameplay section

**Files:**
- Create: `site/src/styles/gameplay.css`
- Modify: `site/index.html` (gameplay section content)

- [ ] **Step 1: Write gameplay HTML content**

```html
<section class="gameplay section" id="gameplay">
  <div class="container">
    <h2 class="section__title fade-in">More Than Just Hanging Out</h2>

    <!-- 5a: KekCreator -->
    <div class="gameplay__kekcreator fade-in">
      <div class="gameplay__kekcreator-text">
        <h3>KekCreator</h3>
        <p>Thousands of combinations. Every slot is a layer. Every layer is a statement. Head, hair, shirt, pants, shoes, pet, backpack, glasses, gloves — all modular, all yours. Skins can be NFTs you actually own.</p>
      </div>
      <img src="/images/gameplay/anatomy.png" alt="KekCreator character anatomy showing customization slots" class="gameplay__anatomy pixel-art" loading="lazy" />
    </div>

    <!-- 5b: Minigames -->
    <div class="gameplay__minigames">
      <h3 class="fade-in">Minigames</h3>
      <div class="gameplay__minigame-row">
        <div class="gameplay__minigame fade-in">
          <img src="/images/gameplay/survivor.png" alt="Survivor minigame" loading="lazy" />
          <h4>Survivor</h4>
          <p>Wave-based top-down shooter</p>
          <span class="status-tag status-tag--live">Live</span>
        </div>
        <div class="gameplay__minigame fade-in">
          <img src="/images/gameplay/bowling.png" alt="Frog Bowling" loading="lazy" />
          <h4>Frog Bowling</h4>
          <p>Classic lanes</p>
          <span class="status-tag status-tag--live">Live</span>
        </div>
        <div class="gameplay__minigame fade-in">
          <img src="/images/gameplay/whack.png" alt="Whack-A-Meme" loading="lazy" />
          <h4>Whack-A-Meme</h4>
          <p>Tap and smash</p>
          <span class="status-tag status-tag--live">Live</span>
        </div>
        <div class="gameplay__minigame fade-in">
          <img src="/images/gameplay/pokek.png" alt="Pokek poker" loading="lazy" />
          <h4>Pokek</h4>
          <p>On-chain poker</p>
          <span class="status-tag status-tag--coming-soon">Coming Soon</span>
        </div>
        <div class="gameplay__minigame fade-in">
          <img src="/images/gameplay/fishing.png" alt="Fishing" loading="lazy" />
          <h4>Fishing</h4>
          <p>Cast, catch, collect</p>
          <span class="status-tag status-tag--coming-soon">Coming Soon</span>
        </div>
      </div>
      <p class="gameplay__minigame-hook fade-in">Every game earns tickets. Tickets earn rewards. Rewards have real value.</p>
    </div>

    <!-- 5c: Quests & Progression -->
    <div class="gameplay__quests fade-in">
      <h3>Quests & Progression</h3>
      <p>NPCs throughout the world offer missions. Complete quests, rank up, earn badges. The Adventurer's Book tracks your journey. The more you play, the more you earn, the higher you climb.</p>
    </div>

    <!-- 5d: Interface (HUD) -->
    <div class="gameplay__hud fade-in">
      <h3>Polished & Functional</h3>
      <img src="/images/gameplay/hud.png" alt="Kekspace game interface showing HUD elements" class="pixel-border" loading="lazy" />
      <p class="gameplay__hud-caption">Player info, chat, navigation, action bar, settings — everything a player needs, nothing they don't.</p>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Write gameplay.css**

```css
/* site/src/styles/gameplay.css */
.gameplay {
  background: var(--color-bg-primary);
}

/* KekCreator */
.gameplay__kekcreator {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
  margin-bottom: var(--space-2xl);
}
.gameplay__kekcreator-text h3 {
  font-family: var(--font-heading);
  font-size: 1rem;
  color: var(--color-accent-cyan);
  margin-bottom: var(--space-md);
}
.gameplay__kekcreator-text p {
  color: var(--color-text-secondary);
  line-height: 1.8;
}
.gameplay__anatomy {
  max-width: 100%;
}

/* Minigames — arcade cabinet marquee style */
.gameplay__minigames {
  margin-bottom: var(--space-2xl);
}
.gameplay__minigames > h3 {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  color: var(--color-accent-orange);
  margin-bottom: var(--space-lg);
}
.gameplay__minigame-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}
.gameplay__minigame {
  background: var(--color-bg-surface);
  border: 2px solid rgba(168, 85, 247, 0.3);
  text-align: center;
  padding-bottom: var(--space-md);
  transition: border-color var(--transition-fast), transform var(--transition-fast);
}
.gameplay__minigame:hover {
  border-color: var(--color-accent-orange);
  transform: translateY(-4px);
}
.gameplay__minigame img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}
.gameplay__minigame h4 {
  font-family: var(--font-heading);
  font-size: 0.55rem;
  color: var(--color-text-primary);
  padding: var(--space-sm) var(--space-sm) 0;
}
.gameplay__minigame p {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  padding: var(--space-xs) var(--space-sm);
}
.gameplay__minigame-hook {
  text-align: center;
  color: var(--color-accent-green);
  font-family: var(--font-heading);
  font-size: 0.7rem;
}

/* Quests */
.gameplay__quests {
  background: var(--color-bg-surface);
  padding: var(--space-xl);
  border-left: 4px solid var(--color-accent-purple);
  margin-bottom: var(--space-2xl);
}
.gameplay__quests h3 {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  color: var(--color-accent-purple);
  margin-bottom: var(--space-md);
}
.gameplay__quests p {
  color: var(--color-text-secondary);
  line-height: 1.8;
}

/* HUD */
.gameplay__hud {
  text-align: center;
}
.gameplay__hud h3 {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-lg);
}
.gameplay__hud img {
  width: 100%;
  margin-bottom: var(--space-md);
}
.gameplay__hud-caption {
  color: var(--color-text-secondary);
  font-size: 0.85rem;
}
```

- [ ] **Step 3: Copy gameplay screenshots from existing assets**

```bash
cp "/Volumes/LETS COOK/Projects/Game Manual/content/5.png" site/public/images/gameplay/anatomy.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/7.png" site/public/images/gameplay/minigames-overview.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/18.png" site/public/images/gameplay/hud.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/Fishing.png" site/public/images/gameplay/fishing.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/Pokek.png" site/public/images/gameplay/pokek.png
```

Copy the minigames overview as placeholder for each missing individual screenshot:

```bash
cp site/public/images/gameplay/minigames-overview.png site/public/images/gameplay/survivor.png
cp site/public/images/gameplay/minigames-overview.png site/public/images/gameplay/bowling.png
cp site/public/images/gameplay/minigames-overview.png site/public/images/gameplay/whack.png
```

These placeholders will be replaced with individually cropped screenshots later.

- [ ] **Step 4: Verify gameplay section renders**

Expected: KekCreator with anatomy diagram, 5-column minigame card row with arcade marquee style, quests block with purple left border, HUD screenshot.

- [ ] **Step 5: Commit**

```bash
git add site/src/styles/gameplay.css site/index.html site/public/images/gameplay/
git commit -m "feat: add gameplay section with KekCreator, minigames, quests, and HUD"
```

---

## Chunk 4: Social Proof & Close (Events, Community, Roadmap, Closing)

### Task 9: Events section

**Files:**
- Create: `site/src/styles/events.css`
- Modify: `site/index.html` (events section content)

- [ ] **Step 1: Write events HTML content**

```html
<section class="events section" id="events">
  <div class="container">
    <h2 class="section__title fade-in">Proof It Works</h2>

    <!-- 6a: Krakening -->
    <div class="events__krakening fade-in">
      <img src="/images/events/krakening-crowd.png" alt="Hundreds of players at the Krakening event" class="events__hero-img pixel-border" loading="lazy" />
      <div class="events__krakening-text">
        <h3>The Krakening <span class="status-tag status-tag--live">Partnership</span></h3>
        <p>Kraken's identity embedded natively into the game world. Hundreds of players gathered in real-time. Exclusive collectibles that players still trade. Ticket rain rewarded players just for being there.</p>
        <p class="events__quote">Not a banner ad. A living brand experience inside a living world.</p>
      </div>
      <div class="events__exclusives">
        <img src="/images/events/krakening-items.png" alt="Exclusive Krakening collectibles" class="pixel-border" loading="lazy" />
        <span class="events__limited-stamp">Limited Edition</span>
      </div>
    </div>

    <!-- 6b: Seasonal Events -->
    <div class="events__seasonal">
      <h3 class="fade-in">Seasonal Events</h3>
      <p class="fade-in">The world transforms with the seasons. New quests, exclusive loot, and reasons to come back.</p>
      <div class="events__seasonal-grid">
        <div class="events__event-card fade-in">
          <img src="/images/events/halloween.png" alt="Halloween event" loading="lazy" />
          <h4>Halloween</h4>
          <p>Maze, costumes, cursed candies, themed quests</p>
        </div>
        <div class="events__event-card fade-in">
          <img src="/images/events/christmas.png" alt="Christmas 2025 event" loading="lazy" />
          <h4>Christmas 2025</h4>
          <p>Advent calendar, daily gifts, world transformation</p>
        </div>
      </div>
    </div>

    <!-- 6c: Partner Pitch -->
    <div class="events__pitch manual-page fade-in">
      <p>Kekspace turns brand partnerships into interactive experiences players actually want. If your brand has a community, we can put them in the world.</p>
      <a href="#closing" class="events__partner-link">Partner with us &rarr;</a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Write events.css**

```css
/* site/src/styles/events.css */
.events {
  background: var(--color-bg-secondary);
}

/* Krakening */
.events__krakening {
  margin-bottom: var(--space-2xl);
}
.events__hero-img {
  width: 100%;
  margin-bottom: var(--space-lg);
}
.events__krakening-text {
  margin-bottom: var(--space-lg);
}
.events__krakening-text h3 {
  font-family: var(--font-heading);
  font-size: 0.9rem;
  color: var(--color-accent-purple);
  margin-bottom: var(--space-md);
  display: flex;
  align-items: center;
  gap: var(--space-md);
}
.events__krakening-text p {
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-sm);
}
.events__krakening-text p.events__quote {
  font-family: var(--font-heading);
  font-size: 0.7rem;
  color: var(--color-accent-cyan);
  padding-top: var(--space-sm);
}
.events__exclusives {
  position: relative;
  display: inline-block;
}
.events__exclusives img {
  max-width: 100%;
}
.events__limited-stamp {
  position: absolute;
  top: var(--space-sm);
  right: var(--space-sm);
  background: var(--color-accent-orange);
  color: var(--color-bg-primary);
  font-family: var(--font-heading);
  font-size: 0.5rem;
  padding: var(--space-xs) var(--space-sm);
  transform: rotate(3deg);
}

/* Seasonal — trading card style */
.events__seasonal {
  margin-bottom: var(--space-2xl);
}
.events__seasonal > h3 {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  color: var(--color-accent-orange);
  margin-bottom: var(--space-sm);
}
.events__seasonal > p {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-lg);
}
.events__seasonal-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
}
.events__event-card {
  border: 3px solid var(--color-accent-purple);
  background: var(--color-bg-surface);
  overflow: hidden;
  transition: transform var(--transition-fast);
}
.events__event-card:hover {
  transform: translateY(-4px);
}
.events__event-card img {
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
}
.events__event-card h4 {
  font-family: var(--font-heading);
  font-size: 0.65rem;
  padding: var(--space-sm) var(--space-md) 0;
  color: var(--color-text-primary);
}
.events__event-card p {
  font-size: 0.8rem;
  padding: var(--space-xs) var(--space-md) var(--space-md);
  color: var(--color-text-secondary);
}

/* Partner pitch */
.events__pitch {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}
.events__pitch p {
  margin-bottom: var(--space-md);
  line-height: 1.8;
}
.events__partner-link {
  font-family: var(--font-heading);
  font-size: 0.7rem;
  color: var(--color-accent-green);
  transition: color var(--transition-fast);
}
.events__partner-link:hover {
  color: var(--color-cta-primary-hover);
}
```

- [ ] **Step 3: Copy event screenshots**

```bash
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/EventKrakening.png" site/public/images/events/krakening-crowd.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/Exclusive.png" site/public/images/events/krakening-items.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/EventHalloween.png" site/public/images/events/halloween.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/EventXmas2025.png" site/public/images/events/christmas.png
```

- [ ] **Step 4: Verify and commit**

```bash
git add site/src/styles/events.css site/index.html site/public/images/events/
git commit -m "feat: add events section with Krakening, seasonal events, and partner pitch"
```

---

### Task 10: Community section

**Files:**
- Create: `site/src/styles/community.css`
- Modify: `site/index.html` (community section content)

- [ ] **Step 1: Write community HTML content**

```html
<section class="community section" id="community">
  <div class="container">
    <h2 class="section__title fade-in">Built by the People in It</h2>
    <p class="section__subtitle fade-in">A community that shows up, stays loud, and keeps building.</p>

    <!-- 7a: Community Scenes -->
    <div class="community__gallery">
      <img src="/images/community/scene-1.png" alt="Community gathering in Kekspace" class="community__photo fade-in tape-corner" loading="lazy" />
      <img src="/images/community/scene-2.png" alt="Players at a community event" class="community__photo fade-in" loading="lazy" />
      <img src="/images/community/scene-3.png" alt="Crowd in the city square" class="community__photo fade-in tape-corner" loading="lazy" />
      <img src="/images/community/scene-4.png" alt="Community meet-up" class="community__photo fade-in" loading="lazy" />
    </div>

    <!-- 7b: Social Posts (styled screenshots) -->
    <div class="community__social-posts">
      <img src="/images/social/post-1.png" alt="Community post about Kekspace" class="community__social-post fade-in" loading="lazy" />
      <img src="/images/social/post-2.png" alt="Community post about Kekspace event" class="community__social-post fade-in" loading="lazy" />
      <img src="/images/social/post-3.png" alt="Community discussion about Kekspace" class="community__social-post fade-in" loading="lazy" />
    </div>

    <!-- 7b: Stats -->
    <div class="community__stats fade-in">
      <div class="community__stat">
        <span class="community__stat-number">--</span>
        <span class="community__stat-label">Players</span>
      </div>
      <div class="community__stat">
        <span class="community__stat-number">--</span>
        <span class="community__stat-label">Community Members</span>
      </div>
      <div class="community__stat">
        <span class="community__stat-number">--</span>
        <span class="community__stat-label">Social Followers</span>
      </div>
    </div>

    <!-- 7c: Billboard Network -->
    <div class="community__billboards fade-in">
      <div class="community__billboards-text">
        <h3>Billboard Network <span class="status-tag status-tag--live">Live</span></h3>
        <p>An in-game advertising network where brands and creators promote to an engaged audience. Billboards are placed across high-traffic zones — interactive, not static.</p>
      </div>
      <img src="/images/community/billboard.png" alt="In-game billboard network" class="pixel-border" loading="lazy" />
    </div>
  </div>
</section>
```

Note: Stats show "--" as placeholder. User to provide real numbers.

- [ ] **Step 2: Write community.css**

```css
/* site/src/styles/community.css */
.community {
  background: var(--color-bg-primary);
}

/* Social media post screenshots */
.community__social-posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
}
.community__social-post {
  width: 100%;
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 8px;
  transition: transform var(--transition-fast);
}
.community__social-post:hover {
  transform: translateY(-4px);
}

/* Scrapbook gallery */
.community__gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
}
.community__photo {
  width: 100%;
  border: var(--pixel-border);
  transition: transform var(--transition-fast);
}
.community__photo:nth-child(odd) {
  transform: rotate(-1deg);
}
.community__photo:nth-child(even) {
  transform: rotate(1deg);
}
.community__photo:hover {
  transform: rotate(0deg) scale(1.02);
}

/* Stats */
.community__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
  text-align: center;
}
.community__stat-number {
  display: block;
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: var(--color-accent-green);
}
.community__stat-label {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
}

/* Billboard Network */
.community__billboards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
}
.community__billboards-text h3 {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-md);
  display: flex;
  align-items: center;
  gap: var(--space-md);
}
.community__billboards-text p {
  color: var(--color-text-secondary);
  line-height: 1.8;
}
.community__billboards img {
  width: 100%;
}
```

- [ ] **Step 3: Copy community screenshots**

```bash
cp "/Volumes/LETS COOK/Projects/Game Manual/content/10.png" site/public/images/community/scene-1.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/TheCommunity.png" site/public/images/community/scene-2.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/SocialAndCommunity.png" site/public/images/community/scene-3.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/SocialAndCommunity2.png" site/public/images/community/scene-4.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/BillboardNetwork.png" site/public/images/community/billboard.png

# Social media post screenshots — use existing social content as placeholders
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/SocialAndCommunity.png" site/public/images/social/post-1.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/SocialAndCommunity2.png" site/public/images/social/post-2.png
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/TheCommunity.png" site/public/images/social/post-3.png
```

- [ ] **Step 4: Verify and commit**

```bash
git add site/src/styles/community.css site/index.html site/public/images/community/
git commit -m "feat: add community section with scrapbook gallery, stats, and billboard network"
```

---

### Task 11: Roadmap section

**Files:**
- Create: `site/src/styles/roadmap.css`
- Modify: `site/index.html` (roadmap section content)

- [ ] **Step 1: Write roadmap HTML content**

```html
<section class="roadmap section" id="roadmap">
  <div class="container">
    <h2 class="section__title fade-in">What's Next</h2>

    <div class="roadmap__timeline">
      <!-- Delivered -->
      <div class="roadmap__tier fade-in">
        <h3 class="roadmap__tier-label roadmap__tier-label--delivered">Delivered</h3>
        <ul class="roadmap__items">
          <li class="roadmap__item roadmap__item--delivered">Core world and zones</li>
          <li class="roadmap__item roadmap__item--delivered">KekCreator character system</li>
          <li class="roadmap__item roadmap__item--delivered">Arcade minigames</li>
          <li class="roadmap__item roadmap__item--delivered">NFT inventory and wallet integration</li>
          <li class="roadmap__item roadmap__item--delivered">Kraken brand partnership</li>
          <li class="roadmap__item roadmap__item--delivered">Seasonal events (Halloween, Christmas)</li>
          <li class="roadmap__item roadmap__item--delivered">Quest system and NPCs</li>
        </ul>
      </div>

      <!-- In Progress -->
      <div class="roadmap__tier fade-in">
        <h3 class="roadmap__tier-label roadmap__tier-label--progress">In Progress</h3>
        <ul class="roadmap__items">
          <li class="roadmap__item roadmap__item--progress">Fishing minigame</li>
          <li class="roadmap__item roadmap__item--progress">Pokek — on-chain poker</li>
          <li class="roadmap__item roadmap__item--progress">Equipment crafting and refining</li>
          <li class="roadmap__item roadmap__item--progress">Creator API for community-made minigames</li>
        </ul>
      </div>

      <!-- On the Horizon -->
      <div class="roadmap__tier fade-in">
        <h3 class="roadmap__tier-label roadmap__tier-label--horizon">On the Horizon</h3>
        <ul class="roadmap__items">
          <li class="roadmap__item roadmap__item--horizon">Kekpads expansion — player-owned spaces</li>
          <li class="roadmap__item roadmap__item--horizon">More brand partnerships</li>
          <li class="roadmap__item roadmap__item--horizon">Epic Games Store launch</li>
          <li class="roadmap__item roadmap__item--horizon">INK — on-chain art creation tool</li>
        </ul>
      </div>
    </div>

    <p class="roadmap__confidence fade-in">Every feature listed above is either live or in active development. No vapor. No empty roadmaps.</p>
  </div>
</section>
```

- [ ] **Step 2: Write roadmap.css**

```css
/* site/src/styles/roadmap.css */
.roadmap {
  background: var(--color-bg-secondary);
}

.roadmap__timeline {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);
  position: relative;
  padding-left: var(--space-xl);
}

/* Vertical trail line */
.roadmap__timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--color-accent-green) 0%,
    var(--color-accent-orange) 50%,
    var(--color-accent-purple) 100%
  );
}

.roadmap__tier {
  position: relative;
}

.roadmap__tier-label {
  font-family: var(--font-heading);
  font-size: 0.8rem;
  margin-bottom: var(--space-md);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}
.roadmap__tier-label::before {
  content: '';
  position: absolute;
  left: calc(-1 * var(--space-xl) + 2px);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid;
}
.roadmap__tier-label--delivered {
  color: var(--color-accent-green);
}
.roadmap__tier-label--delivered::before {
  background: var(--color-accent-green);
  border-color: var(--color-accent-green);
}
.roadmap__tier-label--progress {
  color: var(--color-accent-orange);
}
.roadmap__tier-label--progress::before {
  background: transparent;
  border-color: var(--color-accent-orange);
}
.roadmap__tier-label--horizon {
  color: var(--color-accent-purple);
}
.roadmap__tier-label--horizon::before {
  background: transparent;
  border-color: var(--color-accent-purple);
  opacity: 0.5;
}

.roadmap__items {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.roadmap__item {
  color: var(--color-text-secondary);
  padding-left: var(--space-md);
  position: relative;
  font-size: 0.9rem;
}
.roadmap__item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 6px;
  height: 6px;
}
.roadmap__item--delivered::before {
  content: '\2713';
  color: var(--color-accent-green);
  font-size: 0.8rem;
  top: 0;
}
.roadmap__item--progress::before {
  background: var(--color-accent-orange);
  border-radius: 50%;
}
.roadmap__item--horizon::before {
  background: var(--color-accent-purple);
  border-radius: 50%;
  opacity: 0.5;
}

.roadmap__confidence {
  text-align: center;
  font-family: var(--font-heading);
  font-size: 0.65rem;
  color: var(--color-accent-green);
  max-width: 500px;
  margin: 0 auto;
}
```

- [ ] **Step 3: Verify and commit**

```bash
git add site/src/styles/roadmap.css site/index.html
git commit -m "feat: add roadmap section with three-tier timeline"
```

---

### Task 12: Closing section

**Files:**
- Create: `site/src/styles/closing.css`
- Modify: `site/index.html` (closing section content)

- [ ] **Step 1: Write closing HTML content**

```html
<section class="closing section" id="closing">
  <div class="container">
    <h2 class="closing__headline fade-in">The world is live. The economy is real. The community is growing.</h2>
    <div class="closing__ctas fade-in">
      <a href="#" class="cta cta--primary cta--large">Get Pepecoin</a>
      <a href="#" class="cta cta--secondary cta--large">Play Kekspace</a>
    </div>
    <div class="closing__socials fade-in">
      <a href="#" class="closing__social-link" aria-label="Discord">Discord</a>
      <a href="#" class="closing__social-link" aria-label="Telegram">Telegram</a>
      <a href="#" class="closing__social-link" aria-label="Twitter">Twitter / X</a>
    </div>
    <p class="closing__partner fade-in"><a href="#">Partner with us</a></p>
    <div class="closing__footer">
      <img src="/images/logo-kekspace.png" alt="Kekspace" class="closing__logo pixel-art" width="200" loading="lazy" />
    </div>
  </div>
</section>
```

- [ ] **Step 2: Write closing.css**

```css
/* site/src/styles/closing.css */
.closing {
  background: var(--color-bg-primary);
  text-align: center;
  padding: var(--space-2xl) var(--space-lg);
}

.closing__headline {
  font-family: var(--font-heading);
  font-size: clamp(0.9rem, 2.5vw, 1.4rem);
  color: var(--color-text-primary);
  max-width: 600px;
  margin: 0 auto var(--space-xl);
  line-height: 2;
}

.closing__ctas {
  display: flex;
  justify-content: center;
  gap: var(--space-lg);
  flex-wrap: wrap;
  margin-bottom: var(--space-xl);
}
.cta--large {
  padding: var(--space-lg) var(--space-2xl);
  font-size: 0.9rem;
}

.closing__socials {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
  margin-bottom: var(--space-lg);
}
.closing__social-link {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
}
.closing__social-link:hover {
  color: var(--color-accent-green);
}

.closing__partner {
  margin-bottom: var(--space-2xl);
}
.closing__partner a {
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
}
.closing__partner a:hover {
  color: var(--color-accent-purple);
}

.closing__footer {
  padding-top: var(--space-xl);
  border-top: 1px solid rgba(168, 85, 247, 0.2);
}
.closing__logo {
  margin: 0 auto;
  opacity: 0.6;
}
```

- [ ] **Step 3: Verify and commit**

```bash
git add site/src/styles/closing.css site/index.html
git commit -m "feat: add closing section with CTAs, social links, and footer"
```

---

## Chunk 5: Polish & Deployment

### Task 13: Responsive design

**Files:**
- Create: `site/src/styles/responsive.css`

- [ ] **Step 1: Write responsive.css**

```css
/* site/src/styles/responsive.css */

/* Tablet: 768px */
@media (max-width: 768px) {
  :root {
    --section-padding: var(--space-xl) var(--space-md);
  }

  /* Nav: show hamburger, hide links */
  .nav__links {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: rgba(10, 10, 18, 0.98);
    flex-direction: column;
    padding: var(--space-lg);
    gap: var(--space-lg);
    border-bottom: 1px solid rgba(168, 85, 247, 0.2);
  }
  .nav__links.open {
    display: flex;
  }
  .nav__hamburger {
    display: flex;
  }

  /* Vision: stack columns */
  .vision__grid {
    grid-template-columns: 1fr;
  }

  /* Economy: stack Pepecoin */
  .economy__pepecoin {
    grid-template-columns: 1fr;
  }
  .economy__nft-gallery {
    grid-template-columns: 1fr 1fr;
  }

  /* World: 2 columns */
  .world__zones {
    grid-template-columns: repeat(2, 1fr);
  }
  .world__kekpads {
    grid-template-columns: 1fr;
  }

  /* Gameplay: stack KekCreator, 3-col then 2-col minigames */
  .gameplay__kekcreator {
    grid-template-columns: 1fr;
  }
  .gameplay__minigame-row {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Events: stack seasonal */
  .events__seasonal-grid {
    grid-template-columns: 1fr;
  }

  /* Community: stack billboards, 2-col social posts */
  .community__social-posts {
    grid-template-columns: 1fr 1fr;
  }
  .community__billboards {
    grid-template-columns: 1fr;
  }
  .community__stats {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Mobile: 480px */
@media (max-width: 480px) {
  /* Economy: single-column NFTs, stack loop */
  .economy__nft-gallery {
    grid-template-columns: 1fr;
  }
  .economy__loop-diagram {
    flex-direction: column;
  }
  .economy__loop-arrow {
    transform: rotate(90deg);
  }

  /* World: single column zones */
  .world__zones {
    grid-template-columns: 1fr;
  }

  /* Gameplay: 2-col minigames */
  .gameplay__minigame-row {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Community: single column gallery and social posts */
  .community__social-posts {
    grid-template-columns: 1fr;
  }
  .community__gallery {
    grid-template-columns: 1fr;
  }
  .community__stats {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
  .community__photo:nth-child(odd),
  .community__photo:nth-child(even) {
    transform: none;
  }

  /* Closing: stack CTAs */
  .closing__ctas {
    flex-direction: column;
    align-items: center;
  }
}
```

- [ ] **Step 2: Test at all breakpoints**

Open dev tools, resize viewport to 1200px, 768px, and 480px. Verify:
- Nav collapses to hamburger at 768px
- Grids reflow cleanly at each breakpoint
- Text remains readable, no overflow
- CTAs remain tappable on mobile

- [ ] **Step 3: Commit**

```bash
git add site/src/styles/responsive.css
git commit -m "feat: add responsive breakpoints for tablet and mobile"
```

---

### Task 14: Asset optimization and final polish

**Files:**
- Modify: `site/index.html` (final adjustments)
- Create: `site/public/favicon.ico` (placeholder)

- [ ] **Step 1: Create placeholder favicon and OG image**

```bash
# Placeholder — user will replace with actual brand assets
cp "/Volumes/LETS COOK/Projects/Game Manual/content/other manual/Cover.png" site/public/og-image.png
```

For the favicon, create a simple placeholder or extract from existing assets.

- [ ] **Step 2: Add image optimization plugin for WebP conversion**

```bash
cd site && npm install -D vite-plugin-image-optimizer
```

Update `vite.config.js`:

```js
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  plugins: [
    ViteImageOptimizer({
      png: { quality: 80 },
      webp: { quality: 80 },
    }),
  ],
});
```

This automatically optimizes images during `npm run build`. For `<picture>` elements with WebP source sets, convert key hero/section images post-launch when final assets are provided.

- [ ] **Step 3: Verify all images have alt text and loading="lazy"**

Check index.html — every `<img>` below the fold must have `loading="lazy"` and descriptive `alt` text. Hero background image should NOT be lazy-loaded.

- [ ] **Step 3: Run Vite build and verify output**

```bash
cd site && npm run build
```

Expected: `dist/` directory with minified HTML, CSS, JS, and hashed asset filenames.

- [ ] **Step 4: Run Lighthouse audit**

```bash
npm run preview
```

Open in Chrome, run Lighthouse on the preview URL. Target:
- Performance: 80+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

Address any critical issues found.

- [ ] **Step 5: Commit**

```bash
git add site/
git commit -m "feat: add asset optimization, favicon, OG image, and Lighthouse polish"
```

---

### Task 15: Deployment setup

**Files:**
- Modify: `site/package.json` (add deploy script if needed)

- [ ] **Step 1: Verify static build works for deployment**

The `dist/` folder from `npm run build` should be deployable to any static host:
- **Netlify:** drag-and-drop `dist/` folder or connect git repo
- **Vercel:** `npx vercel` from `site/` directory
- **GitHub Pages:** push `dist/` to `gh-pages` branch

- [ ] **Step 2: Document deployment in README**

Create a minimal README in `site/` with:
- How to run locally (`npm install && npm run dev`)
- How to build (`npm run build`)
- How to deploy (static host of choice)

- [ ] **Step 3: Final commit**

```bash
git add site/
git commit -m "feat: finalize Kekspace game bible site for deployment"
```

---

## Content Placeholders Requiring User Input

The following items are hardcoded as placeholders and need real values from the user:

| Item | Location | Current Value | Needed |
|------|----------|---------------|--------|
| Kekspace logo | Hero, Closing | `/images/logo-kekspace.png` (missing) | Logo file from user |
| Pepecoin logo | Economy 3a | `/images/economy/pepecoin-logo.png` (missing) | Logo file from user |
| "Get Pepecoin" URL | Hero, Economy, Closing | `href="#"` | Exchange/purchase URL |
| "Play Now" URL | Hero, Closing | `href="#"` | Game download/web client URL |
| Community stats | Community 7b | `--` placeholder | Real numbers from user |
| Social links | Closing | `href="#"` | Discord, Telegram, Twitter URLs |
| Partner contact | Closing | `href="#"` | Email or form URL |
| OG image | `<head>` meta | Cover.png placeholder | Designed OG image (1200x630) |
| Favicon | `<head>` | Missing | Brand favicon |
| Minigame screenshots | Gameplay 5b | Placeholders from overview | Individual cropped screenshots |
| Pepecoin origin copy | Economy 3a | Draft text | User-verified claims |
| Brand colors/fonts | `variables.css` | Placeholder palette | Brand guidelines |
