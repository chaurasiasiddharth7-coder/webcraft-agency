type ServiceCardProps = {
  name: string
  range: string
  note: string
}

export function ServiceCard({ name, range, note }: ServiceCardProps) {
  return (
    <article className="service-card rounded-[24px] border border-[var(--line)] bg-transparent p-6 md:p-8">
      <p className="font-label text-[12px] tracking-[0.12em] text-[var(--muted)]">{name}</p>
      <p className="mt-3 font-display text-[1.75rem] leading-[0.94] tracking-[-0.04em] text-[var(--ink)]">{range}</p>
      <p className="mt-4 max-w-[62ch] text-[15px] leading-[1.7] text-[var(--muted)]">{note}</p>
    </article>
  )
}
