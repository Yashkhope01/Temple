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
      <AboutSection />
      <FeaturedEvents />
      <GalleryPreview />
    </>
  )
}
