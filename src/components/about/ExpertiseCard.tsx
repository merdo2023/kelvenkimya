'use client'

import { motion } from 'framer-motion'
import {
  Beaker,
  Building2,
  FlaskConical,
  Headphones,
  Microscope,
  SprayCan,
  type LucideIcon,
} from 'lucide-react'
import { cardAccentColors } from '@/data/accentColors'
import type { ExpertiseItem } from '@/types/locale'

const expertiseIcons: LucideIcon[] = [SprayCan, FlaskConical, Building2, Beaker, Microscope, Headphones]

interface ExpertiseCardProps {
  item: ExpertiseItem
  index: number
}

export function ExpertiseCard({ item, index }: ExpertiseCardProps) {
  const accent = cardAccentColors[index % cardAccentColors.length]
  const Icon = expertiseIcons[index % expertiseIcons.length]

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-xl border border-border/45 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/25 hover:shadow-[0_12px_36px_-12px_rgba(11,31,51,0.14)] sm:p-5"
    >
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.gradient} opacity-40 transition-opacity group-hover:opacity-100`}
        aria-hidden="true"
      />

      <div className="flex gap-3.5">
        <span
          className={`about-icon-glow flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/40 bg-gradient-to-br ${accent.num} text-navy/65 transition-colors group-hover:text-brand-blue`}
          aria-hidden="true"
        >
          <Icon className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} />
        </span>

        <div className="min-w-0">
          <h3 className="text-sm font-bold leading-snug text-navy sm:text-[0.9375rem]">{item.title}</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">{item.description}</p>
        </div>
      </div>
    </motion.article>
  )
}
