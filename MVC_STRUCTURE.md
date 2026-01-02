# MVC Architecture Structure

This project follows the **Model-View-Controller (MVC)** pattern for better code organization and separation of concerns.

## 📁 Directory Structure

```
Temple/
├── models/                    # 📊 MODELS (Data Layer)
│   └── api/                  # API clients and data models
│       └── cockpit.js        # Cockpit CMS API client
│
├── views/                     # 🎨 VIEWS (Presentation Layer)
│   ├── client/               # Client-side React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ContactForm.jsx
│   │   ├── GalleryGrid.jsx
│   │   └── LanguageProvider.jsx
│   └── server/               # Server-side React components
│       ├── FeaturedEvents.jsx
│       ├── EventsList.jsx
│       └── GalleryPreview.jsx
│
├── controllers/               # 🎮 CONTROLLERS (Business Logic Layer)
│   └── api/                  # API route handlers
│       ├── contact/
│       │   └── route.js      # Contact form API
│       └── gallery/
│           └── route.js      # Gallery API
│
├── app/                       # 📄 Next.js Pages
│   ├── api/                  # API routes (Next.js requirement - synced from controllers/)
│   ├── [locale]/            # Locale-prefixed routes
│   ├── page.jsx             # Home page
│   ├── layout.jsx          # Root layout
│   └── ...
│
├── lib/                       # 🔧 Shared Utilities
│   └── i18n.js              # Internationalization utilities
│
└── public/                    # Static assets
```

## 🎯 MVC Pattern Explanation

### Models (`models/`)
**Purpose**: Data access and business logic for data operations

- **API Clients**: Handle communication with external APIs (Cockpit CMS)
- **Data Models**: Define data structures and transformations
- **Business Logic**: Data validation, filtering, sorting

**Example**:
```javascript
// models/api/cockpit.js
export async function getEvents(limit, upcoming) {
  // Fetch events from CMS
  // Apply business logic (filtering, sorting)
  return events
}
```

### Views (`views/`)
**Purpose**: Presentation layer - what users see and interact with

- **Client Views** (`views/client/`): React components that run in browser
  - Handle user interactions
  - Manage client-side state
  - Display UI elements

- **Server Views** (`views/server/`): React components that render on server
  - Fetch data server-side
  - No client-side JavaScript
  - Better performance and SEO

**Example**:
```javascript
// views/client/Header.jsx
'use client'
export function Header() {
  // Client-side navigation logic
}

// views/server/FeaturedEvents.jsx
export async function FeaturedEvents() {
  const events = await getEvents() // Fetch from model
  return <div>{/* Render events */}</div>
}
```

### Controllers (`controllers/`)
**Purpose**: Handle HTTP requests and coordinate between Models and Views

- **API Routes**: Handle API endpoints
- **Request Processing**: Parse requests, validate input
- **Response Handling**: Format and send responses
- **Orchestration**: Coordinate between models and views

**Example**:
```javascript
// controllers/api/contact/route.js
export async function POST(request) {
  const data = await request.json()
  // Validate input (controller responsibility)
  const result = await submitContactForm(data) // Use model
  return NextResponse.json(result) // Send response
}
```

## 🔄 Data Flow

```
User Request
    ↓
Controller (controllers/api/)
    ↓
Model (models/api/) → External API (Cockpit CMS)
    ↓
Controller processes response
    ↓
View (views/client/ or views/server/) renders UI
    ↓
User sees result
```

## 📊 Import Patterns

### Views Import From:
```javascript
// Import models for data
import { getEvents } from '@/models/api/cockpit'

// Import shared utilities
import { addLocaleToPath } from '@/lib/i18n'
```

### Controllers Import From:
```javascript
// Import models for data operations
import { submitContactForm } from '@/models/api/cockpit'

// Import shared utilities if needed
import { validateEmail } from '@/lib/utils'
```

### Pages Import From:
```javascript
// Import views for rendering
import { Hero } from '@/views/client/Hero'
import { FeaturedEvents } from '@/views/server/FeaturedEvents'

// Import models if needed
import { getGalleryImages } from '@/models/api/cockpit'
```

## ✅ Benefits of MVC Pattern

1. **Separation of Concerns**: Each layer has a specific responsibility
2. **Maintainability**: Easy to locate and update code
3. **Testability**: Each layer can be tested independently
4. **Scalability**: Easy to add new features without affecting others
5. **Reusability**: Models and views can be reused across different controllers

## 📝 Notes

- **API Routes**: Next.js requires API routes in `app/api/`, so they're synced from `controllers/api/`
- **Server Components**: Can directly import models (no controller needed)
- **Client Components**: Can use models for image URLs, but API calls go through controllers
- **Shared Code**: `lib/` contains utilities used by all layers

## 🚀 Adding New Features

### Adding a New Feature:

1. **Model** (`models/api/`): Create data access functions
2. **Controller** (`controllers/api/`): Create API route handler
3. **View** (`views/client/` or `views/server/`): Create UI component
4. **Page** (`app/`): Use the view in a page

### Example: Adding a News Feature

```javascript
// 1. Model: models/api/cockpit.js
export async function getNews(limit) { ... }

// 2. Controller: controllers/api/news/route.js
export async function GET(request) { ... }

// 3. View: views/server/NewsList.jsx
export async function NewsList() { ... }

// 4. Page: app/news/page.jsx
import { NewsList } from '@/views/server/NewsList'
```

