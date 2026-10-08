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
  const detailPaths: Record<string, string> = {
    kimyasal_temizlik_urunleri: '/hizmetlerimiz/endustriyel-kimyasal-temizlik-urunleri',
    kazan_suyu_kimyasallari: '/hizmetlerimiz/su-sartlandirma-kimyasallari/kazan-suyu-sartlandirma-kimyasallari',
    sogutma_suyu_kimyasallari: '/hizmetlerimiz/su-sartlandirma-kimyasallari/sogutma-kulesi-suyu-sartlandirma-kimyasallari',
  }

  return (
    <motion.article
      id={category.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease }}
      className="scroll-mt-36"
    >
      <div className="overflow-hidden rounded-2xl border border-border/45 bg-white shadow-[0_2px_20px_-8px_rgba(11,31,51,0.08)]">
        <header className="border-b border-border/35 px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                {number}
              </span>
            </div>
            <span className="shrink-0 rounded-full border border-border/45 bg-light-bg/80 px-2.5 py-1 text-[11px] font-semibold text-muted">
              {category.products.length} {t('products.itemLabel')}
            </span>
          </div>

          <h2 className="mt-2.5 break-words text-lg font-bold leading-snug text-navy sm:text-xl">
            {highlightText(category.title, searchQuery)}
          </h2>

          {category.description ? (
            <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-muted">
              {highlightText(category.description, searchQuery)}
            </p>
          ) : null}
        </header>

        <ul className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-3 sm:p-5 lg:grid-cols-1 xl:grid-cols-2">
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

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/35 px-4 py-3.5 sm:px-6">
          {detailPaths[category.id] && <Link href={detailPaths[category.id]} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-cyan">{t('products.viewDetails')}<ArrowUpRight className="h-4 w-4" /></Link>}
          <Link
            href={routes.contact}
            className="group/cta inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors duration-200 hover:text-cyan"
          >
            {t('products.cta')}
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
