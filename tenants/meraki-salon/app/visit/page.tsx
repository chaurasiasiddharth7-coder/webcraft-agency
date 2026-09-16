import type { Metadata } from "next"
import { CtaPair } from "@/components/cta-pair"
import { SectionHead } from "@/components/section-head"
import { SiteShell } from "@/components/site-shell"
import { CALL_LABEL, CALL_TEL, HOURS } from "@/lib/facts"

export const metadata: Metadata = {
  title: "Visit",
  description: "Hours, neighborhood, and click-to-call for the Meraki Salon demo.",
}

export default function VisitPage() {
  return (
    <SiteShell>
      <section className="px-6 pb-24 pt-16 md:px-[6%] lg:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2">
          <div>
            <SectionHead kicker="Visit" title="South Congress, Austin — demo pin.">
              <p>Neighborhood and hours are placeholders. Call the desk or book the chair.</p>
            </SectionHead>
            <dl className="mt-10 space-y-3 text-sm">
              {HOURS.map((row) => (
                <div className="flex justify-between gap-6 border-b border-[var(--line)] py-3" key={row.day}>
                  <dt className="text-[var(--muted)]">{row.day}</dt>
                  <dd className="text-[var(--ink)]">{row.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm text-[var(--muted)]">
              Desk:{" "}
              <a className="text-[var(--ink)] underline-offset-4 hover:underline" href={CALL_TEL}>
                {CALL_LABEL}
              </a>
            </p>
            <CtaPair className="mt-8" />
          </div>
          <section
            aria-labelledby="visit-map-heading"
            className="flex min-h-[280px] flex-col justify-end rounded-[24px] border border-[var(--line)] bg-[var(--bone)]/4 p-6"
          >
            <h2 id="visit-map-heading" className="font-label text-[12px] tracking-[0.12em] text-[var(--muted)]">
              Map
            </h2>
            <p className="mt-3 max-w-[36ch] text-sm text-[var(--muted)]">
              Map embed placeholder — South Congress / Austin (demo). No third-party tile until the
              address is real.
            </p>
          </section>
        </div>
      </section>
    </SiteShell>
  )
}
