'use client'

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  videoUrl: string
  title: string
  closeLabel: string
  onClose: () => void
}

export function VideoModal({ isOpen, videoUrl, title, closeLabel, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      videoRef.current?.pause()
      if (videoRef.current) videoRef.current.currentTime = 0
    }
  }, [isOpen])

  if (!isOpen || typeof document === 'undefined') return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-navy shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white transition-colors hover:bg-black/60"
          aria-label={closeLabel}
        >
          <X className="h-4 w-4" />
        </button>

        <video
          ref={videoRef}
          src={videoUrl}
          controls
          autoPlay
          playsInline
          className="aspect-video w-full bg-black"
        >
          <track kind="captions" />
        </video>

        <p className="break-words border-t border-white/10 px-4 py-3 text-sm font-medium text-white/80">{title}</p>
      </div>
    </div>,
    document.body,
  )
}
