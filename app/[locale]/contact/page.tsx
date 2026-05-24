import { buildPageMetadata } from '@/lib/metadata'
import { ContactPage } from '@/views/ContactPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return buildPageMetadata(locale, {
    title: 'contact.title',
    description: 'contact.subtitle',
  })
}

export default function Page() {
  return <ContactPage />
}
