"use client"

import { useEffect, useRef } from "react"
import { MERAKI_EASE_GSAP } from "@/lib/motion"

type HeroRiseProps = {
  children: React.ReactNode
}

export function HeroRise({ children }: HeroRiseProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const items = root.querySelectorAll("[data-hero-rise]")
    let ctx: { revert: () => void } | undefined
    let cancelled = false

    void (async () => {
      const [{ default: gsap }, { CustomEase }] = await Promise.all([
        import("gsap"),
        import("gsap/CustomEase"),
      ])
      if (cancelled) return
      gsap.registerPlugin(CustomEase)
      if (!CustomEase.get("meraki")) {
        CustomEase.create("meraki", MERAKI_EASE_GSAP)
      }
      ctx = gsap.context(() => {
        gsap.to(items, {
          y: 0,
          duration: 0.75,
          stagger: 0.06,
          ease: "meraki",
          clearProps: "transform",
        })
      }, root)
    })()

    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [])

  return <div ref={rootRef}>{children}</div>
}
