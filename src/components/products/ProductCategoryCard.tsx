'use client'

import { Link } from '@/i18n/navigation'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cardAccentColors } from '@/data/accentColors'
import { routes } from '@/data/routes'
import { highlightText } from '@/lib/highlightText'
import { ProductItemRow } from './ProductItemRow'
import type { ProductCategory } from '@/types/locale'

interface ProductCategoryCardProps {
  category: ProductCategory
  accentIndex: number
  searchQuery?: string
}

const ease = [0.22, 1, 0.36, 1] as const

export function ProductCategoryCard({
  category,
  accentIndex,
  searchQuery = '',
}: ProductCategoryCardProps) {
  const { t } = useTranslation()
  const accent = cardAccentColors[accentIndex % cardAccentColors.length]
  const number = String(accentIndex + 1).padStart(2, '0')

  return (
    <motion.article
      id={category.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease }}
      className="scroll-mt-36"
    >
      <div className="overflow-hidden rounded-2xl border border-border/50 bg-white shadow-[0_4px_32px_-12px_rgba(11,31,51,0.08)]">
        <header className="border-b border-border/40 bg-light-bg/40 px-5 py-5 sm:px-7 sm:py-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3">
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {number}
                </span>
              </div>
              <h2 className="mt-2 text-xl font-bold leading-snug text-navy sm:text-2xl">
                {highlightText(category.title, searchQuery)}
              </h2>
              {category.description && (
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {highlightText(category.description, searchQuery)}
                </p>
              )}
            </div>
            <span className="shrink-0 rounded-full border border-border/50 bg-white px-3 py-1.5 text-xs font-semibold text-muted">
              {category.products.length} {t('products.itemLabel')}
            </span>
          </div>
        </header>

        <ul className="grid gap-2 p-4 sm:grid-cols-2 sm:gap-3 sm:p-6 lg:grid-cols-1 xl:grid-cols-2">
          {category.products.map((product, productIndex) => (
            <ProductItemRow
              key={product.name}
              product={product}
              index={productIndex}
              accent={accent}
              searchQuery={searchQuery}
            />
          ))}
        </ul>

        <div className="flex items-center justify-end border-t border-border/40 px-5 py-4 sm:px-7">
          <Link
            href={routes.contact}
            className="group/cta inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brand-blue transition-all duration-300 hover:gap-3 hover:text-cyan"
          >
            {t('products.cta')}
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-light-bg transition-all duration-300 group-hover/cta:border-cyan/30 group-hover/cta:bg-cyan/5">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
