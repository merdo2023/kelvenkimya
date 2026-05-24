import { buildPageMetadata } from '@/lib/metadata'
import { ProjectsPage } from '@/views/ProjectsPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return buildPageMetadata(locale, {
    title: 'projects.title',
    description: 'projects.subtitle',
  })
}

export default function Page() {
  return <ProjectsPage />
}
