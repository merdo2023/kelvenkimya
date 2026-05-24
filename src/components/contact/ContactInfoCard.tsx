'use client'

import { motion } from 'framer-motion'
import { cardAccentColors } from '@/data/accentColors'

interface ContactInfoCardProps {
  title: string
  description: string
  value: string
  href?: string
  index: number
}

export function ContactInfoCard({ title, description, value, href, index }: ContactInfoCardProps) {
  const accent = cardAccentColors[index % cardAccentColors.length]
  const number = String(index + 1).padStart(2, '0')

  const content = (
    <p className="mt-4 text-sm font-semibold leading-relaxed text-brand-blue transition-colors duration-300 group-hover:text-cyan sm:text-base">
      {value}
    </p>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className="group relative h-full"
    >
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white via-border/20 to-white opacity-90" aria-hidden="true" />
      <div
        className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${accent.wash} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden="true"
      />

      <article className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-[0_4px_32px_-8px_rgba(11,31,51,0.08)] transition-shadow duration-300 group-hover:shadow-[0_16px_48px_-12px_rgba(11,31,51,0.14)] sm:p-8">
        <motion.div
          className={`absolute bottom-8 left-0 top-8 w-[3px] rounded-r-full bg-gradient-to-b ${accent.gradient}`}
          initial={{ scaleY: 0.3, opacity: 0.4 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
          style={{ originY: 0 }}
        />

        <span
          className={`pointer-events-none absolute -right-1 -top-3 select-none bg-gradient-to-br ${accent.num} bg-clip-text text-[4rem] font-extrabold leading-none text-transparent opacity-70 sm:text-[4.5rem]`}
          aria-hidden="true"
        >
          {number}
        </span>

        <div className="relative pl-4">
          <div className="flex items-center gap-3">
            <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} aria-hidden="true" />
            <motion.div
              className={`h-px bg-gradient-to-r ${accent.gradient}`}
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
            />
          </div>

          <h3 className="mt-5 text-lg font-bold text-navy transition-colors duration-300 group-hover:text-brand-blue sm:text-xl">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>

          {href ? (
            <a href={href} className="block">
              {content}
            </a>
          ) : (
            content
          )}
        </div>
      </article>
    </motion.div>
  )
}
