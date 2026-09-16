import type { Metadata } from "next"
import { Fraunces, Manrope } from "next/font/google"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-display",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Meraki Salon — book a chair",
    template: "%s · Meraki Salon",
  },
  description:
    "Demo color and cut atelier for Austin, Phoenix, and Dallas. Book a chair or call. Sample template — not a live client.",
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
