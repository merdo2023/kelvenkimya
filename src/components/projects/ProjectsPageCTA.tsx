'use client'

import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Link } from '@/i18n/navigation'
import { useTranslation } from '@/hooks/useTranslation'

export function ProjectsPageCTA() {
  const { t, i18n } = useTranslation()
  const tr = i18n.language === 'tr'
  return <section className="pb-16 sm:pb-20"><Container><div className="flex flex-col justify-between gap-7 rounded-xl bg-navy p-7 sm:p-10 lg:flex-row lg:items-center">
    <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.16em] text-cyan">{tr ? 'Bir sonraki saha çalışması' : 'Your next field project'}</p><h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{t('projects.ctaTitle')}</h2><p className="mt-3 text-sm leading-6 text-white/70">{t('projects.ctaDescription')}</p></div>
    <Link href="/iletisim" className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-lg bg-white px-5 py-3.5 text-sm font-semibold text-navy transition hover:bg-[#eaf2f8]">{t('projects.cta')}<ArrowUpRight size={18} aria-hidden="true" /></Link>
  </div></Container></section>
}