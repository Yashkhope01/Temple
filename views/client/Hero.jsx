'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/views/client/LanguageProvider'
import { addLocaleToPath } from '@/lib/i18n'

export function Hero() {
  const { locale } = useLanguage()

  const content = {
    en: {
      title: 'Welcome to Temple Trust',
      subtitle: 'A sacred space for spiritual growth and community connection',
      cta: 'Explore Our Gallery',
    },
    hi: {
      title: 'मंदिर ट्रस्ट में आपका स्वागत है',
      subtitle: 'आध्यात्मिक विकास और सामुदायिक जुड़ाव के लिए एक पवित्र स्थान',
      cta: 'हमारी गैलरी देखें',
    },
    mr: {
      title: 'मंदिर ट्रस्ट मध्ये आपले स्वागत आहे',
      subtitle: 'आध्यात्मिक वाढ आणि समुदाय जोडण्यासाठी एक पवित्र जागा',
      cta: 'आमची गॅलरी पहा',
    },
  }

  // Fallback to English if locale is not found
  const t = content[locale] || content.en

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/1-SIDDHIVIYAK-BACKDROP-2.png"
          alt="Temple interior with Ganesha"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Single, soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="divider-accent bg-white/40 mb-8"></div>

        <h1 className="heading-primary mb-8 text-white drop-shadow-xl">
          {t.title}
        </h1>

        <div className="divider-accent bg-white/40"></div>

        <p className="text-body max-w-2xl mx-auto mb-12 mt-8 text-white/95 drop-shadow-lg text-lg md:text-xl">
          {t.subtitle}
        </p>

        <Link
          href={addLocaleToPath('/gallery', locale)}
          className="btn-primary shadow-2xl hover:scale-105 transition-transform"
        >
          {t.cta}
        </Link>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary-50 via-primary-50/80 to-transparent pointer-events-none z-10"></div>
    </section>
  )
}

