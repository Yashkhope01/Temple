'use client'

import Link from 'next/link'
import { useLanguage } from '@/views/client/LanguageProvider'
import { addLocaleToPath } from '@/lib/i18n'

export function Footer() {
  const { locale } = useLanguage()

  return (
    <footer className="bg-primary-900 text-primary-100 border-t border-primary-800">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-serif font-light mb-6 text-white">Temple Trust</h3>
            <div className="w-12 h-0.5 bg-saffron-500 mb-6"></div>
            <p className="text-primary-300 text-sm leading-relaxed">
              A sacred space for spiritual growth and community connection.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-light mb-6 text-white">Quick Links</h3>
            <div className="w-12 h-0.5 bg-saffron-500 mb-6"></div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href={addLocaleToPath('/gallery', locale)} className="text-primary-300 hover:text-saffron-300 transition-colors duration-300 inline-block">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href={addLocaleToPath('/events', locale)} className="text-primary-300 hover:text-saffron-300 transition-colors duration-300 inline-block">
                  Events
                </Link>
              </li>
              <li>
                <Link href={addLocaleToPath('/contact', locale)} className="text-primary-300 hover:text-saffron-300 transition-colors duration-300 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-light mb-6 text-white">Contact</h3>
            <div className="w-12 h-0.5 bg-saffron-500 mb-6"></div>
            <p className="text-primary-300 text-sm leading-relaxed">
              For inquiries and support, please visit our contact page.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-800/50 text-center">
          <p className="text-primary-400 text-sm">&copy; {new Date().getFullYear()} Temple Trust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
