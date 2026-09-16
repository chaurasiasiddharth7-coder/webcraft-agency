import type { Metadata } from "next"
import { SectionHead } from "@/components/section-head"
import { SiteShell } from "@/components/site-shell"
import { CITIES } from "@/lib/facts"

export const metadata: Metadata = {
  title: "About",
  description: "Daylight color house — demo atelier story for Meraki Salon.",
}

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="px-6 pb-24 pt-16 md:px-[6%] lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead kicker="About" title="A daylight color house." />
          <div className="mt-12 max-w-[62ch] space-y-6 text-[var(--muted)]">
            <p>
              Meraki is a booking-first color and cut atelier. The floor is quiet on purpose: one
              guest, one chair, light from the window instead of a sales wall.
            </p>
            <p>
              Demo copy for {CITIES}. On a real win we swap this for the owner’s story, their photos,
              and the cities they actually serve.
            </p>
            <p>
              We do not stock a retail maze. If you need a product, we say so. If you don’t, we don’t
              invent a reason.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
