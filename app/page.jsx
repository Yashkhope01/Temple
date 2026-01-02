import { Hero } from '@/views/client/Hero'
import AboutSection from '@/views/client/AboutSection'
import { FeaturedEvents } from '@/views/server/FeaturedEvents'
import { GalleryPreview } from '@/views/server/GalleryPreview'

// Force dynamic rendering to ensure locale changes are reflected
export const dynamic = 'force-dynamic'

export default async function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Divider */}
      <div className="flex justify-center bg-beige py-8">
        <div className="w-40 h-1 bg-temple-orange"></div>
      </div>

      <AboutSection />

      {/* Divider */}
      <div className="flex justify-center bg-beige py-8">
        <div className="w-40 h-1 bg-temple-orange"></div>
      </div>

      <FeaturedEvents />

      {/* Divider */}
      <div className="flex justify-center bg-beige py-8">
        <div className="w-40 h-1 bg-temple-orange"></div>
      </div>

      <GalleryPreview />
    </>
  )
}
