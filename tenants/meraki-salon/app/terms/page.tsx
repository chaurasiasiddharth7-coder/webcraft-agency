import type { Metadata } from "next"
import { SectionHead } from "@/components/section-head"
import { SiteShell } from "@/components/site-shell"

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms stub for the Meraki Salon demo template.",
}

export default function TermsPage() {
  return (
    <SiteShell>
      <section className="px-6 pb-24 pt-16 md:px-[6%] lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead kicker="Terms" title="Demo placeholder — not a live agreement.">
            <p>
              This is a sample template, not a live client. Replace this stub with the owner’s terms on
              closed_won. Prices, hours, and the phone number are demo facts lock.
            </p>
          </SectionHead>
        </div>
      </section>
    </SiteShell>
  )
}
