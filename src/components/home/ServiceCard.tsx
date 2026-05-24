'use client'

import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cardAccentColors } from '@/data/accentColors'
import { routes } from '@/data/routes'
import type { ServiceItem } from '@/types/locale'

interface ServiceCardProps {
  service: ServiceItem
  index: number
  learnMoreLabel: string
}

export function ServiceCard({ service, index, learnMoreLabel }: ServiceCardProps) {
  const accent = cardAccentColors[index % cardAccentColors.length]
  const number = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className="group relative h-full"
    >
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white via-border/20 to-white opacity-90 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      <div
        className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${accent.wash} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden="true"
      />

      <Link
        href={routes.contact}
        className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-[0_4px_32px_-8px_rgba(11,31,51,0.08)] transition-all duration-300 group-hover:shadow-[0_16px_48px_-12px_rgba(11,31,51,0.14)] sm:p-8"
        aria-label={`${service.title} — ${learnMoreLabel}`}
      >
        <motion.div
          className={`absolute bottom-8 left-0 top-8 w-[3px] rounded-r-full bg-gradient-to-b ${accent.gradient}`}
          initial={{ scaleY: 0.3, opacity: 0.4 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
          style={{ originY: 0 }}
        />

        <span
          className={`pointer-events-none absolute -right-2 -top-4 select-none bg-gradient-to-br ${accent.num} bg-clip-text text-[5.5rem] font-extrabold leading-none text-transparent opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 sm:text-[6rem]`}
          aria-hidden="true"
        >
          {number}
        </span>

        <div className="relative pl-4">
          <div className="flex items-center gap-3">
            <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} aria-hidden="true" />
            <motion.div
              className={`h-px bg-gradient-to-r ${accent.gradient}`}
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.08 }}
            />
          </div>

          <h3 className="mt-5 text-xl font-bold leading-snug text-navy transition-colors duration-300 group-hover:text-brand-blue sm:text-[1.35rem]">
            {service.title}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-[1.7] text-muted">
            {service.description}
          </p>
        </div>

        <div className="relative mt-8 flex items-center justify-end border-t border-border/40 pt-5 pl-4">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brand-blue transition-all duration-300 group-hover:gap-3 group-hover:text-cyan">
            {learnMoreLabel}
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-light-bg transition-all duration-300 group-hover:border-cyan/30 group-hover:bg-cyan/5">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
