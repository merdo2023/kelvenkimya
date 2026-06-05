import type { ProjectItem, ProjectRegion } from '@/types/locale'

export type ProjectMessage = {
  id: string
  projectName: string
  location: string
  date?: string
  description: string
  videoUrl?: string
}

function getProjectRegion(location: string): ProjectRegion {
  const normalized = location.toLocaleLowerCase('tr')
  return normalized.includes('türkmenistan') || normalized.includes('turkmenistan')
    ? 'turkmenistan'
    : 'turkey'
}

export function mapProjects(items: ProjectMessage[]): ProjectItem[] {
  return items.map((item) => ({
    id: item.id,
    projectName: item.projectName,
    location: item.location,
    date: item.date?.trim() || undefined,
    description: item.description,
    region: getProjectRegion(item.location),
    videoUrl: item.videoUrl?.trim() || undefined,
  }))
}

export function getProjectStats(projects: ProjectItem[]) {
  return {
    total: projects.length,
    turkeyCount: projects.filter((p) => p.region === 'turkey').length,
    turkmenistanCount: projects.filter((p) => p.region === 'turkmenistan').length,
  }
}
