'use client'

import { Beaker, Droplets, Factory, FlaskConical, Layers, Pipette } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { AssetImage } from './AssetImage'
import { resolveMediaPath } from '@/lib/media'
import type { cardAccentColors } from '@/data/accentColors'

type Accent = (typeof cardAccentColors)[number]

const categoryIcons: Record<string, LucideIcon> = {
  beaker: Beaker,
  droplets: Droplets,
  factory: Factory,
  flask: FlaskConical,
  layers: Layers,
  pipette: Pipette,
}

type CategoryMediaProps = {
  image?: string
  icon?: string
  title: string
  accent: Accent
  className?: string
  variant?: 'card' | 'banner'
}

export function CategoryMedia({
  image,
  icon,
  title,
  accent,
  className = '',
  variant = 'card',
}: CategoryMediaProps) {
  const resolvedImage = resolveMediaPath(image)
  const heightClass = variant === 'banner' ? 'h-44 sm:h-52' : 'h-36 sm:h-40'
  const Icon = (icon && categoryIcons[icon]) || Droplets

  return (
    <div
      className={`relative overflow-hidden ${heightClass} ${className}`}
    >
      {resolvedImage ? (
        <>
          <AssetImage
            src={resolvedImage}
            alt={title}
            fill
            className="img-zoom-hover object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="hero-overlay-gradient absolute inset-0" aria-hidden="true" />
        </>
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accent.wash} industrial-grid opacity-90`}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-cyan/10" />
          <div className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-md">
            <Icon className="h-7 w-7" strokeWidth={1.5} />
          </div>
        </div>
      )}
    </div>
  )
}
