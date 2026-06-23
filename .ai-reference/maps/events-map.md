# Events Map: brenosm-platform

## Browser Events Currently In Use
| Event | Handler | Purpose | Notes |
| --- | --- | --- | --- |
| `pointermove` | `PremiumCursor` | Track the pointer and move the ambient cursor layers | Uses motion values instead of React state. |
| `pointermove` | `HeroScene` | Drive the pseudo-3D hero scene | Clamped to the scene bounds. |
| `pointerleave` | `HeroScene` | Reset the hero scene pointer state | Returns the visual to center. |
| `submit` | `ContactForm` | Validate and prepare the mail handoff | Does not persist data. |
| `blur` | `ContactForm` inputs | Validate fields in real time | Keeps feedback local. |
| `click` | Landing directory links | Navigate to a landing showcase | Uses `next/link` for internal routing. |
| `click` | External CTA links | Open contact destinations | External links use `target="_blank"` only where appropriate. |
| Viewport intersection | `FadeInSection` | Trigger reveal animations | Used by the active home page and some landing shells. |

## Explicitly Missing Event System
- No custom event bus.
- No analytics event dispatcher.
- No server-side event listeners.
- No domain events.
- No pub/sub infrastructure.

## Event Risk Notes
- Pointer tracking and blur effects are visually nice but should be reviewed on low-power devices.
- If the dormant profile switcher or carousel sections are reactivated, they will introduce more local event handling that needs styling support.
