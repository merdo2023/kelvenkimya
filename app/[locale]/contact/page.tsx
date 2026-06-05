import { buildPageMetadata } from '@/lib/metadata'
import { ContactPage } from '@/views/ContactPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return buildPageMetadata(locale, {
    title: 'contact.seo.title',
    description: 'contact.seo.description',
    path: '/contact',
  })
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <ContactPage locale={locale} />
}
