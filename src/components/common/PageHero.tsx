'use client'

import type { ReactNode } from 'react'
import { Container } from './Container'

interface PageHeroProps {
  title: string
  subtitle?: string
  children?: ReactNode
}

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden gradient-hero pb-20 pt-28 sm:pt-32">
      <div className="absolute inset-0 mesh-pattern opacity-30" aria-hidden="true" />
      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-green/10 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-1 w-10 rounded-full gradient-accent" aria-hidden="true" />
            <span className="h-1 w-3 rounded-full bg-cyan/50" aria-hidden="true" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{subtitle}</p>
          )}
          {children}
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-light-bg to-transparent" aria-hidden="true" />
    </section>
  )
}
