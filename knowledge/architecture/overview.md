# Architecture Overview

Purpose: provide an entry point into the existing project documentation.

- Existing knowledge base: [`.ai-reference`](../../.ai-reference/overview.md).
- Architecture details: [architecture](../../.ai-reference/architecture.md).
- No Obsidian vault was found in this repository on 2026-11-05.
- Maintain existing notes in place; this directory indexes them rather than copying them.

Verified runtime: Next.js App Router routes compose feature components. The home
composes Hero, Bento, Projects, Experiences, CTA and Footer sections. Shared UI
includes a loading screen, custom cursor and Lenis scroll provider. Content is
owned by JSON/TypeScript files. No application database or API handlers are present.

Risk: existing notes include historical paths such as `app/loading.tsx` and removed
home widgets. Verify references against source before using them for changes.
