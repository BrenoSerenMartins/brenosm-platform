# Known Issues: brenosm-platform

## 1. Placeholder Social Identity
- `siteConfig.socialLinks.github` is empty and `siteConfig.socialLinks.linkedin` is currently a handle rather than a full verified URL.
- Impact: the site is clear about contact, but not all social identity anchors are final.

## 2. External Preview Dependency
- The project still supports remote thumbnail previews if a future project supplies a real URL.
- Impact: if that path becomes active again, the service can affect card quality even though the app still builds.

## 3. Requested Stack vs Installed Stack
- The design brief asked for TailwindCSS, Three.js / React Three Fiber, GSAP, Lenis, and Lucide Icons, but those packages are not currently part of the dependency graph.
- Impact: the current implementation achieves the premium feel with Framer Motion and CSS modules instead of those libraries.

## 4. Resume Viewer Browser Support
- The embedded PDF viewer depends on browser support for `object` embeds.
- Impact: older or restricted browsers may fall back to the download CTA only.

## 5. Content Truncation In Hero Panel
- The hero panel intentionally truncates the résumé summary to keep the visual balance.
- Impact: the full résumé is still available in the dedicated résumé section, but the hero panel does not show the entire paragraph.
