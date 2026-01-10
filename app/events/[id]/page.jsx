import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getEvents, getCockpitImageUrl } from '@/models/api/cockpit'
import { getLocalizedContent } from '@/lib/i18n'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function EventDetailPage({ params }) {
  const { id } = params

  const { upcoming = [], past = [] } = await getEvents()
  const allEvents = [...upcoming, ...past]

  const event = allEvents.find(e => e._id === id)

  if (!event) {
    notFound()
  }

  return (
    <section className="bg-beige min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
          {getLocalizedContent(event.title, 'en')}
        </h1>

        {event.image?.path && (
          <div className="relative w-full h-[420px] rounded-lg overflow-hidden mb-8">
            <Image
              src={getCockpitImageUrl(event.image.path)}
              alt={getLocalizedContent(event.title, 'en')}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {event.date && (
          <p className="text-temple-muted mb-6">
            {new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        )}

        <div className="prose prose-lg max-w-none text-charcoal">
          {getLocalizedContent(event.description, 'en')}
        </div>

        <div className="mt-10">
          <a href={`/events`} className="text-temple-orange font-medium hover:underline">← Back to Events</a>
        </div>
      </div>
    </section>
  )
}
