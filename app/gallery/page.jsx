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
    <div className="py-12">
      <div className="container-custom">
        <h1 className="heading-primary text-center mb-12">Gallery</h1>
        <GalleryGrid initialImages={initialImages} />
      </div>
    </div>
  )
}

