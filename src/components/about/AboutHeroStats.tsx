'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '../common/AnimatedCounter'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import type { StatItem } from '@/types/locale'

export function AboutHeroStats() {
  const stats = useLocaleArray<StatItem>('home.stats')

  return (
    <div className="mt-10 flex flex-wrap gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-white/15 bg-white/10 px-6 py-4 backdrop-blur-sm"
        >
          <AnimatedCounter value={stat.value} className="text-3xl font-extrabold text-white" />
          <p className="mt-1 text-sm font-medium text-white/65">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
