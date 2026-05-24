'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { ProductCategoryCard } from './ProductCategoryCard'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import type { ProductCategory } from '@/types/locale'

export function ProductPreviewSection() {
  const { t } = useTranslation()
  const categories = useLocaleArray<ProductCategory>('products.categories')

  return (
    <section className="relative overflow-hidden bg-surface py-24">
      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-brand-blue/4 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-cyan/4 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <SectionHeader
          title={t('home.productCategories.title')}
          subtitle={t('home.productCategories.subtitle')}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {categories.map((category, index) => (
            <ProductCategoryCard
              key={category.id}
              category={category}
              index={index}
              ctaLabel={t('common.exploreProducts')}
              itemLabel={t('products.itemLabel')}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
