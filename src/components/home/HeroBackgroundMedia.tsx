'use client'

import { useEffect, useState } from 'react'
import { resolveMediaPath } from '@/lib/media'
import { AssetImage } from '@/components/common/AssetImage'
import type { HeroMedia } from '@/types/locale'

type HeroBackgroundMediaProps = {
  media?: HeroMedia
}

export function HeroBackgroundMedia({ media }: HeroBackgroundMediaProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const imagePath = resolveMediaPath(media?.image)
  const videoPath = resolveMediaPath(media?.video)
  const posterPath = resolveMediaPath(media?.poster) ?? imagePath

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mobileQuery = window.matchMedia('(max-width: 767px)')

    const update = () => {
      setPrefersReducedMotion(motionQuery.matches)
      setIsMobile(mobileQuery.matches)
    }

    update()
    motionQuery.addEventListener('change', update)
    mobileQuery.addEventListener('change', update)
    return () => {
      motionQuery.removeEventListener('change', update)
      mobileQuery.removeEventListener('change', update)
    }
  }, [])

  const showVideo = Boolean(videoPath) && !prefersReducedMotion && !isMobile
  const hasBackgroundMedia = showVideo || Boolean(imagePath)

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {!hasBackgroundMedia && (
        <>
          <div className="absolute inset-0 industrial-grid opacity-35" />
          <div className="absolute inset-0 blueprint-lines opacity-25" />
        </>
      )}

      {showVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover object-right"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterPath}
        >
          <source src={videoPath} />
        </video>
      ) : imagePath ? (
        <AssetImage
          src={imagePath}
          alt=""
          fill
          priority
          className="h-full w-full object-cover object-[70%_center] sm:object-right"
          sizes="100vw"
        />
      ) : null}

      {/* Sol: metin okunaklılığı için koyu; sağ: boru detayları ~%12 daha görünür */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050f1a]/91 via-[#061220]/58 to-[#071525]/06" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_105%_88%_at_0%_45%,rgb(5_15_26/0.84),transparent_56%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_18%_40%,rgb(0_166_214/0.12),transparent_62%)]" />
      <div className="absolute inset-y-0 right-0 w-[48%] bg-gradient-to-l from-[#071525]/04 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_88%_42%,rgb(0_166_214/0.06),transparent_55%)]" />
      <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-light-bg/75 to-transparent sm:h-16" />
    </div>
  )
}
