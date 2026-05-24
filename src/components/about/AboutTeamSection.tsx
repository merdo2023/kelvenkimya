'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { Container } from '../common/Container'
import { cardAccentColors } from '@/data/accentColors'

const ease = [0.22, 1, 0.36, 1] as const

interface HighlightBlockProps {
  title: string
  description: string
  index: number
}

function HighlightBlock({ title, description, index }: HighlightBlockProps) {
  const accent = cardAccentColors[(index + 2) % cardAccentColors.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease }}
      className="group relative h-full"
    >
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white via-border/20 to-white opacity-90" aria-hidden="true" />
      <div
        className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${accent.wash} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden="true"
      />

      <article className="relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-[0_4px_40px_-10px_rgba(11,31,51,0.1)] transition-shadow duration-500 group-hover:shadow-[0_20px_56px_-14px_rgba(11,31,51,0.15)] sm:p-10">
        <motion.div
          className={`absolute left-0 top-8 h-[calc(100%-4rem)] w-[3px] rounded-r-full bg-gradient-to-b ${accent.gradient}`}
          initial={{ scaleY: 0.2, opacity: 0.3 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          style={{ originY: 0 }}
        />

        <div className="relative pl-6">
          <div className="flex items-center gap-3">
            <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} aria-hidden="true" />
            <motion.div
              className={`h-px bg-gradient-to-r ${accent.gradient}`}
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
          <p className="mt-4 text-base leading-[1.8] text-muted">{description}</p>

          <div className="mt-8 flex items-center gap-2 border-t border-border/40 pt-5">
            <span className={`h-1 w-1 rounded-full ${accent.dot}`} aria-hidden="true" />
            <motion.div
              className={`h-px flex-1 bg-gradient-to-r ${accent.gradient} to-transparent`}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              style={{ originX: 0 }}
            />
          </div>
        </div>
      </article>
    </motion.div>
  )
}

export function AboutTeamSection() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden py-24">
      <div className="section-muted absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-green/5 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <HighlightBlock
            title={t('about.team.title')}
            description={t('about.team.description')}
            index={0}
          />
          <HighlightBlock
            title={t('about.international.title')}
            description={t('about.international.description')}
            index={1}
          />
        </div>
      </Container>
    </section>
  )
}
