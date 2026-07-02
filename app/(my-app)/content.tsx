"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import { EventInfo } from '@/components/event-info'
import { LineupSection } from '@/components/lineup-section'
import { GallerySection } from '@/components/gallery-section'
import { LocationSection } from '@/components/location-section'
import { TicketsSection } from '@/components/tickets-section'
import { ContactSection } from '@/components/contact-section'

const Content = () => {
    // 1. Referencia al contenedor que tiene las secciones con fondo
  const contenedorRef = useRef<HTMLDivElement>(null)

  // 2. Detecta el progreso del scroll dentro de ESTE contenedor específico
  const { scrollYProgress } = useScroll({
    target: contenedorRef,
    offset: ["start end", "end start"] 
  })

  // 3. Mapea el scroll a la posición vertical del fondo (de 0% a 50%)
  // Ajusta el "50%" a un valor mayor (ej. 80%) si tu imagen es extremadamente larga
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "90%"])
  return (
    <div className="w-full">
        <motion.div 
        ref={contenedorRef}
        className="relative w-full bg-center bg-no-repeat bg-cover bg-fixed"
        style={{ 
          backgroundImage: "url('/fondopage.jpeg')",
          backgroundPositionY: backgroundY // Vincula el movimiento vertical al scroll
        }}
      >
          <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
          <div className="relative">
            <EventInfo />
            <LineupSection />
            <GallerySection />
            <LocationSection />
            <TicketsSection />
            <ContactSection />
          </div>
        </motion.div>
    </div>
  )
}

export default Content
