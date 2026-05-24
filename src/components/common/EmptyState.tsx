'use client'

import { Inbox } from 'lucide-react'

interface EmptyStateProps {
  title: string
  description: string
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white/50 px-8 py-16 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
        <Inbox className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-navy">{title}</h3>
      <p className="mt-2 max-w-md text-text-gray">{description}</p>
    </div>
  )
}
