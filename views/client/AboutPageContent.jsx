'use client'

import Image from 'next/image'
import { useLanguage } from '@/views/client/LanguageProvider'

export function AboutPageContent() {
  const { locale } = useLanguage()

  const content = {
    en: {
      temple: 'Spiritual Heritage ',
      templeTitle: 'Shree Dhaneshwar Trust',
      description1: 'Steeped in history and devotion, the Shree Dhaneshwar Trust serves as the guardian of this ancient Shiva temple in Chinchwad. We are dedicated to preserving Vedic traditions while building a bridge to the modern world, ensuring that the sanctity of the past continues to enrich our present community.',
      description2: 'Beyond the rituals, we cultivate a space for silence and self-reflection. Through daily Puja, cultural festivals, and community service, our mission is to foster peace in every heart that enters our doors',
    },
    hi: {
      temple: 'आध्यात्मिक धरोहर',
      templeTitle: 'श्री धनेश्वर ट्रस्ट',
      description1: 'इतिहास और भक्ति में रचा-बसा, श्री धनेश्वर ट्रस्ट चिंचवड के इस प्राचीन शिव मंदिर के संरक्षक के रूप में सेवारत है। हम वैदिक परंपराओं को संरक्षित करते हुए आधुनिक दुनिया के साथ एक सेतु (bridge) बनाने के लिए समर्पित हैं, ताकि अतीत की पवित्रता हमारे वर्तमान समाज को समृद्ध करती रहे।',
      description2: 'अनुष्ठानों से परे, हम मौन और आत्म-चिंतन के लिए एक स्थान विकसित करते हैं। दैनिक पूजा, सांस्कृतिक उत्सवों और सामुदायिक सेवा के माध्यम से, हमारा उद्देश्य हमारे द्वार पर आने वाले प्रत्येक हृदय में शांति का संचार करना है।'
    },
    mr: {
      temple: 'आध्यात्मिक वारसा',
      templeTitle: 'श्री धनेश्वर ट्रस्ट',
      description1: 'इतिहास आणि भक्तीचा वारसा लाभलेला, श्री धनेश्वर ट्रस्ट चिंचवडमधील या प्राचीन शिवमंदिराचे रक्षक म्हणून कार्यरत आहे. वैदिक परंपरांचे जतन करण्यासोबतच आधुनिक जगाशी समन्वय साधून, प्राचीन पावित्र्य आजच्या समाजालाही समृद्ध करेल यासाठी आम्ही कटिबद्ध आहोत.',
      description2: 'केवळ पूजाविधींपुरते मर्यादित न राहता, आम्ही शांतता आणि आत्मचिंतनासाठी एक पवित्र वातावरण निर्माण करतो. नित्य पूजा, सांस्कृतिक उत्सव आणि समाजसेवेच्या माध्यमातून, मंदिरात येणाऱ्या प्रत्येक भक्ताच्या मनात शांती रुजवणे हे आमचे ध्येय आहे.'

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
                  src="/images/about.png"
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
