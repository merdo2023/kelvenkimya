'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

interface ProductImageLightboxProps {
  isOpen: boolean
  image: string
  alt: string
  title: string
  onClose: () => void
}

export function ProductImageLightbox({
  isOpen,
  image,
  alt,
  title,
  onClose,
}: ProductImageLightboxProps) {
  const { t } = useTranslation()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        className="absolute inset-0 bg-navy/85 backdrop-blur-sm"
        onClick={onClose}
        aria-label={t('products.closeImage')}
      />

      <div className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-white shadow-2xl sm:rounded-2xl">
        <div className="flex items-start justify-between gap-3 border-b border-border/40 px-4 py-3.5 sm:px-5 sm:py-4">
          <h3 className="break-words pr-2 text-base font-bold leading-snug text-navy sm:text-lg">{title}</h3>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/50 bg-light-bg text-navy transition-colors hover:border-cyan/30 hover:bg-cyan/5 hover:text-cyan"
            aria-label={t('products.closeImage')}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="relative flex min-h-[50vh] flex-1 items-center justify-center bg-gradient-to-br from-[#f4f8fb] via-white to-light-bg/80 p-5 sm:min-h-[24rem] sm:p-8">
          <div className="relative h-[min(60vh,28rem)] w-full">
            <Image
              src={image}
              alt={alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
