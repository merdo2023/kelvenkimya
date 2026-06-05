'use client'

import { Beaker, Droplets, FlaskConical, Waves } from 'lucide-react'
import { getStatIcon } from '@/data/icons'
import type { StatItem } from '@/types/locale'

const orbitIcons = [Droplets, Beaker, FlaskConical, Waves]

type HeroVisualProps = {
  stats: StatItem[]
}

export function HeroVisual({ stats }: HeroVisualProps) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
      <div
        className="hero-visual-glow-cyan absolute inset-[12%] rounded-full bg-cyan/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="hero-visual-glow-green absolute inset-[22%] rounded-full bg-green/15 blur-2xl"
        aria-hidden="true"
      />

      {[0, 1, 2].map((ring) => (
        <div
          key={ring}
          className={`hero-visual-ring absolute rounded-full border border-white/10 ${ring % 2 === 0 ? 'hero-ring-cw' : 'hero-ring-ccw'}`}
          style={{ inset: `${8 + ring * 10}%`, animationDuration: `${28 + ring * 8}s` }}
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_12px_rgba(0,166,214,0.9)]" />
        </div>
      ))}

      <div
        className="hero-ring-slow absolute inset-[4%] rounded-full border border-dashed border-white/15"
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="hero-visual-float relative">
          <div
            className="hero-visual-center-glow absolute -inset-6 rounded-full bg-cyan/20 blur-xl"
            aria-hidden="true"
          />
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-cyan/30 to-green/25 shadow-2xl shadow-cyan/20 backdrop-blur-md sm:h-32 sm:w-32">
            <div className="hero-visual-icon-tilt">
              <Droplets className="h-14 w-14 text-white drop-shadow-lg sm:h-16 sm:w-16" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>

      {orbitIcons.map((Icon, index) => (
        <div
          key={index}
          className="hero-orbit-spin absolute inset-0"
          style={{ animationDuration: `${22 + index * 4}s` }}
          aria-hidden="true"
        >
          <div
            className="hero-orbit-counter absolute left-1/2 top-[10%] -translate-x-1/2"
            style={{
              transformOrigin: '50% 280%',
              animationDuration: `${22 + index * 4}s`,
            }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-cyan shadow-lg backdrop-blur-md">
              <Icon className="h-5 w-5" />
            </div>
          </div>
        </div>
      ))}

      {stats.map((stat, index) => {
        const Icon = getStatIcon(stat.icon)
        const positions = [
          'left-[2%] top-[18%]',
          'right-[0%] top-[42%]',
          'bottom-[14%] left-[18%]',
        ]
        const position = positions[index] ?? 'right-[8%] bottom-[20%]'

        return (
          <div
            key={stat.label}
            className={`hero-stat-float absolute ${position} z-10`}
            style={{ animationDelay: `${index * 0.4}s` }}
          >
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/30 to-green/20">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xl font-bold leading-none text-white">{stat.value}</p>
                <p className="mt-1 max-w-[7rem] text-[11px] leading-tight text-white/75">{stat.label}</p>
              </div>
            </div>
          </div>
        )
      })}

      <svg
        className="hero-wave-line absolute inset-x-[8%] bottom-[6%] h-12 w-[84%] text-cyan/30"
        viewBox="0 0 400 48"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 24 Q50 8 100 24 T200 24 T300 24 T400 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
