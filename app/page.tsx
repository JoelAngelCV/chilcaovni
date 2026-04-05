import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { EventInfo } from '@/components/event-info'
import { LineupSection } from '@/components/lineup-section'
import { GallerySection } from '@/components/gallery-section'
import { LocationSection } from '@/components/location-section'
import { TicketsSection } from '@/components/tickets-section'
import { ContactSection } from '@/components/contact-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <EventInfo />
      <LineupSection />
      <GallerySection />
      <LocationSection />
      <TicketsSection />
      <ContactSection />
    </main>
  )
}
