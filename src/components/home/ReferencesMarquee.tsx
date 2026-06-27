'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { resolveMediaPath } from '@/lib/media'
import type { ReferenceItem } from '@/types/locale'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return reduced
}

interface ReferenceLogoProps {
  reference: ReferenceItem
}

function ReferenceLogo({ reference }: ReferenceLogoProps) {
  const [hasError, setHasError] = useState(false)
  const logoPath = resolveMediaPath(reference.logoUrl)

  if (!logoPath || hasError) return null

  return (
    <div className="group/ref relative flex h-[4.25rem] w-[9.75rem] shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/[0.96] px-2.5 py-2 shadow-sm shadow-black/5 transition-colors duration-300 hover:border-white/25 sm:h-[4.75rem] sm:w-44 sm:px-3">
      <div className="relative h-10 w-full sm:h-11">
        <Image
          src={logoPath}
          alt={reference.name}
          fill
          className="reference-logo object-contain object-center"
          sizes="(max-width: 640px) 156px, 176px"
          onError={() => setHasError(true)}
        />
      </div>
    </div>
  )
}

interface ReferencesMarqueeProps {
  references: ReferenceItem[]
}

export function ReferencesMarquee({ references }: ReferencesMarqueeProps) {
  const reducedMotion = usePrefersReducedMotion()
  const logoReferences = references.filter((reference) => reference.logoUrl?.trim())
  const loop = reducedMotion ? logoReferences : [...logoReferences, ...logoReferences]

  if (logoReferences.length === 0) return null

  return (
    <div className="refs-marquee relative isolate w-full overflow-hidden py-2">
      <div
        className={`refs-marquee-track flex items-center gap-3.5 sm:gap-4 ${
          reducedMotion ? 'w-full max-w-5xl flex-wrap justify-center gap-4' : 'w-max'
        }`}
      >
        {loop.map((reference, index) => (
          <ReferenceLogo key={`${reference.logoUrl}-${index}`} reference={reference} />
        ))}
      </div>
    </div>
  )
}
