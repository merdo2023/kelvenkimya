export const routes = {
  home: '/',
  products: '/products',
  about: '/about',
  projects: '/projects',
  contact: '/contact',
} as const

export type RouteKey = keyof typeof routes
