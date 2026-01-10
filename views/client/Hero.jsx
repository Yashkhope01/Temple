'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/views/client/LanguageProvider'
import { addLocaleToPath } from '@/lib/i18n'

export function Hero() {
  const { locale } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const backgroundImages = ['/images/backdrop.png', '/images/sc1.png', '/images/sc2.png']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [backgroundImages.length])

  const content = {
    en: {
      title: 'The Sanctuary of Silence',
      description: 'Nestled in the heart of Chinchwad, the Shree Dhaneshwar Temple is more than a monument; it is a pause in the chaos. Dedicated to Lord Shiva, this ancient sanctum bridges the gap between centuries of tradition and the quiet search for inner peace. Here, the noise fades, and the divine speaks in the language of silence.',
      intro: 'Managed by Shree Dhaneshwar Trust',
      explore: 'Explore Temple',
      learn: 'Learn More',
    },
   hi: {
    title: 'शांति का पवित्र आलय',
    description: 'चिंचवड के हृदय में स्थित, श्री धनेश्वर मंदिर केवल एक वास्तुकला नहीं है; यह जीवन की आपाधापी में एक सुकून भरा ठहराव है। भगवान शिव को समर्पित, यह प्राचीन पवित्र स्थल सदियों पुरानी परंपराओं और मन की शांति के बीच का सेतु है। यहाँ शोर थम जाता है और दिव्यता मौन की भाषा में संवाद करती है।',
    intro: 'श्री धनेश्वर ट्रस्ट द्वारा प्रबंधित',
    explore: 'मंदिर भ्रमण',
    learn: 'और जानें'
      },
    mr: {
    title: 'शांततेचे पवित्र धाम',
    description: 'चिंचवडच्या गजबजलेल्या भागात वसलेले श्री धनेश्वर मंदिर हे केवळ एक वास्तू नाही, तर धकाधकीच्या आयुष्यातील एक शांत विसावा आहे. भगवान शंकरांना समर्पित, हे प्राचीन स्थान शेकडो वर्षांच्या परंपरा आणि आंतरिक शांततेचा शोध यांचा दुवा आहे. इथे बाहेरील गोंगाट विरून जातो आणि ईश्वर मौनाच्या भाषेत भक्तांशी संवाद साधतो.',
    intro: 'श्री धनेश्वर ट्रस्टद्वारे व्यवस्थापित',
    explore: 'मंदिर दर्शन',
    learn: 'अधिक जाणून घ्या'
     }
  }

  const t = content[locale] || content.en

  return (
    <section className="relative h-96 lg:h-[600px] flex items-center justify-start overflow-hidden">
      {/* Carousel Background Images */}
      {backgroundImages.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt="Temple"
          fill
          className={`object-cover absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          priority={index === 0}
          quality={90}
        />
      ))}

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

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

