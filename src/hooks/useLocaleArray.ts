'use client'

import { useMessages } from 'next-intl'

function getByPath(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return (acc as Record<string, unknown>)[part]
    }
    return undefined
  }, obj)
}

export function useLocaleArray<T>(key: string): T[] {
  const messages = useMessages()
  const data = getByPath(messages, key)
  return Array.isArray(data) ? (data as T[]) : []
}
