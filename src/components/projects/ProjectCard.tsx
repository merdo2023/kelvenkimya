'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Calendar, MapPin, Play } from 'lucide-react'
import { getProjectImage } from '@/data/projectGroups'
import { useTranslation } from '@/hooks/useTranslation'
import { VideoModal } from '@/components/common/VideoModal'
import { resolveMediaPath } from '@/lib/media'
import type { ProjectItem } from '@/types/locale'

export function ProjectCard({ project }: { project: ProjectItem }) {
  const { t, i18n } = useTranslation()
  const tr = i18n.language === 'tr'
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoPath = resolveMediaPath(project.videoUrl)
  const imagePath = getProjectImage(project)
  const displayYear = project.year ?? project.date
  return <>
    <article id={project.id} aria-labelledby={`title-${project.id}`} className="group flex h-full scroll-mt-32 flex-col overflow-hidden rounded-xl border border-navy/10 bg-white transition-shadow hover:shadow-md">
      {imagePath && <div className="relative aspect-[16/8] overflow-hidden"><Image src={imagePath} alt={tr ? `${project.projectName} saha fotoğrafı` : `${project.projectName} field photograph`} fill sizes="(min-width: 1024px) 440px, (min-width: 768px) 45vw, 100vw" className="object-cover" /></div>}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-semibold">
          <span className="rounded-md bg-[#eaf2f8] px-2.5 py-1 text-brand-blue">{project.region === 'turkmenistan' ? t('projects.filters.turkmenistan') : t('projects.filters.turkey')}</span>
          {project.sector && <span className="text-muted">{project.sector}</span>}
        </div>
        <h4 id={`title-${project.id}`} className="break-words text-lg font-bold leading-snug text-navy">{project.projectName}</h4>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
          {project.location && <li className="flex items-center gap-1.5"><MapPin size={14} aria-hidden="true" />{project.location}</li>}
          {displayYear && <li className="flex items-center gap-1.5"><Calendar size={14} aria-hidden="true" />{displayYear}</li>}
        </ul>
        {project.highlight && <p className="mt-4 text-xs font-semibold leading-5 text-brand-blue">{project.highlight}</p>}
        <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
        {project.systemType && <dl className="mt-4 border-t border-navy/10 pt-3"><dt className="text-[11px] font-semibold uppercase tracking-wider text-muted">{tr ? 'Sistem / ekipman' : 'System / equipment'}</dt><dd className="mt-1 text-xs leading-5 text-navy">{project.systemType}</dd></dl>}
        {!!project.scope?.length && <ul aria-label={tr ? 'Uygulama kapsamı' : 'Application scope'} className="mt-4 flex flex-wrap gap-1.5">{project.scope.map(item => <li key={item} className="rounded-md border border-navy/10 bg-[#f8fafb] px-2 py-1 text-[11px] leading-4 text-muted">{item}</li>)}</ul>}
        {videoPath && <div className="mt-auto pt-5"><button type="button" onClick={() => setIsVideoOpen(true)} aria-label={`${project.projectName}: ${t('projects.watchVideo')}`} className="inline-flex items-center gap-2 rounded-lg border border-brand-blue/20 px-3 py-2.5 text-xs font-semibold text-brand-blue transition hover:bg-brand-blue/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"><Play size={14} aria-hidden="true" />{tr ? 'Saha uygulamasını izleyin' : 'Watch the field application'}</button></div>}
      </div>
    </article>
    {videoPath && <VideoModal isOpen={isVideoOpen} videoUrl={videoPath} title={project.projectName} closeLabel={t('projects.videoModal.close')} onClose={() => setIsVideoOpen(false)} />}
  </>
}