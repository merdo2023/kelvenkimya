'use client'

import { motion } from 'framer-motion'
import { useLocaleArray } from '@/hooks/useLocaleArray'

export function ContactHeroHighlights() {
  const highlights = useLocaleArray<string>('contact.highlights')

  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {highlights.map((highlight, index) => (
        <motion.span
          key={highlight}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
          {highlight}
        </motion.span>
      ))}
    </div>
  )
}
