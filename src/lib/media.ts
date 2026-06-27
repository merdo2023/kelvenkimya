/** Returns a trimmed public path or undefined when empty / missing. */
export function resolveMediaPath(path?: string | null): string | undefined {
  if (!path || typeof path !== 'string') return undefined
  const trimmed = path.trim()
  return trimmed.length > 0 ? trimmed : undefined
}

export function hasMediaPath(path?: string | null): boolean {
  return Boolean(resolveMediaPath(path))
}
