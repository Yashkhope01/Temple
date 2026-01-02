'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { defaultLocale, supportedLocales, getLocaleFromPath } from '@/lib/i18n'

const LanguageContext = createContext(undefined)

export function LanguageProvider({ children }) {
  const pathname = usePathname()
  const router = useRouter()
  const [locale, setLocaleState] = useState(() => 
    getLocaleFromPath(pathname)
  )

  useEffect(() => {
    const currentLocale = getLocaleFromPath(pathname)
    setLocaleState(currentLocale)
  }, [pathname])

  const setLocale = (newLocale) => {
    if (newLocale === locale) return
    
    const segments = pathname.split('/').filter(Boolean)
    const firstSegment = segments[0]
    
    let newPath
    if (supportedLocales.includes(firstSegment)) {
      // Replace existing locale
      segments[0] = newLocale === defaultLocale ? '' : newLocale
      newPath = '/' + segments.filter(Boolean).join('/')
    } else {
      // Add locale
      newPath = newLocale === defaultLocale 
        ? pathname 
        : `/${newLocale}${pathname}`
    }
    
    router.push(newPath)
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

