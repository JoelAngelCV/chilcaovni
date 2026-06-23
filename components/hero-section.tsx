'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import logoChilca from '../public/logochilca1.png'
import fondoUfo from '../public/ufo-bg.jpg'

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      
      {/* Animated background image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 hero-bg-layer">
          <Image
            src={fondoUfo}
            alt="bg"
            fill
            className="pointer-events-none object-cover brightness-[0.35] contrast-[0.9]"
            draggable={false}
          />
        </div>

        <div className="absolute inset-0 hero-bg-overlay pointer-events-none" />
        <div className="absolute inset-0 hero-bg-spotlight pointer-events-none" />

        <div className="absolute w-80 h-80 rounded-full bg-primary/20 blur-3xl opacity-70 top-10 -left-32 hero-bg-floating"></div>
        <div className="absolute w-80 h-80 rounded-full bg-secondary/20 blur-3xl opacity-70 bottom-10 -right-32 hero-bg-floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-72 h-72 rounded-full bg-accent/20 blur-3xl opacity-70 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hero-bg-pulse" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main heading */}
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 tracking-tighter flex flex-col items-center justify-center">
            <Image
              src={logoChilca} // Ruta de tu imagen
              alt="Chilca Ovni Festival"
              // width={500} // Automático si se importa
              // height={300} // Automático si se importa
              placeholder="blur" // Opcional: efecto de carga
              className='opacity-80'
            />               
          </div>
        </div>

        {/* Subtitle */}
        <div className={`my-10 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }`}>
          <p className="text-xl sm:text-3xl text-foreground/70 mb-5 font-light">
            Música, Arte y Espiritualidad
          </p>
          <p className="sm:text-xl text-primary font-bold">
             Psytrance en Playa Punta Yaya • Chilca, Lima - Perú
          </p>
        </div>

        {/* Date and location */}
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-lg glow-border mb-8">
            <span className="text-sm sm:text-base">
              <span className="text-accent font-bold">Febrero - 2027</span>
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`transition-all duration-1000 delay-400 flex flex-col sm:flex-row gap-4 justify-center ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link href="/#tickets" className="neon-button-glow hover:animate-bounce">
            Comprar Entradas
          </Link>
          <Link 
            href="/#event"
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-primary/50 text-primary hover:bg-primary/10 hover:animate-pulse-neon"
          >
            Descubre más
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute -bottom-15 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="animate-bounce text-primary">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
