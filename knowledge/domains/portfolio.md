# Portfolio And Landing Showcases

Purpose: present professional work and direct visitors to contact channels.

Existing notes: [home](../../.ai-reference/modules/home.md),
[landings](../../.ai-reference/modules/landings.md),
[site configuration](../../.ai-reference/modules/site-config.md).

- Home composition: `src/features/home/home-page.tsx` and its section components.
- Home data: `src/content/projects.json`, `src/features/home/data.ts` and site config.
- Landing discovery: `src/content/landings/registry.ts`; definitions own metadata and rendering.
- Contact destinations: `src/config/site.ts`.
- Preserve factual content and explicit registry membership when editing.
- Risks: broken asset paths, contact destinations, keyboard interactions and animation behavior.

## PlannedWallet

- Listed as a project in `src/content/projects.json`; pilot URL supplied by the owner: `https://mywallet-pilot.onrender.com/`.
- Description and stack verified in the sibling `PlannedWallet` README and package manifests.
- Cover: `public/projects/plannedwallet-cover-v2.avif`, generated with the built-in image tool using the original brand and existing portfolio covers as references; runtime does not depend on the sibling directory.
- Scope describes implemented personal finance features; full investment/net-worth tracking is deferred in the source project.
- The cover uses the same 3:2 composition and standard card framing as other projects.
- Optional `imageOffsetY` shifts the foreground image in pixels for optical wordmark alignment; normalization defaults to zero. PlannedWallet uses +8px. Ambient backgrounds and hover scaling remain independent. Check alignment on desktop/mobile when changing the offset.
- Generation prompt: preserve the sage folded-plane symbol and exact PlannedWallet wordmark; center the lockup with generous margins on a near-black background, subtle sage atmosphere, no panels, frames or additional text. Convert the generated PNG to AVIF for delivery.
- V2 prompt: move the symbol and wordmark slightly downward together, preserving horizontal position, scale, background and identity, to align optically with neighboring wordmarks. Version the asset URL to avoid stale browser caches.
