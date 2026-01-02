'use client'

import { useLanguage } from '@/views/client/LanguageProvider'

export function EventsPageTitle() {
  const { locale } = useLanguage()

  const content = {
    en: {
      title: 'Upcoming Events',
    },
    hi: {
      title: 'आगामी कार्यक्रम',
    },
    mr: {
      title: 'आगामी कार्यक्रम',
    },
  }

  const t = content[locale] || content.en

  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">{t.title}</h1>
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
  )
}
