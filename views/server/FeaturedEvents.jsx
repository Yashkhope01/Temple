import Link from 'next/link'
import { headers } from 'next/headers'
import { getEvents } from '@/models/api/cockpit'
import { addLocaleToPath, getLocalizedContent, getLocaleFromHeaders, defaultLocale } from '@/lib/i18n'
import { getCockpitImageUrl } from '@/models/api/cockpit'
import Image from 'next/image'

export async function FeaturedEvents() {
  const headersList = await headers()
  const locale = getLocaleFromHeaders(headersList) || defaultLocale
  const { upcoming } = await getEvents()
  const events = upcoming.slice(0, 3)


  const content = {
    en: {
      title: 'Upcoming Events',
      viewAll: 'View All Events',
      noEvents: 'No upcoming events at this time.',
    },
    hi: {
      title: 'आगामी कार्यक्रम',
      viewAll: 'सभी कार्यक्रम देखें',
      noEvents: 'इस समय कोई आगामी कार्यक्रम नहीं है।',
    },
    mr: {
      title: 'आगामी कार्यक्रम',
      viewAll: 'सर्व कार्यक्रम पहा',
      noEvents: 'या वेळी कोणतेही आगामी कार्यक्रम नाहीत.',
    },
  }

  // Fallback to English if locale is not found
  const t = content[locale] || content.en

  if (events.length === 0) {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-charcoal text-center mb-8">{t.title}</h2>
          <p className="text-center text-charcoal/60">{t.noEvents}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-beige/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-charcoal mb-6">{t.title}</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-0.5 bg-tan"></div>
            <div className="text-temple-orange text-2xl">✦</div>
            <div className="w-12 h-0.5 bg-tan"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => {
            const title = getLocalizedContent(event.title, locale)
            const description = getLocalizedContent(event.description, locale)
            const dateValue = event.date
            const eventDate = dateValue ? new Date(dateValue) : new Date()
            
            return (
              <div
                key={event._id}
                className="bg-white hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
              >
                {event.image?.path && (
                  <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                    <Image
                      src={getCockpitImageUrl(event.image.path)}
                      alt={title || 'Event image'}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="text-sm text-temple-orange mb-2">
                    {eventDate.toLocaleDateString(locale === 'en' ? 'en-US' : locale === 'hi' ? 'hi-IN' : 'mr-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                  <h3 className="text-xl font-serif mb-2 text-charcoal">{title}</h3>
                  <p className="text-sm text-charcoal/70 line-clamp-3 mb-4">{description}</p>
                  <Link 
                    href={addLocaleToPath(`/events/${event._id}`, locale)}
                    className="text-temple-orange hover:underline font-medium text-sm inline-flex items-center gap-1"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-8">
          <Link href={addLocaleToPath('/events', locale)} className="text-temple-orange hover:underline">
            {t.viewAll}
          </Link>
        </div>
      </div>
    </section>
  )
}
                                                              
