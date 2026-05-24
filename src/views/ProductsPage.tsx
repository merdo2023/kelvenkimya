'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { ProductCategoryCard } from '@/components/products/ProductCategoryCard'
import { ProductsCategoryNav } from '@/components/products/ProductsCategoryNav'
import { ProductsHeroStats } from '@/components/products/ProductsHeroStats'
import { ProductsPageCTA } from '@/components/products/ProductsPageCTA'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import type { ProductCategory } from '@/types/locale'

export function ProductsPage() {
  const { t } = useTranslation()
  const categories = useLocaleArray<ProductCategory>('products.categories')
  const productCount = categories.reduce((sum, category) => sum + category.products.length, 0)

  return (
    <>
      <PageHero title={t('products.title')} subtitle={t('products.subtitle')}>
        <ProductsHeroStats categoryCount={categories.length} productCount={productCount} />
      </PageHero>

      <section className="relative overflow-hidden">
        <div className="section-muted absolute inset-0" aria-hidden="true" />
        <div className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-cyan/5 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-green/5 blur-3xl" aria-hidden="true" />

        <Container className="relative">
          <ProductsCategoryNav categories={categories} />

          <div className="space-y-16 py-16 lg:space-y-20 lg:py-20">
            {categories.map((category, index) => (
              <ProductCategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </Container>

        <ProductsPageCTA />
      </section>
    </>
  )
}
