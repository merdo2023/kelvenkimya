'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { AnimatedCounter } from '../common/AnimatedCounter'

interface ProductsHeroStatsProps {
  categoryCount: number
  productCount: number
}

export function ProductsHeroStats({ categoryCount, productCount }: ProductsHeroStatsProps) {
  const { t } = useTranslation()

  const stats = [
    { value: categoryCount, label: t('products.stats.categories') },
    { value: productCount, label: t('products.stats.products') },
  ]

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
          <AnimatedCounter
            value={String(stat.value)}
            className="text-3xl font-extrabold text-white"
          />
          <p className="mt-1 text-sm font-medium text-white/80">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
