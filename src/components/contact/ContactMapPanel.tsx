'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export function ContactMapPanel() {
  const { t } = useTranslation()
  const address = t('contact.info.address')

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease }}
      className="group relative h-full min-h-[420px]"
    >
      <div
        className="absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan/25 via-white/10 to-green/25 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 gradient-hero p-8 shadow-[0_20px_56px_-16px_rgba(11,31,51,0.4)] sm:p-10">
        <div className="absolute inset-0 mesh-pattern opacity-20" aria-hidden="true" />

        <motion.div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan/15 blur-3xl"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />

        <motion.div
          className="pointer-events-none absolute inset-6 rounded-[1.5rem] border border-white/10 sm:inset-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          aria-hidden="true"
        />

        <div className="relative">
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

          <h3 className="mt-5 text-2xl font-bold text-white">{t('contact.map.title')}</h3>
          <p className="mt-2 text-sm text-white/55">{t('contact.map.placeholder')}</p>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-white/80">{address}</p>
        </div>
      </div>
    </motion.div>
  )
}
