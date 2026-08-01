# Architecture summary and design rationale

The site is one publication with three departments: Build, Research, and Write. Server components render every page and case study; client JavaScript is limited to the accessible mobile menu and Act Selector. Typed routes, static generation, and a canonical project register keep navigation and public claims consistent.

Case studies share one semantic composition—question, summary, immediate evidence, deep reading, limitations where applicable, and manually curated related work—while each world changes palette, pacing, and editorial treatment. Mobile layouts reorder content into a linear reading sequence instead of preserving desktop overlap.

The visual system uses CSS rather than unapproved image textures. This preserves readability, reduces layout shift, and allows future rights-cleared media to replace abstractions without changing content structure.
