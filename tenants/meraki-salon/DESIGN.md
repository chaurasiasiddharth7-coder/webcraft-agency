---
version: board-draft-2026-09-17
name: Meraki Salon
description: Path A demo tenant — booking-first color and cut atelier for US SMB salon outreach. Hosted under webcraft-agency until Board names a bakery tenant.
colors:
  void: "#0A0A0B"
  bone: "#F7F4F1"
  ink: "#F4F1EC"
  muted: "#A39E97"
  line: "rgba(244,241,236,0.12)"
  accent: "#E8A4B8"
  accent-deep: "#C47A92"
  on-accent: "#1A1014"
typography:
  display:
    fontFamily: Fraunces
    fontSize: 52px
    fontWeight: 500
    lineHeight: 0.94
    letterSpacing: -0.04em
  body:
    fontFamily: Manrope
    fontSize: 16.5px
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.12em
rounded:
  sm: 8px
  md: 16px
  lg: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.full}"
    padding: 12px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: 12px
---

# Meraki Salon — DESIGN.md

**Status:** Board-directed Path A start (2026-09-17). Gate docs first — no page UI until Board/CTO have no hard block.  
**Gate:** Site Builder must not write page UI until this file + `docs/design/MOTION.md` exist and Board/CTO have no hard block.  
**Stack:** Next.js App Router · Tailwind · GSAP · R3F atmosphere on home only (unique lane).  
**A/B:** Ship both **minimal** and **unique** lanes unless Board names one.  
**Host (Board):** Work inside **webcraft-agency** for now — do **not** create or edit a `golden-crust-bakery/meraki-salon` tenant yet. Never edit bakery root `app/`. Repo path: `tenants/meraki-salon/` (own app or isolated routes later). Do not overwrite root `DESIGN.md` / `MOTION.md` (agency face).

## North star

Austin / Phoenix / Dallas owner-operated salon guests decide in five seconds: Book a chair, or Call. The site feels like a daylight color house — calm, honest menu, zero retail pressure.

## Facts lock (demo — replace on closed_won)

| Field | Value |
|-------|--------|
| Brand | Meraki Salon |
| Vertical | Color + cut atelier (US SMB salon) |
| ICP cities | Austin · Phoenix · Dallas |
| Primary CTA | Book a chair → `https://outreachagent.net/book` (demo) or Fresha/Cal on win |
| Secondary CTA | Call → `tel:+15125550162` (demo placeholder) |
| Footer | One line: “Sample template — not a live client” |

## Tokens

| Token | Value | Use |
|-------|--------|-----|
| void | `#0A0A0B` | page ground; cinematic dark canvas |
| ink | `#F4F1EC` | primary text on dark |
| muted | `#A39E97` | secondary copy |
| accent | `#E8A4B8` | sole filled CTA; ≤4 accent hits per viewport |
| accent-deep | `#C47A92` | hover / pressed |
| on-accent | `#1A1014` | text on filled CTA |
| bone | `#F7F4F1` | optional light inner-surface (About/menu cards) |
| line | `rgba(244,241,236,0.12)` | hairline borders |
| display | Fraunces 500, tracking -0.04em | H1 / display |
| body | Manrope 400, 16.5px / 1.7 | UI copy; measure ≤62ch |

No second accent. No gradient text. No Inter/Roboto as hero type.

## IA

1. **Home** — full-viewport hero (brand, H1, one support line, Call + Book) · trust strip · services teaser · booking CTA
2. **Services / Menu** — hairline cards (Color · Cut · Treatment · Event); honest price ranges; no hero card grid
3. **About** — atelier story, daylight craft, city roots (demo copy owned)
4. **Visit** — hours, neighborhood, map embed placeholder, click-to-call
5. **Book** — deep-link / embed to book URL (or sticky bar → same)
6. **Footer** — legal-ish links stub + single demo disclaimer

SEO location landing (e.g. “Color salon in Austin”) is optional Phase 2 — not blocking first UI.

## Layout

- Max width ~1100–1280px. Section rhythm 80–120px (`spacing.section` ≈ 96px).
- Hero full viewport; desktop (≥768 / ≥960) hero copy uses rem/% container width per UI-SPEC — not a phone-narrow ch box.
- Service menu as hairline cards (`rounded.lg` 24px), not a hero card grid.
- Transparent nav on canvas; optional sticky booking bar on mobile unique lane.
- Focus ring 2px offset on every interactive control.

## Elevation & depth

Tonal layers and 1px hairlines only. No drop shadows on cards. Optional ~3.5% grain overlay (blend overlay) on hero only.

## Shapes

Pills for CTAs (`9999px`). Cards `24px`.

## Components

- **Primary:** Book a chair → outreachagent.net/book (demo) / Fresha·Cal on win.
- **Ghost:** Call with `tel:` from facts lock.
- Nav: brand mark + Services · About · Visit · Book.
- Media: local/owner photos only; self-host under `public/` or `media/`. No Unsplash / remote stock.

## Motion

See `docs/design/MOTION.md`. One site easing: `cubic-bezier(0.22, 1, 0.36, 1)`. Gate all motion with `prefers-reduced-motion`.

## Hard bans

- Unsplash / remote stock hotlinks
- Purple SaaS gradients, glass stacks, fake Google stars, competitor names
- Card grids in the hero; toy 3D; auto-spinning cameras
- Editing bakery root `app/`; starting a bakery `meraki-salon` tenant until Board reopens Path A bakery
- Vercel `--prod` / Hostinger go-live without Board nod in `company_os/state/approvals.jsonl`

## A/B lanes

Default both **minimal** and **unique** until Board names one lane in the same message.

| Lane | Signature |
|------|-----------|
| Minimal | CSS/GSAP hero rise + soft Ken Burns on a **local** still. No WebGL. |
| Unique | Same CTA pair static. Optional R3F atmosphere on home only (accent particles on void; no photos in Canvas). |

## Site Builder handoff path (box SoT until Mac/repo sync)

- `/workspace/meraki-salon/DESIGN.md`
- `/workspace/meraki-salon/docs/design/MOTION.md`

PR target: `tenants/meraki-salon/DESIGN.md` + `tenants/meraki-salon/docs/design/MOTION.md`.
