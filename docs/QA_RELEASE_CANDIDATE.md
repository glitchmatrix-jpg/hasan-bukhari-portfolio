# Release-candidate QA and issue log

## Verified locally

- strict TypeScript, ESLint, Prettier, Vitest, production build;
- static generation and typed routes;
- content and asset validation scripts;
- semantic navigation, skip link, reduced-motion CSS, forced-colors fallbacks;
- canonical metadata model, sitemap, robots, manifest, structured Person data, social image route;
- no enabled form, analytics, cookies, autoplay, canvas navigation, or private-repository link.

## Severity-ranked issues

### P0 — release blockers

1. Verified résumé PDFs are absent. Downloads intentionally remain disabled.
2. Production project imagery and cleared fonts/textures are absent. Public-safe CSS abstractions remain.
3. No approved deployment target, custom-domain access, or analytics/privacy decision is available.
4. Full Playwright browser binaries could not be installed locally; cross-browser and device evidence must come from CI or a release machine.

### P1 — high priority

1. Lighthouse, Core Web Vitals, and responsive screenshot baselines require a running deployed candidate.
2. Android/iOS physical-device checks remain unperformed.
3. Social-card rendering should be visually inspected after deployment.

### P2 — follow-up

1. Replace system font fallbacks only after licensed font files and loading metrics are available.
2. Add production images only after the asset register marks them approved.

## Adversarial visual verdict

The strongest quality is the editorial pacing and separation of worlds. The primary risk is visual thinness from the intentional absence of cleared assets, not excessive grunge. Game language remains contained to the selector and abstract frames. Texture never sits over reading text. Claims follow the verified publication boundaries. Mobile collapses composition and removes fragile movement rather than shrinking desktop overlaps.
