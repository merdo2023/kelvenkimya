'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowUpRight, Search } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { Container } from '@/components/common/Container'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ProjectsLocationFilter } from '@/components/projects/ProjectsLocationFilter'
import { ProjectsPageCTA } from '@/components/projects/ProjectsPageCTA'
import { projectGroups, getProjectGroup, getProjectImage } from '@/data/projectGroups'
import { useProjectFilter } from '@/hooks/useProjectFilter'
import { normalizeText } from '@/lib/normalizeText'
import { Link } from '@/i18n/navigation'
import type { ProjectItem } from '@/types/locale'

const servicePaths: Record<string, string> = {
  hrsg: '/hizmetlerimiz/endustriyel-kimyasal-temizlik/hrsg-kimyasal-temizligi',
  boiler: '/hizmetlerimiz/endustriyel-kimyasal-temizlik/buhar-kazani-kimyasal-temizligi',
  cooling: '/hizmetlerimiz/endustriyel-kimyasal-temizlik/sogutma-kulesi-kimyasal-temizligi',
  condenser: '/hizmetlerimiz/endustriyel-kimyasal-temizlik/esanjor-kondenser-kimyasal-temizligi',
  process: '/hizmetlerimiz/endustriyel-kimyasal-temizlik/tank-boru-hatti-kimyasal-temizligi',
  water: '/hizmetlerimiz#su-yumusatma-uniteleri-revizyonu',
  thermal: '/hizmetlerimiz/endustriyel-kimyasal-temizlik',
}

export function ProjectsPageClient({ projects }: { projects: ProjectItem[] }) {
  const { t, i18n } = useTranslation()
  const tr = i18n.language === 'tr'
  const { filter, setFilter, filteredProjects } = useProjectFilter(projects)
  const [search, setSearch] = useState('')
  const [pendingTarget, setPendingTarget] = useState<string | null>(null)
  const query = normalizeText(search.trim())
  const results = useMemo(() => filteredProjects.filter(project => !query || normalizeText([
    project.projectName, project.location, project.description, project.sector, project.systemType, project.year, project.date,
    ...(project.scope ?? []),
  ].filter(Boolean).join(' ')).includes(query)), [filteredProjects, query])
  const counts = useMemo(() => ({ all: projects.length, turkey: projects.filter(p => p.region === 'turkey').length, turkmenistan: projects.filter(p => p.region === 'turkmenistan').length }), [projects])
  const groups = projectGroups.map(group => ({ ...group, items: results.filter(project => getProjectGroup(project) === group.id) })).filter(group => group.items.length > 0)
  const reset = () => { setSearch(''); setFilter('all') }

  useEffect(() => {
    const revealProject = (hash: string) => {
      const id = hash.slice(1)
      if (!projects.some(project => project.id === id)) return
      setSearch('')
      setFilter('all')
      setPendingTarget(id)
    }
    const onHashChange = () => revealProject(window.location.hash)
    const onProjectLink = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const target = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null
      const hash = target?.getAttribute('href')
      if (hash) revealProject(hash)
    }
    onHashChange()
    window.addEventListener('hashchange', onHashChange)
    document.addEventListener('click', onProjectLink)
    return () => { window.removeEventListener('hashchange', onHashChange); document.removeEventListener('click', onProjectLink) }
  }, [projects, setFilter])

  useEffect(() => {
    if (!pendingTarget) return
    const frame = requestAnimationFrame(() => {
      document.getElementById(pendingTarget)?.scrollIntoView({ block: 'start' })
      setPendingTarget(null)
    })
    return () => cancelAnimationFrame(frame)
  }, [pendingTarget, results])

  return <section id="proje-arsivi" aria-labelledby="project-archive-heading" className="scroll-mt-24 border-t border-navy/10 bg-[#f3f6f8]">
    <Container className="py-14 sm:py-20">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-brand-blue">{tr ? 'Proje arşivi' : 'Project archive'}</p><h2 id="project-archive-heading" className="mt-3 text-3xl font-bold tracking-tight text-navy">{tr ? 'Uygulama alanına göre projelerimiz' : 'Our projects by application area'}</h2></div>
        <p className="max-w-sm text-sm leading-6 text-muted">{tr ? 'Proje adına veya konuma göre arayın; ilgili hizmet alanındaki kayıtları inceleyin.' : 'Search by project name or location and explore records in each service area.'}</p>
      </div>
      <div className="mb-9 flex flex-col gap-5 rounded-xl border border-navy/10 bg-white p-4 sm:p-5 xl:flex-row xl:items-center xl:justify-between">
        <ProjectsLocationFilter filter={filter} onFilterChange={setFilter} counts={counts} />
        <label className="relative block w-full xl:max-w-sm">
          <span className="sr-only">{tr ? 'Proje arşivinde ara' : 'Search project archive'}</span>
          <Search size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true" />
          <input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder={tr ? 'Proje, tesis veya konum ara…' : 'Search project, facility or location…'} className="w-full rounded-lg border border-navy/15 bg-[#f8fafb] py-3 pl-10 pr-3 text-sm text-navy outline-none placeholder:text-muted focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15" />
        </label>
      </div>
      <div className="grid items-start gap-9 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-10">
        <aside className="lg:sticky lg:top-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">{tr ? 'Uygulama alanları' : 'Application areas'}</p>
          <nav aria-label={tr ? 'Proje uygulama alanları' : 'Project application areas'} className="flex flex-wrap gap-2 lg:flex-col lg:gap-0">
            {groups.map(group => <a key={group.id} href={`#projects-${group.id}`} className="flex items-center justify-between gap-4 rounded-lg border border-navy/10 bg-white px-3 py-3 text-sm font-medium text-navy transition hover:border-brand-blue/30 hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-brand-blue lg:rounded-none lg:border-x-0 lg:border-t-0 lg:bg-transparent lg:px-0"><span>{tr ? group.tr : group.en}</span><span className="rounded bg-navy/5 px-2 py-0.5 text-xs tabular-nums text-muted">{group.items.length}</span></a>)}
          </nav>
          <p className="mt-5 text-xs text-muted" role="status" aria-live="polite" aria-atomic="true">{t('projects.resultsCount', { count: results.length })}</p>
          {(search || filter !== 'all') && <button type="button" onClick={reset} className="mt-3 text-xs font-semibold text-brand-blue underline underline-offset-4">{tr ? 'Filtreleri temizle' : 'Clear filters'}</button>}
        </aside>
        <div className="min-w-0 space-y-12">
          {groups.length === 0 ? <div className="rounded-xl border border-navy/10 bg-white p-8"><h3 className="text-xl font-bold text-navy">{t('projects.emptyState.title')}</h3><p className="mt-3 text-sm text-muted">{tr ? 'Bu arama ve konum seçimine uygun kayıt bulunamadı.' : 'No records match this search and location selection.'}</p><button type="button" onClick={reset} className="mt-5 rounded-lg bg-navy px-4 py-3 text-sm font-semibold text-white">{tr ? 'Tüm projeleri göster' : 'Show all projects'}</button></div> : groups.map((group, index) => <section key={group.id} id={`projects-${group.id}`} className="scroll-mt-28" aria-labelledby={`heading-${group.id}`}>
            <header className="mb-5 border-b border-navy/15 pb-5">
              <div className="flex items-start gap-3"><span className="pt-1 text-xs font-semibold tabular-nums text-brand-blue">{String(index + 1).padStart(2, '0')}</span><div><h3 id={`heading-${group.id}`} className="text-xl font-bold text-navy sm:text-2xl">{tr ? group.tr : group.en}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{tr ? group.descriptionTr : group.descriptionEn}</p><Link href={servicePaths[group.id]} className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue transition hover:text-navy">{tr ? 'İlgili hizmeti inceleyin' : 'Explore the related service'}<ArrowUpRight size={14} aria-hidden="true" /></Link></div></div>
            </header>
            <div className="grid items-start gap-4 md:grid-cols-2">{group.items.map(project => project.id === 'gtg-int-projesi-0' && project.videoUrl ? <div key={project.id} className="grid gap-4 md:col-span-2 md:grid-cols-2">
              <ProjectCard project={project} />
              <figure className="overflow-hidden rounded-xl border border-navy/10 bg-white">
                <video src={project.videoUrl} poster={getProjectImage(project)} controls playsInline preload="none" aria-label={tr ? 'Ahal GTG saha uygulaması videosu' : 'Ahal GTG field application video'} className="aspect-video w-full bg-navy object-contain" />
                <figcaption className="p-5 sm:p-6"><h4 className="text-lg font-bold text-navy">{tr ? 'Ahal GTG — Saha uygulaması' : 'Ahal GTG — Field application'}</h4><p className="mt-2 text-sm leading-6 text-muted">{tr ? 'Projeye ait saha videosunu buradan izleyebilirsiniz.' : 'Watch the project field video here.'}</p></figcaption>
              </figure>
            </div> : <ProjectCard key={project.id} project={project} />)}</div>
          </section>)}
        </div>
      </div>
      <p className="mt-10 border-t border-navy/10 pt-5 text-xs leading-6 text-muted">{tr ? 'Proje kayıtları şirket ve ekip saha deneyimini yansıtır. Kayıtlarda belirtilen MW değerleri tesis kapasitesidir; temizlik uygulamasının kapsamı ilgili proje açıklamasında belirtilmiştir.' : 'Project records reflect company and team field experience. MW figures refer to facility capacity; cleaning scope is described in the relevant project record.'}</p>
    </Container>
    <ProjectsPageCTA />
  </section>
}