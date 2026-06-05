import { buildPageMetadata } from '@/lib/metadata'
import { HomePage } from '@/views/HomePage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return buildPageMetadata(locale, {
    title: 'home.seo.title',
    description: 'home.seo.description',
    path: '',
  })
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <HomePage locale={locale as 'tr' | 'en'} />
}
