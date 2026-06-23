# Patterns: brenosm-platform

## 1. Registry-Driven Content
- Content objects are defined in TypeScript and registered centrally.
- `landingRegistry` is the canonical example.
- Benefit: route discovery and metadata generation remain deterministic.
- Risk: adding a new landing without registry wiring makes it invisible.

## 2. Content-As-Code
- The app treats text, tags, outcomes, awards, and experience history as source code.
- Benefit: strong typing and easy review in git.
- Risk: content updates always require a deploy.

## 3. Plugin-Like Landing Rendering
- `LandingDefinition.render()` turns each landing into a self-contained render unit.
- Benefit: landings can own their own UI without extra route machinery.
- Risk: it is effectively a trusted code execution boundary, so registry entries should stay internal and disciplined.

## 4. Motion Primitives
- `RevealGroup`, `RevealItem`, `FadeInSection`, `InteractiveCard`, and the local hero/tilt/cursor widgets standardize animation and structure.
- Benefit: motion language stays consistent when these components are used.
- Risk: the active home page still mixes shared motion helpers with local motion logic, so motion is not fully centralized.

## 5. Safe Asset Rendering
- `next/image` is used wherever an asset can be rendered safely.
- Benefit: layout does not break when a file is missing.
- Risk: a missing asset simply disappears; there is no explicit fallback UI unless the component provides one.

## 6. Feature-Based Organization
- Home, landings, and shared motion are organized by feature rather than by technical role alone.
- Benefit: the repository stays readable even as the project grows.
- Risk: cross-feature CSS reuse can erode the boundaries if not kept deliberate.

## 7. Dark Premium Visual Language
- Global tokens, glows, blur layers, and strong contrast define the design.
- Benefit: the site has a distinct identity.
- Risk: blur-heavy UI and fixed overlays can be expensive on low-end devices.

## 8. Removed Composition Layer
- `src/features/home/sections/` was the old section-based composition style and has been removed from the source tree.
- Benefit: the codebase now has a single active homepage composition path.
- Risk: any references to the deleted tree must be treated as historical only.
