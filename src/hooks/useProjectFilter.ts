'use client'

import { useMemo, useState } from 'react'
import type { ProjectItem, ProjectRegion } from '@/types/locale'

export type ProjectFilter = 'all' | ProjectRegion

export function useProjectFilter(projects: ProjectItem[]) {
  const [filter, setFilter] = useState<ProjectFilter>('all')

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((project) => project.region === filter)
  }, [projects, filter])

  return { filter, setFilter, filteredProjects }
}
