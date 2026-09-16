import type { Metadata } from "next"
import { SectionHead } from "@/components/section-head"
import { ServiceCard } from "@/components/service-card"
import { SiteShell } from "@/components/site-shell"
import { SERVICES } from "@/lib/facts"

export const metadata: Metadata = {
  title: "Services",
  description: "Color, cut, treatment, and event menu with honest price ranges.",
}

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="px-6 pb-24 pt-16 md:px-[6%] lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead kicker="Services" title="Hairline cards. Honest ranges.">
            <p>No packages stacked to upsell. Ask for the consult if the range feels wide — it should.</p>
          </SectionHead>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {SERVICES.map((service) => (
              <li key={service.name}>
                <ServiceCard name={service.name} note={service.note} range={service.range} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  )
}
