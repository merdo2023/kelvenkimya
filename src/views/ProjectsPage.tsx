'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { EmptyState } from '@/components/common/EmptyState'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import type { ProjectItem } from '@/types/locale'

export function ProjectsPage() {
  const { t } = useTranslation()
  const projects = useLocaleArray<ProjectItem>('projects.items')

  return (
    <>
      <PageHero title={t('projects.title')} subtitle={t('projects.subtitle')} />

      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan/4 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green/4 blur-3xl" aria-hidden="true" />

        <Container className="relative">
          {projects.length === 0 ? (
            <EmptyState
              title={t('projects.emptyState.title')}
              description={t('projects.emptyState.description')}
            />
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
