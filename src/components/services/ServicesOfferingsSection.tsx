'use client'

import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import { Container } from '../common/Container'

const ease = [0.22, 1, 0.36, 1] as const

export function ServicesOfferingsSection() {
  const { t } = useTranslation()
  const items = useLocaleArray<string>('services.offerings.items')

  return (
    <section className="relative overflow-hidden py-12 sm:py-14">
      <div className="section-dark-premium absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 blueprint-lines opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan/40 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan">
            {t('services.offerings.eyebrow')}
          </span>
          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{t('services.offerings.title')}</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
            {t('services.offerings.subtitle')}
          </p>
        </motion.div>

        <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.28), ease }}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm leading-snug text-white/88"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
              </span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
