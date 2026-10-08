'use client'

import { useEffect, useState } from 'react'
import { useInViewOnce } from '@/hooks/useInViewOnce'

interface AnimatedCounterProps {
  value: string
  className?: string
}

function parseStatValue(value: string): { target: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return { target: 0, suffix: value }
  return { target: Number(match[1]), suffix: match[2] }
}

export function AnimatedCounter({ value, className = '' }: AnimatedCounterProps) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>({ rootMargin: '-40px' })
  const { target, suffix } = parseStatValue(value)
  const [display, setDisplay] = useState(target)

  useEffect(() => {
    if (!inView || target === 0) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(target)
      return
    }
    setDisplay(0)

    let frame = 0
    const totalFrames = 48
    const timer = window.setInterval(() => {
      frame += 1
      const progress = frame / totalFrames
      const eased = 1 - (1 - progress) ** 3
      setDisplay(Math.round(target * eased))

      if (frame >= totalFrames) {
        setDisplay(target)
        window.clearInterval(timer)
      }
    }, 1000 / 60)

    return () => window.clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className={className} aria-label={value}>
      <span aria-hidden="true">{display}{suffix}</span>
    </span>
  )
}
