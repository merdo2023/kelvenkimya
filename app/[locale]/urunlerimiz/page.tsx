import { buildPageMetadata } from '@/lib/metadata'
import { ProductsPage } from '@/views/ProductsPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return buildPageMetadata(locale, {
    title: 'products.seo.title',
    description: 'products.seo.description',
    path: '/urunlerimiz',
  })
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <ProductsPage locale={locale as 'tr' | 'en'} />
}
