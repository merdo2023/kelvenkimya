'use client'

import type { LucideIcon } from 'lucide-react'
import { AnimatedCounter } from '../common/AnimatedCounter'
import type { StatItem } from '@/types/locale'

const accentColors = [
  {
    gradient: 'from-cyan/50 via-cyan/20 to-transparent',
    iconBg: 'bg-cyan/10',
    icon: 'text-cyan',
    bar: 'from-cyan to-cyan/30',
    dot: 'bg-cyan',
  },
  {
    gradient: 'from-brand-blue/50 via-brand-blue/20 to-transparent',
    iconBg: 'bg-brand-blue/10',
    icon: 'text-brand-blue',
    bar: 'from-brand-blue to-brand-blue/30',
    dot: 'bg-brand-blue',
  },
  {
    gradient: 'from-green/50 via-green/20 to-transparent',
    iconBg: 'bg-green/10',
    icon: 'text-green',
    bar: 'from-green to-green/30',
    dot: 'bg-green',
  },
]

interface StatCardProps {
  stat: StatItem
  index: number
  Icon: LucideIcon
  elevated?: boolean
}

export function StatCard({ stat, index, Icon, elevated = false }: StatCardProps) {
  const accent = accentColors[index % accentColors.length]

  return (
    <div
      className={`group relative animate-fade-up transition-transform duration-300 hover:-translate-y-2 ${elevated ? 'sm:-translate-y-3' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white via-border/30 to-white opacity-80 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      <div
        className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${accent.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-3xl bg-white p-7 shadow-[0_8px_40px_-12px_rgba(11,31,51,0.12)] transition-shadow duration-300 group-hover:shadow-[0_20px_50px_-15px_rgba(11,31,51,0.18)] sm:p-9">
        <div
          className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${accent.gradient} opacity-[0.07]`}
          aria-hidden="true"
        />

        <div className="relative flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div
              className={`stat-icon-glow absolute -inset-2 rounded-full ${accent.iconBg} blur-lg`}
              style={{ animationDelay: `${index * 0.5}s` }}
              aria-hidden="true"
            />
            <div
              className={`relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl ${accent.iconBg} ring-1 ring-border/40`}
            >
              <Icon className={`h-8 w-8 ${accent.icon}`} strokeWidth={1.5} />
            </div>
          </div>

          <AnimatedCounter
            value={stat.value}
            className="bg-gradient-to-br from-navy to-navy-light bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-[3.25rem]"
          />

          <p className="mt-3 max-w-[11rem] text-sm font-medium leading-snug text-muted sm:whitespace-nowrap">
            {stat.label}
          </p>

          <div className="mt-5 flex items-center gap-2">
            <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} aria-hidden="true" />
            <div className={`h-0.5 w-10 rounded-full bg-gradient-to-r ${accent.bar}`} aria-hidden="true" />
            <span className={`h-1.5 w-1.5 rounded-full ${accent.dot} opacity-40`} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  )
}
