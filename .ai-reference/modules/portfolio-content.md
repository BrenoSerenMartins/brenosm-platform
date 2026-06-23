# Module: Portfolio Content

## Purpose
This module is the active content source of truth for the new homepage experience. It replaces homepage copy that used to live directly in JSX with structured JSON and typed accessors.

## Active Files
- `src/types/portfolio.ts`
- `src/content/portfolio/index.ts`
- `src/content/portfolio/hero.json`
- `src/content/portfolio/stats.json`
- `src/content/portfolio/services.json`
- `src/content/portfolio/projects.json`
- `src/content/portfolio/playground.json`
- `src/content/portfolio/stack.json`
- `src/content/portfolio/career.json`
- `src/content/portfolio/resume.json`
- `src/content/portfolio/achievements.json`

## Content Responsibilities
- `hero.json` defines the opening narrative, role label, CTA copy, and highlight pills.
- `stats.json` defines the animated counters shown in the hero and about areas.
- `services.json` defines the service cards and their supporting highlights.
- `projects.json` defines the experience cards and the preview fallback policy.
- `playground.json` defines the technical experiment cards.
- `stack.json` defines the floating technology categories.
- `career.json` defines the experience timeline for Moving Pay and Bizcommerce.
- `resume.json` defines the résumé summary, education, languages, skills, and PDF path.
- `achievements.json` defines the awards/social-proof marquee items.

## Invariants
- Project entries must include `name`, `company`, `role`, `period`, `description`, `technologies`, and `accent`.
- A project may omit `image` and `url`; in that case the card must still render cleanly.
- Resume PDF paths are resolved from `public/`, not from `src/`.
- The data is intentionally serializable so it can be reasoned about as content instead of behavior.

## Risks
- Any JSON typo becomes a build-time UI artifact.
- External previews make page quality depend on a third-party service when no local image exists and a future item supplies a live URL.
- Because the data is static, changes require a deploy and cannot be patched dynamically.
