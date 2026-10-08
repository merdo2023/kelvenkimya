const configuredSiteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.kelvenkimya.com')

// Production redirects to www; canonical, sitemap and schema URLs must match it.
if (configuredSiteUrl.hostname === 'kelvenkimya.com') {
  configuredSiteUrl.hostname = 'www.kelvenkimya.com'
  configuredSiteUrl.protocol = 'https:'
}

export const siteUrl = configuredSiteUrl.origin
export const ogImagePath = '/og-image.jpg'
