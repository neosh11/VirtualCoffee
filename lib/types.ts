export type navKeys = 'home' | 'about' | 'services' | 'resources' | 'careers' | 'media' | 'contact'

export interface TimelineDataObject {
  slug?: string
  createdAt: string // TODO
  icon: string
  title: string
  excerpt: string
  type: 'GENERIC' | string
}

export interface PostObject {
  slug: string
  title: string
  createdAt: Date
  lastUpdate?: Date
  html: string
  images?: string[]
}
