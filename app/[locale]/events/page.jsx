import { EventsList } from '@/views/server/EventsList'
import { notFound } from 'next/navigation'
import { supportedLocales } from '@/lib/i18n'

export const metadata = {
  title: 'Events',
  description: 'Upcoming events and activities at the temple',
}

// Force dynamic rendering - always fetch fresh data from CMS
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function LocaleEventsPage({ params }) {
  const { locale } = await params
  const finalLocale = locale && supportedLocales.includes(locale) ? locale : 'en'
  
  if (locale && !supportedLocales.includes(locale)) {
    notFound()
  }

  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="heading-primary text-center mb-12">Events</h1>
        <EventsList />
      </div>
    </div>
  )
}

