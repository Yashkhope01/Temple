import { GalleryGrid } from '@/views/client/GalleryGrid'
import { GalleryPageTitle } from '@/views/client/GalleryPageTitle'
import { getGalleryImages } from '@/models/api/cockpit'
import { notFound } from 'next/navigation'
import { supportedLocales } from '@/lib/i18n'

export const metadata = {
  title: 'Gallery',
  description: 'Explore our collection of temple images and moments',
}

// Force dynamic rendering to ensure locale changes are reflected
export const dynamic = 'force-dynamic'

export default async function LocaleGalleryPage({ params }) {
  const { locale } = await params
  
  if (locale && !supportedLocales.includes(locale)) {
    notFound()
  }

  // Pre-load initial images for better performance
  const initialImages = await getGalleryImages(20, 0)

  return (
    <div className="py-12 bg-beige min-h-screen">
      <div className="container mx-auto px-4">
        <GalleryPageTitle />
        <GalleryGrid initialImages={initialImages} />
      </div>
    </div>
  )
}

