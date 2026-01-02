'use client'

import { ContactForm } from '@/views/client/ContactForm'
import { useLanguage } from '@/views/client/LanguageProvider'

export function ContactPageContent() {
  const { locale } = useLanguage()

  const content = {
    en: {
      title: 'Hindu Temple Trust',
      description1: 'A vibrant spiritual community dedicated to preserving and celebrating the rich traditions of Hindu heritage. Our temple is a sacred sanctuary where devotees gather for prayer, meditation, and community activities.',
      description2: 'We warmly welcome all visitors and seekers of spiritual wisdom. Whether you wish to participate in our rituals, attend our events, or simply experience the peaceful atmosphere, we are here to serve you with devotion and compassion.',
      contactButton: 'Contact Temple',
      contactDetails: 'Contact Details',
      contactInfo: 'Contact Information',
      location: 'Location',
      locationAddress: 'Shri Mangalmurti Wada\nGanesh Peth, Chinchwad Gaon\nPune, Maharashtra 411033',
      phone: 'Phone',
      phoneNumbers: '+91 77688 81133\n+91 96071 06262',
      email: 'Email',
      emailAddress: 'chinchwaddeosthantrust@gmail.com',
    },
    hi: {
      title: 'हिंदू मंदिर ट्रस्ट',
      description1: 'एक जीवंत आध्यात्मिक समुदाय जो हिंदू धरोहर की समृद्ध परंपराओं को संरक्षित करने और मनाने के लिए समर्पित है। हमारा मंदिर एक पवित्र अभयारण्य है जहां भक्त प्रार्थना, ध्यान और सामुदायिक गतिविधियों के लिए एकत्रित होते हैं।',
      description2: 'हम सभी आगंतुकों और आध्यात्मिक ज्ञान के साधकों का स्वागत करते हैं। चाहे आप हमारी परंपराओं में भाग लेना चाहते हों, हमारे कार्यक्रमों में शामिल होना चाहते हों, या केवल शांतिपूर्ण वातावरण का अनुभव करना चाहते हों, हम भक्ति और करुणा के साथ आपकी सेवा के लिए यहां हैं।',
      contactButton: 'मंदिर से संपर्क करें',
      contactDetails: 'संपर्क विवरण',
      contactInfo: 'संपर्क जानकारी',
      location: 'स्थान',
      locationAddress: 'श्री मंगलमूर्ति वाडा\nगणेश पेठ, चिंचवड़ गांव\nपुणे, महाराष्ट्र 411033',
      phone: 'फोन',
      phoneNumbers: '+91 77688 81133\n+91 96071 06262',
      email: 'ईमेल',
      emailAddress: 'chinchwaddeosthantrust@gmail.com',
    },
    mr: {
      title: 'हिंदू मंदिर ट्रस्ट',
      description1: 'एक जीवंत आध्यात्मिक समुदाय जो हिंदू धरोहरच्या समृद्ध परंपरांना संरक्षण आणि उदयापन देण्यासाठी समर्पित आहे. आमचे मंदिर एक पवित्र अभयारण्य आहे जेथे भक्त प्रार्थना, ध्यान आणि सामुदायिक कार्यक्रमांसाठी एकत्रित होतात.',
      description2: 'आम्ही सर्व पर्यटक आणि आध्यात्मिक ज्ञानचे साधक यांचे स्वागत करतो. आपण आमच्या परंपरांमध्ये भाग घ्यायचे असो, आमच्या कार्यक्रमांमध्ये सामील व्हायचे असो किंवा शांत वातावरणाचा अनुभव घ्यायचे असो, आम्ही भक्ती आणि करुणेने आपली सेवा करण्यासाठी येथे आहोत.',
      contactButton: 'मंदिराशी संपर्क साधा',
      contactDetails: 'संपर्क तपशील',
      contactInfo: 'संपर्क माहिती',
      location: 'स्थान',
      locationAddress: 'श्री मंगलमूर्ति वाडा\nगणेश पेठ, चिंचवाड गाव\nपुणे, महाराष्ट्र 411033',
      phone: 'फोन',
      phoneNumbers: '+91 77688 81133\n+91 96071 06262',
      email: 'ईमेल',
      emailAddress: 'chinchwaddeosthantrust@gmail.com',
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
              {t.title}
            </h1>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              {t.description1}
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              {t.description2}
            </p>
            <button className="px-8 py-3 border-2 border-temple-orange text-temple-orange rounded-full font-medium hover:bg-temple-orange hover:text-charcoal transition-all duration-300">
              {t.contactButton}
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
