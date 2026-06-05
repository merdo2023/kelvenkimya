'use client'

import dynamic from 'next/dynamic'
import type { StatItem } from '@/types/locale'

const HeroVisual = dynamic(
  () => import('./HeroVisual').then((module) => ({ default: module.HeroVisual })),
  { ssr: false },
)

type HeroVisualColumnProps = {
  stats: StatItem[]
}

export function HeroVisualColumn({ stats }: HeroVisualColumnProps) {
  return (
    <div className="hero-visual-enter relative hidden lg:block">
      <HeroVisual stats={stats} />
    </div>
  )
}
