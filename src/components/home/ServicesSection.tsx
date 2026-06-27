'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { ServicesInteractive } from './ServicesInteractive'
import type { ServiceItem } from '@/types/locale'

type ServicesSectionProps = {
  services: ServiceItem[]
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden pb-14 pt-7 sm:pb-16 sm:pt-8 lg:pb-20 lg:pt-9">
      <div className="section-muted absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 blueprint-lines opacity-[0.025]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 top-1/4 h-56 w-56 rounded-full bg-cyan/[0.05] blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-green/[0.04] blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <SectionHeader
          compact
          variant="refined"
          title={t('home.services.title')}
          subtitle={t('home.services.subtitle')}
        />

        <div className="mt-1">
          <ServicesInteractive services={services} learnMoreLabel={t('common.learnMore')} />
        </div>
      </Container>
    </section>
  )
}
