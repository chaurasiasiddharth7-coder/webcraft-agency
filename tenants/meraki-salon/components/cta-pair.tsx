import { BOOK_URL, CALL_TEL } from "@/lib/facts"

type CtaPairProps = {
  className?: string
}

export function CtaPair({ className = "" }: CtaPairProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a className="btn-primary" href={BOOK_URL} rel="noopener noreferrer">
        Book a chair
      </a>
      <a className="btn-ghost" href={CALL_TEL}>
        Call
      </a>
    </div>
  )
}
