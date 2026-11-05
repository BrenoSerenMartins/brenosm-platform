# Dependencies

Existing map: [dependency map](../../.ai-reference/maps/dependency-map.md).

Current runtime dependencies are declared in `package.json`: Next.js, React,
React DOM, Framer Motion and Lenis. Exact installed versions are in `package-lock.json`.

Flow: routes -> feature UI -> shared components/content/config.
Global scroll, cursor and loading UI are composed in `app/layout.tsx`.
Home sections share `portfolio-page.module.css`, a visual coupling hotspot.
