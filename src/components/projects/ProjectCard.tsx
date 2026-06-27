'use client'

import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Play } from 'lucide-react'
import { VideoModal } from '@/components/common/VideoModal'
import { cardAccentColors } from '@/data/accentColors'
import { resolveMediaPath } from '@/lib/media'
import type { ProjectItem } from '@/types/locale'

interface ProjectCardProps {
  project: ProjectItem
  index: number
}

const MAX_SCOPE_ITEMS = 3

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useTranslation()
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const accent = cardAccentColors[index % cardAccentColors.length]
  const videoPath = resolveMediaPath(project.videoUrl)
  const regionLabel =
    project.region === 'turkmenistan'
      ? t('projects.filters.turkmenistan')
      : t('projects.filters.turkey')
  const displayYear = project.year ?? project.date
  const visibleScope = project.scope?.slice(0, MAX_SCOPE_ITEMS) ?? []
  const hiddenScopeCount = Math.max(0, (project.scope?.length ?? 0) - visibleScope.length)

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2), ease: [0.22, 1, 0.36, 1] }}
        className="group h-full"
      >
        <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-border/40 bg-white shadow-[0_2px_12px_-6px_rgba(11,31,51,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/20 hover:shadow-[0_8px_24px_-10px_rgba(11,31,51,0.12)]">
          <div className="relative flex flex-1 flex-col p-4 sm:p-5">
            <div
              className={`absolute bottom-4 left-0 top-4 w-[2px] rounded-r-full bg-gradient-to-b ${accent.gradient} opacity-50 transition-opacity duration-200 group-hover:opacity-100`}
              aria-hidden="true"
            />

            <div className="flex min-h-0 flex-1 flex-col pl-3">
              <div className="mb-2 flex flex-wrap items-center gap-1.5">
                <span
                  className={`rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                    project.region === 'turkmenistan'
                      ? 'border border-brand-blue/15 bg-brand-blue/[0.06] text-brand-blue'
                      : 'border border-green/15 bg-green/[0.06] text-green'
                  }`}
                >
                  {regionLabel}
                </span>
                {project.sector ? (
                  <span className="rounded-md border border-border/45 bg-light-bg px-2 py-0.5 text-[10px] font-medium text-muted">
                    {project.sector}
                  </span>
                ) : null}
              </div>

              {project.highlight ? (
                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan">
                  {project.highlight}
                </p>
              ) : null}

              <h3 className="break-words text-base font-bold leading-snug text-navy sm:text-[1.0625rem]">
                {project.projectName}
              </h3>

              {(project.location || displayYear || project.systemType) && (
                <ul className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted">
                  {project.location ? (
                    <li className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-blue/60" aria-hidden="true" />
                      <span>{project.location}</span>
                    </li>
                  ) : null}
                  {displayYear ? (
                    <li className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 shrink-0 text-brand-blue/60" aria-hidden="true" />
                      <span>{displayYear}</span>
                    </li>
                  ) : null}
                  {project.systemType ? (
                    <li className="rounded-md border border-border/40 bg-light-bg/80 px-2 py-0.5 text-[10px] font-medium text-navy/75">
                      {project.systemType}
                    </li>
                  ) : null}
                </ul>
              )}

              {project.description ? (
                <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              ) : null}

              {visibleScope.length > 0 ? (
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {visibleScope.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border/40 bg-[#fbfcfd] px-2 py-0.5 text-[10px] font-medium text-muted"
                    >
                      {item}
                    </span>
                  ))}
                  {hiddenScopeCount > 0 ? (
                    <span className="rounded-md border border-border/40 px-2 py-0.5 text-[10px] font-medium text-muted">
                      +{hiddenScopeCount}
                    </span>
                  ) : null}
                </div>
              ) : null}

              {videoPath ? (
                <div className="mt-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsVideoOpen(true)}
                    className="group/video inline-flex items-center gap-1.5 rounded-md border border-border/45 bg-light-bg/60 px-2.5 py-1.5 text-xs font-semibold text-navy/80 transition-colors hover:border-cyan/25 hover:bg-cyan/[0.05] hover:text-cyan"
                    aria-label={t('projects.watchVideo')}
                  >
                    <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                    {t('projects.watchVideo')}
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </motion.article>

      {videoPath ? (
        <VideoModal
          isOpen={isVideoOpen}
          videoUrl={videoPath}
          title={project.projectName}
          closeLabel={t('projects.videoModal.close')}
          onClose={() => setIsVideoOpen(false)}
        />
      ) : null}
    </>
  )
}
