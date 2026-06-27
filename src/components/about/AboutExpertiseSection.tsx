'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { Container } from '../common/Container'
import { ExpertiseCard } from './ExpertiseCard'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import type { ExpertiseItem } from '@/types/locale'

export function AboutExpertiseSection() {
  const { t } = useTranslation()
  const expertiseItems = useLocaleArray<ExpertiseItem>('about.expertise.items')

  return (
    <section className="relative overflow-hidden py-12 sm:py-14">
      <div className="section-muted absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-brand-blue/[0.05] blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan">
            {t('about.expertise.eyebrow')}
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">{t('about.expertise.title')}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{t('about.expertise.subtitle')}</p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {expertiseItems.map((item, index) => (
            <ExpertiseCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
