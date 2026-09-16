export const BOOK_URL = "https://outreachagent.net/book"
export const CALL_TEL = "tel:+15125550162"
export const CALL_LABEL = "(512) 555-0162"
export const BRAND = "Meraki Salon"
export const CITIES = "Austin · Phoenix · Dallas"

export const NAV = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit" },
] as const

export const SERVICES = [
  {
    name: "Color",
    range: "$95–$240",
    note: "Single process through lived-in balayage. Consult first — we don’t guess the formula.",
  },
  {
    name: "Cut",
    range: "$65–$120",
    note: "Shape and finish for the way you actually wear it. Dry cut available.",
  },
  {
    name: "Treatment",
    range: "$45–$90",
    note: "Bond repair and gloss. Honest menu — no retail pressure at the chair.",
  },
  {
    name: "Event",
    range: "$85–$160",
    note: "Upstyle and rehearsal. Book the chair, then the look.",
  },
] as const

export const HOURS = [
  { day: "Tuesday–Friday", time: "9:00–19:00" },
  { day: "Saturday", time: "9:00–17:00" },
  { day: "Sunday", time: "10:00–16:00" },
  { day: "Monday", time: "Closed" },
] as const
