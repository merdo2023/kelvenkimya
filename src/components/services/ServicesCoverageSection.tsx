'use client'

import { Building2, FlaskConical } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import { Container } from '../common/Container'

const ease = [0.22, 1, 0.36, 1] as const

export function ServicesCoverageSection() {
  const { t } = useTranslation()
  const products = useLocaleArray<string>('services.products.items')
  const sectors = useLocaleArray<string>('services.sectors.items')

  return (
    <section className="relative overflow-hidden py-12 sm:py-14">
      <div className="section-muted absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-green/[0.04] blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease }}
            className="rounded-2xl border border-border/40 bg-white/90 p-6 shadow-[0_8px_32px_-16px_rgba(11,31,51,0.1)] sm:p-8"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/[0.08] text-brand-blue">
                <FlaskConical className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan">
                  {t('services.products.eyebrow')}
                </span>
                <h2 className="mt-1 text-xl font-bold text-navy sm:text-2xl">{t('services.products.title')}</h2>
                <p className="mt-1.5 text-sm text-muted">{t('services.products.subtitle')}</p>
              </div>
            </div>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {products.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-navy/85">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="rounded-2xl border border-border/40 bg-white/90 p-6 shadow-[0_8px_32px_-16px_rgba(11,31,51,0.1)] sm:p-8"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/[0.08] text-brand-blue">
                <Building2 className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan">
                  {t('services.sectors.eyebrow')}
                </span>
                <h2 className="mt-1 text-xl font-bold text-navy sm:text-2xl">{t('services.sectors.title')}</h2>
                <p className="mt-1.5 text-sm text-muted">{t('services.sectors.subtitle')}</p>
              </div>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {sectors.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border/45 bg-light-bg/80 px-3 py-1.5 text-xs font-medium text-navy/80 sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
