'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useLanguage } from '@/views/client/LanguageProvider'
import { supportedLocales, localeNames, addLocaleToPath } from '@/lib/i18n'

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const { locale, setLocale } = useLanguage()

  const navigation = [
    { name: 'Home', href: '/', en: 'Home', hi: 'होम', mr: 'मुख्यपृष्ठ' },
    { name: 'About', href: '/about', en: 'About', hi: 'परिचय', mr: 'बद्दल' },
    { name: 'Gallery', href: '/gallery', en: 'Gallery', hi: 'गॅलरी', mr: 'गॅलरी' },
    { name: 'Events', href: '/events', en: 'Events', hi: 'कार्यक्रम', mr: 'कार्यक्रम' },
    { name: 'Contact', href: '/contact', en: 'Contact', hi: 'संपर्क', mr: 'संपर्क' }
  ]

  const isActive = (href) => {
    const cleanPath = pathname.replace(/^\/(en|hi|mr)/, '') || '/'
    return cleanPath === href
  }

  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex h-16 items-center justify-between">
          <Link href={addLocaleToPath('/', locale)} className="flex items-center group">
            <span className="text-xl font-serif text-charcoal group-hover:text-temple-orange transition-colors duration-300">
              Shri Temple Trust
            </span>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => {
              const href = addLocaleToPath(item.href, locale)
              const label = locale === 'en' ? item.en : locale === 'hi' ? item.hi : item.mr
              
              return (
                <Link
                  key={item.name}
                  href={href}
                  className={`text-charcoal hover:text-temple-orange relative pb-1 transition-all duration-300 group ${
                    isActive(item.href) ? 'text-temple-orange' : ''
                  }`}
                >
                  {label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-temple-orange transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              )
            })}
          </div>

          <div className="flex items-center space-x-2">
            <select
              value={locale}
              onChange={(e) => {
                const newLocale = e.target.value
                setLocale(newLocale)
                setTimeout(() => {
                  router.refresh()
                }, 100)
              }}
              className="text-sm border border-temple-orange/20 rounded px-3 py-2 bg-beige text-charcoal focus:outline-none focus:ring-2 focus:ring-temple-orange hover:bg-temple-orange hover:text-beige transition-colors"
              aria-label="Select language"
            >
              {supportedLocales.map((loc) => (
                <option key={loc} value={loc}>
                  {localeNames[loc]}
                </option>
              ))}
            </select>

            <Link
              href={addLocaleToPath('/contact', locale)}
              className="ml-4 px-6 py-2 bg-temple-orange text-white rounded-lg font-medium hover:bg-temple-orange/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Donate
            </Link>

            <button
              className="md:hidden p-2 text-charcoal hover:text-temple-orange"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
