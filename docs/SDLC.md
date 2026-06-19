# Software development life cycle

## 1. Discovery and requirements

Inputs: Tanmayi reference repository, two Kanishkha resumes, one work-description DOCX. Audience: finance recruiters and hiring managers. Primary conversion: resume view/download or direct contact. Acceptance: factual, responsive, accessible, buildable, and deployable to GitHub Pages.

## 2. Analysis and design

- Map verified source content into identity, impact metrics, experience, toolkit, education, credentials, and contact.
- Use a single-page React information architecture to reduce navigation friction.
- Use semantic HTML, keyboard-operable navigation, responsive grids, and visible focus states.
- Keep the supplied resume PDFs as static public assets.

## 3. Implementation

- Build with the reference's React 18 / Create React App toolchain.
- Keep portfolio copy in `src/App.js`; use `docs/CONTENT_SOURCE_OF_TRUTH.md` for verification.
- Use CSS custom properties and breakpoints at 800px and 520px.
- Configure package metadata and GitHub Pages URL for the target repository.

## 4. Verification

- Run `npm install` if dependencies are absent, then `npm run build`.
- Confirm no remaining Tanmayi-facing strings in shipped `src/`, `public/index.html`, or package metadata.
- Check desktop and mobile layouts, anchor navigation, menu operation, mail/phone links, and resume downloads.
- Review public claims against the source-of-truth document.

## 5. Release

- Review personal/contact information with Kanishkha before publishing.
- Run `npm run deploy` only after repository and GitHub Pages settings are confirmed.
- Smoke-test the deployed URL and resume asset.

## 6. Maintenance

- Update the source-of-truth first, then site copy.
- Re-run build and content checks after each update.
- Add portfolio case studies only when artifacts and outcomes can be verified.
