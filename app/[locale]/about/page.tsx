import { buildPageMetadata } from '@/lib/metadata'
import { AboutPage } from '@/views/AboutPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return buildPageMetadata(locale, {
    title: 'about.title',
    description: 'about.subtitle',
  })
}

export default function Page() {
  return <AboutPage />
}
