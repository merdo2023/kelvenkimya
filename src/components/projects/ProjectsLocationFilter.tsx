'use client'

import { useTranslation } from '@/hooks/useTranslation'
import type { ProjectFilter } from '@/hooks/useProjectFilter'

interface ProjectsLocationFilterProps {
  filter: ProjectFilter
  onFilterChange: (filter: ProjectFilter) => void
  counts: {
    all: number
    turkey: number
    turkmenistan: number
  }
}

const filters: ProjectFilter[] = ['all', 'turkey', 'turkmenistan']

export function ProjectsLocationFilter({
  filter,
  onFilterChange,
  counts,
}: ProjectsLocationFilterProps) {
  const { t } = useTranslation()

  const labels: Record<ProjectFilter, string> = {
    all: t('projects.filters.all'),
    turkey: t('projects.filters.turkey'),
    turkmenistan: t('projects.filters.turkmenistan'),
  }

  return (
    <div className="flex flex-wrap gap-2"
      role="group"
      aria-label={t('projects.filters.label')}
    >
      {filters.map((item) => {
        const active = filter === item
        return (
          <button
            key={item}
            type="button"

            aria-pressed={active}
            onClick={() => onFilterChange(item)}
            className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${
              active
                ? 'border-navy bg-navy text-white'
                : 'border-border/50 bg-white/80 text-navy hover:border-border hover:bg-white hover:shadow-sm'
            }`}
          >
            {labels[item]}
            <span
              className={`rounded-full px-2 py-0.5 text-xs tabular-nums ${
                active ? 'bg-white/15 text-white' : 'bg-light-bg text-muted'
              }`}
            >
              {counts[item]}
            </span>
          </button>
        )
      })}
    </div>
  )
}
