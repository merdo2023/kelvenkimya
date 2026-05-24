'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { Container } from '../common/Container'
import { AnimatedCounter } from '../common/AnimatedCounter'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import { cardAccentColors } from '@/data/accentColors'
import type { StatItem } from '@/types/locale'

const ease = [0.22, 1, 0.36, 1] as const

export function AboutStorySection() {
  const { t } = useTranslation()
  const paragraphs = useLocaleArray<string>('about.story.paragraphs')
  const stats = useLocaleArray<StatItem>('home.stats')
  const experienceStat = stats.find((stat) => stat.icon === 'award')
  const otherStats = stats.filter((stat) => stat.icon !== 'award')
  const accent = cardAccentColors[0]

  return (
    <section className="relative overflow-hidden py-24">
      <div className="section-muted absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan/5 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
          className="group relative"
        >
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white via-border/20 to-white opacity-90" aria-hidden="true" />
          <div
            className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${accent.wash} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_4px_40px_-10px_rgba(11,31,51,0.1)] transition-shadow duration-500 group-hover:shadow-[0_24px_64px_-16px_rgba(11,31,51,0.15)]">
            <div className="grid items-center gap-10 p-8 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
              <div className="relative lg:col-span-7">
                <motion.div
                  className={`absolute left-0 top-0 h-full w-[3px] rounded-full bg-gradient-to-b ${accent.gradient}`}
                  initial={{ scaleY: 0.2, opacity: 0.3 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease }}
                  style={{ originY: 0 }}
                />

                <div className="pl-6">
                  <div className="flex items-center gap-3">
                    <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} aria-hidden="true" />
                    <motion.div
                      className={`h-px bg-gradient-to-r ${accent.gradient}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: 56 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.1, ease }}
                    />
                  </div>

                  <h2 className="mt-6 text-3xl font-bold leading-tight text-navy sm:text-4xl">
                    {t('about.story.title')}
                  </h2>

                  <div className="mt-6 space-y-5">
                    {paragraphs.map((paragraph, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease }}
                        className="text-base leading-[1.8] text-muted sm:text-lg"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-light-bg/80 p-8 sm:p-10">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan/10 blur-2xl" aria-hidden="true" />
                  <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-green/8 blur-2xl" aria-hidden="true" />

                  <motion.div
                    className="pointer-events-none absolute inset-4 rounded-full border border-cyan/10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
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
                          <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.25 + i * 0.1, ease }}
                            className="rounded-xl border border-border/40 bg-white px-3 py-4 text-center transition-shadow duration-300 hover:shadow-md"
                          >
                            <p className="text-2xl font-bold text-navy">{stat.value}</p>
                            <p className="mt-1 text-[11px] leading-tight text-muted">{stat.label}</p>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
