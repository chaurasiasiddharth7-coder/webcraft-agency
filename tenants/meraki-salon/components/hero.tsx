import { CtaPair } from "@/components/cta-pair"
import { HeroRise } from "@/components/hero-rise"
import { UniqueAtmosphere } from "@/components/unique-atmosphere"
import { BRAND, CITIES } from "@/lib/facts"

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Unique lane mounts atmosphere here later. Minimal: no Canvas / WebGL. */}
      <UniqueAtmosphere />

      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element -- local SVG still; Ken Burns is CSS scale-only */}
        <img
          alt="Daylight color house interior, local demo still"
          className="hero-still h-full w-full object-cover"
          fetchPriority="high"
          src="/hero-still.svg"
        />
        <div aria-hidden className="hero-grain" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,var(--void)_0%,rgba(10,10,11,0.72)_34%,rgba(10,10,11,0.08)_100%)]"
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1200px] flex-col justify-center px-6 pb-16 pt-24 md:w-full md:px-[6%] lg:px-8">
        <HeroRise>
          <p className="font-label text-[12px] tracking-[0.12em] text-[var(--ink)]" data-hero-rise>
            {BRAND}
          </p>
          <h1
            className="mt-5 w-full font-display text-[clamp(2.4rem,6.2vw,52px)] leading-[0.94] tracking-[-0.04em] text-[var(--ink)] md:w-[min(42rem,72%)]"
            data-hero-rise
          >
            Book a chair. Color in daylight.
          </h1>
          <p
            className="mt-5 w-full max-w-[62ch] text-[16.5px] leading-[1.7] text-[var(--muted)] md:w-[min(36rem,60%)]"
            data-hero-rise
          >
            Owner-operated color and cut in {CITIES}. Calm menu. No retail pressure.
          </p>
          <div className="mt-8" data-hero-rise>
            <CtaPair />
          </div>
        </HeroRise>
      </div>
    </section>
  )
}
