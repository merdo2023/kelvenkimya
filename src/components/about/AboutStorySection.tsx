'use client'

import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import { Container } from '../common/Container'

const ease = [0.22, 1, 0.36, 1] as const

export function AboutStorySection() {
  const { t } = useTranslation()
  const paragraphs = useLocaleArray<string>('about.story.paragraphs')
  const highlights = useLocaleArray<string>('about.story.highlights')

  return (
    <section className="relative overflow-hidden py-12 sm:py-14">
      <div className="section-muted absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 industrial-grid opacity-[0.35]" aria-hidden="true" />

      <Container className="relative">
        <div className="overflow-hidden rounded-3xl border border-border/40 bg-white/90 shadow-[0_8px_40px_-16px_rgba(11,31,51,0.12)]">
          <div className="about-accent-line-top w-full" aria-hidden="true" />

          <div className="grid gap-0 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, ease }}
              className="border-b border-border/35 p-7 sm:p-9 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-10"
            >
              <div className="relative max-w-xl pl-5">
                <div
                  className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-cyan/70 via-cyan/25 to-transparent"
                  aria-hidden="true"
                />

                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan">
                  {t('about.story.eyebrow')}
                </span>
                <h2 className="mt-3 text-2xl font-bold leading-tight text-navy sm:text-3xl">
                  {t('about.story.title')}
                </h2>
                <p className="mt-2 text-sm text-muted sm:text-base">{t('about.story.subtitle')}</p>

                <div className="mt-6 space-y-4">
                  {paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-sm leading-[1.75] text-navy/82 sm:text-[0.9375rem]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
              className="flex flex-col gap-4 bg-gradient-to-br from-light-bg/80 via-white to-light-bg/50 p-7 sm:p-9 lg:col-span-5 lg:p-10"
            >
              <div className="about-glass-light card-border-glow relative overflow-hidden rounded-2xl p-5 sm:p-6">
                <div className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-gradient-to-b from-brand-blue to-cyan/60" aria-hidden="true" />
                <h3 className="pl-3 text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
                  {t('about.mission.title')}
                </h3>
                <p className="mt-2.5 pl-3 text-sm leading-relaxed text-muted">{t('about.mission.description')}</p>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy via-[#0f2840] to-[#123456] p-5 shadow-[0_8px_32px_-12px_rgba(11,31,51,0.35)] sm:p-6">
                <div className="absolute inset-0 mesh-pattern opacity-15" aria-hidden="true" />
                <div className="relative">
                  <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-cyan">{t('about.vision.title')}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/85">{t('about.vision.description')}</p>
                </div>
              </div>

              {highlights.length > 0 && (
                <ul className="space-y-2.5 rounded-2xl border border-border/35 bg-white/70 p-5 sm:p-6">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-navy/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green/[0.1] text-green">
                        <Check className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
