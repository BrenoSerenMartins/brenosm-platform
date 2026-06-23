# Glossary: brenosm-platform

- **Landing**: A standalone page routed under `/landings/[slug]`.
- **LandingDefinition**: The content contract that defines a routable landing.
- **Registry**: A central array or lookup file that lists content definitions.
- **Content-as-code**: The pattern of storing page copy and metadata in TypeScript modules.
- **Experience card**: A card in `projects.json` that represents a résumé milestone or work entry.
- **Awards marquee**: The looped social-proof strip built from `AchievementEntry`.
- **Motion primitive**: A reusable motion wrapper or variant constant such as `RevealGroup` or `revealSoftItem`.
- **Removed section archive**: A feature file that existed in the repository but was deleted during the portfolio rewrite and is now only referenced historically.
- **CSS module drift**: A mismatch between JSX className references and the selectors actually defined in the stylesheet.
- **Static generation**: Build-time rendering of pages using `generateStaticParams()`.
- **Slug**: A URL-safe identifier used to select a landing page.
- **Plugin boundary**: A trusted code hook, such as `LandingDefinition.render()`, that injects a landing-specific React tree.
- **Preview resolver**: The `getProjectPreviewSrc()` helper that decides whether a project card has an image, a remote thumbnail, or no preview at all.
