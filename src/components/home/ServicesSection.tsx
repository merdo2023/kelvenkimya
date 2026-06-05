'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { ServiceCard } from './ServiceCard'
import type { ServiceItem } from '@/types/locale'

function renderServiceCards(
  items: ServiceItem[],
  startIndex: number,
  learnMoreLabel: string,
) {
  return items.map((service, i) => (
    <ServiceCard
      key={service.id}
      service={service}
      index={startIndex + i}
      learnMoreLabel={learnMoreLabel}
    />
  ))
}

function secondRowGridClass(count: number): string {
  if (count === 1) return 'lg:max-w-md lg:mx-auto'
  if (count === 2) return 'lg:max-w-4xl lg:mx-auto lg:grid-cols-2'
  return 'lg:grid-cols-3'
}

type ServicesSectionProps = {
  services: ServiceItem[]
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const { t } = useTranslation()
  const learnMore = t('common.learnMore')

  const firstRow = services.length > 3 ? services.slice(0, 3) : services
  const secondRow = services.length > 3 ? services.slice(3) : []

  return (
    <section className="relative overflow-hidden py-24">
      <div className="section-muted absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute left-0 top-1/4 h-64 w-64 rounded-full bg-cyan/5 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-green/5 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <SectionHeader
          title={t('home.services.title')}
          subtitle={t('home.services.subtitle')}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {renderServiceCards(firstRow, 0, learnMore)}
        </div>

        {secondRow.length > 0 && (
          <div
            className={`mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 ${secondRowGridClass(secondRow.length)}`}
          >
            {renderServiceCards(secondRow, firstRow.length, learnMore)}
          </div>
        )}
      </Container>
    </section>
  )
}
