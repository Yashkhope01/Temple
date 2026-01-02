# Shri Mangalmurti Temple Trust - Website

A modern, production-ready website for a Hindu temple trust built with Next.js 14, Tailwind CSS, and Cockpit CMS. Supports multiple languages (English, Hindi, Marathi) with a minimalist, spiritual aesthetic.

## 🚀 Technology Stack

- **Frontend Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS 3.4.1
- **Language**: JavaScript (React 18.3.0)
- **CMS**: Cockpit (Headless CMS)
- **Deployment**: Production-ready for Vercel
- **Languages**: English (EN), Hindi (HI), Marathi (MR)

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- Cockpit CMS instance (local or remote)
- `.env.local` file with CMS credentials

## 🛠️ Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
COCKPIT_API_URL=http://localhost/cockpit
COCKPIT_API_TOKEN=your_api_token_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_DEFAULT_LOCALE=en
NEXT_PUBLIC_SUPPORTED_LOCALES=en,hi,mr
```

### 3. Setup Cockpit CMS Collections

Create the following collections in Cockpit CMS:

**Gallery Collection**
- `title` (Text)
- `description` (Text)
- `image` (Asset)
- `published` (Boolean)

**Events Collection**
- `title` (Text, Localized)
- `description` (Text, Localized)
- `date` (Date)
- `time` (Text)
- `location` (Text)
- `image` (Asset)
- `published` (Boolean)

**Contact Collection**
- `name` (Text)
- `email` (Text)
- `message` (Text)
- `created_at` (Date - auto)

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
app/
├── [locale]/                   # Locale-based routing (en, hi, mr)
│   ├── about/page.jsx
│   ├── contact/page.jsx
│   ├── events/page.jsx
│   └── gallery/page.jsx
├── api/                        # API routes for backend
│   ├── contact/route.js       # Contact form submission
│   └── gallery/route.js       # Gallery data
├── layout.jsx                  # Root layout with fonts & metadata
├── page.jsx                    # Homepage
└── globals.css                 # Global styles

views/
├── client/                      # Client-side components
│   ├── Header.jsx             # Navigation & language selector
│   ├── Footer.jsx             # Footer with links
│   ├── Hero.jsx               # Hero section with image
│   ├── AboutSection.jsx       # About section
│   ├── AboutPageContent.jsx   # About page content
│   ├── ContactForm.jsx        # Contact form
│   ├── ContactPageContent.jsx # Contact page
│   ├── GalleryGrid.jsx        # Gallery with lightbox
│   ├── GalleryPageTitle.jsx   # Gallery title
│   ├── EventsPageTitle.jsx    # Events title
│   └── LanguageProvider.jsx   # Language context
│
└── server/                     # Server-side components
    ├── FeaturedEvents.jsx     # Homepage featured events
    ├── EventsList.jsx         # Events page listing
    └── GalleryPreview.jsx     # Homepage gallery preview

lib/
└── i18n.js                     # Internationalization utilities

models/
└── api/
    └── cockpit.js             # CMS API client (server-side)

public/
└── images/                     # Static assets
    ├── sc1.png               # About page images
    ├── sc2.png
    ├── Gemini_Generated_Image_9dmdsj9dmdsj9dmd.png  # Hero image
    └── 1-SIDDHIVIYAK-BACKDROP-2.png                 # About page backdrop
```

## 🎨 Design System

### Color Palette
- **Primary Accent**: `#FF9800` (Temple Orange)
- **Background**: `#F5F1E8` (Beige)
- **Text**: `#2C1810` (Charcoal)
- **Accent**: `#D4A574` (Tan)

### Typography
- **Headings**: Cormorant Garamond (serif) - font-weights: 300-700
- **Body**: Lato (sans-serif) - font-weights: 300, 400, 700
- **Sizes**: 48-72px headings, 16px+ body text (accessible for elderly users)

## 🌍 Internationalization

Supports URL-based locale routing:
- `/en/*` - English pages
- `/hi/*` - Hindi pages  
- `/mr/*` - Marathi pages

Language selector in header allows instant switching with proper content translation.

## 🔧 Key Features

✅ **Responsive Design** - Mobile-first approach  
✅ **Server-Side Rendering** - Better performance & SEO  
✅ **Image Optimization** - Next.js Image component with lazy loading  
✅ **Secure API** - CMS token kept server-side only  
✅ **Contact Form** - With validation and CMS storage  
✅ **Lightbox Gallery** - Click images to view fullscreen  
✅ **SEO Optimized** - Metadata, sitemap, robots.txt  
✅ **Accessible** - JSX-A11Y compliance, high contrast colors  
✅ **Spiritual Design** - Minimalist aesthetic with elegant dividers  

## 📝 Pages

### Homepage (`/`)
- Hero section with full-width background image
- About section with decorative framed images
- Featured events grid
- Gallery preview
- All sections with ornamental dividers

### About Page (`/about`)
- Large temple image with decorative frame
- Detailed temple information
- Two-column layout
- Multilingual content

### Events Page (`/events`)
- Full events listing with cards
- Left-aligned dates (prominent display)
- Event descriptions and details
- Responsive grid layout
- CMS integration for dynamic content

### Gallery Page (`/gallery`)
- Masonry grid layout (1-5 columns responsive)
- Lightbox modal for fullscreen viewing
- Hover effects and smooth transitions
- Dynamic image loading from CMS

### Contact Page (`/contact`)
- Dark charcoal background
- Contact form with validation
- Contact information grid
- Location, phone, email details
- Responsive layout

## 🚀 Deployment

### Production Build

```bash
npm run build
npm start
```

### Vercel Deployment

1. Connect repository to Vercel
2. Add environment variables in project settings:
   - `COCKPIT_API_URL`
   - `COCKPIT_API_TOKEN`
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_DEFAULT_LOCALE`
   - `NEXT_PUBLIC_SUPPORTED_LOCALES`
3. Deploy with `git push`

## 📊 File Organization

### Client-Side Components
Located in `views/client/` - React components with `'use client'` directive  
- Use React hooks for interactivity
- Safe for browser execution

### Server-Side Components
Located in `views/server/` - React Server Components  
- Direct CMS API access
- No JavaScript sent to browser
- Secure credential handling

### Shared Utilities
Located in `lib/` - Used by both client and server  
- Internationalization (`i18n.js`)
- Text processing functions
- Constants and helpers

## 🔐 Security

- CMS API token stored in `.env.local` (never in client code)
- Server-side API calls only for sensitive operations
- Contact form submissions validated and sanitized
- No sensitive data exposed to browser

## 📱 Browser Support

- Chrome/Edge: Latest versions
- Firefox: Latest versions
- Safari: Latest versions
- Mobile browsers: All modern versions

## 🛠️ Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm start         # Start production server
npm run lint      # Run ESLint
```

## 📈 Performance Metrics

- **Images**: Next.js automatic optimization & lazy loading
- **Code Splitting**: Automatic by Next.js App Router
- **Caching**: Static pages cached, dynamic pages revalidated
- **SEO**: Metadata, Open Graph, structured data

## 📞 Support & Maintenance

### Common Issues

**404 on `/hi/about`?**
- Ensure `[locale]/about/page.jsx` exists
- Check locale folder structure

**Language not changing?**
- Clear browser cache
- Check `LanguageProvider` wrapping root layout

**Images not loading?**
- Verify image paths in `public/images/`
- Check CMS image URLs in server components

**Contact form not submitting?**
- Check `.env.local` has correct CMS settings
- Verify contact collection exists in CMS

## 📄 License

This project is confidential and proprietary. Unauthorized copying or distribution is prohibited.

## 👥 Contributors

Developed for Shri Mangalmurti Temple Trust

---

**Last Updated**: January 2026  
**Version**: 1.0.0  
**Status**: Production Ready

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
