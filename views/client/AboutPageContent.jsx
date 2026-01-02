'use client'

import Image from 'next/image'
import { useLanguage } from '@/views/client/LanguageProvider'

export function AboutPageContent() {
  const { locale } = useLanguage()

  const content = {
    en: {
      temple: 'Hindu Temple',
      templeTitle: 'Mouthfain',
      description1: 'This is a sacred Hindu Temple Trust dedicated to preserving spiritual traditions and providing a welcoming community for all seekers of divine knowledge. Our temple serves as a beacon of faith and devotion.',
      exploreButton: 'Explore here',
      description2: 'We offer a peaceful sanctuary for prayer, meditation, and cultural activities that bring our community together in harmony and spiritual growth.',
    },
    hi: {
      temple: 'हिंदू मंदिर',
      templeTitle: 'मुखफैन',
      description1: 'यह एक पवित्र हिंदू मंदिर ट्रस्ट है जो आध्यात्मिक परंपराओं को संरक्षित करने और सभी दिव्य ज्ञान की खोज करने वालों के लिए एक स्वागत योग्य समुदाय प्रदान करने के लिए समर्पित है। हमारा मंदिर विश्वास और भक्ति की एक मशाल के रूप में कार्य करता है।',
      exploreButton: 'यहाँ खोजें',
      description2: 'हम प्रार्थना, ध्यान और सांस्कृतिक गतिविधियों के लिए एक शांतिपूर्ण अभयारण्य प्रदान करते हैं जो हमारे समुदाय को सद्भाव और आध्यात्मिक वृद्धि में एक साथ लाता है।',
    },
    mr: {
      temple: 'हिंदू मंदिर',
      templeTitle: 'मुखफैन',
      description1: 'हे एक पवित्र हिंदू मंदिर ट्रस्ट आहे जो आध्यात्मिक परंपरा जतन करणे आणि दिव्य ज्ञान शोधणाऱ्या सर्व साधकांसाठी स्वागत योग्य समुदाय प्रदान करणे यासाठी समर्पित आहे. आमचे मंदिर विश्वास आणि भक्तिचा प्रकाश आहे.',
      exploreButton: 'येथे शोधा',
      description2: 'आम्ही प्रार्थना, ध्यान आणि सांस्कृतिक क्रियाकलापांसाठी शांत अभयारण्य प्रदान करतो जे आमचा समुदाय सुसंवाद आणि आध्यात्मिक विकासात एकत्र आणते.',
    },
  }

  const t = content[locale] || content.en

  return (
    <div className="bg-beige min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-tan text-lg mb-2">{t.temple}</p>
              <h1 className="text-6xl lg:text-7xl font-serif text-charcoal font-bold">
                {t.templeTitle}
              </h1>
            </div>

            <p className="text-lg text-charcoal/80 leading-relaxed">
              {t.description1}
            </p>

            <button className="px-8 py-3 bg-charcoal text-beige rounded-full font-medium hover:bg-charcoal/90 transition-all">
              {t.exploreButton}
            </button>

            <p className="text-sm text-charcoal/70 leading-relaxed">
              {t.description2}
            </p>
          </div>

          {/* Right Image with Decorative Frame */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-tan/40 to-tan/20 rounded-3xl p-8 border-8 border-tan/30">
                <div className="absolute inset-8 border-4 border-tan/40 rounded-2xl"></div>
                <Image
                  src="/images/1-SIDDHIVIYAK-BACKDROP-2.png"
                  alt="Temple"
                  fill
                  className="object-contain p-12 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
