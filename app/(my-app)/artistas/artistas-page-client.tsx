'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import { Header } from '@/components/header'
import type { ArtistCategory, Media } from '@/payload-types'

import {Instagram, Facebook,  } from 'lucide-react'
import SoundcloudIcon from '@/components/SoundcloudIcon';



type ArtistItem = NonNullable<ArtistCategory['artists']>[number]

function isValidImageUrl(value: string | null | undefined) {
  if (!value) return false

  // Las URLs de Cloudinary son válidas - contienen 'upload' pero no 'auto/upload/file'
  if (value.includes('/auto/upload/file')) {
    return false
  }

  return true
}

function getArtistImageUrl(artist: ArtistItem) {
  const photo = artist.photo
  
  if (photo && typeof photo === 'object') {
    const candidateUrl = (photo as Media)?.url
    console.log('Candidate URL:', candidateUrl) // Log the candidate URL for debugging

    if (candidateUrl && isValidImageUrl(candidateUrl)) {
      return candidateUrl
    }
  }

  return '/fondopage.jpeg'
}

export function ArtistasPageClient({ categories }: { categories: ArtistCategory[] }) {
  const contenedorRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['20%', '70%'])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <motion.div
          ref={contenedorRef}
          className="relative w-full bg-center bg-no-repeat bg-cover bg-fixed pt-24 pb-8"
          style={{
            backgroundImage: "url('/fondopage.jpeg')",
            backgroundPositionY: backgroundY,
          }}
        >
          <div className="absolute inset-0 bg-black/40 pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold glow-text mb-4">
                Artistas del Festival
              </h1>
              <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
                Descubre a todos los artistas, performers y creadores que harán posible la experiencia única de Chilca Ovni Festival.
              </p>
            </div>

            <div className="space-y-16">
              {categories.map((category) => (
                <section key={category.id} className="scroll-mt-24" id={category.key}>
                  <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                      {category.title}
                    </h2>
                    <p className="text-foreground/70 text-lg">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(category.artists ?? []).map((artist, idx) => (
                      <ArtistCard key={`${category.id}-${artist.name}-${idx}`} artist={artist} />
                    ))}
                  </div>

                  {category.id !== categories[categories.length - 1]?.id && (
                    <div className="mt-12 pt-12 border-t border-primary/20"></div>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-20 cosmic-card p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">¿Quieres ser parte de Chilca Ovni Festival?</h2>
              <p className="text-foreground/80 mb-6">
                Si eres artista y quieres participar en Chilca Ovni Festival, contáctanos a través de nuestras redes sociales o por email.
              </p>
              <a
                href="/#contact"
                className="inline-block px-8 py-3 neon-button rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Contactar
              </a>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-primary/20 text-center text-foreground/60">
            <p>© 2026 Reviden Eventos - Chilca Ovni Festival. Todos los derechos reservados.</p>
            <p className="text-[8px] mt-4 md:text-xs">
              Desarrollado por{' '}
              <a href="https://www.joelangeldev.site" target="_blank" className="text-primary hover:underline">
                joelangeldev
              </a>
            </p>
          </div>
        </motion.div>
      </main>
    </>
  )
}

function ArtistCard({ artist }: { artist: ArtistItem }) {
  const [selectedArtist, setSelectedArtist] = useState<ArtistItem | null>(null)
  const [imageSrc, setImageSrc] = useState(getArtistImageUrl(artist))

  useEffect(() => {
    setImageSrc(getArtistImageUrl(artist))
  }, [artist])

  return (
    <>
      <div
        onClick={() => setSelectedArtist(artist)}
        className="cosmic-card p-6 rounded-lg hover:scale-105 transition-all duration-300 group overflow-hidden cursor-pointer"
      >
        <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-primary/10">
          <img
            src={imageSrc}
            alt={artist.name}
            onError={() => setImageSrc('/fondopage.jpeg')}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className='flex'>
          <h3 className="text-lg font-bold text-primary mb-2  mr-2">{artist.name}</h3>
          <img src={`/${artist.flag}.svg`} alt="Pais del artista" width={20} className='pb-2'/>
        </div>
        
        <p className="text-sm text-secondary mb-3 font-medium">{artist.genre}</p>
        <p className="text-xs text-foreground/60 cursor-pointer hover:text-primary transition-colors">
          Ver más →
        </p>
      </div>

      {selectedArtist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="cosmic-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedArtist(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors z-10"
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative w-full h-96 overflow-hidden rounded-t-2xl">
              <img
                src={getArtistImageUrl(selectedArtist)}
                alt={selectedArtist.name}
                onError={(event) => {
                  const target = event.currentTarget
                  target.onerror = null
                  target.src = '/fondopage.jpeg'
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/90"></div>
            </div>

            <div className="p-8">
              <div className='md:flex justify-between md:mb-0 mb-4'>
                <div>   
                  <h2 className="text-4xl font-bold text-primary mb-2">
                    {selectedArtist.name}
                  </h2>
                  <p className="text-xl text-secondary font-semibold mb-6">
                    {selectedArtist.genre}
                  </p>
                  
                </div>
                <div className="flex gap-4">
                  {selectedArtist.soundcloud && (
                    <a
                      href={selectedArtist.soundcloud}
                      className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-all hover:scale-110"
                      target="_blank"
                    >
                      <SoundcloudIcon 
                        size={32} 
                        color="currentColor" 
                        className="text-primary hover:text-[#ff5500] transition-colors" 
                      />
                    </a>
                  )}
                  {selectedArtist.instagram && (
                    <a
                      href={selectedArtist.instagram}
                      className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/30 hover:text-fuchsia-600 flex items-center justify-center text-primary transition-all hover:scale-110"
                      target="_blank"
                      title='Instagram'
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  {selectedArtist.facebook && (
                    <a
                      href={selectedArtist.facebook}
                      className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/30 hover:text-blue-400 flex items-center justify-center text-primary transition-all hover:scale-110"
                      target="_blank"
                      title='Facebook'
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  )}               
                </div>  
              </div>
              
              <div className="h-px bg-linear-to-r from-primary/0 via-primary/50 to-primary/0 mb-6"></div>

              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-foreground">Sobre el artista</h3>
                <p className="text-foreground/80 leading-relaxed">
                  {selectedArtist.bio || `${selectedArtist.name} es uno de los artistas más destacados del Festival OVNI, trayendo su energía y talento para crear una experiencia inolvidable.`}
                </p>
              </div>

              <button
                onClick={() => setSelectedArtist(null)}
                className="w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-primary/50 text-primary hover:bg-primary/10"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
