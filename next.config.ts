import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  compress: true,
  async redirects() {
    const legacyRoutes = {
      products: 'urunlerimiz',
      services: 'hizmetlerimiz',
      about: 'hakkimizda',
      projects: 'projelerimiz',
      contact: 'iletisim',
    }

    return Object.entries(legacyRoutes).flatMap(([oldPath, newPath]) => [
      {
        source: `/:locale(tr|en)/${oldPath}`,
        destination: `/:locale/${newPath}`,
        permanent: true,
      },
      {
        source: `/${oldPath}`,
        destination: `/${newPath}`,
        permanent: true,
      },
    ])
  },
  experimental: {
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:file(og-image.jpg|kelvenkimya.png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default withNextIntl(nextConfig)
