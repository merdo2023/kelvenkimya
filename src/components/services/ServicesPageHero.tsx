'use client'

import { ChevronDown } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { Container } from '../common/Container'

export function ServicesPageHero() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden gradient-hero pb-12 pt-24 sm:pb-14 sm:pt-28 lg:pb-16">
      <div className="absolute inset-0 mesh-pattern opacity-25" aria-hidden="true" />
      <div className="absolute inset-0 blueprint-lines opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-cyan/12 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-green/10 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-fade-up about-stagger-1 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_rgba(0,166,214,0.8)]" aria-hidden="true" />
            {t('services.hero.eyebrow')}
          </span>

          <h1 className="animate-fade-up about-stagger-2 mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
            {t('services.hero.title')}
          </h1>

          <p className="animate-fade-up about-stagger-3 mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            {t('services.hero.description')}
          </p>
        </div>

        <div className="mt-10 flex justify-center" aria-hidden="true">
          <span className="animate-fade-up about-stagger-5 flex flex-col items-center gap-1 text-white/40">
            <ChevronDown className="h-4 w-4 motion-safe:animate-bounce" />
          </span>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-light-bg to-transparent" aria-hidden="true" />
    </section>
  )
}
