import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "webcraft.solutions — sites for bakeries, salons, and dental offices",
    template: "%s · webcraft.solutions",
  },
  description:
    "Simple sites US shops can actually book from. Launch $1,500–$2,500. Rebuild $3,000–$5,000. Austin, Phoenix, Dallas.",
  metadataBase: new URL("https://webcraft.solutions"),
  openGraph: {
    title: "webcraft.solutions",
    description: "Websites for US bakeries, salons, and dental offices.",
    url: "https://webcraft.solutions",
    siteName: "webcraft.solutions",
    type: "website",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
