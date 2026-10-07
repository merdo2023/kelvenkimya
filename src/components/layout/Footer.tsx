'use client'

import { Link } from '@/i18n/navigation'
import { useTranslation } from '@/hooks/useTranslation'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '../common/Container'
import { Logo } from '../common/Logo'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import { routes } from '@/data/routes'
import { cleaningBasePath } from '@/data/cleaningServices'
import type { NavItem, ServiceItem } from '@/types/locale'

type FooterProps = {
  services: ServiceItem[]
}

export function Footer({ services }: FooterProps) {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  const navItems = useLocaleArray<NavItem>('nav.items')

  const address = t('contact.info.address')
  const email = t('contact.info.email')
  const phone = t('contact.info.phone')
  const phoneHref = t('contact.info.phoneHref')
  const phoneSecondary = t('contact.info.phoneSecondary')
  const phoneSecondaryHref = t('contact.info.phoneSecondaryHref')

  return (
    <footer className="relative bg-navy text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" aria-hidden="true" />

      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo variant="footer" tone="light" />
            </div>
            <p className="text-sm leading-relaxed text-white/80">{t('footer.description')}</p>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-cyan">
              {t('footer.navigation.title')}
            </h3>
            <ul className="space-y-2.5">
              {navItems.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.path as '/'}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {t(`nav.labels.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-cyan">
              <Link href={routes.services} className="transition-colors hover:text-white">
                {t('footer.services.title')}
              </Link>
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.id === 'endustriyel-kimyasal-temizlik' ? cleaningBasePath : `${routes.services}#${service.id}`}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-cyan">
              {t('footer.contact.title')}
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3 text-sm text-white/80">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                    <Phone className="h-4 w-4 text-cyan" />
                  </span>
                  <div className="space-y-1">
                    <a
                      href={`tel:${phoneHref}`}
                      className="block transition-colors hover:text-white"
                    >
                      {phone}
                    </a>
                    <a
                      href={`tel:${phoneSecondaryHref}`}
                      className="block transition-colors hover:text-white"
                    >
                      {phoneSecondary}
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-start gap-3 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                    <Mail className="h-4 w-4 text-cyan" />
                  </span>
                  {email}
                </a>
              </li>
              <li>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t('contact.info.addressLine1') + ' Eyüpsultan İstanbul')}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-white/80 transition-colors hover:text-white">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                    <MapPin className="h-4 w-4 text-cyan" />
                  </span>
                  {address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-white/45">
          {t('footer.copyright', { year })}
        </div>
      </Container>
    </footer>
  )
}
