# Project Structure - MVC Architecture

> **Note**: This document describes the actual project structure. For detailed MVC architecture explanation, see [MVC_STRUCTURE.md](./MVC_STRUCTURE.md).

## 📁 Directory Organization

### 🎨 Views (Presentation Layer)
**Location**: `views/client/` and `views/server/`

**Client Views** (`views/client/`):
- Components that run in the browser
- Use React hooks (`useState`, `useEffect`, etc.)
- Marked with `'use client'` directive
- Handle user interactions and client-side state

**Files**:
- `Header.jsx` - Site navigation and language switcher
- `Footer.jsx` - Site footer
- `Hero.jsx` - Home page hero section with background image
- `AboutSection.jsx` - About us section
- `ContactForm.jsx` - Contact form with client-side validation
- `GalleryGrid.jsx` - Gallery grid with lightbox (client-side)
- `LanguageProvider.jsx` - Language context provider

**Server Views** (`views/server/`):
- Components that fetch data server-side
- No client-side JavaScript sent to browser
- Direct access to CMS and database
- Secure API token handling

**Files**:
- `FeaturedEvents.jsx` - Fetches and displays featured events
- `EventsList.jsx` - Fetches and displays all events
- `GalleryPreview.jsx` - Fetches and displays gallery preview

### 📊 Models (Data Layer)
**Location**: `models/api/`

**Purpose**: Data access and business logic for data operations

**Files**:
- `cockpit.js` - Cockpit CMS API client (server-side only)

### 🎮 Controllers (Business Logic Layer)
**Location**: `app/api/` (Next.js requirement)

**Purpose**: Handle HTTP requests and coordinate between Models and Views

**Files**:
- `contact/route.js` - Handles contact form submissions
- `gallery/route.js` - Serves gallery images with pagination

**Note**: Controllers directory (`controllers/api/`) exists for reference/documentation only. Actual API routes are in `app/api/` as required by Next.js.

### 🔄 Shared Utilities
**Location**: `lib/`

**Purpose**: Used by both client and server

**Files**:
- `i18n.js` - Internationalization utilities (shared)

### 📄 Pages
**Location**: `app/`

**Purpose**: Next.js App Router pages

- Can use both client and server views
- Handle routing and page structure

**Middleware**:
- `middleware.js` - Server-side routing and locale handling

## 🔐 Security Model

### ✅ Secure (Server-Side)
- CMS API calls (`models/api/cockpit.js`)
- API routes (`app/api/`)
- Server components (`views/server/`)
- Environment variables (never exposed to client)

### ⚠️ Public (Client-Side)
- Client components (`views/client/`)
- Public assets (`public/`)
- Shared utilities (`lib/i18n.js`)

## 📊 Import Patterns

### Client Components Import From:
```javascript
// Other client components
import { LanguageProvider } from '@/views/client/LanguageProvider'

// Shared utilities
import { addLocaleToPath } from '@/lib/i18n'

// Models (for image URLs only, not API calls)
import { getCockpitImageUrl } from '@/models/api/cockpit'
```

### Server Components Import From:
```javascript
// Models for data
import { getEvents } from '@/models/api/cockpit'
import { getCockpitImageUrl } from '@/models/api/cockpit'

// Shared utilities
import { getLocaleFromHeaders } from '@/lib/i18n'
```

### API Routes Import From:
```javascript
// Models for data operations
import { submitContactForm } from '@/models/api/cockpit'

// Shared utilities if needed
import { getLocaleFromHeaders } from '@/lib/i18n'
```

## 🎯 Benefits of This Structure

1. **Clear Separation**: Easy to identify frontend vs backend code
2. **Security**: API tokens and sensitive operations stay server-side
3. **Performance**: Server components reduce client-side JavaScript
4. **Maintainability**: Organized MVC structure makes code easier to navigate
5. **Scalability**: Easy to add new features in the right location

## 🚀 Adding New Features

### Adding a Client Component
1. Create file in `views/client/`
2. Add `'use client'` directive
3. Import from `@/views/client/` or `@/lib/`

### Adding a Server Component
1. Create file in `views/server/`
2. No `'use client'` directive
3. Import from `@/models/api/` for CMS access
4. Can import client components for composition

### Adding an API Route
1. Create file in `app/api/[route-name]/route.js`
2. Export `GET`, `POST`, etc. functions
3. Add `export const dynamic = 'force-dynamic'` for dynamic routes
4. Import from `@/models/api/` only
5. Never expose API tokens to client

## 📝 Notes

- All CMS API calls must be server-side only (models)
- Client components can use models for image URLs (not API calls)
- Server components can compose client components
- Pages can use both client and server components
- API routes use `export const dynamic = 'force-dynamic'` for dynamic rendering
