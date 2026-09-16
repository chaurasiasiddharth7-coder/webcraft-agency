import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

type SiteShellProps = {
  children: React.ReactNode
  overlayNav?: boolean
}

export function SiteShell({ children, overlayNav = false }: SiteShellProps) {
  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--on-accent)]"
        href="#main"
      >
        Skip to content
      </a>
      <SiteHeader overlay={overlayNav} />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  )
}
