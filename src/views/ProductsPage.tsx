import { getProductCategories } from '@/data/localeCatalog'
import type { AppLocale } from '@/i18n/routing'
import { ProductsPageClient } from './ProductsPageClient'

type ProductsPageProps = {
  locale: AppLocale
}

export async function ProductsPage({ locale }: ProductsPageProps) {
  const categories = await getProductCategories(locale)
  return <ProductsPageClient categories={categories} />
}
