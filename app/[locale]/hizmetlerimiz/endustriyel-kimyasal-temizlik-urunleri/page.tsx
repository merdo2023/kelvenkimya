import { buildContentMetadata } from '@/lib/metadata'
import { CleaningProductsPage, cleaningProductsPath } from '@/views/CleaningProductsPage'

type Props = { params: Promise<{ locale: string }> }
export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return buildContentMetadata(locale, locale === 'tr' ? 'Endüstriyel Kimyasal Temizlik Ürünleri' : 'Industrial Chemical Cleaning Products', locale === 'tr' ? 'Kelvenoks Ferlin serisi: demir, çelik, bakır, paslanmaz ve alüminyum sistemler için kireç ve mineral birikintisi temizliği ürünleri ve teknik destek.' : 'Kelvenoks Ferlin chemicals for scale and mineral deposit removal in steel, copper, stainless steel and aluminium systems, with product selection support.', cleaningProductsPath)
}
export default async function Page({ params }: Props) {
  const { locale } = await params
  return <CleaningProductsPage locale={locale} />
}
