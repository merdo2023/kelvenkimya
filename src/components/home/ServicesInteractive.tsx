'use client'

import { useState, type ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { cardAccentColors } from '@/data/accentColors'
import { getServiceIcon } from '@/data/icons'
import { routes } from '@/data/routes'
import type { ServiceItem } from '@/types/locale'

const iconStyles = [
  { box: 'bg-cyan/12', icon: 'text-cyan', activeGlow: 'shadow-[0_0_20px_-4px_rgba(0,166,214,0.5)] ring-cyan/25' },
  { box: 'bg-brand-blue/12', icon: 'text-brand-blue', activeGlow: 'shadow-[0_0_20px_-4px_rgba(30,90,138,0.45)] ring-brand-blue/20' },
  { box: 'bg-green/12', icon: 'text-green', activeGlow: 'shadow-[0_0_20px_-4px_rgba(56,161,105,0.45)] ring-green/20' },
  { box: 'bg-cyan/12', icon: 'text-cyan', activeGlow: 'shadow-[0_0_20px_-4px_rgba(0,166,214,0.5)] ring-cyan/25' },
  { box: 'bg-green/12', icon: 'text-green', activeGlow: 'shadow-[0_0_20px_-4px_rgba(56,161,105,0.45)] ring-green/20' },
]

type ServicesInteractiveProps = {
  services: ServiceItem[]
  learnMoreLabel: string
}

function ServiceTags({ tags, className = '' }: { tags?: string[]; className?: string }) {
  if (!tags?.length) return null

  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-cyan/15 bg-gradient-to-b from-white to-cyan/[0.05] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-navy/70 shadow-[0_1px_2px_rgba(11,31,51,0.04)]"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}

function ServiceBullets({ bullets }: { bullets?: string[] }) {
  if (!bullets?.length) return null

  return (
    <ul className="space-y-2">
      {bullets.map((bullet) => (
        <li key={bullet} className="flex items-start gap-2 text-sm leading-snug text-muted">
          <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-cyan/12 text-cyan">
            <Check className="h-2.5 w-2.5" strokeWidth={3} />
          </span>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  )
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-navy/50">{children}</p>
  )
}

function ServiceDetailContent({
  service,
  index,
  learnMoreLabel,
  applicationsLabel,
  bulletsLabel,
  variant,
}: {
  service: ServiceItem
  index: number
  learnMoreLabel: string
  applicationsLabel: string
  bulletsLabel: string
  variant: 'panel' | 'accordion-body'
}) {
  const iconStyle = iconStyles[index % iconStyles.length]
  const Icon = getServiceIcon(service.id)
  const isPanel = variant === 'panel'

  return (
    <div className={`flex flex-col ${isPanel ? 'gap-4' : 'gap-3.5'}`}>
      {isPanel && (
        <header className="flex items-start gap-3 border-b border-border/35 pb-4">
          <div
            className={`service-icon-glow flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ring-border/40 ${iconStyle.box}`}
          >
            <Icon className={`h-5 w-5 ${iconStyle.icon}`} strokeWidth={1.6} />
          </div>
          <div className="min-w-0 flex-1">
            {service.category && (
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-cyan">{service.category}</p>
            )}
            <h3 className="mt-1 text-xl font-bold leading-snug text-navy">{service.title}</h3>
          </div>
        </header>
      )}

      <p className={`leading-relaxed text-muted ${isPanel ? 'text-sm sm:text-[0.9375rem] sm:leading-[1.6]' : 'text-sm'}`}>
        {service.description}
      </p>

      {service.tags && service.tags.length > 0 && (
        <section>
          <SectionLabel>{applicationsLabel}</SectionLabel>
          <ServiceTags tags={service.tags} />
        </section>
      )}

      {service.bullets && service.bullets.length > 0 && (
        <section>
          <SectionLabel>{bulletsLabel}</SectionLabel>
          <ServiceBullets bullets={service.bullets} />
        </section>
      )}

      <footer className={`flex flex-col gap-3 ${isPanel ? 'border-t border-border/30 pt-3.5' : 'pt-0.5'}`}>
        {service.resultLabel && (
          <div className="rounded-lg border border-navy/12 bg-gradient-to-r from-navy/[0.05] via-cyan/[0.08] to-navy/[0.04] px-3.5 py-2.5">
            <p className="text-xs font-semibold leading-snug text-navy/80">{service.resultLabel}</p>
          </div>
        )}

        <Link
          href={routes.services}
          className="group/cta inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors duration-300 hover:text-cyan"
        >
          {learnMoreLabel}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </footer>
    </div>
  )
}

export function ServicesInteractive({ services, learnMoreLabel }: ServicesInteractiveProps) {
  const { t } = useTranslation()
  const applicationsLabel = t('home.services.applicationsLabel')
  const bulletsLabel = t('home.services.bulletsLabel')

  const [activeId, setActiveId] = useState(services[0]?.id ?? '')
  const [openAccordionId, setOpenAccordionId] = useState(services[0]?.id ?? '')

  const activeIndex = services.findIndex((s) => s.id === activeId)
  const activeService = services[activeIndex >= 0 ? activeIndex : 0]

  const toggleAccordion = (id: string) => {
    setOpenAccordionId((current) => (current === id ? '' : id))
  }

  return (
    <>
      {/* Desktop: solution menu + detail panel */}
      <div className="hidden lg:grid lg:grid-cols-[360px_1fr] lg:gap-6 xl:gap-7">
        <div className="flex flex-col gap-2" role="tablist" aria-label={t('home.services.title')}>
          {services.map((service, index) => {
            const isActive = service.id === activeId
            const iconStyle = iconStyles[index % iconStyles.length]
            const accent = cardAccentColors[index % cardAccentColors.length]
            const Icon = getServiceIcon(service.id)

            return (
              <button
                key={service.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(service.id)}
                className={`group/tab relative flex w-full items-start gap-3 overflow-hidden rounded-xl border px-3.5 py-3 text-left transition-all duration-300 ${
                  isActive
                    ? 'border-cyan/35 bg-gradient-to-br from-cyan/[0.12] via-cyan/[0.04] to-white shadow-[0_4px_22px_-6px_rgba(0,166,214,0.22)] ring-1 ring-cyan/20'
                    : 'border-border/50 bg-white/75 hover:border-cyan/25 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div
                  className={`absolute inset-y-2.5 left-0 w-[3px] rounded-r-full bg-gradient-to-b ${accent.gradient} transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover/tab:opacity-45'
                  }`}
                  aria-hidden="true"
                />

                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 transition-all duration-300 ${iconStyle.box} ${
                    isActive ? iconStyle.activeGlow : 'ring-border/35 group-hover/tab:ring-cyan/20'
                  }`}
                >
                  <Icon className={`h-[18px] w-[18px] ${iconStyle.icon}`} strokeWidth={1.6} />
                </div>

                <span className="min-w-0 flex-1 pt-0.5">
                  {service.category && (
                    <span
                      className={`block text-[10px] font-bold uppercase tracking-wider ${
                        isActive ? 'text-cyan' : 'text-cyan/75'
                      }`}
                    >
                      {service.category}
                    </span>
                  )}
                  <span
                    className={`mt-0.5 block text-sm font-semibold leading-snug transition-colors duration-300 ${
                      isActive ? 'text-navy' : 'text-navy/90 group-hover/tab:text-navy'
                    }`}
                  >
                    {service.title}
                  </span>
                  <span className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                    {service.description}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          className="service-detail-panel relative overflow-hidden rounded-2xl border border-border/50 shadow-[0_8px_32px_-10px_rgba(11,31,51,0.1)]"
        >
          <div
            className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${cardAccentColors[activeIndex >= 0 ? activeIndex : 0].gradient}`}
            aria-hidden="true"
          />
          <div className="absolute inset-0 industrial-grid opacity-[0.1]" aria-hidden="true" />
          <div className="absolute inset-0 blueprint-lines opacity-[0.06]" aria-hidden="true" />
          <div
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan/[0.06] blur-3xl"
            aria-hidden="true"
          />

          <div key={activeService.id} className="animate-fade-up relative p-5 xl:p-6">
            <ServiceDetailContent
              service={activeService}
              index={activeIndex >= 0 ? activeIndex : 0}
              learnMoreLabel={learnMoreLabel}
              applicationsLabel={applicationsLabel}
              bulletsLabel={bulletsLabel}
              variant="panel"
            />
          </div>
        </div>
      </div>

      {/* Mobile / tablet: accordion */}
      <div className="flex flex-col gap-2 lg:hidden">
        {services.map((service, index) => {
          const isOpen = openAccordionId === service.id
          const iconStyle = iconStyles[index % iconStyles.length]
          const accent = cardAccentColors[index % cardAccentColors.length]
          const Icon = getServiceIcon(service.id)

          return (
            <div
              key={service.id}
              className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                isOpen
                  ? 'border-cyan/35 bg-white shadow-[0_6px_24px_-8px_rgba(0,166,214,0.18)] ring-1 ring-cyan/15'
                  : 'border-border/50 bg-white/90'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(service.id)}
                aria-expanded={isOpen}
                className={`relative flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors duration-300 ${
                  isOpen ? 'bg-gradient-to-r from-cyan/[0.08] via-cyan/[0.03] to-transparent' : 'hover:bg-navy/[0.02]'
                }`}
              >
                <span
                  className={`absolute inset-y-2.5 left-0 w-[3px] rounded-r-full bg-gradient-to-b ${accent.gradient} transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden="true"
                />
                <div
                  className={`ml-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1 ring-border/35 transition-shadow duration-300 ${iconStyle.box} ${
                    isOpen ? iconStyle.activeGlow : ''
                  }`}
                >
                  <Icon className={`h-4 w-4 ${iconStyle.icon}`} strokeWidth={1.6} />
                </div>
                <span className="min-w-0 flex-1">
                  {service.category && (
                    <span
                      className={`block text-[10px] font-bold uppercase tracking-wider ${
                        isOpen ? 'text-cyan' : 'text-cyan/75'
                      }`}
                    >
                      {service.category}
                    </span>
                  )}
                  <span className={`mt-0.5 block text-sm font-semibold leading-snug ${isOpen ? 'text-navy' : 'text-navy/90'}`}>
                    {service.title}
                  </span>
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-cyan' : 'text-muted'
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-cyan/10 bg-white/50 px-4 pb-4 pt-3">
                    <ServiceDetailContent
                      service={service}
                      index={index}
                      learnMoreLabel={learnMoreLabel}
                      applicationsLabel={applicationsLabel}
                      bulletsLabel={bulletsLabel}
                      variant="accordion-body"
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
