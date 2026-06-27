'use client'

import { Container } from '../common/Container'
import { StatCard, StatMetricRow } from './StatCard'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import { getStatIcon } from '@/data/icons'
import type { StatItem } from '@/types/locale'

export function StatsSection() {
  const stats = useLocaleArray<StatItem>('home.stats')

  return (
    <section className="relative border-t border-border/25 bg-light-bg pb-8 pt-7 sm:pb-10 sm:pt-8 lg:pb-11 lg:pt-9">
      <Container>
        {/* Mobile / tablet: compact metric list */}
        <div className="overflow-hidden rounded-xl border border-border/55 bg-white shadow-soft lg:hidden">
          <div className="divide-y divide-border/40">
            {stats.map((stat, index) => {
              const Icon = getStatIcon(stat.icon)
              return (
                <StatMetricRow
                  key={stat.label}
                  stat={stat}
                  index={index}
                  Icon={Icon}
                />
              )
            })}
          </div>
        </div>

        {/* Desktop: horizontal stat cards */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-5">
          {stats.map((stat, index) => {
            const Icon = getStatIcon(stat.icon)
            return (
              <StatCard
                key={stat.label}
                stat={stat}
                index={index}
                Icon={Icon}
              />
            )
          })}
        </div>
      </Container>
    </section>
  )
}
