'use client'

import { Link } from '@/i18n/navigation'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '../common/Container'
import { routes } from '@/data/routes'

const ease = [0.22, 1, 0.36, 1] as const

export function ServicesPageCTA() {
  const { t } = useTranslation()

  return (
    <section className="relative pb-14 pt-2 sm:pb-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 gradient-hero shadow-[0_20px_56px_-18px_rgba(11,31,51,0.45)]"
        >
          <div className="absolute inset-0 mesh-pattern opacity-20" aria-hidden="true" />
          <div className="absolute inset-0 blueprint-lines opacity-30" aria-hidden="true" />
          <div
            className="cta-glow-drift-right pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="cta-glow-drift-left pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-green/15 blur-3xl"
            aria-hidden="true"
          />
          <div className="about-accent-line-top absolute inset-x-10 top-0" aria-hidden="true" />

          <div className="relative flex flex-col gap-7 px-7 py-9 sm:px-10 sm:py-11 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-xl font-bold leading-snug text-white sm:text-2xl lg:text-[1.75rem]">
                {t('services.ctaTitle')}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/78 sm:text-base">
                {t('services.ctaDescription')}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={routes.contact}
                className="group/btn inline-flex items-center gap-2 rounded-xl gradient-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan/40"
              >
                {t('services.ctaPrimary')}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href={routes.products}
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/15"
              >
                {t('services.ctaSecondary')}
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
