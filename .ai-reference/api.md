# API: brenosm-platform

## Current State
There are no custom API routes in the repository.

## What Is Not Present
- No `app/api/*` route handlers.
- No REST or GraphQL server layer.
- No server actions.
- No webhook endpoints.
- No third-party SDK calls from the app itself.

## What Looks Like API Behavior But Is Not
- `generateStaticParams()` is build-time route generation, not an API endpoint.
- `generateMetadata()` is route metadata generation, not an API endpoint.
- `landing.render()` is an internal rendering hook, not an external contract.

## External Network Usage
- The active build no longer depends on Google Fonts because the layout uses local/system fonts.
- The only user-facing outbound paths are static websites, `mailto:` links, and social profile placeholders/handles.
- `src/content/portfolio/index.ts` still supports a remote thumbnail URL when a future project record supplies `url`, but the current CV-only data does not exercise that path.

## Future API Shape If Needed
- Contact form submission endpoint.
- Analytics ingest endpoint.
- CMS proxy or sync endpoint.
- Webhook receiver for any future integrations.

## Operating Principle
- Do not create an API layer just because the project is in Next.js.
- Add endpoints only when the data or mutation problem is real and cannot be handled by static content or direct links.
