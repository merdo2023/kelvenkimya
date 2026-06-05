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
      role="tablist"
      aria-label={t('projects.filters.label')}
    >
      {filters.map((item) => {
        const active = filter === item
        return (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onFilterChange(item)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
              active
                ? 'border-cyan/30 bg-white text-brand-blue shadow-[0_4px_20px_-8px_rgba(11,31,51,0.12)] ring-1 ring-cyan/20'
                : 'border-border/50 bg-white/80 text-navy hover:border-border hover:bg-white hover:shadow-sm'
            }`}
          >
            {labels[item]}
            <span
              className={`rounded-full px-2 py-0.5 text-xs tabular-nums ${
                active ? 'bg-cyan/10 text-brand-blue' : 'bg-light-bg text-muted'
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
