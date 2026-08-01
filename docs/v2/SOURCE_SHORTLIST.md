# Licensed supporting-resource shortlist

This is a procurement shortlist, not an instruction to download everything.
The final site should use fewer external resources than this list permits.

## Typography

### Instrument Serif

- Use: editorial display only.
- Source: <https://github.com/Instrument/instrument-serif>
- License: SIL Open Font License 1.1.
- Why it fits: a condensed contemporary serif that can carry a dramatic hero
  without resorting to ransom-note typography.
- Decision: recommended for the first static studies.

### IBM Plex Sans and IBM Plex Mono

- Use: body/UI and evidence labels.
- Source: <https://github.com/IBM/plex>
- License: SIL Open Font License 1.1.
- Why it fits: neutral, highly legible, and technically credible without making
  the whole site look like a terminal.
- Decision: recommended for the first static studies.

Production rule: self-host only the necessary subsets and weights. If this pair
cannot create enough personality through scale, spacing, and composition, solve
the art direction—not by adding a third display font.

## 3D and interaction

### Three.js

- Source: <https://github.com/mrdoob/three.js>
- License: MIT.
- Potential use: render one authored cherry-chrome identity object.

### React Three Fiber

- Source: <https://github.com/pmndrs/react-three-fiber>
- License: MIT.
- Compatibility note: the official project states version 9 pairs with React
  19, which matches the current application.
- Potential use: a single progressive-enhancement client island.

### Drei

- Source: <https://github.com/pmndrs/drei>
- License: MIT.
- Potential use: only targeted helpers needed by the hero scene.

3D gate:

- model the identity object for this portfolio; do not download a generic hero
  model;
- no physics engine, audio, or full-page canvas;
- reserve the final canvas size before load;
- provide an art-directed still for reduced motion, low capability, and loading;
- lazy-load after meaningful text and navigation;
- remove 3D if it cannot stay inside the agreed performance budget.

## Materials and lighting

### Poly Haven

- Source: <https://polyhaven.com/>
- License: CC0.
- Potential use: one studio HDRI or restrained PBR material for the identity
  object.

### ambientCG

- Source: <https://ambientcg.com/>
- License: CC0.
- Potential use: paper, fabric, or surface reference when an authored scan is
  unavailable.

### Kenney

- Source: <https://kenney.nl/assets>
- License: asset-page releases are CC0; verify the included license for the
  selected download.
- Potential use: prototyping only. The To Ash Again feature should prioritize
  its own recovered art, not generic game assets.

Material rule: create tape, patches, halftone, photocopy edges, and paper wear
in-house whenever practical. External textures provide subtle material truth,
not the composition or personality.

## Explicit exclusions

- Pinterest and moodboard aggregators as asset sources;
- screenshots of other portfolios;
- unlicensed Google Images results;
- newspaper scans without item-level rights;
- third-party 3D models whose license or authorship is unclear;
- textures that materially reduce reading contrast;
- a general-purpose animation library added for one trivial effect.
