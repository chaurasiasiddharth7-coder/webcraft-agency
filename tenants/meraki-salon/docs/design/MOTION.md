# Motion storyboard — Meraki Salon

Companion to `tenants/meraki-salon/DESIGN.md` (relative: `../../DESIGN.md`). Board-directed Path A start (2026-09-17).

One easing site-wide: `cubic-bezier(0.22, 1, 0.36, 1)`.

## Beat table

| Beat | Trigger | Motion | Reduced-motion |
|------|---------|--------|----------------|
| Hero enter | first paint | Children y 16→0, 750ms, stagger 60ms; transform only. LCP text never starts at opacity 0. | Final layout instantly; no stagger |
| Hero still | load | Soft Ken Burns (scale only) on **local** hero image — minimal + unique | Static poster |
| R3F atmosphere | unique home only | Restrained particle/field on void using DESIGN.md accent only; no photography inside Canvas; dpr ≤1.5 | Do not mount Canvas |
| Section heads | scroll into view | GSAP ScrollTrigger fade/rise once (opacity + 16px y) | Final state only |
| Service cards | hover | `translateY(-4px)` over 500ms — nothing scales | Color/outline only |
| CTA | hover/focus | accent → accent-deep; 2px focus ring | Color change only |
| Marquee (optional unique) | visible | Two counter-running rows, linear infinite, edge mask 12%; pause off-screen | Static row |
| Footer | — | none | — |

## Tier A — Signature (home only)

| Lane | Signature |
|------|-----------|
| **Minimal** | CSS/GSAP hero rise + Ken Burns on local still. No WebGL. |
| **Unique** | Same CTA pair stays static. Optional R3F atmosphere as above. Unmount on reduced motion / tab hidden. |

## Tier B — Support

Section headings, card hover, optional marquee — see beat table.

## Tier C — Forbidden

- Auto-rotating camera
- Motion on every card
- Parallax + 3D + video together
- Animating width / height / box-shadow

## Reduced motion (hard)

`prefers-reduced-motion: reduce`:

- No Canvas mount
- Static poster remains
- GSAP plugins not registered / scrub disabled
- `scroll-behavior: auto`
