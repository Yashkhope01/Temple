import { GalleryGrid } from '@/views/client/GalleryGrid'
import { getGalleryImages } from '@/models/api/cockpit'

export const metadata = {
  title: 'Gallery',
  description: 'Explore our collection of temple images and moments',
}

// Force dynamic rendering to ensure locale changes are reflected
export const dynamic = 'force-dynamic'

export default async function GalleryPage() {
  // Pre-load initial images for better performance
  const initialImages = await getGalleryImages(20, 0)

  return (
    <div className="py-12 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Photo Gallery</h1>
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4">
            <svg className="w-12 h-12 text-temple-orange" viewBox="0 0 100 100" fill="currentColor">
              <path d="M20,50 Q30,40 40,50 Q50,60 60,50 Q70,40 80,50" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="50" r="3" fill="currentColor"/>
            </svg>
            <div className="w-20 h-0.5 bg-temple-orange"></div>
            <svg className="w-12 h-12 text-temple-orange" viewBox="0 0 100 100" fill="currentColor">
              <path d="M20,50 Q30,40 40,50 Q50,60 60,50 Q70,40 80,50" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="50" r="3" fill="currentColor"/>
            </svg>
            <div className="w-20 h-0.5 bg-temple-orange"></div>
            <svg className="w-12 h-12 text-temple-orange" viewBox="0 0 100 100" fill="currentColor">
              <path d="M20,50 Q30,40 40,50 Q50,60 60,50 Q70,40 80,50" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="50" r="3" fill="currentColor"/>
            </svg>
          </div>
        </div>
        <GalleryGrid initialImages={initialImages} />
      </div>
    </div>
  )
}

