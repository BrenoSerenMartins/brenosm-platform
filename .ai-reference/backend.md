# Backend & Server Logic: brenosm-platform

## Current State
The repository has no traditional backend layer. There are no API routes, database adapters, queue workers, cron jobs, auth providers, or server-side repositories.

## What Exists Instead
- Next.js server components for route rendering.
- Static generation hooks such as `generateStaticParams()`.
- Metadata generation via `generateMetadata()`.
- Route-level `notFound()` handling.

## Server Responsibilities
- `app/layout.tsx` provides global metadata.
- `app/landings/[slug]/page.tsx` resolves the route parameter, generates metadata, and chooses whether the page should exist.
- `src/content/landings/registry.ts` acts as the lookup table for routable landings.

## Absence Map
- No `app/api/*` routes.
- No `middleware.ts`.
- No server actions.
- No ORM or SQL client.
- No queue system.
- No scheduled jobs.
- No webhook handlers.
- No policy or ACL layer.

## Inference
- The terms "backend", "queues", "ERP", and "payments" appear in the marketing copy because they describe the author's experience, not because this repository implements those systems.

## Future Guidance
- If backend behavior is added later, keep route orchestration thin and move business operations into explicit service modules.
- If mutations are introduced, validate them with tests and document the data flow in `api.md`, `integrations.md`, and `database.md`.
