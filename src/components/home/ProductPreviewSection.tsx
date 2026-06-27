'use client'

import { useMemo } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { routes } from '@/data/routes'
import { countProductItems, HOME_PREVIEW_CATEGORY_LIMIT, pickHomePreviewCategories } from '@/data/productPreview'
import { ProductCategoryCard } from './ProductCategoryCard'
import type { ProductCategory } from '@/types/locale'

const PREVIEW_CATEGORY_COUNT = HOME_PREVIEW_CATEGORY_LIMIT

type ProductPreviewSectionProps = {
  categories: ProductCategory[]
}

export function ProductPreviewSection({ categories }: ProductPreviewSectionProps) {
  const { t } = useTranslation()

  const previewCategories = useMemo(
    () => pickHomePreviewCategories(categories, PREVIEW_CATEGORY_COUNT),
    [categories],
  )

  const categoryCount = categories.length
  const productCount = countProductItems(categories)

  return (
    <section className="relative overflow-hidden bg-[#071525] py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-0 industrial-grid opacity-[0.12]" aria-hidden="true" />
      <div className="absolute inset-0 blueprint-lines opacity-[0.06]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-cyan/[0.07] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-green/[0.05] blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="lg:grid lg:grid-cols-[minmax(280px,340px)_1fr] lg:items-start lg:gap-10 xl:gap-12">
          <div className="mb-8 lg:mb-0">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan/60" aria-hidden="true" />
              <span className="h-1 w-1 rounded-full bg-cyan" aria-hidden="true" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {t('home.productCategories.title')}
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
              {t('home.productCategories.subtitle')}
            </p>

            <dl className="mt-6 grid grid-cols-3 gap-3 sm:max-w-md">
              <div className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2.5">
                <dt className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                  {t('home.productCategories.metrics.categories')}
                </dt>
                <dd className="mt-1 text-xl font-extrabold text-white">{categoryCount}</dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2.5">
                <dt className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                  {t('home.productCategories.metrics.products')}
                </dt>
                <dd className="mt-1 text-xl font-extrabold text-white">{productCount}+</dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2.5">
                <dt className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                  {t('home.productCategories.metrics.support')}
                </dt>
                <dd className="mt-1 text-sm font-bold leading-snug text-cyan">
                  {t('home.productCategories.metrics.supportValue')}
                </dd>
              </div>
            </dl>

            <div className="mt-7">
              <Button to={routes.products} variant="primary" size="lg">
                {t('home.productCategories.viewAll')}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5 lg:gap-4">
            {previewCategories.map((category, index) => (
              <ProductCategoryCard
                key={category.id}
                category={category}
                index={index}
                ctaLabel={t('home.productCategories.explore')}
                itemLabel={t('products.itemLabel')}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
