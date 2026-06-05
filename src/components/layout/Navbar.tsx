'use client'

import { useState, useEffect } from 'react'
import { Link, usePathname } from '@/i18n/navigation'
import { useTranslation } from '@/hooks/useTranslation'
import { Menu, X } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Container } from '../common/Container'
import { Logo } from '../common/Logo'
import { Button } from '../common/Button'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import { routes } from '@/data/routes'
import type { NavItem } from '@/types/locale'

function isNavActive(pathname: string, path: string) {
  if (path === '/') return pathname === '/'
  return pathname === path || pathname.startsWith(`${path}/`)
}

export function Navbar() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = useLocaleArray<NavItem>('nav.items')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const linkClass = (path: string) => {
    const active = isNavActive(pathname, path)
    return `rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
      active
        ? 'bg-brand-blue/10 text-brand-blue'
        : 'text-navy/75 hover:bg-navy/5 hover:text-navy'
    }`
  }

  const mobileLinkClass = (path: string) => {
    const active = isNavActive(pathname, path)
    return `block rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
      active ? 'bg-brand-blue/10 text-brand-blue' : 'text-navy hover:bg-navy/5'
    }`
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'border-b border-border/60 bg-white/95 shadow-soft backdrop-blur-xl'
          : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <Container>
        <nav
          className="flex min-h-[5.25rem] items-center justify-between gap-4 py-2 sm:min-h-[5.75rem]"
          aria-label={t('nav.ariaLabel')}
        >
          <Link href="/" className="shrink-0" onClick={() => setIsOpen(false)}>
            <Logo variant="navbar" />
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            <ul className="flex items-center gap-1 rounded-xl bg-navy/[0.03] p-1">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link href={item.path as '/'} className={linkClass(item.path)}>
                    {t(`nav.labels.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="ml-4 flex items-center gap-3">
              <LanguageSwitcher />
              <Button href={routes.contact} size="sm">
                {t('common.getQuote')}
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              className="rounded-xl p-2.5 text-navy transition-colors hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? t('nav.menuClose') : t('nav.menuToggle')}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </Container>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-border/60 bg-white transition-all duration-300 lg:hidden ${
          isOpen ? 'visible max-h-[28rem] opacity-100' : 'invisible max-h-0 opacity-0'
        }`}
      >
        <Container className="py-4">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.path as '/'}
                  className={mobileLinkClass(item.path)}
                  onClick={() => setIsOpen(false)}
                >
                  {t(`nav.labels.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-border/60 pt-4">
            <Button href={routes.contact} className="w-full" onClick={() => setIsOpen(false)}>
              {t('common.getQuote')}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}
