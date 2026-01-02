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
      <section className="py-20 md:py-32 bg-primary-50">
        <div className="container-custom">
          <div className="divider-accent mb-8"></div>
          <h2 className="heading-secondary text-center mb-8">{t.title}</h2>
          <div className="divider-accent mb-8"></div>
          <p className="text-center text-body text-primary-600">{t.noEvents}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 md:py-32 bg-primary-50">
      <div className="container-custom">
        <div className="divider-accent mb-8"></div>
        <h2 className="heading-secondary text-center mb-16">{t.title}</h2>
        <div className="divider-accent mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {events.map((event) => {
            const title = getLocalizedContent(event.title, locale)
            const description = getLocalizedContent(event.description, locale)
            const dateValue = event.date
            const eventDate = dateValue ? new Date(dateValue) : new Date()
            
            return (
              <div
                key={event._id}
                className="bg-white border border-primary-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                {event.image && (
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={event.image.path.startsWith('http') ? event.image.path : getCockpitImageUrl(event.image.path)}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                )}
                <div className="p-8">
                  <div className="text-xs text-primary-500 mb-4 tracking-wide uppercase">
                    {eventDate.toLocaleDateString(locale === 'en' ? 'en-US' : locale === 'hi' ? 'hi-IN' : 'mr-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <div className="w-12 h-0.5 bg-saffron-400 mb-4"></div>
                  <h3 className="text-xl font-serif font-light mb-4 text-primary-900">{title}</h3>
                  <p className="text-sm text-primary-600 line-clamp-3 leading-relaxed">{description}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="text-center">
          <Link href={addLocaleToPath('/events', locale)} className="btn-secondary">
            {t.viewAll}
          </Link>
        </div>
      </div>
    </section>
  )
}

