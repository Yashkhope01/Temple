import Link from 'next/link'
import { headers } from 'next/headers'
import { getGalleryImages } from '@/models/api/cockpit'
import { addLocaleToPath, getLocaleFromHeaders, defaultLocale } from '@/lib/i18n'
import { getCockpitImageUrl } from '@/models/api/cockpit'
import Image from 'next/image'

export async function GalleryPreview() {
  const headersList = await headers()
  const locale = getLocaleFromHeaders(headersList) || defaultLocale
  const images = await getGalleryImages(6)

  const content = {
    en: {
      title: 'Gallery',
      viewAll: 'View Full Gallery',
    },
    hi: {
      title: 'गैलरी',
      viewAll: 'पूरी गैलरी देखें',
    },
    mr: {
      title: 'गॅलरी',
      viewAll: 'संपूर्ण गॅलरी पहा',
    },
  }

  // Fallback to English if locale is not found
  const t = content[locale] || content.en

  if (images.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-charcoal mb-6">{t.title}</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-0.5 bg-tan"></div>
            <div className="text-temple-orange text-xl">✧</div>
            <div className="w-12 h-0.5 bg-tan"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {images.map((image) => (
            <div
              key={image._id}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={image.image.path.startsWith('http') ? image.image.path : getCockpitImageUrl(image.image.path)}
                alt={image.title || 'Gallery image'}
                fill
                className="object-cover hover:scale-[1.02] transition-transform cursor-pointer"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href={addLocaleToPath('/gallery', locale)} className="text-temple-orange hover:underline">
            {t.viewAll}
          </Link>
        </div>
      </div>
    </section>
  )
}

