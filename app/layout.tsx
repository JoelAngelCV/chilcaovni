import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Chilca Ovni Festival 2027 | Psytrance en Chilca Playa Punta Yaya',
  description: 'Sumérgete en una experiencia cósmica única. Festival de psytrance Chilca Ovni Festival en la playa Punta Yaya Chilca - Lima. Artistas internacionales, arte visionary y psytrance de clase mundial.',
  keywords: 'psytrance, festival, ovni, Playa Punta Yaya, Chilca, Lima, música electrónica, darkpsy, goa trance',
  authors: [{ name: 'Chilca Ovni Festival' }],
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#0f0a1e" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
