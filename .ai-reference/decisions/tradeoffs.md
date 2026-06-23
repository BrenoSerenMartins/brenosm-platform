# Tradeoffs: brenosm-platform

## 1. Static Content vs CMS
- **Pro:** Strong typing, no runtime dependency, easy version control, no hosting cost.
- **Con:** Content changes require code edits and deployment.
- **Current Choice:** Static content wins because the site is mostly a portfolio and landing showcase.

## 2. Monolithic Home Page vs Section Composition
- **Pro:** The active `HomePage` is easy to follow as one file and one render tree.
- **Con:** It is harder to reuse or rearrange sections, and a historical section archive can confuse maintainers if it is not clearly labeled.
- **Current Choice:** The premium monolithic page is canonical today, and the section-based version has been removed from the source tree.

## 3. Framer Motion vs Simpler CSS Interactions
- **Pro:** Better control over timing, sequencing, and the premium feel of the interface.
- **Con:** Higher JS cost and more moving parts.
- **Current Choice:** Motion is a core product signal, so the cost is accepted.

## 4. Local Fonts vs Network Fonts
- **Pro:** Offline build reliability.
- **Con:** Less typographic precision than shipping custom font files.
- **Current Choice:** Local/system fallbacks win because the build must not depend on Google Fonts.

## 5. Shared Styling vs Independent Stylesheets
- **Pro:** Reusing one stylesheet reduces duplicated work.
- **Con:** Cross-feature coupling grows quickly.
- **Current Choice:** Active surfaces now own their own stylesheets; any legacy CSS now lives only in historical documentation.

## 6. Placeholder Data vs CV-Faithful Data
- **Pro:** The site can be shipped before every final asset exists.
- **Con:** Some links and images are still unavailable because the résumé does not provide them.
- **Current Choice:** Ship with graceful fallback, then replace placeholders only when real source data is available.
