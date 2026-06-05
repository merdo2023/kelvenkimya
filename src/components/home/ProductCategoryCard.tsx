'use client'

import { Link } from '@/i18n/navigation'
import { ArrowUpRight } from 'lucide-react'
import { cardAccentColors } from '@/data/accentColors'
import type { ProductCategory } from '@/types/locale'

interface ProductCategoryCardProps {
  category: ProductCategory
  index: number
  ctaLabel: string
  itemLabel: string
}

export function ProductCategoryCard({
  category,
  index,
  ctaLabel,
  itemLabel,
}: ProductCategoryCardProps) {
  const accent = cardAccentColors[index % cardAccentColors.length]
  const number = String(index + 1).padStart(2, '0')
  const productCount = category.products.length

  return (
    <div
      className="group relative h-full animate-fade-up transition-transform duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white via-border/20 to-white opacity-90 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      <div
        className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${accent.wash} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden="true"
      />

      <Link
        href={{ pathname: '/products', hash: category.id }}
        className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-[0_4px_32px_-8px_rgba(11,31,51,0.08)] transition-all duration-300 group-hover:shadow-[0_16px_48px_-12px_rgba(11,31,51,0.14)] sm:p-8"
        aria-label={`${category.title} — ${ctaLabel}`}
      >
        <div
          className={`absolute bottom-8 left-0 top-8 w-[3px] origin-top rounded-r-full bg-gradient-to-b ${accent.gradient} opacity-80`}
          aria-hidden="true"
        />

        <span
          className={`pointer-events-none absolute -right-2 -top-4 select-none bg-gradient-to-br ${accent.num} bg-clip-text text-[5.5rem] font-extrabold leading-none text-transparent opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 sm:text-[6rem]`}
          aria-hidden="true"
        >
          {number}
        </span>

        <div className="relative pl-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} aria-hidden="true" />
              <div className={`h-px w-12 bg-gradient-to-r ${accent.gradient}`} aria-hidden="true" />
            </div>
            <span className="shrink-0 rounded-full border border-border/50 bg-light-bg px-3 py-1 text-xs font-semibold text-muted">
              {productCount} {itemLabel}
            </span>
          </div>

          <h3 className="mt-5 text-xl font-bold leading-snug text-navy transition-colors duration-300 group-hover:text-brand-blue sm:text-[1.35rem]">
            {category.title}
          </h3>

          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-[1.7] text-muted">
            {category.description}
          </p>
        </div>

        <div className="relative mt-8 flex items-center justify-end border-t border-border/40 pt-5 pl-4">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brand-blue transition-all duration-300 group-hover:gap-3 group-hover:text-cyan">
            {ctaLabel}
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-light-bg transition-all duration-300 group-hover:border-cyan/30 group-hover:bg-cyan/5">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </span>
        </div>
      </Link>
    </div>
  )
}
