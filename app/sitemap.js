import { supportedLocales } from '@/lib/i18n'

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  
  const routes = ['', '/gallery', '/events', '/contact']
  
  const sitemapEntries = []
  
  // Add routes for each locale
  supportedLocales.forEach((locale) => {
    routes.forEach((route) => {
      const path = locale === 'en' ? route : `/${locale}${route}`
      sitemapEntries.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })
  
  return sitemapEntries
}

