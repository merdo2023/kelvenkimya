import { notFound } from 'next/navigation'
import { conditioningBasePath, conditioningContent, conditioningServices } from '@/data/waterConditioningServices'
import { buildContentMetadata } from '@/lib/metadata'
import { WaterConditioningPage } from '@/views/WaterConditioningPage'

type Props = { params: Promise<{ locale: string; slug: string }> }
export function generateStaticParams() { return conditioningServices.map(service => ({ slug: service.slug })) }
export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params
  const service = conditioningServices.find(item => item.slug === slug)
  if (!service) notFound()
  const content = conditioningContent(service, locale)
  return buildContentMetadata(locale, content.title, content.summary, `${conditioningBasePath}/${slug}`)
}
export default async function Page({ params }: Props) {
  const { locale, slug } = await params
  const service = conditioningServices.find(item => item.slug === slug)
  if (!service) notFound()
  return <WaterConditioningPage locale={locale} service={service} />
}
