'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { cardAccentColors } from '@/data/accentColors'
import type { ProductCategory } from '@/types/locale'

interface ProductsCategoryNavProps {
  categories: ProductCategory[]
}

export function ProductsCategoryNav({ categories }: ProductsCategoryNavProps) {
  const { t } = useTranslation()

  if (categories.length === 0) return null

  return (
    <motion.nav
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      aria-label={t('products.categoriesNav')}
      className="sticky top-[4.5rem] z-30 -mx-4 border-b border-border/40 bg-light-bg/90 px-4 py-4 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:top-20"
    >
      <div className="flex items-center gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          {t('products.categoriesNav')}
        </span>
        <span className="h-4 w-px shrink-0 bg-border/60" aria-hidden="true" />
        {categories.map((category, index) => {
          const accent = cardAccentColors[index % cardAccentColors.length]
          return (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="group shrink-0 inline-flex items-center gap-2 rounded-full border border-border/50 bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm transition-all duration-300 hover:border-transparent hover:shadow-md"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${accent.dot} transition-transform duration-300 group-hover:scale-125`}
                aria-hidden="true"
              />
              {category.title}
            </a>
          )
        })}
      </div>
    </motion.nav>
  )
}
