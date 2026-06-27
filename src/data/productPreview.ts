import type { ProductCategory } from '@/types/locale'

/** Product categories with images — priority order for catalog and home preview. */
export const PRIORITY_PRODUCT_CATEGORY_IDS = [
  'kimyasal_temizlik_urunleri',
  'kazan_suyu_kimyasallari',
  'sogutma_suyu_kimyasallari',
  'havuz_kimyasallari',
] as const

export const HOME_PREVIEW_CATEGORY_IDS = PRIORITY_PRODUCT_CATEGORY_IDS

export const HOME_PREVIEW_CATEGORY_LIMIT = 4

export function sortProductCategories(categories: ProductCategory[]): ProductCategory[] {
  const prioritySet = new Set<string>(PRIORITY_PRODUCT_CATEGORY_IDS)
  const priority = PRIORITY_PRODUCT_CATEGORY_IDS.map((id) =>
    categories.find((category) => category.id === id),
  ).filter((category): category is ProductCategory => Boolean(category))
  const rest = categories.filter((category) => !prioritySet.has(category.id))

  return [...priority, ...rest]
}

export function pickHomePreviewCategories(
  categories: ProductCategory[],
  limit = HOME_PREVIEW_CATEGORY_LIMIT,
): ProductCategory[] {
  const sorted = sortProductCategories(categories)
  const picked: ProductCategory[] = []

  for (const id of HOME_PREVIEW_CATEGORY_IDS) {
    const category = sorted.find((item) => item.id === id)
    if (category) picked.push(category)
  }

  return picked.slice(0, limit)
}

export function countProductItems(categories: ProductCategory[]): number {
  return categories.reduce((total, category) => total + category.products.length, 0)
}
