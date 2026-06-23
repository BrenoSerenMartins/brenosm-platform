# Testing: brenosm-platform

## Current Verification State
The repository relies on linting, TypeScript checking, production build verification, and manual browser review. There is no automated unit or E2E suite yet.

## What I Observed
- `npm run lint` currently passes.
- `./node_modules/.bin/tsc --noEmit` currently passes.
- `npm run build` currently passes in this environment.

## Manual Test Checklist
- Open `/` and verify the hero, about, services, experience cards, playground, stack, resume, awards, and contact sections all render.
- Hover the hero CTA and cards to verify motion polish.
- Move the cursor on desktop to verify the premium cursor and hero scene follow behavior.
- Open `/landings` and confirm the directory cards render.
- Open `/landings/landing-50` and confirm the landing showcase renders and the back link works.
- Visit an unknown route and confirm the branded 404 shell appears.
- Resize to mobile widths and verify the layout still stacks sanely.
- Confirm that experience cards without project images still render readable fallback content.

## Suggested Future Automated Coverage
- Unit tests for `getProjectPreviewSrc()`.
- Unit tests for `getLandingBySlug()`.
- Component tests for the landing directory and showcase shells.
- A route test for `/landings/[slug]`.
- A visual regression test for the home page layout and the landing showcase card.

## Testing Principle
- Treat any JSX, CSS module, or content change as requiring at least one manual browser pass, because the project is heavily visual and the interaction design is part of the value proposition.
