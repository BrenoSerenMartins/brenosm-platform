# Business Rules: brenosm-platform

## Core Rules
- The platform is a personal brand and portfolio system, not a transactional product.
- All public-facing narrative content is code-owned and versioned with the repository.
- The current source of truth for landing pages is `src/content/landings/registry.ts`.
- The current source of truth for home-page narrative is `src/content/portfolio/*.json` plus `src/config/site.ts`.

## CV-Only Rules
- All professional facts shown on the active homepage must come from the attached résumé or from files that directly encode those résumé facts.
- Do not invent companies, projects, dates, technologies, or testimonials.
- Keep the cargo names exactly as they appear in the résumé when they are shown in the UI.

## Landing Rules
- Each landing must have a unique `slug`.
- Each landing must conform to `LandingDefinition`.
- A landing becomes routable only when it is exported and added to `landingRegistry`.
- `/landings/[slug]` must return `notFound()` for unknown slugs.
- `generateStaticParams()` must stay aligned with the registry so build output matches the available routes.
- `status` is informational today; there is no filtering logic that hides `draft` entries.
- `accent` exists in the type contract but is not consumed by the active render path yet.

## Home Page Rules
- The active homepage is driven by `portfolioHero`, `portfolioStats`, `portfolioServices`, `portfolioProjects`, `portfolioPlayground`, `portfolioStack`, `portfolioCareer`, `portfolioResume`, and `portfolioAchievements`.
- `projects.json` currently represents experience cards, not fabricated client case studies.
- The resume section uses the local PDF at `public/resume/breno-seren-martins-curriculo.pdf`.
- The contact CTA uses `mailto:` directly and does not persist data to a server.

## Asset Rules
- The active homepage must degrade safely if a project has no image and no URL.
- Resume PDF paths are resolved from `public/`, not from `src/`.
- Public assets are organized under `public/resume/`.

## Navigation Rules
- Internal routes use `next/link`.
- External links use `<a>`.
- External links that open a new tab must include `rel="noreferrer"`.
- Anchor navigation in the home page is in-page only and depends on stable IDs such as `#about`, `#services`, `#cases`, `#stack`, `#resume`, `#awards`, and `#contact`.

## Content Integrity Rules
- Content objects should remain strongly typed and read-only where possible.
- No business text should be hardcoded directly inside reusable components when a content object already exists for it.
- `AchievementEntry` is the awards/social-proof model for the active homepage.
- `heroActions`, `footerLinks`, `profileModes`, `platformNodes`, `capabilities`, and `experienceEntries` remain part of the legacy content model even when the active root page does not currently consume them.

## Inferred Rules
- The repository now has a single active home composition layer, so future work should treat `src/features/home/home-page.tsx` and `src/features/home/portfolio-page.module.css` as the canonical path unless a deliberate architecture change is introduced.
