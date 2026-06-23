# Routes Map: brenosm-platform

| Route / Surface | File | Type | Behavior |
| --- | --- | --- | --- |
| `/` | `app/page.tsx` -> `src/features/home/home-page.tsx` | Active client-rendered page | Renders the CV-driven premium portfolio hub. |
| `loading` | `app/loading.tsx` | Route shell | Shows the branded loading state while App Router segments resolve. |
| `not-found` | `app/not-found.tsx` | Route shell | Shows the branded fallback experience for unknown routes. |
| `/landings` | `app/landings/page.tsx` -> `src/features/landings/landing-directory-page.tsx` | Active server component page | Lists all registered landings. |
| `/landings/[slug]` | `app/landings/[slug]/page.tsx` -> `src/features/landings/landing-showcase-page.tsx` | Static dynamic route | Resolves a landing by slug, generates metadata, and 404s unknown slugs. |

## Route Generation Rules
- `generateStaticParams()` is the source of truth for build-time landing paths.
- Only landings present in `landingRegistry` become routable.
- Metadata for a landing is derived from the landing definition itself.

## Route Gaps
- No `app/api/*` routes.
- No checkout, auth, or dashboard routes.
- No dedicated routes for `projects`, `about`, or `contact`; those are in-page anchors.

## Operational Note
- The route tree is small, so any new page surface should be documented immediately because it is easy to overlook in a future refactor.
