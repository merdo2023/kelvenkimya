'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link, usePathname } from '@/i18n/navigation'
import { useTranslation } from '@/hooks/useTranslation'
import type { ServiceItem } from '@/types/locale'
import { routes } from '@/data/routes'

export function ServicesNavLinks({ mobile = false, isTransparent = false, services }: { mobile?: boolean; isTransparent?: boolean; services: ServiceItem[] }) {
  const { t, i18n } = useTranslation()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [pathname])
  const tr = i18n.language === 'tr'
  const links = services.map(service => ({ href: `${routes.services}#${service.id}`, label: service.title }))
  return <div className={mobile ? 'rounded-xl border border-navy/10' : 'relative'} onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); (event.currentTarget.querySelector('button') as HTMLButtonElement)?.focus() } }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false) }}>
    <div className={`flex items-center ${mobile ? 'px-4' : 'pl-3'}`}>
      <Link href={routes.services} className={`py-2 text-sm font-medium ${mobile ? 'flex-1 py-3 text-navy' : isTransparent ? 'text-white/80' : 'text-navy/75'} ${pathname.startsWith(routes.services) ? 'underline decoration-cyan underline-offset-8' : ''}`} aria-current={pathname === routes.services ? 'page' : undefined}>{t('nav.labels.services')}</Link>
      <button type="button" aria-expanded={open} aria-controls={mobile ? 'mobile-service-links' : 'desktop-service-links'} aria-label={tr ? 'Hizmet sayfalarını göster' : 'Show service pages'} onClick={() => setOpen(!open)} className={`rounded-lg p-2 focus-visible:outline-2 focus-visible:outline-cyan ${!mobile && isTransparent ? 'text-white' : 'text-navy'}`}><ChevronDown className={`h-3.5 w-3.5 transition ${open ? 'rotate-180' : ''}`} /></button>
    </div>
    {open && <ul id={mobile ? 'mobile-service-links' : 'desktop-service-links'} className={mobile ? 'space-y-1 border-t border-navy/10 p-2' : 'absolute left-0 top-full z-50 mt-2 w-80 rounded-xl border border-navy/10 bg-white p-2 shadow-xl'}>{links.map(link => <li key={link.href}><Link href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? 'page' : undefined} className={`block rounded-lg px-3 py-2.5 text-sm text-navy hover:bg-cyan/10 focus-visible:outline-2 focus-visible:outline-cyan ${pathname === link.href ? 'bg-cyan/10 font-bold' : ''}`}>{link.label}</Link></li>)}</ul>}
  </div>
}
