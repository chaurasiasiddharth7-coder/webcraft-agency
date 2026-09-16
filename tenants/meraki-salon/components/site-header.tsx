import Link from "next/link"
import { BOOK_URL, BRAND, NAV } from "@/lib/facts"

type SiteHeaderProps = {
  overlay?: boolean
}

export function SiteHeader({ overlay = false }: SiteHeaderProps) {
  return (
    <header className={overlay ? "absolute inset-x-0 top-0 z-20" : "relative z-20 bg-[var(--void)]"}>
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 md:px-[6%] lg:px-8">
        <Link className="font-label text-[12px] tracking-[0.12em] text-[var(--ink)]" href="/">
          {BRAND}
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              className="text-[13px] text-[var(--ink)]/90 hover:text-[var(--ink)]"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
          <a className="text-[13px] text-[var(--ink)]/90 hover:text-[var(--ink)]" href={BOOK_URL} rel="noopener noreferrer">
            Book
          </a>
        </nav>
      </div>
    </header>
  )
}
