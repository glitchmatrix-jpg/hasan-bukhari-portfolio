# Hasan Bukhari — Build · Research · Write

The Cherry-Cola Issue is Hasan Bukhari’s portfolio across software engineering, computational biology, games, writing, and community leadership.

## Status

Release candidate hardening is in progress on `develop`. The site is intentionally not tagged v1.0.0 while verified résumé PDFs, cleared production assets, deployment access, and complete browser/device evidence remain unavailable. See `docs/RELEASE_REPORT.md`.

## Stack

- Next.js App Router, React, strict TypeScript
- CSS Modules and custom-property design tokens
- Zod content safety schemas
- Vitest and Testing Library
- Playwright and Axe
- GitHub Actions

## Local development

Requirements: Node.js 22 or newer.

```bash
npm ci
npm run dev
```

For browser tests:

```bash
npx playwright install chromium firefox webkit
npm run test:e2e
```

## Validation

```bash
npm run validate
npm run build
npm run audit:source
```

`npm run release:gate` is expected to fail until every documented release blocker is closed.

## Content and publication policy

- CancerShift is independent research and is not represented as peer reviewed.
- A17 is described as a manuscript in preparation.
- Ichthyology conclusions and figures remain unpublished.
- Flooded remains a poetry collection in development; no unapproved excerpts appear.
- Nivala’s repository is private and is not linked.
- Event photography, copyrighted lyrics/artwork, personal health data, and unapproved research figures remain withheld.

## Deployment

The app is Vercel-compatible and requires no runtime environment variables in its current form. Connect the repository only after the P0 release blockers in `docs/QA_RELEASE_CANDIDATE.md` are closed. Configure the production domain, confirm HTTPS and security headers, run the complete browser/Lighthouse suite against the candidate, then submit `/sitemap.xml` through the chosen search-console account.

## Documentation

- `docs/ARCHITECTURE.md`
- `docs/MOTION_INVENTORY.md`
- `docs/ASSET_LICENSES.md`
- `docs/QA_RELEASE_CANDIDATE.md`
- `docs/RELEASE_REPORT.md`
- `docs/RELEASE_NOTES.md`
