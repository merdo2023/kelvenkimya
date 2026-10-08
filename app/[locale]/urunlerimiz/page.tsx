import { buildContentMetadata } from '@/lib/metadata'
import { ProductsPage } from '@/views/ProductsPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return buildContentMetadata(locale,
    locale === 'tr' ? 'Endüstriyel Kimyasallar ve Su Şartlandırma Ürünleri' : 'Industrial Chemicals and Water Treatment Products',
    locale === 'tr' ? 'Kelvenoks Ferlin temizlik ürünleri, kazan suyu ve soğutma suyu şartlandırma kimyasalları. Uygulamanıza uygun ürün seçimi, tedarik ve teknik destek.' : 'Kelvenoks Ferlin cleaning products, boiler water and cooling water treatment chemicals. Product selection, supply and technical support for your application.',
    '/urunlerimiz')
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <ProductsPage locale={locale as 'tr' | 'en'} />
}
