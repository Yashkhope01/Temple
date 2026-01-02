// import { headers } from 'next/headers'
// import { getEvents } from '@/models/api/cockpit'
// import { getLocalizedContent, getLocaleFromHeaders, defaultLocale } from '@/lib/i18n'
// import { getCockpitImageUrl } from '@/models/api/cockpit'
// import Image from 'next/image'

// export async function EventsList() {
//   const headersList = await headers()
//   const locale = getLocaleFromHeaders(headersList) || defaultLocale
  
//   // Always fetch fresh data - no caching
//  const { upcoming, past } = await getEvents()


//   const content = {
//     en: {
//       upcoming: 'Upcoming Events',
//       past: 'Past Events',
//       noEvents: 'No events scheduled at this time.',
//       date: 'Date',
//       time: 'Time',
//       location: 'Location',
//     },
//     hi: {
//       upcoming: 'आगामी कार्यक्रम',
//       past: 'पिछले कार्यक्रम',
//       noEvents: 'इस समय कोई कार्यक्रम निर्धारित नहीं है।',
//       date: 'तारीख',
//       time: 'समय',
//       location: 'स्थान',
//     },
//     mr: {
//       upcoming: 'आगामी कार्यक्रम',
//       past: 'मागील कार्यक्रम',
//       noEvents: 'या वेळी कोणतेही कार्यक्रम निर्धारित नाहीत.',
//       date: 'तारीख',
//       time: 'वेळ',
//       location: 'स्थान',
//     },
//   }

//   // Fallback to English if locale is not found
//   const t = content[locale] || content.en

//   const EventCard = ({ event }) => {
//     const title = getLocalizedContent(event.title, locale)
//     // Support both "Desc" and "Description" field names
//     const description = getLocalizedContent(event.desc || event.description, locale)
//     // Support multiple date field names (Date & Time field from CMS)
//     const dateValue = event.date_time || event.dateTime || event.event_date || event.date
//     const eventDate = dateValue ? new Date(dateValue) : new Date()
//     const day = eventDate.getDate()
//     const month = eventDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()

//     return (
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-l-temple-orange">
//         <div className="flex p-8">
//           {/* Date Section - Left */}
//           <div className="flex flex-col items-center justify-center pr-8 border-r-2 border-temple-orange/20 min-w-fit">
//             <div className="text-4xl font-serif font-bold text-charcoal">{day}</div>
//             <div className="text-sm font-medium text-charcoal mt-1">{month}</div>
//           </div>

//           {/* Content Section - Right */}
//           <div className="flex-1 pl-8">
//             <h3 className="text-2xl font-serif text-charcoal mb-2">{title}</h3>
//             <p className="text-charcoal/70 text-sm leading-relaxed mb-4">{description}</p>
//             {event.time && (
//               <div className="text-xs text-charcoal/60 mb-2">
//                 <span className="font-medium">Time:</span> {event.time}
//               </div>
//             )}
//             {event.location && (
//               <div className="text-xs text-charcoal/60 mb-4">
//                 <span className="font-medium">Location:</span> {event.location}
//               </div>
//             )}
//             <a href={addLocaleToPath(`/events/${event._id}`, locale)} className="text-temple-orange hover:underline font-medium text-sm inline-flex items-center gap-1">
//               View Details
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="space-y-16">
//       <section>
//         <h2 className="heading-secondary mb-8">{t.upcoming}</h2>
//         {upcoming.length === 0 ? (
//           <p className="text-body text-center py-8">{t.noEvents}</p>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {upcoming.map((event) => (
//               <EventCard key={event._id} event={event} />
//             ))}
//           </div>
//         )}
//       </section>

//       {past.length > 0 && (
//         <section>
//           <h2 className="text-3xl font-serif text-charcoal mb-8 mt-16">{t.past}</h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {past.map((event) => (
//               <EventCard key={event._id} event={event} />
//             ))}
//           </div>
//         </section>
//       )}
//     </div>
//   )
// }

import { headers } from 'next/headers'
import Image from 'next/image'
import { getEvents, getCockpitImageUrl } from '@/models/api/cockpit'
import { getLocalizedContent, getLocaleFromHeaders, defaultLocale } from '@/lib/i18n'

function addLocaleToPath(path, locale) {
  if (!locale || locale === 'en') return path
  return `/${locale}${path}`
}

export async function EventsList() {
  const headersList = await headers()
  const locale = getLocaleFromHeaders(headersList) || defaultLocale

  const { upcoming = [], past = [] } = await getEvents()

  const EventCard = ({ event }) => {
    const title = getLocalizedContent(event.title, locale)
    const description = getLocalizedContent(event.description, locale)

    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {event.image?.path && (
          <div className="relative h-56">
            <Image
              src={getCockpitImageUrl(event.image.path)}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="p-6">
          <h3 className="text-xl font-serif mb-2">{title}</h3>
          <p className="text-temple-muted text-sm mb-4">{description}</p>

          <a
            href={addLocaleToPath(`/events/${event._id}`, locale)}
            className="text-primary-600 hover:underline font-medium text-sm inline-flex items-center gap-1"
          >
            View Details →
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-16">
      <section>
        <h2 className="heading-secondary">Upcoming Events</h2>
        {upcoming.length === 0 ? (
          <p className="text-center text-temple-muted">No upcoming events.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {upcoming.map(event => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        )}
      </section>

      {past.length > 0 && (
        <section>
          <h2 className="heading-secondary">Past Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {past.map(event => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
