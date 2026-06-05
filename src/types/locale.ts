export interface NavItem {
  key: string
  path: string
}

export interface StatItem {
  value: string
  label: string
  icon: string
}

export interface ServiceItem {
  id: string
  title: string
  description: string
}

export interface ProductItem {
  name: string
  description?: string
}

export interface ProductCategory {
  id: string
  title: string
  description: string
  image?: string
  products: ProductItem[]
}

export type ProjectRegion = 'turkey' | 'turkmenistan'

export interface ProjectItem {
  id: string
  projectName: string
  location: string
  date?: string
  description: string
  region: ProjectRegion
  videoUrl?: string
}

export interface ExpertiseItem {
  title: string
  description: string
}

export interface ValueItem {
  title: string
  description: string
}
