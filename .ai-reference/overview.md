# Project Overview: brenosm-platform

## What This Project Is
`brenosm-platform` is a static-first Next.js App Router portfolio and landing showcase. The active homepage is CV-driven: every professional fact currently rendered in the UI is sourced from the attached curriculum and stored in `src/content/portfolio/*.json` or `src/config/site.ts`.

## Current Runtime Surfaces
- `/` renders the premium portfolio homepage.
- `app/loading.tsx` provides the branded loading shell for route transitions.
- `app/not-found.tsx` provides the branded fallback shell for unknown routes.
- `/landings` renders a registry-backed directory of landing pages.
- `/landings/[slug]` renders a landing showcase selected from `src/content/landings/registry.ts`.

## Observed System Shape
- The app is intentionally small and mostly frontend-driven.
- There is no runtime database, queue, cron, auth, or API layer in the repository.
- Content is stored in JSON and TypeScript modules and baked into the build.
- The active home experience is a client component that composes motion widgets, fluid CSS modules, and CV-derived content.
- The landing system behaves like a tiny plugin architecture: each landing definition exports metadata and a `render()` function.
- The older section-based home layer and its stylesheet were removed during the rewrite, so the root route now has a single active composition path.

## Primary Goals
- Present technical depth as product value rather than as a resume dump.
- Convert visitors into clients for landing pages, web systems, and development work.
- Keep the platform modular enough to add new landings with minimal routing work.
- Use strong visuals and motion to communicate quality.
- Preserve a code-owned source of truth for text, assets, and landing definitions.

## Audience Model
- Prospects evaluating whether the developer can deliver premium client work.
- Technical leaders who want evidence of backend, integration, and maintenance experience.
- Recruiters who need a quick full-stack signal.

## Facts Versus Inference
- Fact: the active routes are statically rendered or statically generated.
- Fact: `landing-50` is the only registered landing today.
- Fact: `HomePage` is the actual rendered root page.
- Fact: the active homepage content is CV-derived, not invented from sample case studies.
- Inference: the deleted section-based home files are intentionally kept only as historical documentation, not as live code.

## Strategic Recommendations
- Keep the homepage portfolio JSON as the primary source of truth for presentation content.
- Treat any references to the legacy section-based home directory as historical material only; it no longer exists in the active source tree.
- Preserve the separation between the premium homepage stylesheet and the landing stylesheets.
- Document any future external asset or runtime dependency before introducing it, because the current build is intentionally offline-friendly.
