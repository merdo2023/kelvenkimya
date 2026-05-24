'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { ValueCard } from './ValueCard'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import type { ValueItem } from '@/types/locale'

export function AboutValuesSection() {
  const { t } = useTranslation()
  const values = useLocaleArray<ValueItem>('about.values.items')

  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-cyan/4 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <SectionHeader title={t('about.values.title')} subtitle={t('about.values.subtitle')} />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
