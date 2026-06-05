'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { cardAccentColors } from '@/data/accentColors'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return reduced
}

function parseCompanyName(company: string): string {
  const match = company.match(/^(.+?)\s*\([^)]+\)\s*$/)
  return match ? match[1].trim() : company
}

function parseCompanyRegion(company: string): string | null {
  const match = company.match(/\(([^)]+)\)\s*$/)
  return match ? match[1].trim() : null
}

interface ReferenceCardProps {
  company: string
  index: number
  cardLabel: string
}

function ReferenceCard({ company, index, cardLabel }: ReferenceCardProps) {
  const accent = cardAccentColors[index % cardAccentColors.length]
  const name = parseCompanyName(company)
  const region = parseCompanyRegion(company)
  const label = String(index + 1).padStart(2, '0')

  return (
    <article className="group/card relative shrink-0">
      <div
        className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${accent.gradient} opacity-0 blur-sm transition-opacity duration-500 group-hover/card:opacity-40`}
        aria-hidden="true"
      />
      <div className="relative flex min-w-[11rem] items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.07] px-4 py-3.5 shadow-lg shadow-black/10 backdrop-blur-xl transition-colors duration-300 group-hover/card:border-white/25 group-hover/card:bg-white/[0.11] sm:min-w-[13rem] sm:px-5 sm:py-4">
        <span
          className={`bg-gradient-to-br ${accent.num} flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white/90`}
        >
          {label}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white sm:text-[15px]">{name}</p>
          {region ? (
            <p className="mt-0.5 truncate text-[10px] font-medium uppercase tracking-[0.12em] text-white/45">
              {region}
            </p>
          ) : (
            <p className="mt-0.5 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white/45">
              <span className={`h-1 w-1 rounded-full ${accent.dot}`} aria-hidden="true" />
              {cardLabel}
            </p>
          )}
        </div>
      </div>
    </article>
  )
}

interface ReferencesMarqueeProps {
  companies: string[]
}

export function ReferencesMarquee({ companies }: ReferencesMarqueeProps) {
  const { t } = useTranslation()
  const reducedMotion = usePrefersReducedMotion()
  const cardLabel = t('home.clientReferences.cardLabel')
  const loop = reducedMotion ? companies : [...companies, ...companies]

  return (
    <div className="refs-marquee relative w-full overflow-hidden py-2">
      <div
        className={`refs-marquee-track flex items-center gap-4 sm:gap-5 ${
          reducedMotion ? 'w-full max-w-3xl flex-wrap justify-center gap-3' : 'w-max'
        }`}
      >
        {loop.map((company, index) => (
          <ReferenceCard
            key={`${company}-${index}`}
            company={company}
            index={index % companies.length}
            cardLabel={cardLabel}
          />
        ))}
      </div>
    </div>
  )
}
