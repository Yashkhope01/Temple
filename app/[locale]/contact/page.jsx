import { ContactForm } from '@/views/client/ContactForm'
import { notFound } from 'next/navigation'
import { supportedLocales } from '@/lib/i18n'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with the temple trust',
}

export default async function LocaleContactPage({ params }) {
  const { locale } = await params
  const finalLocale = locale && supportedLocales.includes(locale) ? locale : 'en'
  
  if (locale && !supportedLocales.includes(locale)) {
    notFound()
  }

  return (
    <div className="py-12">
      <div className="container-custom max-w-2xl">
        <h1 className="heading-primary text-center mb-12">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  )
}

