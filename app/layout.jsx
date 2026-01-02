import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/views/client/LanguageProvider'
import { Header } from '@/views/client/Header'
import { Footer } from '@/views/client/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Temple Trust',
    template: '%s | Temple Trust',
  },
  description: 'A sacred space for spiritual growth and community connection',
  keywords: ['temple', 'spiritual', 'community', 'trust'],
  authors: [{ name: 'Temple Trust' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Temple Trust',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="bg-primary-50 text-primary-900">
        <LanguageProvider>
          <div className="flex min-h-screen flex-col bg-primary-50">
            <Header />
            <main className="flex-1 bg-primary-50">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
