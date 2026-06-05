'use client'

import { Container } from '../common/Container'
import { StatCard } from './StatCard'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import { getStatIcon } from '@/data/icons'
import type { StatItem } from '@/types/locale'

export function StatsSection() {
  const stats = useLocaleArray<StatItem>('home.stats')

  return (
    <section className="relative z-10 -mt-20 pb-24 sm:-mt-24">
      <Container className="relative">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan/6 via-brand-blue/4 to-green/6 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = getStatIcon(stat.icon)
            return (
              <StatCard
                key={stat.label}
                stat={stat}
                index={index}
                Icon={Icon}
                elevated={index === 1}
              />
            )
          })}
        </div>
      </Container>
    </section>
  )
}
