import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

type SiteShellProps = {
  children: React.ReactNode
  overlayNav?: boolean
}

export function SiteShell({ children, overlayNav = false }: SiteShellProps) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader overlay={overlayNav} />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  )
}
