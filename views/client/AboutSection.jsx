'use client'

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
    <section className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="divider-accent mb-8"></div>
          <h2 className="heading-secondary mb-8 text-primary-900">
            {t.title}
          </h2>
          <div className="divider-accent mb-10"></div>
          <p className="text-body text-primary-700 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>
      </div>
    </section>
  )
}

