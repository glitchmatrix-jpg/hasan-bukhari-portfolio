# Motion Inventory

Motion is progressive enhancement. Reading, navigation, and project comprehension never depend on it.

| Motion                    |            Duration | Easing                   | Trigger                 | Reduced-motion fallback | Cost                      |
| ------------------------- | ------------------: | ------------------------ | ----------------------- | ----------------------- | ------------------------- |
| Homepage copy entrance    |               700ms | cubic-bezier(.2,.8,.2,1) | first paint             | final static state      | compositor-only, once     |
| Homepage collage settle   | 700ms + 120ms delay | cubic-bezier(.2,.8,.2,1) | first paint             | final static state      | compositor-only, once     |
| Stamp impact              |               220ms | cubic-bezier(.2,.8,.2,1) | element paint           | static stamp            | compositor-only, once     |
| Mobile menu unfold        |               220ms | cubic-bezier(.2,.8,.2,1) | dialog opens            | immediate open/close    | compositor-only           |
| Act Selector world change |               380ms | ease-out                 | explicit tab selection  | instant state switch    | background/transform only |
| Button press              |               140ms | ease-out                 | hover/focus/activation  | border and color state  | compositor-only           |
| Editorial link nudge      |               140ms | ease-out                 | hover or keyboard focus | color/border state      | compositor-only           |
| Loading pulse             |   900ms alternating | ease-in-out              | genuine loading state   | static dot              | one small element         |

Rejected: scroll-jacking, continuous parallax, autoplay media, looping decorative sprites, photocopy flashes, page-transition delays, cursor followers, and required cinematic navigation.
