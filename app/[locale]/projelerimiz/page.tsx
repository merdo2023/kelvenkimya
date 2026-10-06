import { buildPageMetadata } from '@/lib/metadata'
import { ProjectsPage } from '@/views/ProjectsPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return buildPageMetadata(locale, {
    title: 'projects.seo.title',
    description: 'projects.seo.description',
    path: '/projelerimiz',
  })
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <ProjectsPage locale={locale as 'tr' | 'en'} />
}
