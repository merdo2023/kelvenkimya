import { setRequestLocale } from 'next-intl/server'
import { BlogList } from '@/components/blog/BlogList'
import { buildContentMetadata } from '@/lib/metadata'
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return buildContentMetadata(locale, locale === 'en' ? 'Chemical Cleaning and Water Treatment Blog' : 'Kimyasal Temizlik ve Su Şartlandırma Blogu', locale === 'en' ? 'Kelven Kimya technical guides on HRSG, steam boiler, tank and pipeline chemical cleaning and industrial water treatment.' : 'HRSG, buhar kazanı, tank ve boru hattı kimyasal temizliği ile su şartlandırma hakkında Kelven Kimya teknik rehberleri.', '/blog')
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
 const { locale } = await params
 setRequestLocale(locale)
 return <BlogList locale={locale} />
}
