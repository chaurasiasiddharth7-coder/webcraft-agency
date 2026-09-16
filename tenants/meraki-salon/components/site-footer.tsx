import Link from "next/link"
import { BOOK_URL, BRAND, NAV } from "@/lib/facts"

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-10 md:flex-row md:items-end md:justify-between md:px-[6%] lg:px-8">
        <div>
          <p className="font-label text-[12px] tracking-[0.12em] text-[var(--ink)]">{BRAND}</p>
          <p className="mt-3 max-w-[62ch] text-sm text-[var(--muted)]">Sample template — not a live client</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
          {NAV.map((item) => (
            <Link key={item.href} className="hover:text-[var(--ink)]" href={item.href}>
              {item.label}
            </Link>
          ))}
          <a className="hover:text-[var(--ink)]" href={BOOK_URL} rel="noopener noreferrer">
            Book
          </a>
          <span>Privacy</span>
          <span>Terms</span>
        </nav>
      </div>
    </footer>
  )
}
