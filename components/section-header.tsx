interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({ label, title, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
      <span className="text-secondary font-semibold text-sm uppercase tracking-wider">{label}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 font-serif">{title}</h2>
      {description && <p className="text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  )
}
