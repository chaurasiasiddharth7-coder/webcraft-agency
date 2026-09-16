import type { Metadata } from "next"
import { SectionHead } from "@/components/section-head"
import { SiteShell } from "@/components/site-shell"

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy stub for the Meraki Salon demo template.",
}

export default function PrivacyPage() {
  return (
    <SiteShell>
      <section className="px-6 pb-24 pt-16 md:px-[6%] lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead kicker="Privacy" title="Demo placeholder — not a live policy.">
            <p>
              This is a sample template, not a live client. Replace this stub with the owner’s privacy
              notice on closed_won. We do not collect bookings on this domain; the Book CTA leaves for
              outreachagent.net.
            </p>
          </SectionHead>
        </div>
      </section>
    </SiteShell>
  )
}
