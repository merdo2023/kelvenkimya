'use client'

import { useEffect, useRef, useState } from 'react'

type UseInViewOnceOptions = {
  rootMargin?: string
  threshold?: number
}

export function useInViewOnce<T extends Element = Element>({
  rootMargin = '-40px',
  threshold = 0,
}: UseInViewOnceOptions = {}) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || inView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [inView, rootMargin, threshold])

  return { ref, inView }
}
