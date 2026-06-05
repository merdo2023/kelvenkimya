'use client'

import { Link } from '@/i18n/navigation'
import { useTranslation } from '@/hooks/useTranslation'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '../common/Container'
import { AnimatedCounter } from '../common/AnimatedCounter'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import { cardAccentColors } from '@/data/accentColors'
import { routes } from '@/data/routes'
import type { StatItem } from '@/types/locale'

export function AboutPreviewSection() {
  const { t } = useTranslation()
  const stats = useLocaleArray<StatItem>('home.stats')
  const experienceStat = stats.find((stat) => stat.icon === 'award')
  const otherStats = stats.filter((stat) => stat.icon !== 'award')
  const accent = cardAccentColors[0]

  return (
    <section className="relative overflow-hidden py-24">
      <div className="section-muted absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan/5 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <div className="group relative animate-fade-up">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white via-border/20 to-white opacity-90" aria-hidden="true" />
          <div
            className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${accent.wash} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_4px_40px_-10px_rgba(11,31,51,0.1)] transition-shadow duration-300 group-hover:shadow-[0_20px_56px_-14px_rgba(11,31,51,0.15)]">
            <div className="grid items-center gap-10 p-8 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
              <div className="relative lg:col-span-7">
                <div
                  className={`absolute left-0 top-0 h-full w-[3px] rounded-full bg-gradient-to-b ${accent.gradient} opacity-80`}
                  aria-hidden="true"
                />

                <div className="pl-6">
                  <div className="flex items-center gap-3">
                    <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} aria-hidden="true" />
                    <div className={`h-px w-14 bg-gradient-to-r ${accent.gradient}`} aria-hidden="true" />
                  </div>

                  <h2 className="mt-6 text-3xl font-bold leading-tight text-navy sm:text-4xl">
                    {t('home.aboutPreview.title')}
                  </h2>

                  <p className="mt-5 text-base leading-[1.75] text-muted sm:text-lg">
                    {t('home.aboutPreview.description')}
                  </p>

                  <Link
                    href={routes.about}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brand-blue transition-all duration-300 hover:gap-3 hover:text-cyan"
                  >
                    {t('home.aboutPreview.cta')}
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-light-bg transition-all duration-300 hover:border-cyan/30 hover:bg-cyan/5">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>

              <div className="relative lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-light-bg/80 p-8 sm:p-10">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan/10 blur-2xl" aria-hidden="true" />
                  <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-green/8 blur-2xl" aria-hidden="true" />

                  <div
                    className="about-preview-ring pointer-events-none absolute inset-4 rounded-full border border-cyan/10"
                    aria-hidden="true"
                  />

                  <div className="relative text-center">
                    {experienceStat && (
                      <>
                        <AnimatedCounter
                          value={experienceStat.value}
                          className="bg-gradient-to-br from-navy via-brand-blue to-cyan bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl"
                        />
                        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-muted">
                          {experienceStat.label}
                        </p>
                      </>
                    )}

                    {otherStats.length > 0 && (
                      <div className="mt-8 grid grid-cols-2 gap-3">
                        {otherStats.map((stat, i) => (
                          <div
                            key={stat.label}
                            className="animate-fade-up rounded-xl border border-border/40 bg-white px-3 py-4 text-center"
                            style={{ animationDelay: `${200 + i * 100}ms` }}
                          >
                            <p className="text-2xl font-bold text-navy">{stat.value}</p>
                            <p className="mt-1 text-[11px] leading-tight text-muted">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
