# Temple Website

A modern, production-ready website for a temple trust built with a headless CMS architecture. The frontend is built with Next.js and the App Router, while the backend uses Cockpit CMS for content management.

## Architecture

This project follows a **headless CMS architecture** where:

- **Frontend**: Next.js 14 with App Router, JavaScript, and Tailwind CSS
- **Backend**: Cockpit CMS (file-based, lightweight CMS)
- **Deployment**: Frontend on Vercel, CMS on separate server
- **Languages**: English, Hindi, and Marathi with URL-based routing

## Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── api/                     # Backend API routes (server-side)
│   │   ├── contact/            # Contact form API
│   │   └── gallery/            # Gallery API
│   ├── [locale]/               # Locale-prefixed routes
│   ├── contact/                # Contact page
│   ├── events/                 # Events page
│   ├── gallery/                # Gallery page
│   ├── layout.jsx              # Root layout
│   └── page.jsx                # Home page
│
├── views/                       # Views (Presentation Layer)
│   ├── client/                 # Frontend (Client Components)
│   │   ├── Header.jsx          # Site header with navigation
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Hero.jsx            # Home page hero section
│   │   ├── AboutSection.jsx    # About section
│   │   ├── ContactForm.jsx     # Contact form (client-side)
│   │   ├── GalleryGrid.jsx     # Gallery with lazy loading
│   │   └── LanguageProvider.jsx # Language context provider
│   │
│   └── server/                 # Backend (Server Components)
│       ├── FeaturedEvents.jsx  # Featured events (server-side)
│       ├── EventsList.jsx      # Events listing (server-side)
│       └── GalleryPreview.jsx  # Gallery preview (server-side)
│
├── models/                      # Models (Data Layer)
│   └── api/
│       └── cockpit.js         # Cockpit CMS API client (server-side only)
│
├── controllers/                 # Controllers (Business Logic Layer)
│   └── api/                    # API route handlers (reference only)
│
├── lib/                         # Shared Utilities
│   └── i18n.js                 # Shared i18n utilities (client & server)
│
├── middleware.js                # Backend middleware for routing
├── public/                      # Static assets
└── package.json                 # Dependencies
```

## File Organization

### Frontend Files (Client-Side)
- **`views/client/`** - All React components that run in the browser
- **`app/`** - Next.js pages (some render on server, some on client)
- **`public/`** - Static assets (images, fonts, etc.)

### Backend Files (Server-Side)
- **`views/server/`** - Server components that fetch data server-side
- **`models/api/`** - Server-side utilities (CMS API client)
- **`app/api/`** - API routes (backend endpoints)
- **`middleware.js`** - Server-side middleware

### Shared Files
- **`lib/i18n.js`** - Internationalization utilities (used by both client and server)
- **`app/`** pages - Next.js App Router pages

### Architecture
This project follows the **MVC (Model-View-Controller)** pattern:
- **Models** (`models/api/`) - Data access and business logic
- **Views** (`views/client/` and `views/server/`) - Presentation layer
- **Controllers** (`app/api/`) - HTTP request handlers

### Architecture
This project follows the **MVC (Model-View-Controller)** pattern:
- **Models** (`models/api/`) - Data access and business logic
- **Views** (`views/client/` and `views/server/`) - Presentation layer
- **Controllers** (`app/api/`) - HTTP request handlers

## Features

- ✅ **Multilingual Support**: English, Hindi, and Marathi with clean URL structure
- ✅ **Server-Side Rendering**: Optimized performance with Next.js server components
- ✅ **Image Optimization**: Next.js Image component with lazy loading
- ✅ **Secure API Integration**: All CMS API calls are server-side only
- ✅ **Contact Form**: Secure form submission stored in CMS
- ✅ **SEO Optimized**: Metadata, sitemap, and robots.txt
- ✅ **Religious Minimalistic Design**: Clean, minimal, and serene visual direction
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS

## Prerequisites

- Node.js 18+ and npm/yarn
- Cockpit CMS instance (local or remote)

## Local Development Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Cockpit CMS Configuration
COCKPIT_API_URL=http://localhost/cockpit
COCKPIT_API_TOKEN=your_cockpit_api_token_here

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Language Configuration
NEXT_PUBLIC_DEFAULT_LOCALE=en
NEXT_PUBLIC_SUPPORTED_LOCALES=en,hi,mr
```

**Important**: Never commit `.env.local` to version control.

### 3. Set Up Cockpit CMS

1. Download and install [Cockpit CMS](https://getcockpit.com/)
2. Create the following collections in Cockpit:
   - **gallery**: For storing gallery images
     - Fields: `title` (text), `description` (text), `image` (asset), `published` (boolean)
   - **events**: For storing events
     - Fields: `title` (text, localized), `description` (text, localized), `event_date` or `date` (date), `time` (text), `location` (text), `image` (asset), `status` (text) or `published` (boolean)
   - **contact**: For storing contact form submissions
     - Fields: `name` (text), `email` (text), `phone` (text), `message` (text)
3. Generate an API token in Cockpit CMS settings
4. Update `COCKPIT_API_TOKEN` in your `.env.local` file

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Security Considerations

- **API Tokens**: All Cockpit API tokens are stored in environment variables and never exposed to the client
- **Server-Side Only**: CMS API calls are made exclusively from server components and API routes
- **Input Validation**: Contact form includes server-side validation
- **No Direct CMS Access**: The CMS is never directly exposed to the public

## Deployment

### Frontend (Vercel)

1. Push your code to a Git repository
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### CMS (Separate Server)

1. Deploy Cockpit CMS on your server
2. Update `COCKPIT_API_URL` in your Vercel environment variables
3. Ensure the CMS is accessible from Vercel's servers

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older devices

## License

This project is proprietary and intended for the temple trust.
