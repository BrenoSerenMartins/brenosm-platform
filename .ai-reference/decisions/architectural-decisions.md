# Architectural Decisions: brenosm-platform

## 1. App Router First
- **Decision:** Use Next.js App Router as the routing and composition backbone.
- **Why:** It gives static generation, route-level metadata, and server/client component separation without adding a custom framework.
- **Consequence:** Route files stay thin, but they must be kept in sync with feature modules and registries.

## 2. Content As Code And JSON
- **Decision:** Store page content and landing definitions in structured files instead of a CMS.
- **Why:** The project is small enough that a CMS would be overkill, and code-owned content provides strong traceability.
- **Consequence:** Every content change requires a deploy, but the data stays reviewable and easy to diff.

## 3. Registry-Based Landings
- **Decision:** Make landings discoverable through a registry rather than filesystem convention alone.
- **Why:** The registry is the source of truth for routing, metadata, and listing pages.
- **Consequence:** A landing is invisible until it is registered, which prevents accidental publication.

## 4. CSS Modules With Global Tokens
- **Decision:** Use CSS Modules for scoped styling and global CSS variables for shared tokens.
- **Why:** The site needs a custom visual language and fine-grained control.
- **Consequence:** JSX and stylesheet contracts must stay synchronized, or visual regressions appear quickly.

## 5. Framer Motion For Interaction
- **Decision:** Use Framer Motion for the site's motion grammar.
- **Why:** The portfolio depends on motion quality to communicate polish.
- **Consequence:** Bundle size grows, and the animation system must be curated so it does not become noisy.

## 6. Static-First Output
- **Decision:** Prefer static generation and code-owned assets over a dynamic backend.
- **Why:** The site is primarily presentation and portfolio content.
- **Consequence:** The repo stays simple, but mutable content and forms are not first-class today.

## 7. CV-Only Active Homepage
- **Decision:** Source the active homepage only from the attached résumé.
- **Why:** It prevents invention and keeps the public portfolio aligned with the source document.
- **Consequence:** Some sections, such as projects and social proof, must be represented as cards or awards instead of fabricated case studies.

## 8. Legacy Archive Retained, Not Mounted
- **Decision:** Keep the older section-based home composition in the repository as an archive rather than wiring it into the active route.
- **Why:** It preserves reusable patterns and lets future maintainers see the old composition without guessing about behavior.
- **Consequence:** The codebase has two content models, so the docs must clearly separate active and dormant paths.
