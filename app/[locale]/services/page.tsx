import { buildPageMetadata } from '@/lib/metadata'
import { ServicesPage } from '@/views/ServicesPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return buildPageMetadata(locale, {
    title: 'services.seo.title',
    description: 'services.seo.description',
    path: '/services',
  })
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <ServicesPage locale={locale} />
}
