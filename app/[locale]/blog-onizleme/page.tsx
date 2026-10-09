import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { BlogPreview } from '@/components/blog/BlogPreview'
export const metadata: Metadata = { title: 'Kimyasal Temizlik ve Su Şartlandırma Blogu | Kelven Kimya', description: 'HRSG, buhar kazanı, tank ve boru hattı kimyasal temizliği ile su şartlandırma hakkında Kelven Kimya teknik rehberleri.', robots: { index: false, follow: false } }
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'tr') notFound()
  setRequestLocale(locale)
  return <BlogPreview />
}