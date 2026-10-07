import { CleaningServicePage } from '@/views/CleaningServicePage'
import { buildContentMetadata } from '@/lib/metadata'
import { cleaningBasePath } from '@/data/cleaningServices'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return buildContentMetadata(locale, locale === 'tr' ? 'Endüstriyel Kimyasal Temizlik' : 'Industrial Chemical Cleaning', locale === 'tr' ? 'HRSG, buhar kazanı, eşanjör, kondenser, soğutma kulesi, tank ve boru hatları için projeye özel kimyasal temizlik ve teknik destek.' : 'Project-specific chemical cleaning for HRSG systems, boilers, heat exchangers, condensers, cooling towers, tanks and piping.', cleaningBasePath)
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  return <CleaningServicePage locale={locale} />
}
