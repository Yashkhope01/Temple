'use client'

import Image from 'next/image'
import { useLanguage } from '@/views/client/LanguageProvider'

export default function AboutSection() {
  const { locale } = useLanguage()

  const content = {
    en: {
      title: 'About Us',
      description: 'Our temple trust is dedicated to preserving spiritual traditions while fostering a welcoming community for all. We offer a peaceful environment for prayer, meditation, and cultural activities that bring people together.',
    },
    hi: {
      title: 'हमारे बारे में',
      description: 'हमारा मंदिर ट्रस्ट आध्यात्मिक परंपराओं को संरक्षित करने के साथ-साथ सभी के लिए एक स्वागत योग्य समुदाय को बढ़ावा देने के लिए समर्पित है। हम प्रार्थना, ध्यान और सांस्कृतिक गतिविधियों के लिए एक शांतिपूर्ण वातावरण प्रदान करते हैं जो लोगों को एक साथ लाता है।',
    },
    mr: {
      title: 'आमच्याबद्दल',
      description: 'आमचे मंदिर ट्रस्ट आध्यात्मिक परंपरा जतन करण्यासाठी आणि सर्वांसाठी स्वागतार्ह समुदाय वाढवण्यासाठी समर्पित आहे. आम्ही प्रार्थना, ध्यान आणि सांस्कृतिक क्रियाकलापांसाठी शांत वातावरण प्रदान करतो जे लोकांना एकत्र आणते.',
    },
  }

  const t = content[locale]

  return (
    <section className="py-16 bg-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-8 mb-8">
            {/* Left Image Frame */}
            <div className="hidden md:block">
              <div className="relative w-32 h-40 border-4 border-tan rounded-lg overflow-hidden bg-white shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="absolute inset-1 border-2 border-tan/50"></div>
                <Image
                  src="/images/sc1.png"
                  alt="Temple"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Center Content */}
            <div className="flex-1 text-center">
              <h2 className="text-3xl font-serif text-charcoal mb-4">{t.title}</h2>
              <p className="text-base text-charcoal/80 leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* Right Image Frame */}
            <div className="hidden md:block">
              <div className="relative w-32 h-40 border-4 border-tan rounded-lg overflow-hidden bg-white shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="absolute inset-1 border-2 border-tan/50"></div>
                <Image
                  src="/images/sc2.png"
                  alt="Temple"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex-1 h-1 bg-gradient-to-r from-beige via-tan to-beige"></div>
            <div className="text-tan text-2xl">✦</div>
            <div className="flex-1 h-1 bg-gradient-to-r from-beige via-tan to-beige"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

