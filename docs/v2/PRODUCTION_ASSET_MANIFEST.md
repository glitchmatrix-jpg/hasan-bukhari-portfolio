# Direction C production asset manifest

This manifest records what the production homepage actually ships. A visual
being present in a prototype does not make it approved for production.

## Shipped visual assets

| Asset                         | Production path                                   | Origin                                                                                                       | Publication status                 | Notes                                                                                                                          |
| ----------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Chrome cherry identity poster | `public/assets/v2/identity-object-v1.png`         | Generated for this portfolio; prompt and generation record in `docs/v2/prototypes/IDENTITY_OBJECT_PROMPT.md` | Provisional / approved for preview | Static fallback for reduced motion and WebGL failure. Replace before final release if Hasan does not approve the exact object. |
| Procedural chrome cherry      | `src/components/identity/IdentityStage.tsx`       | Original code-native Three.js geometry authored for this portfolio                                           | Approved                           | No downloaded model, HDRI, or texture.                                                                                         |
| To Ash Again boundary art     | `public/assets/v2/taa-provenance-placeholder.svg` | Original code-native placeholder                                                                             | Approved                           | Deliberately prevents recovered project art from shipping before provenance review.                                            |
| HEARTLINE phone demonstration | `src/app/page.tsx` + `src/app/home.module.css`    | Original code-native interface composition                                                                   | Approved                           | Contains no album art, lyrics, or borrowed UI capture.                                                                         |
| CancerShift result figure     | `src/app/page.tsx` + `src/app/home.module.css`    | Original code-native figure using verified public results                                                    | Approved                           | Only 99.59% blind external microarray accuracy and 98.24% external RNA-seq accuracy are shown; limitations remain adjacent.    |
| Flooded book direction        | `src/app/page.tsx` + `src/app/home.module.css`    | Original code-native object                                                                                  | Approved for preview               | Contains no poem excerpt. Original book photography remains missing.                                                           |
| Human/SPA collage             | `src/app/page.tsx` + `src/app/home.module.css`    | Original code-native publication boundary                                                                    | Approved for preview               | No portrait or event photograph ships without rights and participant consent.                                                  |

## Bundled typefaces

| Typeface         | Package                        | License                   | Use                          |
| ---------------- | ------------------------------ | ------------------------- | ---------------------------- |
| Instrument Serif | `@fontsource/instrument-serif` | SIL Open Font License 1.1 | Display typography           |
| IBM Plex Sans    | `@fontsource/ibm-plex-sans`    | SIL Open Font License 1.1 | Body/interface typography    |
| IBM Plex Mono    | `@fontsource/ibm-plex-mono`    | SIL Open Font License 1.1 | Evidence labels and metadata |

The package license files remain in `node_modules` during development and are
available from each package's upstream repository. Fonts are bundled locally;
the page makes no runtime font request.

## Interaction dependencies

| Dependency           | License                         | Exact role                                                         |
| -------------------- | ------------------------------- | ------------------------------------------------------------------ |
| GSAP + `@gsap/react` | GSAP standard no-charge license | Entrance, reveal, and restrained scene parallax only               |
| Lenis                | MIT                             | Desktop fine-pointer smooth scrolling only; anchors remain enabled |
| Three.js             | MIT                             | Procedural hero object renderer                                    |
| React Three Fiber    | MIT                             | React renderer for the single procedural hero object               |

Vanta and copied React Bits components are not used. No external model, HDRI,
texture, photograph, lyric, album artwork, research figure, or game sprite is
redistributed by the production homepage.

## Required before final public release

- Approve or replace the identity poster and final procedural object.
- Capture a rights-safe HEARTLINE demo using synthetic song data.
- Confirm provenance for selected To Ash Again art before replacing the boundary.
- Supply and approve Flooded object photography and any exact excerpt.
- Supply a portrait and SPA evidence with creator rights and participant consent.
- Supply the two current résumé PDFs and verify dates/file metadata.
