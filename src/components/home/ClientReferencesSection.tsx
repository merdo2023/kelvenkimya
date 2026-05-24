'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { AnimatedCounter } from '../common/AnimatedCounter'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import { cardAccentColors } from '@/data/accentColors'

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(media.matches)
    const onChange = () => setPrefersReducedMotion(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return prefersReducedMotion
}

const ease = [0.22, 1, 0.36, 1] as const

interface CompanyPillProps {
  company: string
  index: number
}

function CompanyPill({ company, index }: CompanyPillProps) {
  const accent = cardAccentColors[index % cardAccentColors.length]

  return (
    <div className="group/pill relative shrink-0">
      <div
        className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${accent.wash} opacity-0 transition-opacity duration-500 group-hover/pill:opacity-100`}
        aria-hidden="true"
      />
      <div className="relative flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.07] px-7 py-4 backdrop-blur-md transition-all duration-300 group-hover/pill:border-white/25 group-hover/pill:bg-white/[0.12] sm:px-9 sm:py-5">
        <span className={`h-2 w-2 shrink-0 rounded-full ${accent.dot} shadow-[0_0_12px_currentColor] opacity-80`} aria-hidden="true" />
        <span className="whitespace-nowrap text-base font-semibold tracking-tight text-white sm:text-lg">
          {company}
        </span>
      </div>
    </div>
  )
}

interface MarqueeRowProps {
  companies: string[]
  reverse?: boolean
}

function MarqueeRow({ companies, reverse = false }: MarqueeRowProps) {
  const loop = [...companies, ...companies]

  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#071525] to-transparent sm:w-24"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#071525] to-transparent sm:w-24"
        aria-hidden="true"
      />

      <div className={`flex w-max gap-4 sm:gap-5 ${reverse ? 'marquee-track-reverse' : 'marquee-track'}`}>
        {loop.map((company, i) => (
          <CompanyPill key={`${company}-${i}`} company={company} index={i % companies.length} />
        ))}
      </div>
    </div>
  )
}

export function ClientReferencesSection() {
  const { t } = useTranslation()
  const prefersReducedMotion = usePrefersReducedMotion()
  const companies = useLocaleArray<string>('home.clientReferences.companies')
  const reversed = [...companies].reverse()

  return (
    <section className="relative overflow-hidden py-24">
      <div className="section-muted absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan/5 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green/5 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease }}
        >
          <SectionHeader
            title={t('home.clientReferences.title')}
            subtitle={t('home.clientReferences.subtitle')}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.1, ease }}
          className="group relative"
        >
          <div
            className="absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan/25 via-white/10 to-green/25 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          />

          <div className="marquee-group relative overflow-hidden rounded-3xl border border-white/10 gradient-hero shadow-[0_24px_64px_-16px_rgba(11,31,51,0.45)]">
            <div className="absolute inset-0 mesh-pattern opacity-20" aria-hidden="true" />

            <motion.div
              className="pointer-events-none absolute -left-20 top-1/4 h-56 w-56 rounded-full bg-cyan/15 blur-3xl"
              animate={{ x: [0, 20, 0], y: [0, -12, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            />
            <motion.div
              className="pointer-events-none absolute -right-20 bottom-1/4 h-56 w-56 rounded-full bg-green/12 blur-3xl"
              animate={{ x: [0, -16, 0], y: [0, 14, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            />

            <motion.div
              className="pointer-events-none absolute inset-6 rounded-[1.75rem] border border-white/5 sm:inset-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              aria-hidden="true"
            />

            <div className="relative px-6 py-10 sm:px-10 sm:py-14">
              <div className="mb-10 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
                    <motion.div
                      className="h-px bg-gradient-to-r from-cyan to-green/70"
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2, ease }}
                    />
                  </div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                    {t('home.clientReferences.badge')}
                  </p>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
                  <AnimatedCounter
                    value={String(companies.length)}
                    className="text-4xl font-extrabold text-white"
                  />
                  <p className="max-w-[8rem] text-sm leading-snug text-white/65">
                    {t('home.clientReferences.statLabel')}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {prefersReducedMotion ? (
                  <div className="flex flex-wrap justify-center gap-4">
                    {companies.map((company, index) => (
                      <CompanyPill key={company} company={company} index={index} />
                    ))}
                  </div>
                ) : (
                  <>
                    <MarqueeRow companies={companies} />
                    <MarqueeRow companies={reversed} reverse />
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <ul className="sr-only">
          {companies.map((company) => (
            <li key={company}>{company}</li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
