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
    <section className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        <div className="divider-accent mb-8"></div>
        <h2 className="heading-secondary text-center mb-16">{t.title}</h2>
        <div className="divider-accent mb-12"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {images.map((image) => (
            <div
              key={image._id}
              className="relative aspect-square overflow-hidden bg-primary-100 group cursor-pointer"
            >
              <Image
                src={image.image.path.startsWith('http') ? image.image.path : getCockpitImageUrl(image.image.path)}
                alt={image.title || 'Gallery image'}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href={addLocaleToPath('/gallery', locale)} className="btn-secondary">
            {t.viewAll}
          </Link>
        </div>
      </div>
    </section>
  )
}

