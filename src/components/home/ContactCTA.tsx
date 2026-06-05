'use client'

import { Link } from '@/i18n/navigation'
import { useTranslation } from '@/hooks/useTranslation'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '../common/Container'
import { routes } from '@/data/routes'

export function ContactCTA() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden py-24">
      <div className="section-muted absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan/5 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-green/5 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <div className="group relative animate-fade-up">
          <div
            className="absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan/25 via-white/10 to-green/25 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 gradient-hero px-8 py-16 shadow-[0_24px_64px_-16px_rgba(11,31,51,0.45)] transition-shadow duration-500 group-hover:shadow-[0_32px_80px_-20px_rgba(11,31,51,0.55)] sm:px-16 sm:py-20">
            <div className="absolute inset-0 mesh-pattern opacity-20" aria-hidden="true" />

            <div
              className="cta-glow-drift-right pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="cta-glow-drift-left pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-green/15 blur-3xl"
              aria-hidden="true"
            />

            <div
              className="cta-ring-slow pointer-events-none absolute inset-8 rounded-[2rem] border border-white/5 sm:inset-12"
              aria-hidden="true"
            />

            <span
              className="pointer-events-none absolute -right-2 top-4 select-none bg-gradient-to-br from-white/10 to-white/[0.02] bg-clip-text text-[5.5rem] font-extrabold leading-none text-transparent sm:text-[7rem]"
              aria-hidden="true"
            >
              →
            </span>

            <div
              className="absolute left-8 top-0 hidden h-full w-[3px] rounded-b-full bg-gradient-to-b from-cyan via-brand-blue to-green/60 opacity-90 sm:block sm:left-12"
              aria-hidden="true"
            />

            <div className="relative text-center">
              <div className="mx-auto flex items-center justify-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
                <div className="h-px w-12 bg-gradient-to-r from-cyan to-green/70" aria-hidden="true" />
                <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />
              </div>

              <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {t('home.contactCta.title')}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                {t('home.contactCta.subtitle')}
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={routes.contact}
                  className="group/btn inline-flex items-center gap-3 rounded-xl gradient-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-cyan/40 active:scale-[0.98]"
                >
                  {t('home.contactCta.primaryCta')}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover/btn:bg-white/30">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </span>
                </Link>

                <Link
                  href={routes.contact}
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-white/50 hover:bg-white/12 active:scale-[0.98]"
                >
                  {t('home.contactCta.secondaryCta')}
                </Link>
              </div>

              <div className="mx-auto mt-10 flex max-w-xs items-center justify-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan/80" aria-hidden="true" />
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden="true" />
                <span className="h-1 w-1 rounded-full bg-green/80" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
