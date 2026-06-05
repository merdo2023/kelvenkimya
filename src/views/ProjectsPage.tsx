import { getProjects } from '@/data/localeCatalog'
import type { AppLocale } from '@/i18n/routing'
import { ProjectsPageClient } from './ProjectsPageClient'

type ProjectsPageProps = {
  locale: AppLocale
}

export async function ProjectsPage({ locale }: ProjectsPageProps) {
  const projects = await getProjects(locale)
  return <ProjectsPageClient projects={projects} />
}
