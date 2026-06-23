# Execution Flows: brenosm-platform

## 1. Home Page Render Flow
1. `app/page.tsx` returns `HomePage`.
2. `HomePage` runs on the client because it uses motion values, browser events, and form state.
3. `HomePage` reads structured data from `src/content/portfolio/index.ts`.
4. The hero section renders first, followed by about, services, experience cards, playground, stack, resume, awards, and the contact CTA.
5. `HeroScene`, `PremiumCursor`, `TiltCard`, and `StatCounter` add motion and depth.
6. If a project has no image and no URL, the card still renders with a text fallback block.

## 2. Landing Directory Flow
1. `app/landings/page.tsx` renders `LandingDirectoryPage`.
2. The page maps over `landingRegistry`.
3. Each landing card displays the landing category, status, summary, and tags.
4. Clicking a card navigates to `/landings/[slug]`.
5. The directory is only as complete as the registry.

## 3. Landing Showcase Flow
1. `app/landings/[slug]/page.tsx` receives route params.
2. `getLandingBySlug(slug)` looks up the landing definition.
3. If the slug is missing, `notFound()` is called.
4. If the slug exists, metadata is generated from the landing definition.
5. `LandingShowcasePage` renders the generic shell.
6. The landing-specific `render()` function injects the page body.
7. The back link returns the user to `/landings`.

## 4. Static Generation Flow
1. `generateStaticParams()` emits one static path per landing definition.
2. Next.js bakes those routes at build time.
3. `generateMetadata()` reuses the same registry data so the page title and description stay aligned with the content.
4. The build depends on the registry being complete and valid.

## 5. Contact Flow
1. User fills the contact form.
2. Local validation runs on blur and submit.
3. Submission creates a `mailto:` URL.
4. The UI shows a success state and provides a button to open the email client.

## 6. Resume Flow
1. The résumé section reads `portfolioResume`.
2. The PDF viewer embeds the file from `public/resume/`.
3. The download CTA points at the same asset.

## 7. Absent Flows
- No login or signup flow.
- No checkout flow.
- No payment flow.
- No synchronization flow.
- No queue or cron flow.
- No server mutation flow.

## 8. Legacy Section Flow
- The archived section-based home tree still has its own reveal and interaction flows, but those flows are not active in the root route.
