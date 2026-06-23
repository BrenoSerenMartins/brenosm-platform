# Architecture: brenosm-platform

## Architectural Style
The repository is a small Next.js App Router application organized as a feature-based portfolio platform with code-owned content, a branded route shell, and a registry-driven landing surface.

## Layer Model
| Layer | Directory | Responsibility |
| --- | --- | --- |
| Route layer | `app/` | Declares pages, `loading`, `not-found`, metadata, and route-level composition. |
| Feature layer | `src/features/` | Holds page-specific UI, motion-heavy composition, and reusable interactive widgets. |
| Portfolio content layer | `src/content/portfolio/` | Stores the active homepage content as JSON plus typed accessors. |
| Historical content layer (removed) | `src/content/site/` | Previously stored the older home content model used by the removed section archive. |
| Landing content layer | `src/content/landings/` | Stores landing registry metadata and landing definitions. |
| Shared UI layer | `src/components/` | Reusable motion wrappers and generic UI primitives. |
| Config layer | `src/config/` | Site-wide metadata and contact/social configuration. |
| Type layer | `src/types/` | Shared content contracts. |
| Motion helper layer | `src/lib/` | Reusable motion variant objects and easing tokens. |

## Runtime Composition
1. `app/layout.tsx` loads site metadata and global styles.
2. `app/page.tsx` renders `HomePage`.
3. `HomePage` composes the portfolio experience from CV-derived JSON, client-side motion helpers, and static assets in `public/`.
4. `app/loading.tsx` provides the premium route-level loading shell.
5. `app/not-found.tsx` provides the branded fallback shell.
6. `app/landings/page.tsx` renders a directory view from the landing registry.
7. `app/landings/[slug]/page.tsx` resolves a landing definition, generates metadata, and renders the landing-specific React tree returned by `render()`.

## Active Architecture Decisions
- Content is defined in code or JSON, not fetched from a CMS or database.
- Homepage sections are data-driven and intentionally separated from the render shell.
- Landing pages are registered explicitly and statically generated.
- Motion is handled declaratively with Framer Motion plus CSS transform layers.
- Shared visual tokens live in `app/globals.css`, while each route surface owns its own module stylesheet.
- The active root page is a single orchestrator component rather than the removed section archive.

## Historical Note
- The previous section-based home composition and its legacy stylesheet contract were removed during the portfolio rewrite.
- The current repository keeps only the CV-driven portfolio tree as the active home implementation.

## Coupling Hotspots
- `src/features/home/home-page.tsx` depends on the portfolio JSON module and local motion widgets, so changes to content shape or helper props can break multiple sections at once.
- `src/features/home/components/*` all read from the same premium portfolio stylesheet contract.
- `LandingDefinition.render()` makes each registry entry act like a small plugin boundary.
- `src/content/portfolio/index.ts` is the fallback policy boundary for project previews.

## Maintainability Notes
- The architecture is still small enough to reason about quickly, but the visual system is much richer, so CSS/JSX drift must be watched carefully.
- Because content is code-owned, changes are easy to version but require deployment.
- The lack of a backend is intentional for this stage, not accidental omission.
