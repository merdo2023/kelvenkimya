import { buildPageMetadata } from '@/lib/metadata'
import { HomePage } from '@/views/HomePage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return buildPageMetadata(locale, {
    title: 'home.hero.title',
    description: 'home.hero.subtitle',
  })
}

export default function Page() {
  return <HomePage />
}
