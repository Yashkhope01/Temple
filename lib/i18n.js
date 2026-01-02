/**
 * Internationalization utilities
 * Supports English (en), Hindi (hi), and Marathi (mr)
 */

export const defaultLocale = 'en'
export const supportedLocales = ['en', 'hi', 'mr']

export const localeNames = {
  en: 'English',
  hi: 'हिंदी',
  mr: 'मराठी',
}

/**
 * Get localized content for a given locale
 */
export function getLocalizedContent(content, locale) {
  // ✅ nothing provided
  if (!content) return ''

  // ✅ already plain string
  if (typeof content === 'string') return content

  // ✅ localized object
  if (typeof content === 'object') {
    return (
      content[locale] ||
      content[defaultLocale] ||
      Object.values(content)[0] ||
      ''
    )
  }

  return ''
}


/**
 * Get locale from pathname
 */
export function getLocaleFromPath(pathname) {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]
  
  if (supportedLocales.includes(firstSegment)) {
    return firstSegment
  }
  
  return defaultLocale
}

/**
 * Remove locale from pathname
 */
export function removeLocaleFromPath(pathname) {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]
  
  if (supportedLocales.includes(firstSegment)) {
    return '/' + segments.slice(1).join('/')
  }
  
  return pathname
}

/**
 * Add locale to pathname
 */
export function addLocaleToPath(path, locale) {
  if (!locale || locale === 'en') return path
  return `/${locale}${path}`
}


/**
 * Get locale from headers (server-side)
 */
export function getLocaleFromHeaders(headers) {
  const locale = headers.get('x-locale')
  if (locale && supportedLocales.includes(locale)) {
    return locale
  }
  const pathname = headers.get('x-pathname') || ''
  const localeFromPath = getLocaleFromPath(pathname)
  return localeFromPath || defaultLocale
}

