'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { AnimatedCounter } from '../common/AnimatedCounter'

interface ProjectsHeroStatsProps {
  total: number
  turkeyCount: number
  turkmenistanCount: number
}

export function ProjectsHeroStats({
  total,
  turkeyCount,
  turkmenistanCount,
}: ProjectsHeroStatsProps) {
  const { t } = useTranslation()

  const stats = [
    { value: total, label: t('projects.stats.total') },
    { value: turkeyCount, label: t('projects.stats.turkey') },
    { value: turkmenistanCount, label: t('projects.stats.turkmenistan') },
  ]

  return (
    <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3.5 backdrop-blur-sm sm:px-6 sm:py-4"
        >
          <AnimatedCounter
            value={String(stat.value)}
            className="text-2xl font-extrabold text-white sm:text-3xl"
          />
          <p className="mt-0.5 text-xs font-medium text-white/80 sm:text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
