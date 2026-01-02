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
    <html lang="en" className={`${lato.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body className="bg-beige text-charcoal" style={{ backgroundImage: "url('/images/1-SIDDHIVIYAK-BACKDROP-2.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col bg-beige">
            <Header />
            <main className="flex-1 bg-beige">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
