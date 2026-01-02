# Project Structure - MVC Architecture

## 📁 Complete Directory Structure

```
Temple/
├── views/                         # 🎨 VIEWS (Presentation Layer)
│   ├── client/                   # Client-side React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ContactForm.jsx
│   │   ├── GalleryGrid.jsx
│   │   └── LanguageProvider.jsx
│   └── server/                   # Server-side React components
│       ├── FeaturedEvents.jsx
│       ├── EventsList.jsx
│       └── GalleryPreview.jsx
│
├── models/                       # 📊 MODELS (Data Layer)
│   └── api/                     # API clients and data models
│       └── cockpit.js           # Cockpit CMS API client
│
├── controllers/                  # 🎮 CONTROLLERS (Business Logic Layer)
│   └── api/                     # API route handlers (reference only)
│       ├── contact/
│       │   └── route.js         # Note: Actual routes are in app/api/
│       └── gallery/
│           └── route.js         # Note: Actual routes are in app/api/
│
├── app/                          # 📄 Next.js Pages
│   ├── api/                     # 🔒 API Routes (Next.js requirement)
│   │   ├── contact/
│   │   │   └── route.js
│   │   └── gallery/
│   │       └── route.js
│   ├── [locale]/                # Locale-prefixed routes
│   │   ├── page.jsx
│   │   ├── gallery/
│   │   ├── events/
│   │   └── contact/
│   ├── contact/
│   ├── events/
│   ├── gallery/
│   ├── layout.jsx
│   ├── page.jsx
│   ├── globals.css
│   ├── robots.js
│   └── sitemap.js
│
├── lib/                          # 🔧 Shared Utilities
│   └── i18n.js                  # Internationalization utilities
│
├── public/                       # Static assets
│   └── images/
│
├── middleware.js                 # Server middleware
├── package.json
├── next.config.js
├── tailwind.config.js
└── jsconfig.json
```

## 🎯 File Organization

### Views (`views/`)
**Purpose**: Presentation layer - what users see and interact with

- **Client Views** (`views/client/`): React components that run in browser
  - Handle user interactions
  - Manage client-side state
  - Display UI elements
  - Marked with `'use client'` directive

- **Server Views** (`views/server/`): React components that render on server
  - Fetch data server-side
  - No client-side JavaScript
  - Better performance and SEO

### Models (`models/`)
**Purpose**: Data access and business logic for data operations

- **API Clients**: Handle communication with external APIs (Cockpit CMS)
- **Data Models**: Define data structures and transformations
- **Business Logic**: Data validation, filtering, sorting

### Controllers (`controllers/`)
**Purpose**: Reference documentation for API route handlers

- **Note**: Actual API routes are in `app/api/` (Next.js requirement)
- Controllers directory serves as documentation/reference only

### App (`app/`)
**Purpose**: Next.js App Router pages and API routes

- **Pages**: Can use both client and server views
- **API Routes**: Backend endpoints (Next.js requirement to be in `app/api/`)

## 🔐 Security Model

### ✅ Frontend (Public)
- Client components (`views/client/`)
- Public assets (`public/`)
- Shared utilities (`lib/i18n.js`)

### 🔒 Backend (Secure)
- Server components (`views/server/`)
- Server utilities (`models/api/cockpit.js`)
- API routes (`app/api/`)
- Environment variables (never exposed)

## 📊 Import Patterns

### Client Components Import From:
```javascript
// Other client components
import { LanguageProvider } from '@/views/client/LanguageProvider'

// Shared utilities
import { addLocaleToPath } from '@/lib/i18n'

// Models (for image URLs only, NOT API calls)
import { getCockpitImageUrl } from '@/models/api/cockpit'
```

### Server Components Import From:
```javascript
// Models for data
import { getEvents } from '@/models/api/cockpit'

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

### Pages Import From:
```javascript
// Client views
import { Hero } from '@/views/client/Hero'

// Server views
import { FeaturedEvents } from '@/views/server/FeaturedEvents'

// Models if needed
import { getGalleryImages } from '@/models/api/cockpit'
```

## 🚀 Benefits

1. **Clear Separation**: Easy to identify frontend vs backend code
2. **Security**: API tokens stay in models, never exposed
3. **Organization**: Logical MVC structure
4. **Maintainability**: Easy to navigate and update
5. **Scalability**: Simple to add new features

## 📝 Notes

- Next.js requires `app/` directory at root for pages
- API routes must be in `app/api/` (Next.js requirement)
- All CMS API calls are server-side only (models)
- Client components can use models for image URLs only
- Server components can compose client components
- API routes use `export const dynamic = 'force-dynamic'` for dynamic rendering
