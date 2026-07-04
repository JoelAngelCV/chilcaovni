import type { Metadata } from 'next'
import { Oxanium, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

const oxanium = Oxanium({ subsets: ["latin"], weight: ['300','400','500','600','700'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL('https://chilcaovnifestival.com'),
  title: {
    default: 'Chilca Ovni Festival 2027 | Psytrance en Chilca Playa Punta Yaya', // Si la página no define título
    template: '%s | Chilca Ovni Festival', // El "%s" será reemplazado por el título de cada página
  },
  description: 'Festival de psytrance Chilca Ovni Festival en la playa Punta Yaya Chilca, Lima - Perú. Artistas internacionales, arte visionary y psytrance de clase mundial.',
  keywords: 'Chilca Ovni Festival, Psytrance Festival, Ovnis Chilca, Playa Punta Yaya, Chilca, Lima, música electrónica, darkpsy, goa trance',
  authors: [{ name: 'Chilca Ovni Festival' }],
  // Configuración explícita de iconos para Google y Apple
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' }, // 'any' evita conflictos en navegadores antiguos
      { url: '/icon.png', sizes: '96x96', type: 'image/png' }, // Google amará este formato y tamaño
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }, 

  // ESTO ES LO IMPORTANTE PARA EL NOMBRE DEL SITIO EN GOOGLE:
  applicationName: 'Chilca Ovni Festival 2027',
  openGraph: {    
    title: 'Chilca Ovni Festival',
    description: 'Festival de psytrance Chilca Ovni Festival en la playa Punta Yaya Chilca, Lima - Perú. Artistas internacionales, arte visionary y psytrance de clase mundial.',
    url: 'https://chilcaovnifestival.com',
    siteName: 'Chilca Ovni Festival',
    images: [
      {
        url: '/imgoficial.jpg', // Imagen con fondo sólido (no transparente)
        width: 1080,
        height: 1080,
        alt: 'Flyer Chilca Ovni Festival',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${oxanium.variable} dark data-scroll-behavior="smooth"`}>
      <GoogleTagManager gtmId="GTM-M5ZHGHJW"/>
      <GoogleAnalytics gaId="G-E6ZL376Z5W" />
      <head>
        <meta name="theme-color" content="#0f0a1e" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="google-site-verification" content="vSKT8kgELNC9NrQm1JJrUEUKPTLheqOp_wDqJpHAbSs" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
