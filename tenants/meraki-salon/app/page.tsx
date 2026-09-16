import { CtaPair } from "@/components/cta-pair"
import { Hero } from "@/components/hero"
import { SectionHead } from "@/components/section-head"
import { ServiceCard } from "@/components/service-card"
import { SiteShell } from "@/components/site-shell"
import { CITIES, SERVICES } from "@/lib/facts"
import Link from "next/link"

export default function HomePage() {
  return (
    <SiteShell overlayNav>
      <Hero />

      <section className="border-y border-[var(--line)] px-6 py-8 md:px-[6%] lg:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3">
          <p className="font-label text-[12px] tracking-[0.12em] text-[var(--muted)]">Owner-operated</p>
          <p className="text-sm text-[var(--ink)]">{CITIES}</p>
          <p className="text-sm text-[var(--muted)]">Color + cut atelier</p>
        </div>
      </section>

      <section className="px-6 py-[var(--section)] md:px-[6%] lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead as="h2" kicker="Menu" title="Honest ranges. No hero grid.">
            <p>Color, cut, treatment, event. Prices are ranges so the consult can stay honest.</p>
          </SectionHead>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {SERVICES.map((service) => (
              <li key={service.name}>
                <ServiceCard name={service.name} note={service.note} range={service.range} />
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link className="text-sm text-[var(--ink)] underline-offset-4 hover:underline" href="/services">
              Full menu
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--line)] px-6 py-[var(--section)] md:px-[6%] lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead as="h2" kicker="Book" title="The chair is the product.">
            <p>Pick a time, or call the desk. Demo booking link — replace on closed_won.</p>
          </SectionHead>
          <CtaPair className="mt-8" />
        </div>
      </section>
    </SiteShell>
  )
}
