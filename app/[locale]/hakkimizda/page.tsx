import { buildContentMetadata } from '@/lib/metadata'
import { AboutPage } from '@/views/AboutPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return buildContentMetadata(locale,
    locale === 'tr' ? 'Hakkımızda – Endüstriyel Saha Deneyimi' : 'About Us – Industrial Field Experience',
    locale === 'tr' ? 'Kelven Kimya: 1985’ten bu yana endüstriyel kimyasal temizlik, su şartlandırma, ürün tedariği ve analiz desteği. Türkiye ve uluslararası saha deneyimi.' : 'Kelven Kimya: industrial chemical cleaning, water treatment, chemical supply and analysis support since 1985. Field experience in Türkiye and internationally.',
    '/hakkimizda')
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <AboutPage locale={locale} />
}
