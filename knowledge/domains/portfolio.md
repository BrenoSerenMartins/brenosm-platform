# Portfolio And Landing Showcases

Purpose: present professional work and direct visitors to contact channels.

Public copy presents Breno Seren Martins as a Full Stack developer, using first-person professional language in the hero, competencies, contact and footer. Site metadata and the social preview follow that positioning; structured data represents a Person rather than a studio/service business. Do not invent qualifications or availability. Project product names and URLs remain independent of the portfolio identity.

Existing notes: [home](../../.ai-reference/modules/home.md),
[landings](../../.ai-reference/modules/landings.md),
[site configuration](../../.ai-reference/modules/site-config.md).

- Home composition: `src/features/home/home-page.tsx` and its section components.
- Home data: `src/content/projects.json`, `src/features/home/data.ts` and site config.
- Both technology marquees use `src/content/technologies.json`: retain the original Next.js, React, TypeScript, Node.js, PostgreSQL, Supabase, Framer Motion and Docker entries, extended with the owner's supplied skills. Render each technology or competency as its own item without parenthesized or slash-separated groups, and avoid duplicates. Only Figma and AWS were removed from the original list; do not infer personal proficiency from employer infrastructure.
- With the longer technology list, both marquees use speed 0.7 and scroll-driven acceleration multiplier 0.35 for readability. Movement is percentage-based, so reassess speed when list width changes.
- Landing discovery: `src/content/landings/registry.ts`; definitions own metadata and rendering.
- Contact destinations: `src/config/site.ts`.
- GitHub is linked from the hero actions and footer using `siteConfig.socialLinks.github`, providing access on mobile where the upper footer is hidden.
- Opening curtain: `src/components/ui/loading-screen.tsx` presents "Breno Seren Martins" with "Portfólio" beneath it. Name words animate individually and wrap on narrow screens; the existing duration and dismissal behavior are preserved.
- Default project URL convention: `https://<app-name>.bsmstudio.cloud/`. Store explicit URLs in project content; exceptions are allowed. Keep existing custom domains until their migration is confirmed. A portfolio link update does not provision DNS, certificates or hosting.
- Preserve factual content and explicit registry membership when editing.
- Risks: broken asset paths, contact destinations, keyboard interactions and animation behavior.

## PlannedWallet

- Listed as a project in `src/content/projects.json`; public URL follows the owner's domain convention: `https://plannedwallet.bsmstudio.cloud/`. Previous hosting URL: `https://plannedwallet.onrender.com/`.
- Description and stack verified in the sibling `PlannedWallet` README and package manifests.
- Cover: `public/projects/plannedwallet-cover-v4.avif`, generated with the built-in image tool using the original brand and existing portfolio covers as references; runtime does not depend on the sibling directory.
- Scope describes implemented personal finance features; full investment/net-worth tracking is deferred in the source project.
- The cover uses the same 3:2 composition and standard card framing as other projects.
- Generation prompt: preserve the sage folded-plane symbol and exact PlannedWallet wordmark; center the lockup with generous margins on a near-black background, subtle sage atmosphere, no panels, frames or additional text. Convert the generated PNG to AVIF for delivery.
- V2 prompt: move the symbol and wordmark slightly downward together, preserving horizontal position, scale, background and identity, to align optically with neighboring wordmarks. Version the asset URL to avoid stale browser caches.
- V3 prompt: move only the symbol and wordmark downward inside the unchanged full-bleed 1536x1024 background. The CSS offset was removed because translating the image exposed a strip at the card top. All projects now use the same image framing; verify optical alignment on desktop/mobile.
- V4 (2026-11-24): the active `app/src/app/styles/premium.css` in PlannedWallet overrides the older sage tokens with Black & Gold (`--gold-primary: #d4af37`, `--bg-base: #09090b`, `--text-primary: #f4f4f6`). `BrandSymbol` retains its folded-plane geometry. Prompt: preserve V3 composition and exact lettering, change the symbol to gold, text to neutral white and green ambience to subtle gold; no borders, panels or CSS offsets.
