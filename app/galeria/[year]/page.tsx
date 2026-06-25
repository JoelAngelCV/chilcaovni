'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import { Header } from '@/components/header'
import { FESTIVAL_YEARS } from '@/lib/festival-config'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import GalleryVideo from '@/components/gallery-video'

interface PageProps {
  params: Promise<{
    year: string
  }>
}

export default function YearGalleryPage({ params: paramsPromise }: PageProps) {
  const [year, setYear] = useState<number | null>(null)
  const [festivalData, setFestivalData] = useState<typeof FESTIVAL_YEARS[0] | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

    // 1. Referencia al contenedor que tiene las secciones con fondo
  const contenedorRef = useRef<HTMLDivElement>(null)

  // 2. Detecta el progreso del scroll dentro de ESTE contenedor específico
  const { scrollYProgress } = useScroll()

  // 3. Mapea el scroll a la posición vertical del fondo (de 0% a 50%)
  // Ajusta el "50%" a un valor mayor (ej. 80%) si tu imagen es extremadamente larga
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["70%", "80%"])

  useEffect(() => {
    const resolveParams = async () => {
      const params = await paramsPromise
      const yearNum = parseInt(params.year)
      setYear(yearNum)
      const data = FESTIVAL_YEARS.find((f) => f.year === yearNum)
      setFestivalData(data || null)
      setSelectedImageIndex(null)
    }
    resolveParams()
  }, [paramsPromise])

  if (!year || !festivalData) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background text-foreground pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Cargando...</h1>
            <p className="text-foreground/70">Obteniendo información del festival</p>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground pt-24">
        <motion.div 
          ref={contenedorRef}
          className="relative w-full bg-center bg-no-repeat bg-cover bg-fixed"
          style={{ 
            backgroundImage: "url('/fondopages.jpeg') ",            
            backgroundPositionY: backgroundY // Vincula el movimiento vertical al scroll
          }}
        >
          <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-4">
            
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold glow-text mb-4">{festivalData.title}</h1>
              <p className="text-2xl text-foreground/70 mb-6">{year}</p>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                {festivalData.description}
              </p>
            </div>

            <div className="bg-linear-to-r from-primary/20 via-secondary/20 to-accent/20 h-1 mb-16 rounded-full"></div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8">Galería</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {festivalData.images.map((image, idx) => {
                  const imageId = `${year}-${idx}`
                  return (
                    <div
                      key={imageId}
                      onClick={() => setSelectedImageIndex(idx)}
                      className="cosmic-card rounded-lg overflow-hidden h-80 cursor-pointer group hover:scale-105 transition-all duration-300"
                    >
                      <img
                        src={image}
                        alt={`Galería ${year} - Imagen ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      
                    </div>
                      
                    
                  )
                })}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 justify-center">
                {festivalData.videos?.map((video, idx) => {
                  const videoId = `${year}-video-${idx}`
                  return (
                    <div key={video.videoId} className="flex justify-center">
                      <GalleryVideo videoId={video.videoId} type={video.type as any} key={videoId} />            
                    </div>
                                      
                  )
                } )}
              </div>
            </div>

            <div className="cosmic-card p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Revive los Recuerdos</h3>
              <p className="text-foreground/70 mb-6">
                Explora la historia de Chilca Ovni Festival a través de los años y sé parte de esta tradición cósmica.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {[2017, 2018, 2019, 2024, 2025, 2026].map((y) => (
                  <a
                    key={y}
                    href={`/galeria/${y}`}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      y === year
                        ? 'neon-button'
                        : 'border border-primary/50 text-primary hover:bg-primary/10'
                    }`}
                  >
                    {y}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {selectedImageIndex !== null && festivalData?.images[selectedImageIndex] && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors z-10"
            >
              <X className="w-6 h-6 text-primary" />
            </button>

            <div 
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={festivalData.images[selectedImageIndex]}
                alt="Galería expandida"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}

      </main>
    </>
  )
}
