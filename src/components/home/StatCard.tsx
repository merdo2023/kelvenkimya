'use client'

import type { LucideIcon } from 'lucide-react'
import { AnimatedCounter } from '../common/AnimatedCounter'
import type { StatItem } from '@/types/locale'

const accentColors = [
  { iconBg: 'bg-cyan/10', icon: 'text-cyan', gradient: 'from-cyan to-cyan/40' },
  { iconBg: 'bg-brand-blue/10', icon: 'text-brand-blue', gradient: 'from-brand-blue to-brand-blue/40' },
  { iconBg: 'bg-green/10', icon: 'text-green', gradient: 'from-green to-green/40' },
]

interface StatMetricRowProps {
  stat: StatItem
  index: number
  Icon: LucideIcon
}

export function StatMetricRow({ stat, index, Icon }: StatMetricRowProps) {
  const accent = accentColors[index % accentColors.length]

  return (
    <div className="flex min-h-[3.5rem] items-center gap-3 px-4 py-3 sm:px-5">
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${accent.iconBg} ring-1 ring-border/35`}
      >
        <Icon className={`h-4 w-4 ${accent.icon}`} strokeWidth={1.5} />
      </div>
      <AnimatedCounter
        value={stat.value}
        className="w-14 shrink-0 text-2xl font-extrabold leading-none tracking-tight text-navy"
      />
      <p className="min-h-[2.5rem] flex-1 text-xs font-medium leading-snug text-muted sm:text-sm">
        <span className="line-clamp-2">{stat.label}</span>
      </p>
    </div>
  )
}

interface StatCardProps {
  stat: StatItem
  index: number
  Icon: LucideIcon
}

export function StatCard({ stat, index, Icon }: StatCardProps) {
  const accent = accentColors[index % accentColors.length]

  return (
    <div
      className="group relative animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative flex items-center gap-3.5 overflow-hidden rounded-xl border border-border/55 bg-gradient-to-br from-white to-light-bg/50 px-4 py-3.5 shadow-soft ring-1 ring-transparent transition-all duration-300 hover:-translate-y-0.5 hover:border-border/80 hover:shadow-elevated sm:gap-4 sm:px-5 sm:py-4">
        <div
          className={`absolute bottom-3 left-0 top-3 w-[3px] rounded-r-full bg-gradient-to-b ${accent.gradient}`}
          aria-hidden="true"
        />

        <div
          className={`ml-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${accent.iconBg} ring-1 ring-border/35`}
        >
          <Icon className={`h-5 w-5 ${accent.icon}`} strokeWidth={1.5} />
        </div>

        <div className="min-w-0 flex-1">
          <AnimatedCounter
            value={stat.value}
            className="text-3xl font-extrabold leading-none tracking-tight text-navy"
          />
          <p className="mt-1 min-h-[2.5rem] text-xs font-medium leading-snug text-muted sm:text-sm">
            <span className="line-clamp-2">{stat.label}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
