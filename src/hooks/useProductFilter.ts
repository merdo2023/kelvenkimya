'use client'

import { useMemo, useState } from 'react'
import { normalizeText } from '@/lib/normalizeText'
import type { ProductCategory } from '@/types/locale'

function categoryMatchesQuery(category: ProductCategory, query: string): boolean {
  const title = normalizeText(category.title)
  const description = category.description ? normalizeText(category.description) : ''
  return title.includes(query) || description.includes(query)
}

function productMatchesQuery(
  product: ProductCategory['products'][number],
  query: string
): boolean {
  const name = normalizeText(product.name)
  const description = product.description ? normalizeText(product.description) : ''
  return name.includes(query) || description.includes(query)
}

export function useProductFilter(categories: ProductCategory[]) {
  const [search, setSearch] = useState('')
  const [categoryId, setCategoryId] = useState<string | null>(null)

  const query = normalizeText(search.trim())

  const filteredCategories = useMemo(() => {
    const byCategory = categoryId
      ? categories.filter((category) => category.id === categoryId)
      : categories

    if (!query) return byCategory

    return byCategory
      .map((category) => {
        if (categoryMatchesQuery(category, query)) {
          return category
        }
        return {
          ...category,
          products: category.products.filter((product) => productMatchesQuery(product, query)),
        }
      })
      .filter((category) => category.products.length > 0)
  }, [categories, categoryId, query])

  const visibleProductCount = filteredCategories.reduce(
    (sum, category) => sum + category.products.length,
    0
  )

  const hasActiveFilters = Boolean(query || categoryId)

  const clearFilters = () => {
    setSearch('')
    setCategoryId(null)
  }

  return {
    search,
    setSearch,
    categoryId,
    setCategoryId,
    filteredCategories,
    visibleProductCount,
    hasActiveFilters,
    clearFilters,
    query,
  }
}
