const BOOK = "https://outreachagent.net/book"
const SAMPLE = "https://outreachagent.net/sample-site"
const MAIL = "mailto:sid@outreachagent.net"

const DEMOS = [
  { label: "Salon demo", href: "https://leadgen-templates-theta.vercel.app/salon" },
  { label: "Dental demo", href: "https://leadgen-templates-theta.vercel.app/dental" },
  { label: "Jewelry demo", href: "https://leadgen-templates-theta.vercel.app/jewelry" },
  { label: "Local service demo", href: "https://leadgen-templates-theta.vercel.app/local-service" },
  { label: "Launch sample", href: SAMPLE },
] as const

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--foreground)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--signal)] focus:px-3 focus:py-2 focus:text-[var(--signal-ink)]"
      >
        Skip to content
      </a>

      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 md:px-8">
          <p className="font-display text-lg font-bold tracking-tight text-white">webcraft.solutions</p>
          <a
            href={BOOK}
            className="inline-flex min-h-11 items-center rounded-full bg-[var(--signal)] px-5 py-2 text-sm font-semibold text-[var(--signal-ink)] hover:opacity-90"
          >
            Book a look
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero-mesh px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-5xl">
            <p className="oa-rise text-xs font-semibold uppercase tracking-[0.2em] text-[var(--signal)]">
              Austin · Phoenix · Dallas
            </p>
            <h1 className="oa-rise oa-rise-delay-1 mt-4 max-w-2xl font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl">
              A site people can actually book from
            </h1>
            <p className="oa-rise oa-rise-delay-2 mt-6 max-w-xl text-base leading-relaxed text-[var(--slate)] sm:text-lg">
              We build simple sites for US bakeries, salons, and dental offices: hours, your photos, a
              big Book button. Fifteen minutes to look. No homework.
            </p>
            <div className="oa-rise oa-rise-delay-2 mt-8 flex flex-wrap gap-3">
              <a
                href={BOOK}
                className="inline-flex min-h-11 items-center rounded-full bg-[var(--signal)] px-6 py-3 text-sm font-semibold text-[var(--signal-ink)] hover:opacity-90"
              >
                Book a look
              </a>
              <a
                href={MAIL}
                className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-6 py-3 text-sm text-white hover:border-[var(--signal)]"
              >
                sid@outreachagent.net
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[var(--ink-2)] px-5 py-16 md:px-8">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--signal)]">Launch</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-white">No website yet</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--slate)]">
                Five pages. WhatsApp if you want it. Your Google Business name and phone. One revision.
                $1,500–$2,500. 50% to start.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--signal)]">Rebuild</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-white">Site that cannot take a booking</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--slate)]">
                Faster mobile page, appointment request (dental: not a clinical portal), lead inbox.
                $3,000–$5,000. 50% to start.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-5 py-16 md:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--signal)]">
              Demos — not live clients
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-white">Same stack, labeled sample</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {DEMOS.map((demo) => (
                <li key={demo.href}>
                  <a
                    href={demo.href}
                    className="block rounded-lg border border-white/10 px-4 py-4 text-sm text-white hover:border-[var(--signal)]"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {demo.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 text-sm text-[var(--slate)] md:flex-row md:justify-between md:px-8">
          <p>webcraft.solutions · 2026</p>
          <a href={BOOK} className="text-[var(--signal)] hover:underline">
            outreachagent.net/book
          </a>
        </div>
      </footer>
    </div>
  )
}
