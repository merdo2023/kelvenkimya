'use client'

import { useClientReferences } from '@/hooks/useClientReferences'
import { useTranslation } from '@/hooks/useTranslation'
import { Container } from '../common/Container'
import { ReferencesMarquee } from './ReferencesMarquee'

export function ClientReferencesSection() {
  const { t } = useTranslation()
  const references = useClientReferences()
  const logoReferences = references.filter((reference) => reference.logoUrl?.trim())

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 section-dark-premium" aria-hidden="true" />
      <div className="absolute inset-0 mesh-pattern opacity-15" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan/40 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="animate-fade-up mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-green shadow-[0_0_8px_rgba(56,161,105,0.7)]" />
            {t('home.clientReferences.badge')}
          </span>

          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            {t('home.clientReferences.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
            {t('home.clientReferences.subtitle')}
          </p>
        </div>

        {logoReferences.length > 0 && (
          <div className="animate-fade-in relative mt-10 sm:mt-12" style={{ animationDelay: '120ms' }}>
            <ReferencesMarquee references={references} />
          </div>
        )}

        <ul className="sr-only">
          {logoReferences.map((reference) => (
            <li key={reference.logoUrl ?? reference.name}>{reference.name}</li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
