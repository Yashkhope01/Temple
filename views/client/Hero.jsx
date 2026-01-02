'use client'

import Image from 'next/image'
import { useLanguage } from '@/views/client/LanguageProvider'
import { addLocaleToPath } from '@/lib/i18n'

export function Hero() {
  const { locale } = useLanguage()

  const content = {
    en: {
      title: 'The povine and shirlis temple temple',
      description: 'Your oijuen sweet mono dierrioos in Laur-dalwatan tur viathait enje, sea lorriher, oocber, ens vons tod cuf, hes crearm, same hus undenume, connectia i rubaraaoc. thero arktarien w zolem hris tvins ous nower eruss ever elic. ens pare l td of ori cne tlie teos and life.',
      intro: 'Introduces for Nand/ius cus comple',
      explore: 'Explore Temple',
      learn: 'Learn More',
    },
    hi: {
      title: 'मंदिर मंदिर',
      description: 'आपका पवित्र मंदिर अनुभव।',
      intro: 'मंदिर परिचय',
      explore: 'मंदिर खोजें',
      learn: 'और जानें',
    },
    mr: {
      title: 'मंदिर मंदिर',
      description: 'आपचा पवित्र मंदिर अनुभव।',
      intro: 'मंदिर परिचय',
      explore: 'मंदिर शोधा',
      learn: 'आणखी जाणून घ्या',
    },
  }

  const t = content[locale] || content.en

  return (
    <section className="relative h-96 lg:h-[600px] flex items-center justify-start overflow-hidden">
      {/* Full Width Background Image */}
      <Image
        src="/images/Gemini_Generated_Image_9dmdsj9dmdsj9dmd.png"
        alt="Temple"
        fill
        className="object-cover absolute inset-0"
        priority
        quality={90}
      />

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Content - Transparent Background */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-12 py-12 lg:py-0">
        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
          {t.title}
        </h1>

        <p className="text-base lg:text-lg text-white/95 mb-6 leading-relaxed drop-shadow-md">
          {t.description}
        </p>

        <p className="text-sm lg:text-base font-medium text-white/90 mb-6 drop-shadow-md">
          {t.intro}
        </p>
      </div>
    </section>
  )
}

