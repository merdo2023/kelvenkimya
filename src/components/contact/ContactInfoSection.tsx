'use client'

import { Check } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import { Container } from '../common/Container'
import { ContactInfoCard } from './ContactInfoCard'
import { ContactMapSection } from './ContactMapSection'

export function ContactInfoSection() {
  const { t } = useTranslation()
  const supportItems = useLocaleArray<string>('contact.panel.supportItems')

  const cards = [
    {
      key: 'phone',
      icon: 'phone' as const,
      title: t('contact.cards.phone.title'),
      lines: [t('contact.info.phone'), t('contact.info.phoneSecondary')],
      href: `tel:${t('contact.info.phoneHref')}`,
      secondaryHref: `tel:${t('contact.info.phoneSecondaryHref')}`,
      actionLabel: t('contact.actions.call'),
      actionHref: `tel:${t('contact.info.phoneHref')}`,
    },
    {
      key: 'email',
      icon: 'email' as const,
      title: t('contact.cards.email.title'),
      lines: [t('contact.info.email')],
      href: `mailto:${t('contact.info.email')}`,
      actionLabel: t('contact.actions.mail'),
      actionHref: `mailto:${t('contact.info.email')}`,
    },
    {
      key: 'address',
      icon: 'address' as const,
      title: t('contact.cards.address.title'),
      lines: [t('contact.info.addressLine1'), t('contact.info.addressLine2')],
      actionLabel: t('contact.actions.location'),
      actionHref: 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(t('contact.info.addressLine1') + ' ' + t('contact.info.addressLine2')),
    },
  ] as const

  return (
    <section className="relative overflow-hidden pb-12 pt-6 sm:pb-14 sm:pt-8">
      <div className="section-muted absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-cyan/[0.04] blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-1/3 right-0 h-64 w-64 rounded-full bg-green/[0.04] blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <div className="rounded-2xl border border-border/45 bg-white/95 p-5 shadow-[0_4px_32px_-12px_rgba(11,31,51,0.08)] backdrop-blur-sm sm:p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
            <div className="flex flex-col justify-start lg:pt-3">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan/15 bg-cyan/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-blue">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
                {t('contact.panel.eyebrow')}
              </span>

              <h2 className="mt-4 text-2xl font-bold leading-tight text-navy sm:text-[1.75rem]">
                {t('contact.panel.title')}
              </h2>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                {t('contact.panel.description')}
              </p>

              <ul className="mt-5 space-y-2.5">
                {supportItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-navy/80">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green/[0.08] text-green"
                      aria-hidden="true"
                    >
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-md border-t border-border/50 pt-4 text-sm leading-relaxed text-muted">{t('contact.panel.requestHint')}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {cards.map((card, index) => (
                <ContactInfoCard
                  key={card.key}
                  icon={card.icon}
                  title={card.title}
                  lines={[...card.lines]}
                  href={'href' in card ? card.href : undefined}
                  secondaryHref={'secondaryHref' in card ? card.secondaryHref : undefined}
                  actionLabel={'actionLabel' in card ? card.actionLabel : undefined}
                  actionHref={'actionHref' in card ? card.actionHref : undefined}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        <ContactMapSection />
      </Container>
    </section>
  )
}
