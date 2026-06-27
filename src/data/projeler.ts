import type { ProjectItem, ProjectRegion } from '@/types/locale'

export type ProjectMessage = {
  id: string
  projectName: string
  location: string
  date?: string
  description: string
  videoUrl?: string
  thumbnailUrl?: string
  sector?: string
  scope?: string[]
  systemType?: string
  year?: string
  highlight?: string
}

function getProjectRegion(location: string): ProjectRegion {
  const normalized = location.toLocaleLowerCase('tr')
  return normalized.includes('türkmenistan') || normalized.includes('turkmenistan')
    ? 'turkmenistan'
    : 'turkey'
}

function trimOptional(value?: string): string | undefined {
  const trimmed = value?.trim()
  return trimmed ? trimmed : undefined
}

function trimStringArray(values?: string[]): string[] | undefined {
  if (!Array.isArray(values)) return undefined
  const filtered = values.map((v) => v.trim()).filter(Boolean)
  return filtered.length > 0 ? filtered : undefined
}

export function mapProjects(items: ProjectMessage[]): ProjectItem[] {
  return items.map((item) => ({
    id: item.id,
    projectName: item.projectName,
    location: item.location,
    date: trimOptional(item.date),
    description: item.description,
    region: getProjectRegion(item.location),
    videoUrl: trimOptional(item.videoUrl),
    thumbnailUrl: trimOptional(item.thumbnailUrl),
    sector: trimOptional(item.sector),
    scope: trimStringArray(item.scope),
    systemType: trimOptional(item.systemType),
    year: trimOptional(item.year),
    highlight: trimOptional(item.highlight),
  }))
}

export function getProjectStats(projects: ProjectItem[]) {
  return {
    total: projects.length,
    turkeyCount: projects.filter((p) => p.region === 'turkey').length,
    turkmenistanCount: projects.filter((p) => p.region === 'turkmenistan').length,
  }
}
