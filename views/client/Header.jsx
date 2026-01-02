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
    { name: 'Gallery', href: '/gallery', en: 'Gallery', hi: 'गैलरी', mr: 'गॅलरी' },
    { name: 'Events', href: '/events', en: 'Events', hi: 'कार्यक्रम', mr: 'कार्यक्रम' },
    { name: 'Contact', href: '/contact', en: 'Contact', hi: 'संपर्क', mr: 'संपर्क' },
  ]

  const isActive = (href) => {
    const cleanPath = pathname.replace(/^\/(en|hi|mr)/, '') || '/'
    return cleanPath === href
  }

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-primary-200/50 shadow-sm">
      <nav className="container-custom">
        <div className="flex h-20 items-center justify-between">
          <Link href={addLocaleToPath('/', locale)} className="flex items-center group">
            <span className="text-2xl md:text-3xl font-serif font-light text-primary-900 tracking-wide group-hover:text-saffron-600 transition-colors duration-300">
              Temple Trust
            </span>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-10">
            {navigation.map((item) => {
              const href = addLocaleToPath(item.href, locale)
              const label = locale === 'en' ? item.en : locale === 'hi' ? item.hi : item.mr
              
              return (
                <Link
                  key={item.name}
                  href={href}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative ${
                    isActive(item.href)
                      ? 'text-primary-900'
                      : 'text-primary-600 hover:text-primary-900'
                  }`}
                >
                  {label}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-saffron-500"></span>
                  )}
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
                // Force refresh to update server components
                setTimeout(() => {
                  router.refresh()
                }, 100)
              }}
              className="text-sm border border-primary-300 rounded px-2 py-1 bg-white text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Select language"
            >
              {supportedLocales.map((loc) => (
                <option key={loc} value={loc}>
                  {localeNames[loc]}
                </option>
              ))}
            </select>

            <button
              className="md:hidden p-2 text-primary-600 hover:text-primary-900"
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
