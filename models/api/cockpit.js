/**
 * Cockpit CMS API Client (STABLE – FIXED)
 * Cockpit v2 – Simple REST API
 */

const COCKPIT_API_URL = process.env.COCKPIT_API_URL || 'http://localhost/cockpit'
const COCKPIT_API_TOKEN = process.env.COCKPIT_API_TOKEN

if (!COCKPIT_API_TOKEN) {
  console.warn('⚠️ COCKPIT_API_TOKEN is not set')
}

/**
 * Core fetch helper (GET ONLY)
 */
async function fetchFromCockpit(endpoint) {
  const url = `${COCKPIT_API_URL}/api${endpoint}?token=${encodeURIComponent(
    COCKPIT_API_TOKEN
  )}`

  const response = await fetch(url, {
    method: 'GET',          // ✅ MUST BE GET
    cache: 'no-store',
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Cockpit API error: ${response.status} ${text}`)
  }

  return response.json()
}

/* ======================================================
   EVENTS  ✅ FIXED & WORKING
====================================================== */

export async function getEvents() {
  try {
    const data = await fetchFromCockpit('/content/items/Events')

    const items = Array.isArray(data) ? data : data.items || []

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const upcoming = []
    const past = []

    for (const event of items) {
      const rawDate = event['Date & Time']
      const eventDate = rawDate ? new Date(rawDate) : null

      if (eventDate) {
        eventDate.setHours(0, 0, 0, 0)
      }

      const normalized = {
        _id: event._id,
        title: event.Title || '',
        description: event.Desc || '',
        date: rawDate || null,
        image: event.Image || null,
      }

      if (!eventDate || eventDate >= today) {
        upcoming.push(normalized)
      } else {
        past.push(normalized)
      }
    }

    return { upcoming, past }
  } catch (error) {
    console.error('Error fetching events:', error)
    return { upcoming: [], past: [] }
  }
}



/* ======================================================
   GALLERY PREVIEW  ✅ FIXED
====================================================== */

export async function getGalleryImages(limit = 50) {
  try {
    const data = await fetchFromCockpit('/content/items/Gallery')

    // Cockpit may return array or { items }
    const items = Array.isArray(data) ? data : data.items || []

    return items
      .filter(item => item.image?.path) // MUST have image
      .sort((a, b) => b._created - a._created)
      .slice(0, limit)
  } catch (err) {
    console.error('❌ getGalleryImages failed:', err)
    return []
  }
}

/* ======================================================
   IMAGE URL HELPER
====================================================== */

export function getCockpitImageUrl(path) {
  if (!path) return ''
  if (path.startsWith('http')) return path
  return `${COCKPIT_API_URL}/storage/uploads${path}`
}
