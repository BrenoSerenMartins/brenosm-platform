# CSS Drift Map: brenosm-platform

This document tracks the alignment between JSX class references and the actual CSS module definitions.

## Active Path

| Component / Section | Stylesheet | Status |
| --- | --- | --- |
| `src/features/home/home-page.tsx` | `src/features/home/portfolio-page.module.css` | Aligned |
| `src/features/home/components/*` | `src/features/home/portfolio-page.module.css` | Aligned |
| `src/features/landings/landing-directory-page.tsx` | `src/features/landings/landing-directory.module.css` | Aligned |
| `src/features/landings/landing-showcase-page.tsx` | `src/features/landings/landing-showcase.module.css` | Aligned |
| `app/loading.tsx` | `app/route-surface.module.css` | Aligned |
| `app/not-found.tsx` | `app/route-surface.module.css` | Aligned |

## Historical Path

| Component / Section | Stylesheet | Status |
| --- | --- | --- |
| `src/features/home/sections/*` | `src/features/home/home-page.module.css` | Removed from source tree |
| `src/features/home/components/mouse-aura.tsx` | `src/features/home/home-page.module.css` | Removed from source tree |

## Root Cause Inference
The active homepage and landing routes now have their own stylesheet contracts. Any remaining drift risk sits in the historical archive only.

## Remediation Strategy
1. Keep the active route tree on dedicated stylesheets.
2. If a historical file is reintroduced, recreate its CSS contract before wiring it back into a route.
3. Keep the archive documentation separate from the live implementation to avoid confusion.
