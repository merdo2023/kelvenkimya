import { notFound } from 'next/navigation'
import { CleaningServicePage } from '@/views/CleaningServicePage'
import { cleaningServices, cleaningContent, cleaningBasePath } from '@/data/cleaningServices'
import { buildContentMetadata } from '@/lib/metadata'

type Props = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return cleaningServices.map(service => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params
  const service = cleaningServices.find(item => item.slug === slug)
  if (!service) notFound()
  const content = cleaningContent(service, locale)
  return buildContentMetadata(locale, content.title, content.summary, `${cleaningBasePath}/${slug}`)
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params
  const service = cleaningServices.find(item => item.slug === slug)
  if (!service) notFound()
  return <CleaningServicePage locale={locale} service={service} />
}
