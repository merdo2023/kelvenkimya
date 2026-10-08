'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link, usePathname } from '@/i18n/navigation'
import { useTranslation } from '@/hooks/useTranslation'

import { routes } from '@/data/routes'


export function ProductsNavLinks({ mobile = false, isTransparent = false, onNavigate }: { mobile?: boolean; isTransparent?: boolean; onNavigate?: () => void }) {
  const { t, i18n } = useTranslation()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [pathname])
  const tr = i18n.language === 'tr'
  const links = [
    { href: `${routes.products}#kimyasal_temizlik_urunleri`, label: tr ? 'Endüstriyel Temizlik ve Bakım Kimyasalları' : 'Industrial Cleaning and Maintenance Chemicals' },
    { href: `${routes.products}#kazan_suyu_kimyasallari`, label: tr ? 'Kazan Suyu Şartlandırma Kimyasalları' : 'Boiler Water Treatment Chemicals' },
    { href: `${routes.products}#sogutma_suyu_kimyasallari`, label: tr ? 'Soğutma Suyu Şartlandırma Kimyasalları' : 'Cooling Water Treatment Chemicals' },
    { href: `${routes.products}#havuz_kimyasallari`, label: tr ? 'Havuz Kimyasalları' : 'Pool Chemicals' },
    { href: routes.products, label: tr ? 'Tüm Ürünler' : 'All Products' },
  ]
  return <div className={mobile ? 'rounded-xl border border-navy/10' : 'relative'} onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); (event.currentTarget.querySelector('button') as HTMLButtonElement)?.focus() } }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false) }}>
    <div className={`flex items-center ${mobile ? 'px-4' : 'pl-3'}`}>
      <Link href={routes.products} className={`py-2 text-sm font-medium ${mobile ? 'flex-1 py-3 text-navy' : isTransparent ? 'text-white/80' : 'text-navy/75'} ${pathname.startsWith(routes.products) ? 'underline decoration-cyan underline-offset-8' : ''}`} aria-current={pathname === routes.products ? 'page' : undefined}>{t('nav.labels.products')}</Link>
      <button type="button" aria-expanded={open} aria-controls={mobile ? 'mobile-product-links' : 'desktop-product-links'} aria-label={tr ? 'Ürün gruplarını göster' : 'Show product groups'} onClick={() => setOpen(!open)} className={`rounded-lg p-2 focus-visible:outline-2 focus-visible:outline-cyan ${!mobile && isTransparent ? 'text-white' : 'text-navy'}`}><ChevronDown className={`h-3.5 w-3.5 transition ${open ? 'rotate-180' : ''}`} /></button>
    </div>
    {open && <ul id={mobile ? 'mobile-product-links' : 'desktop-product-links'} className={mobile ? 'space-y-1 border-t border-navy/10 p-2' : 'absolute left-0 top-full z-50 mt-2 w-80 rounded-xl border border-navy/10 bg-white p-2 shadow-xl'}>{links.map(link => <li key={link.href}><Link href={link.href} onClick={() => { setOpen(false); onNavigate?.() }} aria-current={pathname === link.href ? 'page' : undefined} className={`block rounded-lg px-3 py-2.5 text-sm text-navy hover:bg-cyan/10 focus-visible:outline-2 focus-visible:outline-cyan ${pathname === link.href ? 'bg-cyan/10 font-bold' : ''}`}>{link.label}</Link></li>)}</ul>}
  </div>
}
