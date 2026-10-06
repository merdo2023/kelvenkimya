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
  image?: string
  imageAlt?: string
  imageCaption?: string
  imagePosition?: string
  title: string
  description: string
  category?: string
  tags?: string[]
  bullets?: string[]
  resultLabel?: string
}

export interface ProductItem {
  name: string
  description?: string
  image?: string
  tags?: string[]
  usageAreas?: string[]
  sdsUrl?: string
  technicalFormUrl?: string
}

export interface ProductCategory {
  id: string
  title: string
  description: string
  image?: string
  icon?: string
  tags?: string[]
  usageAreas?: string[]
  products: ProductItem[]
}

export type ProjectRegion = 'turkey' | 'turkmenistan'

export interface ReferenceItem {
  name: string
  logoUrl?: string
  sector?: string
  featured?: boolean
}

export interface HeroMedia {
  image?: string
  video?: string
  poster?: string
}

export interface ProjectItem {
  id: string
  projectName: string
  location: string
  date?: string
  description: string
  region: ProjectRegion
  videoUrl?: string
  thumbnailUrl?: string
  sector?: string
  scope?: string[]
  systemType?: string
  year?: string
  highlight?: string
}

export interface ExpertiseItem {
  title: string
  description: string
}

export interface ValueItem {
  title: string
  description: string
}
