'use client'

import Image from 'next/image'
import { resolveMediaPath } from '@/lib/media'

type AssetImageProps = {
  src?: string | null
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
}

export function AssetImage({
  src,
  alt,
  className = '',
  fill = false,
  width,
  height,
  priority = false,
  sizes,
}: AssetImageProps) {
  const resolved = resolveMediaPath(src)
  if (!resolved) return null

  if (fill) {
    return (
      <Image
        src={resolved}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes ?? '(max-width: 768px) 100vw, 50vw'}
      />
    )
  }

  if (!width || !height) return null

  return (
    <Image
      src={resolved}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  )
}
