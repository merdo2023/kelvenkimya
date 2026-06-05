'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { cardAccentColors } from '@/data/accentColors'
import type { ProductCategory } from '@/types/locale'

interface ProductsCategoryFilterProps {
  categories: ProductCategory[]
  selectedCategoryId: string | null
  onSelectCategory: (id: string | null) => void
}

export function ProductsCategoryFilter({
  categories,
  selectedCategoryId,
  onSelectCategory,
}: ProductsCategoryFilterProps) {
  const { t } = useTranslation()
  const totalProducts = categories.reduce((sum, c) => sum + c.products.length, 0)

  return (
    <nav aria-label={t('products.categoriesNav')} className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
        {t('products.categoriesNav')}
      </p>

      <ul className="space-y-1.5">
        <li>
          <CategoryFilterButton
            active={selectedCategoryId === null}
            onClick={() => onSelectCategory(null)}
            title={t('products.filterAll')}
            count={totalProducts}
            accentDot="bg-cyan"
          />
        </li>
        {categories.map((category, index) => {
          const accent = cardAccentColors[index % cardAccentColors.length]
          return (
            <li key={category.id}>
              <CategoryFilterButton
                active={selectedCategoryId === category.id}
                onClick={() => onSelectCategory(category.id)}
                title={category.title}
                count={category.products.length}
                accentDot={accent.dot}
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

interface CategoryFilterButtonProps {
  active: boolean
  onClick: () => void
  title: string
  count: number
  accentDot: string
}

function CategoryFilterButton({
  active,
  onClick,
  title,
  count,
  accentDot,
}: CategoryFilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left text-sm transition-all duration-200 ${
        active
          ? 'border-cyan/30 bg-white shadow-[0_4px_20px_-8px_rgba(11,31,51,0.12)] ring-1 ring-cyan/20'
          : 'border-transparent bg-white/60 text-navy hover:border-border/50 hover:bg-white hover:shadow-sm'
      }`}
    >
      <span className={`h-2 w-2 shrink-0 rounded-full ${accentDot}`} aria-hidden="true" />
      <span className="min-w-0 flex-1 leading-snug font-medium">{title}</span>
      <span
        className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold tabular-nums ${
          active ? 'bg-cyan/10 text-brand-blue' : 'bg-light-bg text-muted'
        }`}
      >
        {count}
      </span>
    </button>
  )
}
