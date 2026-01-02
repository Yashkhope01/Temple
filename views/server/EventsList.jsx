import { headers } from 'next/headers'
import { getEvents } from '@/models/api/cockpit'
import { getLocalizedContent, getLocaleFromHeaders, defaultLocale } from '@/lib/i18n'
import { getCockpitImageUrl } from '@/models/api/cockpit'
import Image from 'next/image'

export async function EventsList() {
  const headersList = await headers()
  const locale = getLocaleFromHeaders(headersList) || defaultLocale
  
  // Always fetch fresh data - no caching
 const { upcoming, past } = await getEvents()


  const content = {
    en: {
      upcoming: 'Upcoming Events',
      past: 'Past Events',
      noEvents: 'No events scheduled at this time.',
      date: 'Date',
      time: 'Time',
      location: 'Location',
    },
    hi: {
      upcoming: 'आगामी कार्यक्रम',
      past: 'पिछले कार्यक्रम',
      noEvents: 'इस समय कोई कार्यक्रम निर्धारित नहीं है।',
      date: 'तारीख',
      time: 'समय',
      location: 'स्थान',
    },
    mr: {
      upcoming: 'आगामी कार्यक्रम',
      past: 'मागील कार्यक्रम',
      noEvents: 'या वेळी कोणतेही कार्यक्रम निर्धारित नाहीत.',
      date: 'तारीख',
      time: 'वेळ',
      location: 'स्थान',
    },
  }

  // Fallback to English if locale is not found
  const t = content[locale] || content.en

  const EventCard = ({ event }) => {
    const title = getLocalizedContent(event.title, locale)
    // Support both "Desc" and "Description" field names
    const description = getLocalizedContent(event.desc || event.description, locale)
    // Support multiple date field names (Date & Time field from CMS)
    const dateValue = event.date_time || event.dateTime || event.event_date || event.date
    const eventDate = dateValue ? new Date(dateValue) : new Date()

    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        {event.image && (
          <div className="relative h-64 w-full">
            <Image
              src={event.image.path.startsWith('http') ? event.image.path : getCockpitImageUrl(event.image.path)}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex flex-wrap gap-4 text-sm text-primary-600 mb-4">
            <div>
              <span className="font-medium">{t.date}:</span>{' '}
              {eventDate.toLocaleDateString(
                locale === 'en' ? 'en-US' : locale === 'hi' ? 'hi-IN' : 'mr-IN',
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }
              )}
            </div>
            {event.time && (
              <div>
                <span className="font-medium">{t.time}:</span> {event.time}
              </div>
            )}
            {event.location && (
              <div>
                <span className="font-medium">{t.location}:</span> {event.location}
              </div>
            )}
          </div>
          <h3 className="text-2xl font-serif font-light mb-3">{title}</h3>
          <p className="text-body">{description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-16">
      <section>
        <h2 className="heading-secondary mb-8">{t.upcoming}</h2>
        {upcoming.length === 0 ? (
          <p className="text-body text-center py-8">{t.noEvents}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcoming.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        )}
      </section>

      {past.length > 0 && (
        <section>
          <h2 className="heading-secondary mb-8">{t.past}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {past.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

