'use client'

import { TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import { Container } from '../common/Container'

const ease = [0.22, 1, 0.36, 1] as const

export function ServicesWhySection() {
  const { t } = useTranslation()
  const items = useLocaleArray<string>('services.why.items')

  return (
    <section className="relative overflow-hidden py-12 sm:py-14">
      <div className="section-muted absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-16 top-1/4 h-56 w-56 rounded-full bg-cyan/[0.05] blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease }}
            className="lg:col-span-4"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan">
              {t('services.why.eyebrow')}
            </span>
            <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">{t('services.why.title')}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{t('services.why.subtitle')}</p>
          </motion.div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {items.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3), ease }}
                className="flex items-start gap-3 border-b border-border/40 pb-3.5 text-sm text-navy/85 last:border-b-0 sm:last:border-b sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan/[0.1] text-brand-blue">
                  <TrendingUp className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="pt-1 font-medium leading-snug">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
