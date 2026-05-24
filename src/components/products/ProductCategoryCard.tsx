'use client'

import { Link } from '@/i18n/navigation'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cardAccentColors } from '@/data/accentColors'
import { routes } from '@/data/routes'
import { ProductItemRow } from './ProductItemRow'
import type { ProductCategory } from '@/types/locale'

interface ProductCategoryCardProps {
  category: ProductCategory
  index: number
}

const ease = [0.22, 1, 0.36, 1] as const

export function ProductCategoryCard({ category, index }: ProductCategoryCardProps) {
  const { t } = useTranslation()
  const accent = cardAccentColors[index % cardAccentColors.length]
  const number = String(index + 1).padStart(2, '0')
  const isEven = index % 2 === 0

  return (
    <motion.article
      id={category.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease }}
      className="group relative scroll-mt-36"
    >
      <div
        className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white via-border/30 to-white opacity-90 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div
        className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${accent.wash} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_4px_40px_-10px_rgba(11,31,51,0.1)] transition-shadow duration-500 group-hover:shadow-[0_24px_64px_-16px_rgba(11,31,51,0.16)]">
        <div className="grid items-stretch lg:grid-cols-12">
          {/* Visual panel */}
          <div
            className={`relative min-h-[240px] overflow-hidden lg:col-span-5 lg:min-h-[420px] ${
              isEven ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <div className="absolute inset-0 gradient-hero" aria-hidden="true" />
            <div className="absolute inset-0 mesh-pattern opacity-25" aria-hidden="true" />
            <motion.div
              className={`pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br ${accent.wash} blur-2xl`}
              animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            />
            <motion.div
              className="pointer-events-none absolute inset-6 rounded-[1.5rem] border border-white/10 sm:inset-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              aria-hidden="true"
            />

            <span
              className={`pointer-events-none absolute -right-2 bottom-4 select-none bg-gradient-to-br ${accent.num} bg-clip-text text-[7rem] font-extrabold leading-none text-transparent opacity-90 sm:text-[8.5rem]`}
              aria-hidden="true"
            >
              {number}
            </span>

            <div className="relative flex h-full flex-col justify-end p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
                <motion.div
                  className="h-px bg-gradient-to-r from-cyan to-green/70"
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease }}
                />
              </div>
              <p className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                {category.title}
              </p>
              <p className="mt-2 text-sm font-medium text-white/60">
                {category.products.length} {t('products.itemLabel')}
              </p>
            </div>
          </div>

          {/* Content */}
          <div
            className={`relative flex flex-col p-8 sm:p-10 lg:col-span-7 lg:p-12 ${
              isEven ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <motion.div
              className={`absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-[3px] rounded-full bg-gradient-to-b ${accent.gradient} lg:block`}
              initial={{ scaleY: 0.2, opacity: 0.3 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              style={{ originY: 0 }}
            />

            <div className="relative lg:pl-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} aria-hidden="true" />
                  <motion.div
                    className={`h-px bg-gradient-to-r ${accent.gradient}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: 56 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15, ease }}
                  />
                </div>
                <span className="rounded-full border border-border/50 bg-light-bg px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted">
                  {number}
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-bold text-navy sm:text-3xl">{category.title}</h2>
              <p className="mt-4 max-w-xl text-base leading-[1.75] text-muted">{category.description}</p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {category.products.map((product, productIndex) => (
                  <ProductItemRow
                    key={product.name}
                    product={product}
                    index={productIndex}
                    accent={accent}
                  />
                ))}
              </ul>

              <div className="mt-10 flex items-center justify-between gap-4 border-t border-border/40 pt-6">
                <div className="flex items-center gap-2">
                  <span className={`h-1 w-1 rounded-full ${accent.dot}`} aria-hidden="true" />
                  <motion.div
                    className={`h-px bg-gradient-to-r ${accent.gradient}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, ease }}
                  />
                </div>
                <Link
                  href={routes.contact}
                  className="group/cta inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brand-blue transition-all duration-300 hover:gap-3 hover:text-cyan"
                >
                  {t('products.cta')}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-light-bg transition-all duration-300 group-hover/cta:border-cyan/30 group-hover/cta:bg-cyan/5">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
