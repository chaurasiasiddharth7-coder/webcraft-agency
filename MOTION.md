# Motion storyboard — webcraft.solutions

## Tier A (signature)

Hero headline + CTA rise 420ms ease-out on first paint (`oa-rise`). Signal mesh glow is a static radial, not a loop.

## Tier B (support)

Section hairlines only. Demo links: underline on hover, 150ms color.

## Reduced motion

`prefers-reduced-motion: reduce` → no rise, no glow animation, instant states.

## Fallback

If JS is off, content is fully readable; CTAs are real `<a href>`.
