'use client'

import { Handshake, HardHat, Settings2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import { Container } from '../common/Container'
import type { ValueItem } from '@/types/locale'

const whyIcons = [HardHat, Settings2, Handshake]

export function AboutWhySection() {
  const { t } = useTranslation()
  const items = useLocaleArray<ValueItem>('about.why.items')

  return (
    <section className="relative overflow-hidden py-12 sm:py-14">
      <div className="section-dark-premium absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 blueprint-lines opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan/40 to-transparent" aria-hidden="true" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan">
            {t('about.why.eyebrow')}
          </span>
          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{t('about.why.title')}</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">{t('about.why.subtitle')}</p>
        </motion.div>

        <div className="mt-9 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {items.map((item, index) => {
            const Icon = whyIcons[index % whyIcons.length]

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-2xl about-glass-dark p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/25 hover:shadow-[0_16px_48px_-16px_rgba(0,166,214,0.25)] sm:p-7"
              >
                <div className="about-accent-line-top absolute inset-x-5 top-0 opacity-60 transition-opacity group-hover:opacity-100 sm:inset-x-6" aria-hidden="true" />

                <span className="about-icon-glow flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-cyan transition-colors group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>

                <h3 className="mt-5 text-base font-bold text-white sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/72">{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
