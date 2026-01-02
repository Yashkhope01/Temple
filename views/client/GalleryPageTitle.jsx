'use client'

import { useLanguage } from '@/views/client/LanguageProvider'

export function GalleryPageTitle() {
  const { locale } = useLanguage()

  const content = {
    en: {
      title: 'Photo Gallery',
    },
    hi: {
      title: 'फोटो गैलरी',
    },
    mr: {
      title: 'फोटो गॅलरी',
    },
  }

  const t = content[locale] || content.en

  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">{t.title}</h1>
      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-4">
        <div className="w-12 h-0.5 bg-tan"></div>
        <div className="text-temple-orange text-xl">✧</div>
        <div className="w-12 h-0.5 bg-tan"></div>
      </div>
    </div>
  )
}
