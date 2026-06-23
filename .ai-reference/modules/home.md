# Module: Home

## Purpose
The active home module is the premium public-facing portfolio hub. It is designed to convert visitors into clients for landing pages, web systems, and custom development by combining strong copy, proof of work, motion, and a polished contact path.

## Active Files
- `app/page.tsx`
- `src/features/home/home-page.tsx`
- `src/features/home/portfolio-page.module.css`
- `src/features/home/components/contact-form.tsx`
- `src/features/home/components/hero-scene.tsx`
- `src/features/home/components/premium-cursor.tsx`
- `src/features/home/components/stat-counter.tsx`
- `src/features/home/components/testimonial-marquee.tsx`
- `src/features/home/components/tilt-card.tsx`
- `src/content/portfolio/index.ts`
- `src/content/portfolio/*.json`

## What The Active Page Does
- Renders a premium hero with branded copy, CTA buttons, proof cards, and an animated pseudo-3D scene.
- Renders an about section with a timeline, technology tags, and animated statistics.
- Renders a services section from JSON.
- Renders a masonry experience grid from JSON with local image or fallback text presentation.
- Renders a playground section from JSON to show experiments and snippets.
- Renders a floating technology stack section from JSON.
- Renders a vertical career timeline from JSON.
- Renders a curriculum section with summary data and an embedded PDF viewer.
- Renders an awards marquee from JSON.
- Renders a contact form with local validation and a `mailto:` handoff.

## Real Dependencies
- `portfolioHero`, `portfolioStats`, `portfolioServices`, `portfolioProjects`, `portfolioPlayground`, `portfolioStack`, `portfolioCareer`, `portfolioResume`, `portfolioAchievements`, and `getProjectPreviewSrc`.
- `PremiumCursor` for reduced-motion-aware pointer ambience.
- `HeroScene` for cursor-driven depth and particles.
- `TiltCard` for 3D hover tilt and tone variation.
- `StatCounter` for scroll-triggered number animation.
- `AchievementMarquee` for the looped awards strip.
- `ContactForm` for validation and outbound email generation.
- `FadeInSection`, `RevealGroup`, and `RevealItem` for section entrance choreography.

## Business Rules Embedded Here
- The active homepage is CV-only and must not invent professional facts.
- Experience cards use the résumé data, not fabricated client project data.
- Resume PDF path must exist under `public/` or the viewer/download CTA will break.
- Contact is intentionally client-side only and does not persist data to a backend.

## Current Risks
- The homepage is highly styled, so CSS/JSX drift can break the intended premium look even when the page still builds.
- The embedded PDF viewer depends on browser support for `object` embeds.
- The hero summary truncation is intentional and should not be mistaken for the only source of résumé text.

## What This Module Is Not
- It is not the removed section-based composition layer under `src/features/home/sections/`.
- It is not a backend form submission surface.
- It is not a CMS-driven page.
