'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { Sparkles } from 'lucide-react'
import { Container } from '../common/Container'
import { AnimatedCounter } from '../common/AnimatedCounter'
import { ReferencesMarquee } from './ReferencesMarquee'
import { useLocaleArray } from '@/hooks/useLocaleArray'

export function ClientReferencesSection() {
  const { t } = useTranslation()
  const rowFirst = useLocaleArray<string>('home.clientReferences.rowFirst')
  const rowSecond = useLocaleArray<string>('home.clientReferences.rowSecond')
  const companies = [...rowFirst, ...rowSecond]

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 gradient-hero" aria-hidden="true" />
      <div className="absolute inset-0 mesh-pattern opacity-20" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan/40 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="animate-fade-up mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-green shadow-[0_0_8px_rgba(56,161,105,0.7)]" />
            {t('home.clientReferences.badge')}
          </span>

          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            {t('home.clientReferences.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
            {t('home.clientReferences.subtitle')}
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-2.5 backdrop-blur-md">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/25 to-green/20">
              <Sparkles className="h-4 w-4 text-cyan" strokeWidth={1.75} />
            </div>
            <div className="text-left">
              <p className="text-lg font-extrabold leading-none text-white">
                <AnimatedCounter value={String(companies.length)} />
              </p>
              <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.1em] text-white/75">
                {t('home.clientReferences.statLabel')}
              </p>
            </div>
          </div>
        </div>

        <div className="animate-fade-in relative mt-12 sm:mt-14" style={{ animationDelay: '120ms' }}>
          <div
            className="pointer-events-none absolute -inset-x-8 inset-y-4 rounded-[2rem] border border-white/[0.06] bg-white/[0.02] blur-0"
            aria-hidden="true"
          />
          <ReferencesMarquee companies={companies} />
        </div>

        <ul className="sr-only">
          {companies.map((company) => (
            <li key={company}>{company}</li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
