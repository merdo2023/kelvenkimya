'use client'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  compact?: boolean
  variant?: 'default' | 'refined'
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  light = false,
  compact = false,
  variant = 'default',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left'
  const accentAlign = align === 'center' ? 'justify-center' : 'justify-start'
  const titleColor = light ? 'text-white' : 'text-navy'
  const subtitleColor = light ? 'text-white/85' : 'text-muted'

  return (
    <div className={`max-w-3xl ${compact ? 'mb-6' : 'mb-14'} ${alignClass}`}>
      {variant === 'refined' ? (
        <div className={`mb-3 flex items-center gap-2 ${accentAlign}`}>
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan/50" aria-hidden="true" />
          <span className="h-1 w-1 rounded-full bg-cyan" aria-hidden="true" />
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan/50" aria-hidden="true" />
        </div>
      ) : (
        <div className={`flex items-center gap-3 ${compact ? 'mb-3' : 'mb-5'} ${accentAlign}`}>
          <span className="h-1 w-10 rounded-full gradient-accent" aria-hidden="true" />
          <span className="h-1 w-3 rounded-full bg-cyan/40" aria-hidden="true" />
        </div>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${compact ? 'mt-2.5' : 'mt-5'} ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
