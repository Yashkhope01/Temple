'use client'

import { useState, useEffect } from 'react'
import { getCockpitImageUrl } from '@/models/api/cockpit'
import Image from 'next/image'

export function GalleryGrid({ initialImages = [] }) {
  const [images, setImages] = useState(initialImages)
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    setImages(initialImages)
  }, [initialImages])

  // Close on ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setActiveImage(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // Masonry layout helper - varied aspect ratios
  const getAspectRatio = (index) => {
    const ratios = ['aspect-square', 'aspect-video', 'aspect-[3/4]', 'aspect-square', 'aspect-[4/3]']
    return ratios[index % ratios.length]
  }

  return (
    <>
      {/* MASONRY GRID */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-5 gap-4">
        {images.map((item, index) => {
          const img = item.image || item.Image
          if (!img?.path) return null

          return (
            <button
              key={item._id}
              onClick={() => setActiveImage(item)}
              className="relative mb-4 w-full overflow-hidden rounded-xl bg-gray-200 cursor-pointer group break-inside-avoid"
            >
              <img
                src={getCockpitImageUrl(img.path)}
                alt={item.title || 'Gallery image'}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </button>
          )
        })}
      </div>

      {/* SINGLE IMAGE VIEW (LIGHTBOX) */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl"
              aria-label="Close"
            >
              ✕
            </button>

            {/* IMAGE */}
            <img
              src={getCockpitImageUrl(
                (activeImage.image || activeImage.Image).path
              )}
              alt={activeImage.title || 'Gallery image'}
              className="mx-auto max-h-[90vh] w-auto object-contain"
            />

            {/* TITLE / DESCRIPTION */}
            {(activeImage.title || activeImage.description) && (
              <div className="mt-4 text-center text-white">
                {activeImage.title && (
                  <h3 className="text-xl font-serif">
                    {activeImage.title}
                  </h3>
                )}
                {activeImage.description && (
                  <p className="mt-2 text-white/80">
                    {activeImage.description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
