import { Hero } from '@/views/client/Hero'
import AboutSection from '@/views/client/AboutSection'
import { FeaturedEvents } from '@/views/server/FeaturedEvents'
import { GalleryPreview } from '@/views/server/GalleryPreview'
import { notFound } from 'next/navigation'
import { supportedLocales } from '@/lib/i18n'

// Force dynamic rendering to ensure locale changes are reflected
export const dynamic = 'force-dynamic'

export default async function LocaleHomePage({ params }) {
  const { locale } = await params
  const finalLocale = locale && supportedLocales.includes(locale) ? locale : 'en'
  
  if (locale && !supportedLocales.includes(locale)) {
    notFound()
  }

  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedEvents />
      <GalleryPreview />
    </>
  )
}

