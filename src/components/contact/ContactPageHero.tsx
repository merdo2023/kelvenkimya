'use client'

import type { ReactNode } from 'react'
import { Container } from '../common/Container'

interface ContactPageHeroProps {
  title: string
  subtitle?: string
  children?: ReactNode
}

export function ContactPageHero({ title, subtitle, children }: ContactPageHeroProps) {
  return (
    <section className="relative overflow-hidden gradient-hero pb-10 pt-24 sm:pb-12 sm:pt-28">
      <div className="absolute inset-0 mesh-pattern opacity-25" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-cyan/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-green/8 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-0.5 w-8 rounded-full gradient-accent" aria-hidden="true" />
            <span className="h-0.5 w-2 rounded-full bg-cyan/50" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h1>
          {subtitle ? (
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">{subtitle}</p>
          ) : null}
          {children}
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-light-bg to-transparent" aria-hidden="true" />
    </section>
  )

}
