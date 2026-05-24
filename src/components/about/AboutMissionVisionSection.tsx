'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { Container } from '../common/Container'
import { cardAccentColors } from '@/data/accentColors'

const ease = [0.22, 1, 0.36, 1] as const

interface PillarCardProps {
  title: string
  description: string
  index: number
  variant: 'light' | 'dark'
}

function PillarCard({ title, description, index, variant }: PillarCardProps) {
  const accent = cardAccentColors[index % cardAccentColors.length]
  const number = String(index + 1).padStart(2, '0')
  const isDark = variant === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease }}
      className="group relative h-full"
    >
      <div
        className={`absolute -inset-px rounded-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100 ${
          isDark
            ? 'bg-gradient-to-br from-cyan/25 via-white/10 to-green/25'
            : 'bg-gradient-to-br from-white via-border/30 to-white'
        }`}
        aria-hidden="true"
      />

      <article
        className={`relative h-full overflow-hidden rounded-3xl p-8 shadow-[0_4px_40px_-10px_rgba(11,31,51,0.12)] transition-shadow duration-500 group-hover:shadow-[0_20px_56px_-14px_rgba(11,31,51,0.18)] sm:p-10 ${
          isDark ? 'gradient-hero border border-white/10' : 'bg-white'
        }`}
      >
        {isDark && (
          <>
            <div className="absolute inset-0 mesh-pattern opacity-20" aria-hidden="true" />
            <motion.div
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan/15 blur-3xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            />
          </>
        )}

        <span
          className={`pointer-events-none absolute -right-1 top-2 select-none bg-clip-text text-[5rem] font-extrabold leading-none text-transparent opacity-60 sm:text-[6rem] ${
            isDark ? 'bg-gradient-to-br from-white/15 to-white/[0.03]' : `bg-gradient-to-br ${accent.num}`
          }`}
          aria-hidden="true"
        >
          {number}
        </span>

        <div className="relative">
          <div className="flex items-center gap-3">
            <span className={`h-1.5 w-1.5 rounded-full ${isDark ? 'bg-cyan' : accent.dot}`} aria-hidden="true" />
            <motion.div
              className={`h-px bg-gradient-to-r ${isDark ? 'from-cyan to-green/70' : accent.gradient}`}
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            />
          </div>

          <h2 className={`mt-6 text-2xl font-bold sm:text-3xl ${isDark ? 'text-white' : 'text-navy'}`}>
            {title}
          </h2>
          <p className={`mt-4 text-base leading-[1.8] ${isDark ? 'text-white/70' : 'text-muted'}`}>
            {description}
          </p>
        </div>
      </article>
    </motion.div>
  )
}

export function AboutMissionVisionSection() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden py-24">
      <div className="section-muted absolute inset-0" aria-hidden="true" />

      <Container className="relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <PillarCard
            title={t('about.mission.title')}
            description={t('about.mission.description')}
            index={0}
            variant="dark"
          />
          <PillarCard
            title={t('about.vision.title')}
            description={t('about.vision.description')}
            index={1}
            variant="light"
          />
        </div>
      </Container>
    </section>
  )
}
