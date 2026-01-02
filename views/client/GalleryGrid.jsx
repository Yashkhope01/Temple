
'use client'

import { useState, useEffect } from 'react'
import { getCockpitImageUrl } from '@/models/api/cockpit'

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

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((item) => {
          const img = item.image || item.Image
          if (!img?.path) return null

          return (
            <button
              key={item._id}
              onClick={() => setActiveImage(item)}
              className="relative aspect-square overflow-hidden rounded-lg bg-gray-200 cursor-pointer"
            >
              <img
                src={getCockpitImageUrl(img.path)}
                alt={item.title || 'Gallery image'}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
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
