import { buildPageMetadata } from '@/lib/metadata'
import { AboutPage } from '@/views/AboutPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return buildPageMetadata(locale, {
    title: 'about.seo.title',
    description: 'about.seo.description',
    path: '/hakkimizda',
  })
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <AboutPage locale={locale} />
}
