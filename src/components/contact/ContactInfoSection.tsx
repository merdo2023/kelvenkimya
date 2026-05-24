'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { ContactInfoCard } from './ContactInfoCard'

export function ContactInfoSection() {
  const { t } = useTranslation()

  const cards = [
    {
      key: 'phone',
      title: t('contact.cards.phone.title'),
      description: t('contact.cards.phone.description'),
      value: t('contact.info.phone'),
      href: `tel:${t('contact.info.phoneHref')}`,
    },
    {
      key: 'email',
      title: t('contact.cards.email.title'),
      description: t('contact.cards.email.description'),
      value: t('contact.info.email'),
      href: `mailto:${t('contact.info.email')}`,
    },
    {
      key: 'address',
      title: t('contact.cards.address.title'),
      description: t('contact.cards.address.description'),
      value: t('contact.info.address'),
    },
  ] as const

  return (
    <section className="relative overflow-hidden pb-12 pt-24">
      <div className="section-muted absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-cyan/5 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green/5 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <SectionHeader title={t('contact.info.title')} subtitle={t('contact.info.subtitle')} />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:gap-6">
          {cards.map((card, index) => (
            <ContactInfoCard
              key={card.key}
              title={card.title}
              description={card.description}
              value={card.value}
              href={'href' in card ? card.href : undefined}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
