import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import Content from './content'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <Content />      
    </main>
  )
} 
