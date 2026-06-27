'use client'

import { ClipboardList, FileText, Microscope, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocaleArray } from '@/hooks/useLocaleArray'
import { Container } from '../common/Container'
import type { ValueItem } from '@/types/locale'

const processIcons = [Microscope, ClipboardList, Wrench, FileText]
const ease = [0.22, 1, 0.36, 1] as const

interface ProcessStepProps {
  item: ValueItem
  index: number
  isLast: boolean
}

function ProcessStepDesktop({ item, index }: ProcessStepProps) {
  const Icon = processIcons[index % processIcons.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease }}
      className="group/step relative z-10 flex flex-1 flex-col items-center text-center"
    >
      <span className="about-icon-glow flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/20 bg-gradient-to-br from-cyan/[0.12] to-white text-brand-blue shadow-sm transition-all duration-300 group-hover/step:-translate-y-0.5">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-sm font-bold leading-snug text-navy">{item.title}</h3>
      <p className="mt-1.5 max-w-[11rem] text-xs leading-relaxed text-muted">{item.description}</p>
    </motion.div>
  )
}

function ProcessStepMobile({ item, index, isLast }: ProcessStepProps) {
  const Icon = processIcons[index % processIcons.length]

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: index * 0.06, ease }}
      className="group/step relative flex gap-4"
    >
      <div className="flex flex-col items-center">
        <span className="about-icon-glow flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan/20 bg-cyan/[0.08] text-brand-blue">
          <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        </span>
        {!isLast && <div className="about-process-line-vertical mt-2 min-h-[2rem] flex-1 rounded-full" aria-hidden="true" />}
      </div>
      <div className="min-w-0 pb-6">
        <h3 className="text-sm font-bold text-navy">{item.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">{item.description}</p>
      </div>
    </motion.div>
  )
}

export function AboutProcessSection() {
  const { t } = useTranslation()
  const items = useLocaleArray<ValueItem>('about.process.items')

  return (
    <section className="relative overflow-hidden py-12 sm:py-14">
      <div className="section-muted absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-cyan/[0.04] blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease }}
          className="max-w-xl"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan">{t('about.process.eyebrow')}</span>
          <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">{t('about.process.title')}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{t('about.process.subtitle')}</p>
        </motion.div>

        <div className="relative mt-10 hidden lg:block">
          <div className="about-process-line absolute left-[10%] right-[10%] top-6 rounded-full" aria-hidden="true" />
          <div className="relative flex items-start justify-between gap-4">
            {items.map((item, index) => (
              <ProcessStepDesktop key={item.title} item={item} index={index} isLast={index === items.length - 1} />
            ))}
          </div>
        </div>

        <div className="mt-8 lg:hidden">
          {items.map((item, index) => (
            <ProcessStepMobile
              key={item.title}
              item={item}
              index={index}
              isLast={index === items.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
