import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import Content from './content'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Chilca Ovni Festival 2027',
    'description': 'Psytrance en Chilca Playa Punta Yaya',
    'primaryImageOfPage': {
      '@type': 'ImageObject',
      'url': 'https://chilcaovnifestival.com/imgoficial.jpg' // URL absoluta de tu imagen fija
    }
  };
  return (
    <>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <Content />      
    </main>
    </>  
  )
} 
