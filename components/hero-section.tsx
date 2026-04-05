'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import logoChilca from '../public/logochilca.png'
import fondoNave from '../public/fondo-nave1.png'

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      
      {/* Animated background image */}
      
      <div className="absolute inset-0 animate-[zoomInOut_9s_ease-in-out_infinite]">
        <Image
          src={fondoNave}
          alt="bg"
          fill
          className="object-cover animate-[zoom-slow]"
        />
      </div>

      {/* Animated background elements */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl top-10 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl bottom-10 -right-48 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl top-1/2 left-1/2 animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>  

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main heading */}
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 tracking-tighter">
            {/* <span className="glow-text-pulse block mb-4 animate-pulse-neon">OVNI</span>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground/80">
              FESTIVAL
            </span> */}
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
        <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }`}>
          <p className="text-xl sm:text-2xl text-foreground/70 mb-5 font-light">
            Sumérgete en una experiencia cósmica única
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
          <Link href="#tickets" className="neon-button-glow hover:animate-bounce">
            Comprar Entradas
          </Link>
          <Link 
            href="#event"
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
