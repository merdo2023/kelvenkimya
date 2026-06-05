'use client'

import { useMemo } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { EmptyState } from '@/components/common/EmptyState'
import { ProductCategoryCard } from '@/components/products/ProductCategoryCard'
import { ProductsCategoryFilter } from '@/components/products/ProductsCategoryFilter'
import { ProductsHeroStats } from '@/components/products/ProductsHeroStats'
import { ProductsPageCTA } from '@/components/products/ProductsPageCTA'
import { ProductsToolbar } from '@/components/products/ProductsToolbar'
import { useProductFilter } from '@/hooks/useProductFilter'
import type { ProductCategory } from '@/types/locale'

type ProductsPageClientProps = {
  categories: ProductCategory[]
}

export function ProductsPageClient({ categories }: ProductsPageClientProps) {
  const { t } = useTranslation()
  const productCount = categories.reduce((sum, category) => sum + category.products.length, 0)

  const {
    search,
    setSearch,
    categoryId,
    setCategoryId,
    filteredCategories,
    visibleProductCount,
    hasActiveFilters,
    clearFilters,
    query,
  } = useProductFilter(categories)

  const categoryIndexMap = useMemo(
    () => new Map(categories.map((category, index) => [category.id, index])),
    [categories],
  )

  return (
    <>
      <PageHero title={t('products.title')} subtitle={t('products.subtitle')}>
        <ProductsHeroStats categoryCount={categories.length} productCount={productCount} />
      </PageHero>

      <section className="relative overflow-hidden">
        <div className="section-muted absolute inset-0" aria-hidden="true" />
        <div className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-cyan/5 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-green/5 blur-3xl" aria-hidden="true" />

        <Container className="relative py-12 lg:py-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
            <aside className="lg:sticky lg:top-24 lg:w-80 lg:shrink-0">
              <div className="space-y-6 rounded-2xl border border-border/50 bg-white/80 p-5 shadow-sm backdrop-blur-sm sm:p-6">
                <ProductsToolbar
                  search={search}
                  onSearchChange={setSearch}
                  visibleProductCount={visibleProductCount}
                  totalProductCount={productCount}
                  hasActiveFilters={hasActiveFilters}
                  onClearFilters={clearFilters}
                />
                <ProductsCategoryFilter
                  categories={categories}
                  selectedCategoryId={categoryId}
                  onSelectCategory={setCategoryId}
                />
              </div>
            </aside>

            <main className="min-w-0 flex-1">
              {filteredCategories.length === 0 ? (
                <EmptyState
                  title={t('products.noResultsTitle')}
                  description={t('products.noResultsDescription')}
                />
              ) : (
                <div className="space-y-8">
                  {filteredCategories.map((category) => (
                    <ProductCategoryCard
                      key={category.id}
                      category={category}
                      accentIndex={categoryIndexMap.get(category.id) ?? 0}
                      searchQuery={query}
                    />
                  ))}
                </div>
              )}
            </main>
          </div>
        </Container>

        <ProductsPageCTA />
      </section>
    </>
  )
}
