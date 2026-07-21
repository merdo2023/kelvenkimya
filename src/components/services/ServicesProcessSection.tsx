'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import { Container } from '../common/Container'

const ease = [0.22, 1, 0.36, 1] as const

export function ServicesProcessSection() {
  const { t } = useTranslation()
  const items = useLocaleArray<string>('services.process.items')

  return (
    <section className="relative overflow-hidden py-12 sm:py-14">
      <div className="section-dark-premium absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 mesh-pattern opacity-15" aria-hidden="true" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease }}
          className="max-w-xl"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan">
            {t('services.process.eyebrow')}
          </span>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{t('services.process.title')}</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
            {t('services.process.subtitle')}
          </p>
        </motion.div>

        <ol className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.32), ease }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:p-5"
            >
              <span className="text-[11px] font-bold tracking-[0.12em] text-cyan">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-2.5 text-sm font-semibold leading-snug text-white">{item}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
