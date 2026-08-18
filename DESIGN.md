# DESIGN.md — webcraft.solutions (lite Path A)

Public agency face. Operator console stays on `outreachagent.net`. This site does **not** ship R3F.

## North star

A local shop owner (bakery, salon, dental) should understand in five seconds: we build a site people can actually book from. Warm, premium, no SaaS jargon.

## Tokens

| Token | Value | Use |
|-------|--------|-----|
| `--ink` | `#0b1220` | Page ground |
| `--ink-2` | `#121a2b` | Sections |
| `--paper` | `#f4f6fa` | Unused on this dark page |
| `--signal` | `#c8f542` | CTA + labels |
| `--signal-ink` | `#142000` | Text on signal |
| `--slate` | `#8b98b0` | Body mute |
| `--line` | `rgba(255,255,255,0.1)` | Hairlines |

**Type:** Display = Syne (extrabold, tight tracking). Body = Plus Jakarta Sans.

**Radius:** pills `9999px` for CTAs. No cards-as-hero.

## IA (one page)

1. Header: brand + Book
2. Hero: one headline, one support, one Book CTA
3. Offer: Launch vs Rebuild (price ranges, no fake metrics)
4. Demos: labeled **demo, not a live client**
5. Footer: email + book

## Hard bans

- Purple gradients, stock couples, “#1 in city”, Lighthouse lectures
- Claiming a named client site is live
- `/console` or operator copy
- Raw `cal.com` URLs — book CTA is `https://outreachagent.net/book`

## 3D art direction + motion budget (appendix)

**Launch lite:** no WebGL. Signature motion is CSS (hero rise + one signal glow). No Three.js / R3F on this SKU.

**Performance contract:** LCP from display type + CSS gradient (no hero image required). Reduced-motion: disable rise/glow. Fonts via `next/font`.

## Motion storyboard

See `MOTION.md`.
