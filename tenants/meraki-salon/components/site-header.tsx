import Link from "next/link"
import { BOOK_URL, BRAND, NAV } from "@/lib/facts"

type SiteHeaderProps = {
  overlay?: boolean
}

export function SiteHeader({ overlay = false }: SiteHeaderProps) {
  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-20 bg-[linear-gradient(180deg,var(--void)_0%,rgba(10,10,11,0.88)_62%,transparent_100%)]"
          : "relative z-20 bg-[var(--void)]"
      }
    >
      {/* Overlay: brand + links stay in the void column; scrim covers mobile wrap over the still. */}
      <div
        className={
          overlay
            ? "mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-7 gap-y-2 px-6 py-5 md:px-[6%] lg:px-8"
            : "mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 md:px-[6%] lg:px-8"
        }
      >
        <Link className="font-label text-[12px] tracking-[0.12em] text-[var(--ink)]" href="/">
          {BRAND}
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              className="text-[13px] font-semibold text-[var(--ink)] hover:text-[var(--ink)]"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
          <a
            className="text-[13px] font-semibold text-[var(--ink)] hover:text-[var(--ink)]"
            href={BOOK_URL}
            rel="noopener noreferrer"
          >
            Book
          </a>
        </nav>
      </div>
    </header>
  )
}
