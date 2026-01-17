'use client'

import Link from 'next/link'
import { useLanguage } from '@/views/client/LanguageProvider'
import { addLocaleToPath } from '@/lib/i18n'

export function Footer() {
  const { locale } = useLanguage()

  const content = {
    en: {
      templeName: 'Shri Mangalmurti Temple',
      templeDesc: 'A sacred space for spiritual growth and community connection.',
      quickLinks: 'Quick Links',
      home: 'Home',
      about: 'About',
      gallery: 'Gallery',
      events: 'Events',
      contact: 'Contact',
      contactHeading: 'Contact',
      address: 'Shri Mangalmurti Wada\nGanesh Peth, Chinchwad Gaon\nPune, Maharashtra 411033',
      phone: '+91 77688 81133',
      copyright: 'Shri Mangalmurti Temple Trust. All rights reserved.',
    },
    hi: {
      templeName: 'श्री मंगलमूर्ति मंदिर',
      templeDesc: 'आध्यात्मिक विकास और सामुदायिक जुड़ाव के लिए एक पवित्र स्थान।',
      quickLinks: 'त्वरित लिंक',
      home: 'होम',
      about: 'परिचय',
      gallery: 'गैलरी',
      events: 'कार्यक्रम',
      contact: 'संपर्क',
      contactHeading: 'संपर्क',
      address: 'श्री मंगलमूर्ति वाडा\nगणेश पेठ, चिंचवड़ गांव\nपुणे, महाराष्ट्र 411033',
      phone: '+91 77688 81133',
      copyright: 'श्री मंगलमूर्ति मंदिर ट्रस्ट। सर्वाधिकार सुरक्षित।',
    },
    mr: {
      templeName: 'श्री मंगलमूर्ति मंदिर',
      templeDesc: 'आध्यात्मिक विकास आणि सामाजिक जोडणीसाठी एक पवित्र स्थान।',
      quickLinks: 'द्रुत लिंक',
      home: 'मुख्यपृष्ठ',
      about: 'बद्दल',
      gallery: 'गॅलरी',
      events: 'कार्यक्रम',
      contact: 'संपर्क',
      contactHeading: 'संपर्क',
      address: 'श्री मंगलमूर्ति वाडा\nगणेश पेठ, चिंचवाड गाव\nपुणे, महाराष्ट्र 411033',
      phone: '+91 77688 81133',
      copyright: 'श्री मंगलमूर्ति मंदिर ट्रस्ट. सर्व हक्क राखीव.',
    },
  }

  const t = content[locale] || content.en

  return (
    <footer className="bg-charcoal text-beige py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-serif mb-2 text-temple-orange">{t.templeName}</h3>
            <p className="text-beige/70 text-xs leading-relaxed">
              {t.templeDesc}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-serif mb-2 text-temple-orange">{t.quickLinks}</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href={addLocaleToPath('/', locale)} className="text-beige/70 hover:text-temple-orange transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href={addLocaleToPath('/about', locale)} className="text-beige/70 hover:text-temple-orange transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href={addLocaleToPath('/gallery', locale)} className="text-beige/70 hover:text-temple-orange transition-colors">
                  {t.gallery}
                </Link>
              </li>
              <li>
                <Link href={addLocaleToPath('/events', locale)} className="text-beige/70 hover:text-temple-orange transition-colors">
                  {t.events}
                </Link>
              </li>
              <li>
                <Link href={addLocaleToPath('/contact', locale)} className="text-beige/70 hover:text-temple-orange transition-colors">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif mb-2 text-temple-orange">{t.contactHeading}</h3>
            <p className="text-beige/70 text-xs leading-relaxed mb-1 whitespace-pre-line">
              {t.address}
            </p>
            <a href="tel:+917768881133" className="text-beige/70 hover:text-temple-orange transition-colors text-xs" aria-label="Call temple phone number">
              {t.phone}
            </a>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-beige/20 text-center">
          <p className="text-beige/50 text-xs">&copy; {new Date().getFullYear()} {t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
