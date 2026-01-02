import { EventsList } from '@/views/server/EventsList'
import { EventsPageTitle } from '@/views/client/EventsPageTitle'
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
  
  if (locale && !supportedLocales.includes(locale)) {
    notFound()
  }

  return (
    <div className="py-12 bg-beige min-h-screen">
      <div className="container mx-auto px-4">
        <EventsPageTitle />
        <EventsList />
      </div>
    </div>
  )
}

