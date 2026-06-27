'use client'

import { Link } from '@/i18n/navigation'
import { ArrowRight, Beaker, Droplets, Factory, FlaskConical, Layers, Pipette, type LucideIcon } from 'lucide-react'
import { AssetImage } from '@/components/common/AssetImage'
import { resolveMediaPath } from '@/lib/media'
import { cardAccentColors } from '@/data/accentColors'
import type { ProductCategory } from '@/types/locale'

const categoryIcons: Record<string, LucideIcon> = {
  beaker: Beaker,
  droplets: Droplets,
  factory: Factory,
  flask: FlaskConical,
  layers: Layers,
  pipette: Pipette,
}

const iconStyles = [
  { box: 'from-cyan/20 to-cyan/5', icon: 'text-cyan' },
  { box: 'from-brand-blue/20 to-brand-blue/5', icon: 'text-brand-blue' },
  { box: 'from-green/20 to-green/5', icon: 'text-green' },
  { box: 'from-cyan/20 to-cyan/5', icon: 'text-cyan' },
  { box: 'from-brand-blue/20 to-brand-blue/5', icon: 'text-brand-blue' },
  { box: 'from-green/20 to-green/5', icon: 'text-green' },
]

interface ProductCategoryCardProps {
  category: ProductCategory
  index: number
  ctaLabel: string
  itemLabel: string
}

function getCategoryIcon(icon?: string): LucideIcon {
  return (icon && categoryIcons[icon]) || Droplets
}

export function ProductCategoryCard({
  category,
  index,
  ctaLabel,
  itemLabel,
}: ProductCategoryCardProps) {
  const accent = cardAccentColors[index % cardAccentColors.length]
  const iconStyle = iconStyles[index % iconStyles.length]
  const imagePath = resolveMediaPath(category.image)
  const Icon = getCategoryIcon(category.icon)
  const productCount = category.products.length
  const summary =
    category.description?.trim() ||
    category.usageAreas?.[0] ||
    category.tags?.[0] ||
    ''

  return (
    <div
      className="group animate-fade-up"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <Link
        href={{ pathname: '/products', hash: category.id }}
        className="relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.03] p-4 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.35)] ring-1 ring-transparent backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/25 hover:shadow-[0_8px_28px_-8px_rgba(0,166,214,0.2)] hover:ring-cyan/10"
        aria-label={`${category.title} — ${ctaLabel}`}
      >
        <div
          className={`absolute inset-x-0 top-0 h-px rounded-t-xl bg-gradient-to-r ${accent.gradient} opacity-40 transition-opacity duration-300 group-hover:opacity-80`}
          aria-hidden="true"
        />

        <div className="flex items-start gap-3">
          <div
            className={`product-icon-glow relative h-11 w-11 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/15 bg-gradient-to-br ${iconStyle.box}`}
          >
            {imagePath ? (
              <AssetImage
                src={imagePath}
                alt=""
                fill
                className="object-cover"
                sizes="44px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Icon className={`h-5 w-5 ${iconStyle.icon}`} strokeWidth={1.6} />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-bold leading-snug text-white transition-colors duration-300 group-hover:text-cyan sm:text-[0.9375rem]">
                {category.title}
              </h3>
              <span className="shrink-0 rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white/75">
                {productCount} {itemLabel}
              </span>
            </div>
            {summary && (
              <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-white/60">
                {summary}
              </p>
            )}
          </div>
        </div>

        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cyan/90 transition-colors duration-300 group-hover:text-cyan">
          {ctaLabel}
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </Link>
    </div>
  )
}
