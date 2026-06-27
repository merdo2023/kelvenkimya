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

interface NavLinkProps {
  href: string
  label: string
  active: boolean
  isTransparent: boolean
}

function NavLink({ href, label, active, isTransparent }: NavLinkProps) {
  const textClass = isTransparent
    ? active
      ? 'text-white'
      : 'text-white/78 group-hover:text-white'
    : active
      ? 'text-brand-blue'
      : 'text-navy/75 group-hover:text-navy'

  const hoverBg = isTransparent ? 'hover:bg-white/10' : 'hover:bg-navy/[0.04]'
  const indicatorClass = isTransparent
    ? 'bg-gradient-to-r from-cyan via-cyan to-green/80'
    : 'bg-gradient-to-r from-brand-blue via-cyan to-green'

  return (
    <Link
      href={href as '/'}
      aria-current={active ? 'page' : undefined}
      className={`group relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${hoverBg} motion-reduce:transition-none`}
    >
      <span className={`relative z-[1] transition-colors duration-300 ${textClass}`}>{label}</span>
      <span
        className={`absolute inset-x-2 bottom-1 h-0.5 origin-center rounded-full transition-transform duration-300 motion-reduce:transition-none ${indicatorClass} ${
          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
        aria-hidden="true"
      />
    </Link>
  )
}

const quoteButtonClass =
  'shadow-[0_4px_16px_-6px_rgba(0,166,214,0.45)] transition-all duration-300 hover:-translate-y-px hover:shadow-[0_8px_24px_-8px_rgba(0,166,214,0.5)] motion-reduce:transform-none motion-reduce:transition-none'

export function Navbar() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = useLocaleArray<NavItem>('nav.items')
  const isHomeHero = pathname === '/'
  const isTransparent = isHomeHero && !isScrolled && !isOpen

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
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

  const mobileLinkClass = (path: string) => {
    const active = isNavActive(pathname, path)
    return `block rounded-xl border px-4 py-3 text-[0.9375rem] font-medium transition-all duration-200 ${
      active
        ? 'border-cyan/20 bg-gradient-to-r from-brand-blue/[0.08] to-cyan/[0.06] text-brand-blue'
        : 'border-transparent text-navy hover:border-border/50 hover:bg-navy/[0.03]'
    }`
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 overflow-x-clip transition-all duration-300 motion-reduce:transition-none ${
        isTransparent ? 'glass-nav' : 'glass-nav-solid'
      } ${isScrolled && !isOpen ? 'shadow-[0_6px_28px_-14px_rgba(11,31,51,0.12)]' : ''}`}
    >
      <Container>
        <nav
          className={`flex items-center justify-between gap-2 py-1.5 transition-[min-height] duration-300 motion-reduce:transition-none sm:gap-3 ${
            isScrolled ? 'min-h-[3.75rem] sm:min-h-[4.25rem]' : 'min-h-[4rem] sm:min-h-[4.75rem]'
          }`}
          aria-label={t('nav.ariaLabel')}
        >
          <Link href="/" className="shrink-0" onClick={() => setIsOpen(false)}>
            <Logo variant="navbar" tone={isTransparent ? 'light' : 'dark'} />
          </Link>

          <div className="hidden items-center gap-2.5 lg:flex">
            <ul
              className={`flex items-center gap-0.5 rounded-full p-1 transition-colors duration-300 ${
                isTransparent ? 'nav-pill-dark' : 'nav-pill-light'
              }`}
            >
              {navItems.map((item) => (
                <li key={item.key}>
                  <NavLink
                    href={item.path}
                    label={t(`nav.labels.${item.key}`)}
                    active={isNavActive(pathname, item.path)}
                    isTransparent={isTransparent}
                  />
                </li>
              ))}
            </ul>
            <div className="ml-3 flex items-center gap-2.5">
              <LanguageSwitcher tone={isTransparent ? 'light' : 'dark'} />
              <Button href={routes.contact} size="sm" className={quoteButtonClass}>
                {t('common.getQuote')}
              </Button>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:hidden">
            <LanguageSwitcher tone={isTransparent ? 'light' : 'dark'} compact />
            <button
              type="button"
              className={`rounded-full border p-2.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 motion-reduce:transition-none ${
                isTransparent
                  ? 'border-white/15 bg-white/8 text-white hover:border-white/25 hover:bg-white/12'
                  : 'border-border/60 bg-white/80 text-navy hover:border-cyan/25 hover:bg-cyan/[0.04]'
              }`}
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
        className={`overflow-hidden border-t transition-all duration-300 ease-out motion-reduce:transition-none lg:hidden ${
          isOpen
            ? 'visible max-h-[32rem] border-border/50 bg-white/98 opacity-100 shadow-[0_16px_40px_-20px_rgba(11,31,51,0.18)] backdrop-blur-xl'
            : 'invisible max-h-0 border-transparent opacity-0'
        }`}
      >
        <Container className="py-4">
          <ul className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.path as '/'}
                  className={mobileLinkClass(item.path)}
                  aria-current={isNavActive(pathname, item.path) ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {t(`nav.labels.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-border/50 pt-4">
            <Button
              href={routes.contact}
              className={`w-full ${quoteButtonClass}`}
              onClick={() => setIsOpen(false)}
            >
              {t('common.getQuote')}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}
