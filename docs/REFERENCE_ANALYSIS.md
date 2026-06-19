# Reference implementation analysis

## Tanmayi portfolio

The reference is a Create React App site using React 18 and React Router. It has Home, About, Projects, and Contact pages, shared Header/Footer components, a custom data-loading hook, and duplicated JSON content under `data/` and `public/data/`. GitHub Pages deployment is configured through `homepage` and `gh-pages`.

Strengths retained:

- React/CRA build and GitHub Pages deployment model.
- Responsive navigation, reusable section patterns, downloadable resume, and clear contact routes.
- Content-first portfolio structure with education, skills, experience, and measurable impact.

Changes made for Kanishkha:

- Replaced generic and placeholder project claims with source-verified professional experience.
- Consolidated content in the React application to prevent divergent `data/` and `public/data/` copies.
- Changed the visual system to an editorial finance identity: warm neutral canvas, deep green, and lime accent.
- Replaced four routed pages with a faster single-page narrative and anchored navigation.
- Added mobile navigation, semantic sections, focus states, resume access, and verified contact links.

## Source hierarchy

When sources differ, use this order: 2026 resume, finance resume, work-description DOCX. The DOCX is the best source for detail, but a resume takes precedence for role title or date conflicts.
