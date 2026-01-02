import { getGalleryImages } from '@/models/api/cockpit'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const page = Number(searchParams.get('page') || 1)
    const limit = Number(searchParams.get('limit') || 20)

    const allImages = await getGalleryImages(1000)

    const start = (page - 1) * limit
    const end = start + limit

    const paginated = allImages.slice(start, end)

    return NextResponse.json({
      images: paginated,
      hasMore: end < allImages.length,
    })
  } catch (error) {
    console.error('Gallery API error:', error)
    return NextResponse.json({ images: [], hasMore: false })
  }
}
