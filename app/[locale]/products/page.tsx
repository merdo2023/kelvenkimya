import { buildPageMetadata } from '@/lib/metadata'
import { ProductsPage } from '@/views/ProductsPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return buildPageMetadata(locale, {
    title: 'products.title',
    description: 'products.subtitle',
  })
}

export default function Page() {
  return <ProductsPage />
}
