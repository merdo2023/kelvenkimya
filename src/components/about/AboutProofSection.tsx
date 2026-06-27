'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { Container } from '../common/Container'

const ease = [0.22, 1, 0.36, 1] as const

export function AboutProofSection() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden py-12 sm:py-14">
      <div className="section-dark-premium absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 industrial-grid opacity-[0.12]" aria-hidden="true" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease }}
          className="relative overflow-hidden rounded-2xl border border-white/10 px-6 py-6 text-center sm:px-10 sm:py-7"
        >
          <div className="about-accent-line-top absolute inset-x-8 top-0" aria-hidden="true" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan">
            {t('about.proof.title')}
          </p>
          <p className="mt-3 text-base font-semibold leading-relaxed text-white sm:text-lg">
            {t('about.proof.strip')}
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-white/65">{t('about.proof.subtitle')}</p>
        </motion.div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2 lg:gap-5">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, ease }}
            className="about-glass-dark card-border-glow relative overflow-hidden rounded-2xl p-6 sm:p-7"
          >
            <div className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-gradient-to-b from-cyan to-green/70" aria-hidden="true" />
            <h3 className="pl-3 text-lg font-bold text-white">{t('about.team.title')}</h3>
            <p className="mt-2.5 pl-3 text-sm leading-relaxed text-white/75">{t('about.team.description')}</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: 0.08, ease }}
            className="about-glass-dark card-border-glow relative overflow-hidden rounded-2xl p-6 sm:p-7"
          >
            <div className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-gradient-to-b from-green/80 to-cyan/60" aria-hidden="true" />
            <h3 className="pl-3 text-lg font-bold text-white">{t('about.international.title')}</h3>
            <p className="mt-2.5 pl-3 text-sm leading-relaxed text-white/75">{t('about.international.description')}</p>
          </motion.article>
        </div>
      </Container>
    </section>
  )
}
