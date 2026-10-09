import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  // Keep development output separate from production builds.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  compress: true,
  async redirects() {
    const legacyRoutes = {
      products: 'urunlerimiz',
      services: 'hizmetlerimiz',
      about: 'hakkimizda',
      projects: 'projelerimiz',
      contact: 'iletisim',
    }

    return [
      { source: '/urunlerimiz/kelvenoks-ferlin-135', destination: '/urunlerimiz/kelvenoks-ferlin-101', permanent: true },
      { source: '/:locale(tr|en)/urunlerimiz/kelvenoks-ferlin-135', destination: '/:locale/urunlerimiz/kelvenoks-ferlin-101', permanent: true },
      ...Object.entries(legacyRoutes).flatMap(([oldPath, newPath]) => [
        { source: '/en/' + newPath, destination: '/en/' + oldPath, statusCode: 301 },
        { source: '/tr/' + oldPath, destination: '/' + newPath, statusCode: 301 },
        { source: '/' + oldPath, destination: '/' + newPath, statusCode: 301 },
      ]),
    ]
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
