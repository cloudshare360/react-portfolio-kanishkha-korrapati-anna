# Project plan and task tracker

Status values: `DONE`, `READY`, `BLOCKED`.

| ID | Phase | Task | Acceptance criteria | Status |
|---|---|---|---|---|
| D01 | Discover | Inventory reference and source files | Architecture and all inputs identified | DONE |
| D02 | Discover | Extract both PDFs and DOCX | Verified facts consolidated without invented values | DONE |
| P01 | Plan | Define information architecture and visual direction | Recruiter-focused single-page flow documented | DONE |
| P02 | Plan | Create SDLC and source hierarchy | Lifecycle and conflict rules documented | DONE |
| B01 | Build | Scaffold from the Tanmayi React implementation | React 18/CRA and GitHub Pages model retained | DONE |
| B02 | Build | Implement hero, impact, experience, skills, education, contact | All sections use source-verified content | DONE |
| B03 | Build | Add responsive and accessible behavior | Mobile menu, focus states, semantic regions | DONE |
| B04 | Build | Add resume assets and metadata | Resume opens and target package metadata is correct | DONE |
| A01 | Agent | Add local skill, memory, metadata, and source reference | Agents can continue without reparsing binary files | DONE |
| V01 | Verify | Production build | `npm run build` exits successfully | DONE |
| V02 | Verify | Content residue and link audit | No shipped Tanmayi copy; internal targets resolve | DONE |
| R01 | Release | Kanishkha content/privacy review | Owner approves phone, email, OPT, and public wording | BLOCKED — owner review |
| R02 | Release | Deploy to GitHub Pages | Live URL loads and resume downloads | BLOCKED — repository authorization |

## Definition of done

The site builds without errors, displays correctly at desktop and mobile widths, has no fabricated claims, exposes working contact/resume actions, and has owner approval for publication.
