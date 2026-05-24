'use client'

import { motion } from 'framer-motion'
import { Beaker, Droplets, FlaskConical, Waves } from 'lucide-react'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import { getStatIcon } from '@/data/icons'
import type { StatItem } from '@/types/locale'

const orbitIcons = [Droplets, Beaker, FlaskConical, Waves]

export function HeroVisual() {
  const stats = useLocaleArray<StatItem>('home.stats')

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
      {/* Ambient glow */}
      <motion.div
        className="absolute inset-[12%] rounded-full bg-cyan/25 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute inset-[22%] rounded-full bg-green/15 blur-2xl"
        animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        aria-hidden="true"
      />

      {/* Rotating rings */}
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-white/10"
          style={{ inset: `${8 + ring * 10}%` }}
          animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: 28 + ring * 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          aria-hidden="true"
        >
          <div
            className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_12px_rgba(0,166,214,0.9)]"
          />
        </motion.div>
      ))}

      {/* Dashed outer ring */}
      <motion.div
        className="absolute inset-[4%] rounded-full border border-dashed border-white/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      />

      {/* Center core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          <motion.div
            className="absolute -inset-6 rounded-full bg-cyan/20 blur-xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-cyan/30 to-green/25 shadow-2xl shadow-cyan/20 backdrop-blur-md sm:h-32 sm:w-32">
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Droplets className="h-14 w-14 text-white drop-shadow-lg sm:h-16 sm:w-16" strokeWidth={1.5} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Orbiting icons */}
      {orbitIcons.map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: 22 + index * 4,
              repeat: Infinity,
              ease: 'linear',
            }}
            aria-hidden="true"
          >
            <motion.div
              className="absolute left-1/2 top-[10%] -translate-x-1/2"
              style={{ transformOrigin: '50% 280%' }}
              animate={{ rotate: -360 }}
              transition={{
                duration: 22 + index * 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-cyan shadow-lg backdrop-blur-md">
                <Icon className="h-5 w-5" />
              </div>
            </motion.div>
          </motion.div>
      ))}

      {/* Floating stat cards */}
      {stats.map((stat, index) => {
        const Icon = getStatIcon(stat.icon)
        const positions = [
          'left-[2%] top-[18%]',
          'right-[0%] top-[42%]',
          'bottom-[14%] left-[18%]',
        ]
        const position = positions[index] ?? 'right-[8%] bottom-[20%]'

        return (
          <motion.div
            key={stat.label}
            className={`absolute ${position} z-10`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.3 + index * 0.15 },
              scale: { duration: 0.6, delay: 0.3 + index * 0.15 },
              y: { duration: 3.5 + index * 0.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 },
            }}
          >
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/30 to-green/20">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xl font-bold leading-none text-white">{stat.value}</p>
                <p className="mt-1 max-w-[7rem] text-[11px] leading-tight text-white/60">{stat.label}</p>
              </div>
            </div>
          </motion.div>
        )
      })}

      {/* Bottom wave accent */}
      <svg
        className="absolute inset-x-[8%] bottom-[6%] h-12 w-[84%] text-cyan/30"
        viewBox="0 0 400 48"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M0 24 Q50 8 100 24 T200 24 T300 24 T400 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ d: [
            'M0 24 Q50 8 100 24 T200 24 T300 24 T400 24',
            'M0 24 Q50 40 100 24 T200 24 T300 24 T400 24',
            'M0 24 Q50 8 100 24 T200 24 T300 24 T400 24',
          ]}}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}
