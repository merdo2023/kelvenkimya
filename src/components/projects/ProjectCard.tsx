'use client'

import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Play } from 'lucide-react'
import { VideoModal } from '@/components/common/VideoModal'
import { cardAccentColors } from '@/data/accentColors'
import type { ProjectItem } from '@/types/locale'

interface ProjectCardProps {
  project: ProjectItem
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useTranslation()
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const accent = cardAccentColors[index % cardAccentColors.length]
  const number = String(index + 1).padStart(2, '0')
  const regionLabel =
    project.region === 'turkmenistan'
      ? t('projects.filters.turkmenistan')
      : t('projects.filters.turkey')

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="group h-full"
      >
        <div className="relative flex h-full flex-col rounded-2xl border border-border/50 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-7">
          <div
            className={`absolute bottom-5 left-0 top-5 w-[3px] rounded-r-full bg-gradient-to-b ${accent.gradient} opacity-70 transition-opacity duration-200 group-hover:opacity-100`}
            aria-hidden="true"
          />

          <div className="pl-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              {project.videoUrl ? (
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-brand-blue/15 bg-brand-blue/8 px-3 py-1 text-xs font-bold tracking-wide text-brand-blue transition-colors hover:border-brand-blue/30 hover:bg-brand-blue/12"
                >
                  <Play className="h-3 w-3 fill-current" aria-hidden="true" />
                  {t('projects.video')}
                </button>
              ) : (
                <span className="text-xs font-bold tracking-wider text-muted">{number}</span>
              )}
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  project.region === 'turkmenistan'
                    ? 'bg-brand-blue/8 text-brand-blue'
                    : 'bg-green/8 text-green'
                }`}
              >
                {regionLabel}
              </span>
            </div>

            <h3 className="mt-3 text-lg font-bold leading-snug text-navy sm:text-xl">
              {project.projectName}
            </h3>

            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-brand-blue/70" aria-hidden="true" />
                <span>{project.location}</span>
              </li>
              {project.date && (
                <li className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 shrink-0 text-brand-blue/70" aria-hidden="true" />
                  <span>{project.date}</span>
                </li>
              )}
            </ul>

            <p className="mt-5 text-sm leading-[1.75] text-muted sm:text-[15px]">
              {project.description}
            </p>
          </div>
        </div>
      </motion.article>

      {project.videoUrl && (
        <VideoModal
          isOpen={isVideoOpen}
          videoUrl={project.videoUrl}
          title={project.projectName}
          closeLabel={t('projects.videoModal.close')}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </>
  )
}
