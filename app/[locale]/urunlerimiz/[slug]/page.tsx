import { notFound } from 'next/navigation'
import { productPages, productPagePath } from '@/data/productPages'
import { buildContentMetadata } from '@/lib/metadata'
import { ProductPageView } from '@/views/ProductPageView'

type Props = { params: Promise<{ locale: string; slug: string }> }
export function generateStaticParams() { return productPages.map(product => ({ slug: product.slug })) }
export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params
  const product = productPages.find(item => item.slug === slug)
  if (!product) notFound()
  const content = locale === 'tr' ? product.tr : product.en
  return buildContentMetadata(locale, `${product.name} – ${content.purpose}`, content.description, productPagePath(product))
}
export default async function Page({ params }: Props) {
  const { locale, slug } = await params
  const product = productPages.find(item => item.slug === slug)
  if (!product) notFound()
  return <ProductPageView locale={locale} product={product} />
}
