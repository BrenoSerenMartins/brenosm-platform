# Module: Landings

## Purpose
The landings module provides a registry-driven system for publishing standalone landing experiences without expanding the main home page.

## Active Files
- `app/landings/page.tsx`
- `app/landings/[slug]/page.tsx`
- `src/features/landings/landing-directory-page.tsx`
- `src/features/landings/landing-directory.module.css`
- `src/features/landings/landing-showcase-page.tsx`
- `src/features/landings/landing-showcase.module.css`
- `src/content/landings/registry.ts`
- `src/content/landings/landing-50/index.tsx`
- `src/content/landings/landing-50/showcase.tsx`

## Current Behavior
- `/landings` lists every registered landing.
- `/landings/[slug]` resolves a landing definition and renders the landing-specific body returned by `render()`.
- `landing-50` is the only registered landing today.
- `landing-50` is still marked `draft`.

## Business Rules
- Registration controls discoverability.
- Static param generation controls build-time route availability.
- Metadata is derived from the landing definition, not duplicated in the page layer.
- The directory should stay honest about what is actually routable.

## Current Coupling
- The landing routes now own their own stylesheets.
- The old dependency on `home-page.module.css` has been removed from the active landing path.
- The only shared UI boundary is the motion wrapper layer.

## LandingDefinition Contract
- `slug` identifies the route.
- `title` and `description` drive metadata and page text.
- `summary`, `domain`, `category`, `tags`, and `status` are used for directory presentation.
- `accent` is present but still unused by the active UI.
- `render()` injects landing-specific React content.

## Maintenance Rules
- Add new landings by creating a folder, exporting a definition, and registering it once.
- Keep the registry and the route generator in sync.
- Keep the landing styles independent from the homepage shell so visual drift in one surface does not break the other.
