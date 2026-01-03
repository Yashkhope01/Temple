'use client'

import { ContactForm } from '@/views/client/ContactForm'
import { useLanguage } from '@/views/client/LanguageProvider'

export function ContactPageContent() {
  const { locale } = useLanguage()

  const content = {
    en: {
      "heading": "The Heart of the Community",
      "paragraph_1": "We are a vibrant spiritual community dedicated to preserving and celebrating the rich traditions of our heritage. The Shree Dhaneshwar Temple is a sacred sanctuary where devotees gather for prayer, meditation, and to find a moment of peace.",
      "paragraph_2": "We warmly welcome all visitors and seekers of spiritual wisdom. Whether you wish to participate in our daily rituals, attend cultural events, or simply sit in the quiet presence of the divine, we are here to serve you with devotion and compassion.",
      "button_text": "Contact the Trust",
      contactDetails: 'Contact Details',
      contactInfo: 'Contact Information',
      location: 'Location',
      locationAddress: 'Shri Mangalmurti Wada\nGanesh Peth, Chinchwad Gaon\nPune, Maharashtra 411033',
      phone: 'Phone',
      phoneNumbers: '+91 77688 81133\n+91 96071 06262',
      email: 'Email',
      emailAddress: 'dhaneshwartemple@gmail.com',
    },
    hi: {
      heading: 'आस्था और सेवा का केंद्र',
      paragraph_1: 'हमारा समुदाय अपनी समृद्ध विरासत और परंपराओं को संरक्षित करने और मनाने के लिए समर्पित है। श्री धनेश्वर मंदिर एक पवित्र अभयारण्य है जहाँ भक्त प्रार्थना, ध्यान और मन की शांति पाने के लिए एकत्रित होते हैं।',
      paragraph_2: 'हम सभी आगंतुकों और आध्यात्मिक साधकों का हार्दिक स्वागत करते हैं। चाहे आप हमारे दैनिक अनुष्ठानों में भाग लेना चाहते हों, सांस्कृतिक कार्यक्रमों में शामिल होना चाहते हों, या बस दिव्यता की उपस्थिति में कुछ पल मौन रहना चाहते हों, हम सेवा के लिए सदैव तत्पर हैं।',
      button_text: 'संपर्क करें',
      contactDetails: 'संपर्क विवरण',
      contactInfo: 'संपर्क जानकारी',
      location: 'स्थान',
      locationAddress: 'श्री मंगलमूर्ति वाडा\nगणेश पेठ, चिंचवड़ गांव\nपुणे, महाराष्ट्र 411033',
      phone: 'फोन',
      phoneNumbers: '+91 77688 81133\n+91 96071 06262',
      email: 'ईमेल',
      emailAddress: 'dhaneshwartemple@gmail.com',
    },
    mr: {
      heading: 'भक्ती आणि सेवेचा वारसा',
      paragraph_1: 'आमचा मंदिर ट्रस्ट समृद्ध वारसा आणि परंपरा जपण्यासाठी व साजरे करण्यासाठी समर्पित आहे. श्री धनेश्वर मंदिर हे एक असे पवित्र स्थान आहे जिथे भक्त प्रार्थना, ध्यान आणि मानसिक शांतीसाठी एकत्र येतात.',
      paragraph_2: 'आम्ही सर्व भाविकांचे आणि आध्यात्मिक ज्ञानिज्ञासूंचे मनापासून स्वागत करतो. तुम्हाला नित्य पूजाविधींमध्ये सहभागी व्हायचे असो, सांस्कृतिक कार्यक्रमांचा आनंद घ्यायचा असो, किंवा फक्त देवाच्या सानिध्यात निवांत क्षण घालवायचे असोत, आम्ही सेवेसाठी तत्पर आहोत.',
      button_text: 'संपर्क साधा',
      contactInfo: 'संपर्क माहिती',
      location: 'स्थान',
      locationAddress: 'श्री मंगलमूर्ति वाडा\nगणेश पेठ, चिंचवाड गाव\nपुणे, महाराष्ट्र 411033',
      phone: 'फोन',
      phoneNumbers: '+91 77688 81133\n+91 96071 06262',
      email: 'ईमेल',
      emailAddress: 'dhaneshwartemple@gmail.com',
    },
  }

  const t = content[locale] || content.en

  return (
    <div className="min-h-screen bg-beige">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="text-charcoal space-y-6">
            <h1 className="text-5xl lg:text-6xl font-serif text-charcoal leading-tight">
              {t.heading}
            </h1>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              {t.paragraph_1}
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              {t.paragraph_2}
            </p>
            <button className="px-8 py-3 border-2 border-temple-orange text-temple-orange rounded-full font-medium hover:bg-temple-orange hover:text-charcoal transition-all duration-300">
              {t.button_text}
            </button>
          </div>

          {/* Right Section - Contact Form Box */}
          <div className="bg-beige rounded-xl shadow-2xl overflow-hidden">
            {/* Orange header bar */}
            <div className="h-3 bg-temple-orange"></div>
            <div className="p-8">
              <h2 className="text-2xl font-serif text-charcoal mb-8 text-center">{t.contactDetails}</h2>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mt-20 pt-12 border-t border-charcoal/20">
          <h3 className="text-3xl font-serif text-charcoal mb-8">{t.contactInfo}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="text-temple-orange font-serif text-lg">{t.location}</h4>
              <p className="text-charcoal/80 whitespace-pre-line">
                {t.locationAddress}
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-temple-orange font-serif text-lg">{t.phone}</h4>
              <p className="text-charcoal/80 whitespace-pre-line">
                {t.phoneNumbers}
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-temple-orange font-serif text-lg">{t.email}</h4>
              <p className="text-charcoal/80">
                {t.emailAddress}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
