import { Lato, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/views/client/LanguageProvider'
import { Header } from '@/views/client/Header'
import { Footer } from '@/views/client/Footer'

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
  weight: ['300', '400', '700'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: {
    default: 'Shri Dhaneshwar Temple Trust | Chinchwad, Pune',
    template: '%s | Shri Dhaneshwar Temple Trust',
  },
  description: 'Shri Dhaneshwar Temple Trust - A sacred space dedicated to Lord Shiva in Chinchwad, Pune. Experience spiritual growth, community connection, and divine tranquility.',
  keywords: ['Shri Dhaneshwar Temple', 'Chinchwad Temple', 'Pune Temple', 'Lord Shiva Temple', 'Hindu Temple', 'Spiritual Center', 'Temple Events', 'Religious Activities', 'Ganesh Peth'],
  authors: [{ name: 'Shri Dhaneshwar Temple Trust' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Shri Dhaneshwar Temple Trust',
    title: 'Shri Dhaneshwar Temple Trust | Chinchwad, Pune',
    description: 'A sacred space dedicated to Lord Shiva in Chinchwad, Pune. Experience spiritual growth and community connection.',
    images: ['/images/backdrop.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shri Dhaneshwar Temple Trust',
    description: 'A sacred space for spiritual growth and community connection',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      'en': '/',
      'hi': '/hi',
      'mr': '/mr',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF9800" />
      </head>
      <body className="bg-beige text-charcoal" style={{ backgroundImage: "url('/images/1-SIDDHIVIYAK-BACKDROP-2.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-temple-orange focus:text-white">Skip to main content</a>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col bg-beige">
            <Header />
            <main id="main-content" className="flex-1 bg-beige">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
