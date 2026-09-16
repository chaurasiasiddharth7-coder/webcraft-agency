"use client"

import { useEffect, useRef } from "react"
import { MERAKI_EASE_GSAP } from "@/lib/motion"

type SectionHeadProps = {
  kicker?: string
  title: string
  as?: "h1" | "h2"
  children?: React.ReactNode
}

export function SectionHead({ kicker, title, as = "h1", children }: SectionHeadProps) {
  const ref = useRef<HTMLDivElement>(null)
  const Heading = as

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let ctx: { revert: () => void } | undefined
    let cancelled = false

    void (async () => {
      const [{ default: gsap }, { ScrollTrigger }, { CustomEase }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("gsap/CustomEase"),
      ])
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger, CustomEase)
      if (!CustomEase.get("meraki")) {
        CustomEase.create("meraki", MERAKI_EASE_GSAP)
      }
      ctx = gsap.context(() => {
        gsap.from(el, {
          y: 16,
          opacity: 0,
          duration: 0.75,
          ease: "meraki",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        })
      }, el)
    })()

    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [])

  return (
    <div ref={ref} className="max-w-[62ch]">
      {kicker ? (
        <p className="font-label text-[12px] tracking-[0.12em] text-[var(--muted)]">{kicker}</p>
      ) : null}
      <Heading className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-[0.94] tracking-[-0.04em] text-[var(--ink)]">
        {title}
      </Heading>
      {children ? <div className="mt-4 text-[var(--muted)]">{children}</div> : null}
    </div>
  )
}
