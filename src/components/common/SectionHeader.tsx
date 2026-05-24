'use client'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left'
  const accentAlign = align === 'center' ? 'justify-center' : 'justify-start'
  const titleColor = light ? 'text-white' : 'text-navy'
  const subtitleColor = light ? 'text-white/70' : 'text-muted'

  return (
    <div className={`mb-14 max-w-3xl ${alignClass}`}>
      <div className={`mb-5 flex items-center gap-3 ${accentAlign}`}>
        <span className="h-1 w-10 rounded-full gradient-accent" aria-hidden="true" />
        <span className="h-1 w-3 rounded-full bg-cyan/40" aria-hidden="true" />
      </div>
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed ${subtitleColor}`}>{subtitle}</p>
      )}
    </div>
  )
}
