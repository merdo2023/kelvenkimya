'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { ExpertiseCard } from './ExpertiseCard'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import type { ExpertiseItem } from '@/types/locale'

export function AboutExpertiseSection() {
  const { t } = useTranslation()
  const expertiseItems = useLocaleArray<ExpertiseItem>('about.expertise.items')

  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-brand-blue/4 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green/4 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <SectionHeader title={t('about.expertise.title')} subtitle={t('about.expertise.subtitle')} />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {expertiseItems.map((item, index) => (
            <ExpertiseCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
