# Routes

Existing map: [routes map](../../.ai-reference/maps/routes-map.md).

Verified routes: `/`, `/landings`, `/landings/[slug]`. Registered landing: `landing-50`.
Unknown landing slugs call `notFound()`. Landing params are generated from the registry.

Generated surfaces: `/manifest.webmanifest`, `/opengraph-image`, `/robots.txt`, `/sitemap.xml`.
The loading screen is mounted by `app/layout.tsx`; there is no `app/loading.tsx`.
