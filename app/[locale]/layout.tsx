import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Inter } from 'next/font/google'
import { MotionProvider } from '@/components/common/MotionProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton'
import { OrganizationJsonLd } from '@/components/seo/OrganizationJsonLd'
import { criticalHeroCss } from '@/lib/criticalCss'
import { pickClientMessages } from '@/lib/clientMessages'
import { getServices } from '@/data/localeCatalog'
import { routing, type AppLocale } from '@/i18n/routing'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home.seo' })

  return {
    description: t('description'),
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as AppLocale)) {
    notFound()
  }

  const appLocale = locale as AppLocale
  setRequestLocale(appLocale)

  const [messages, services] = await Promise.all([
    getMessages(),
    getServices(appLocale),
  ])

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalHeroCss }} />
      </head>
      <body className="font-sans">
        <OrganizationJsonLd locale={locale} />
        <NextIntlClientProvider messages={pickClientMessages(messages)}>
          <MotionProvider>
            <div className="flex min-h-screen flex-col overflow-x-clip">
              <Navbar />
              <main className="min-w-0 flex-1">{children}</main>
              <Footer services={services} />
              <WhatsAppFloatingButton />
            </div>
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
