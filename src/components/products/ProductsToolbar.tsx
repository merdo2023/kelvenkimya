'use client'

import { Search, X } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

interface ProductsToolbarProps {
  search: string
  onSearchChange: (value: string) => void
  visibleProductCount: number
  totalProductCount: number
  hasActiveFilters: boolean
  onClearFilters: () => void
}

const inputClass =
  'w-full rounded-xl border border-border/60 bg-white py-3 pl-11 pr-10 text-sm text-navy transition-all duration-200 placeholder:text-muted/70 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20'

export function ProductsToolbar({
  search,
  onSearchChange,
  visibleProductCount,
  totalProductCount,
  hasActiveFilters,
  onClearFilters,
}: ProductsToolbarProps) {
  const { t } = useTranslation()

  return (
    <div className="space-y-3">
      <label className="relative block">
        <span className="sr-only">{t('products.searchLabel')}</span>
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          aria-hidden="true"
        />
        <input
          type="text"
          role="searchbox"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t('products.searchPlaceholder')}
          className={inputClass}
          autoComplete="off"
        />
        {search && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-muted transition-colors hover:bg-light-bg hover:text-navy"
            aria-label={t('products.clearSearch')}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </label>

      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <p className="text-muted">
          {hasActiveFilters
            ? t('products.resultsFiltered', {
                visible: visibleProductCount,
                total: totalProductCount,
              })
            : t('products.resultsTotal', { total: totalProductCount })}
        </p>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="font-semibold text-brand-blue transition-colors hover:text-cyan"
          >
            {t('products.clearFilters')}
          </button>
        )}
      </div>
    </div>
  )
}
