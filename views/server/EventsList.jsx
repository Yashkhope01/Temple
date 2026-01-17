import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { getEvents, getCockpitImageUrl } from '@/models/api/cockpit'
import { getLocalizedContent, getLocaleFromHeaders, defaultLocale, addLocaleToPath } from '@/lib/i18n'

export async function EventsList() {
  const headersList = await headers()
  const locale = getLocaleFromHeaders(headersList) || defaultLocale

  const { upcoming = [], past = [] } = await getEvents()

  const content = {
    en: {
      upcoming: 'Upcoming Events',
      past: 'Past Events',
      noEvents: 'No upcoming events at this time.',
      viewDetails: 'View Details',
    },
    hi: {
      upcoming: 'आगामी कार्यक्रम',
      past: 'पिछले कार्यक्रम',
      noEvents: 'इस समय कोई आगामी कार्यक्रम नहीं है।',
      viewDetails: 'विवरण देखें',
    },
    mr: {
      upcoming: 'आगामी कार्यक्रम',
      past: 'मागील कार्यक्रम',
      noEvents: 'या वेळी कोणतेही आगामी कार्यक्रम नाहीत.',
      viewDetails: 'तपशील पहा',
    },
  }

  const t = content[locale] || content.en

  const EventCard = ({ event }) => {
    const title = getLocalizedContent(event.title, locale)
    const description = getLocalizedContent(event.description, locale)
    const dateValue = event.date
    const eventDate = dateValue ? new Date(dateValue) : new Date()

    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-l-temple-orange">
        {event.image?.path && (
          <div className="relative h-48 w-full">
            <Image
              src={getCockpitImageUrl(event.image.path)}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}

        <div className="p-6">
          <div className="text-sm text-temple-orange mb-2">
            {eventDate.toLocaleDateString(locale === 'en' ? 'en-US' : locale === 'hi' ? 'hi-IN' : 'mr-IN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
          <h3 className="text-xl font-serif text-charcoal mb-2">{title}</h3>
          <p className="text-charcoal/70 text-sm mb-4 line-clamp-3">{description}</p>

          <Link
            href={addLocaleToPath(`/events/${event._id}`, locale)}
            className="text-temple-orange hover:underline font-medium text-sm inline-flex items-center gap-1"
          >
            {t.viewDetails} →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-16">
      <section>
        <h2 className="text-3xl font-serif text-charcoal mb-8">{t.upcoming}</h2>
        {upcoming.length === 0 ? (
          <p className="text-center text-charcoal/60 py-8">{t.noEvents}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcoming.map(event => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        )}
      </section>

      {past.length > 0 && (
        <section>
          <h2 className="text-3xl font-serif text-charcoal mb-8">{t.past}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {past.map(event => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
