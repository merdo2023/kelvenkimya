'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react'
import { cardAccentColors } from '@/data/accentColors'

type ContactIconKey = 'phone' | 'email' | 'address'

const iconMap: Record<ContactIconKey, LucideIcon> = {
  phone: Phone,
  email: Mail,
  address: MapPin,
}

interface ContactInfoCardProps {
  icon: ContactIconKey
  title: string
  lines: string[]
  href?: string
  secondaryHref?: string
  actionLabel?: string
  actionHref?: string
  index: number
}

export function ContactInfoCard({
  icon,
  title,
  lines,
  href,
  secondaryHref,
  actionLabel,
  actionHref,
  index,
}: ContactInfoCardProps) {
  const accent = cardAccentColors[index % cardAccentColors.length]
  const Icon = iconMap[icon]

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group flex gap-3.5 rounded-xl border border-border/45 bg-white p-4 shadow-[0_2px_16px_-6px_rgba(11,31,51,0.07)] transition-all duration-200 hover:border-cyan/25 hover:shadow-[0_6px_24px_-8px_rgba(11,31,51,0.11)] sm:gap-4 sm:p-5"
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${accent.num} text-navy/65 ring-1 ring-border/30 transition-all duration-200 group-hover:text-brand-blue group-hover:ring-cyan/20 sm:h-11 sm:w-11`}
        aria-hidden="true"
      >
        <Icon className="h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5" strokeWidth={1.75} />
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-bold text-navy sm:text-[0.9375rem]">{title}</h3>

        <div className="mt-1.5 space-y-0.5">
          {lines.map((line, lineIndex) => {
            const lineHref =
              lineIndex === 0 && href
                ? href
                : lineIndex === 1 && secondaryHref
                  ? secondaryHref
                  : undefined

            if (lineHref) {
              return (
                <a
                  key={line}
                  href={lineHref}
                  className="block break-words text-sm font-semibold leading-snug text-brand-blue transition-colors hover:text-cyan"
                >
                  {line}
                </a>
              )
            }

            return (
              <p key={line} className="break-words text-sm font-semibold leading-snug text-navy/85">
                {line}
              </p>
            )
          })}
        </div>

        {actionLabel && actionHref ? (
          <a
            href={actionHref}
            className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-cyan transition-colors hover:text-brand-blue"
          >
            {actionLabel}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </motion.article>
  )
}
