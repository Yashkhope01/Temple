import { AboutPageContent } from '@/views/client/AboutPageContent'
import { notFound } from 'next/navigation'
import { supportedLocales } from '@/lib/i18n'

export const metadata = {
  title: 'About',
  description: 'Learn more about our temple',
}

export default async function LocaleAboutPage({ params }) {
  const { locale } = await params
  
  if (locale && !supportedLocales.includes(locale)) {
    notFound()
  }

  return (
    <AboutPageContent />
  )
}
