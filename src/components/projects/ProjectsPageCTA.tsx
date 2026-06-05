'use client'

import { Link } from '@/i18n/navigation'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '../common/Container'
import { routes } from '@/data/routes'

const ease = [0.22, 1, 0.36, 1] as const

export function ProjectsPageCTA() {
  const { t } = useTranslation()

  return (
    <section className="relative pb-24 pt-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
          className="group relative"
        >
          <div
            className="absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan/20 via-white/10 to-green/20 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 gradient-hero px-8 py-12 shadow-[0_20px_56px_-16px_rgba(11,31,51,0.4)] sm:px-12 sm:py-14">
            <div className="absolute inset-0 mesh-pattern opacity-20" aria-hidden="true" />

            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
                  <motion.div
                    className="h-px bg-gradient-to-r from-cyan to-green/70"
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease }}
                  />
                </div>
                <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                  {t('projects.ctaTitle')}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-white/85">
                  {t('projects.ctaDescription')}
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="shrink-0">
                <Link
                  href={routes.contact}
                  className="group/btn inline-flex items-center gap-3 rounded-xl gradient-accent px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan/25 transition-all duration-300 hover:shadow-xl hover:shadow-cyan/35"
                >
                  {t('projects.cta')}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover/btn:bg-white/30">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
