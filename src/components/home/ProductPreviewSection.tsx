'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { routes } from '@/data/routes'
import { ProductCategoryCard } from './ProductCategoryCard'
import type { ProductCategory } from '@/types/locale'

const PREVIEW_CATEGORY_COUNT = 4

type ProductPreviewSectionProps = {
  categories: ProductCategory[]
}

export function ProductPreviewSection({ categories }: ProductPreviewSectionProps) {
  const { t } = useTranslation()
  const previewCategories = categories.slice(0, PREVIEW_CATEGORY_COUNT)

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
          {previewCategories.map((category, index) => (
            <ProductCategoryCard
              key={category.id}
              category={category}
              index={index}
              ctaLabel={t('common.exploreProducts')}
              itemLabel={t('products.itemLabel')}
            />
          ))}
        </div>

        {categories.length > PREVIEW_CATEGORY_COUNT && (
          <div className="mt-10 flex justify-center sm:mt-12">
            <Button to={routes.products} variant="outline-dark" size="lg">
              {t('home.productCategories.viewAll')}
            </Button>
          </div>
        )}
      </Container>
    </section>
  )
}
