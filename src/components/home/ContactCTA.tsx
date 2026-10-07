'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '../common/Container'

export function ContactCTA() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden py-12 sm:py-14">
      <div className="section-muted absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-48 w-48 rounded-full bg-cyan/5 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-green/5 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <div className="group relative mx-auto max-w-4xl animate-fade-up">
          <div
            className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan/20 via-white/8 to-green/20 opacity-60 transition-opacity duration-500 group-hover:opacity-90"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 gradient-hero px-5 py-8 shadow-[0_16px_48px_-16px_rgba(11,31,51,0.4)] transition-shadow duration-500 group-hover:shadow-[0_20px_56px_-18px_rgba(11,31,51,0.48)] sm:px-8 sm:py-10">
            <div className="absolute inset-0 mesh-pattern opacity-15" aria-hidden="true" />

            <div
              className="cta-glow-drift-right pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan/15 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="cta-glow-drift-left pointer-events-none absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-green/10 blur-3xl"
              aria-hidden="true"
            />

            <div
              className="cta-ring-slow pointer-events-none absolute inset-4 rounded-xl border border-white/5 sm:inset-5"
              aria-hidden="true"
            />

            <div className="relative text-center">
              <div className="mx-auto flex items-center justify-center gap-2.5">
                <span className="h-1 w-1 rounded-full bg-cyan" aria-hidden="true" />
                <div className="h-px w-10 bg-gradient-to-r from-cyan to-green/70" aria-hidden="true" />
                <span className="h-1 w-1 rounded-full bg-green" aria-hidden="true" />
              </div>

              <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-bold leading-snug text-white sm:text-3xl">
                {t('home.contactCta.title')}
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                {t('home.contactCta.subtitle')}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${t('contact.info.email')}?subject=${encodeURIComponent(t('home.contactCta.primaryCta'))}`}
                  className="group/btn inline-flex items-center gap-2.5 rounded-xl gradient-accent px-6 py-3 text-sm font-semibold text-white shadow-md shadow-cyan/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan/35 active:scale-[0.98] sm:text-base"
                >
                  {t('home.contactCta.primaryCta')}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover/btn:bg-white/30">
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </span>
                </a>

                <a
                  href={t('whatsapp.href')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-white/45 hover:bg-white/10 active:scale-[0.98] sm:text-base"
                >
                  {t('home.contactCta.secondaryCta')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
