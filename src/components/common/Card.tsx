'use client'

import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  accent?: boolean
}

export function Card({
  children,
  className = '',
  hover = true,
  accent = false,
}: CardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border/80 bg-surface p-6 shadow-soft ${
        accent ? 'card-shine' : ''
      } ${
        hover
          ? 'transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/25 hover:shadow-elevated'
          : ''
      } ${className}`}
    >
      {accent && (
        <div
          className="absolute inset-x-0 top-0 h-1 gradient-accent"
          aria-hidden="true"
        />
      )}
      <div className="relative">{children}</div>
    </div>
  )
}
