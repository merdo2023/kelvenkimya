import { blogDrafts } from './blogDrafts'
import { blogEnglish } from './blogEnglish'
export function getBlogPosts(locale: string) { return locale === 'en' ? blogEnglish : blogDrafts }
