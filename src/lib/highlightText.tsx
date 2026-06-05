import type { ReactNode } from 'react'
import { normalizeText } from '@/lib/normalizeText'

export function highlightText(text: string, query: string): ReactNode {
  const trimmed = query.trim()
  if (!trimmed) return text

  const normalizedText = normalizeText(text)
  const normalizedQuery = normalizeText(trimmed)
  const index = normalizedText.indexOf(normalizedQuery)

  if (index === -1) return text

  const before = text.slice(0, index)
  const match = text.slice(index, index + trimmed.length)
  const after = text.slice(index + trimmed.length)

  return (
    <>
      {before}
      <mark className="rounded bg-cyan/15 px-0.5 font-semibold text-navy">{match}</mark>
      {after}
    </>
  )
}
