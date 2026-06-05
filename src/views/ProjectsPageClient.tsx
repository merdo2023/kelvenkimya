'use client'

import { useMemo } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { EmptyState } from '@/components/common/EmptyState'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ProjectsHeroStats } from '@/components/projects/ProjectsHeroStats'
import { ProjectsLocationFilter } from '@/components/projects/ProjectsLocationFilter'
import { ProjectsPageCTA } from '@/components/projects/ProjectsPageCTA'
import { getProjectStats } from '@/data/projeler'
import { useProjectFilter } from '@/hooks/useProjectFilter'
import type { ProjectItem } from '@/types/locale'

type ProjectsPageClientProps = {
  projects: ProjectItem[]
}

export function ProjectsPageClient({ projects }: ProjectsPageClientProps) {
  const { t } = useTranslation()
  const stats = getProjectStats(projects)
  const { filter, setFilter, filteredProjects } = useProjectFilter(projects)

  const filterCounts = useMemo(
    () => ({
      all: projects.length,
      turkey: projects.filter((p) => p.region === 'turkey').length,
      turkmenistan: projects.filter((p) => p.region === 'turkmenistan').length,
    }),
    [projects],
  )

  return (
    <>
      <PageHero title={t('projects.title')} subtitle={t('projects.subtitle')}>
        <ProjectsHeroStats
          total={stats.total}
          turkeyCount={stats.turkeyCount}
          turkmenistanCount={stats.turkmenistanCount}
        />
      </PageHero>

      <section className="relative overflow-hidden">
        <div className="section-muted absolute inset-0" aria-hidden="true" />

        <Container className="relative py-14 lg:py-16">
          <div className="mb-8 rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted">
                {t('projects.resultsCount', { count: filteredProjects.length })}
              </p>
              <ProjectsLocationFilter
                filter={filter}
                onFilterChange={setFilter}
                counts={filterCounts}
              />
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <EmptyState
              title={t('projects.emptyState.title')}
              description={t('projects.emptyState.description')}
            />
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </Container>

        <ProjectsPageCTA />
      </section>
    </>
  )
}
