import { ContactPageContent } from '@/views/client/ContactPageContent'
import { notFound } from 'next/navigation'
import { supportedLocales } from '@/lib/i18n'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with the temple trust',
}

export default async function LocaleContactPage({ params }) {
  const { locale } = await params
  
  if (locale && !supportedLocales.includes(locale)) {
    notFound()
  }

  return (
    <ContactPageContent />
  )
}

