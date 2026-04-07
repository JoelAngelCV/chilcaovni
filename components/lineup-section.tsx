'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { FESTIVAL_INFO } from '@/lib/festival-config'
import { X } from 'lucide-react'

interface Artist {
  id: number
  name: string
  genre: string
  image: string
  bio: string
}

const artists: Artist[] = FESTIVAL_INFO.artists

export function LineupSection() {
  const [selectedDay, setSelectedDay] = useState<number>(0)
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Cerrar modal cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedArtist(null)
      }
    }

    if (selectedArtist) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [selectedArtist])

  // Cerrar modal con Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedArtist(null)
      }
    }

    if (selectedArtist) {
      document.addEventListener('keydown', handleEscape)
      return () => {
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [selectedArtist])

  return (
    <section id="lineup" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold glow-text mb-4">
            Artistas & Horarios
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Descubre los mejores artistas de psytrance, trance y electrónica que estarán presentes en el Chilca OVNI Festival.
          </p>
        </div>

        {/* Day selector */}
        {/* <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {FESTIVAL_INFO.schedule.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDay(idx)}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedDay === idx
                  ? 'neon-button'
                  : 'border border-primary/50 text-primary hover:bg-primary/10'
              }`}
            >
              Ver Schedule
            </button>
          ))}
        </div> */}

        {/* Artists grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {artists.map((artist) => (
            <div
              key={artist.id}
              onClick={() => setSelectedArtist(artist)}
              className="cosmic-card p-6 rounded-lg hover:scale-105 transition-all duration-300 group overflow-hidden cursor-pointer"
            >
              <div className="relative h-32 mb-4 rounded-lg overflow-hidden bg-primary/10">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{artist.name}</h3>
              <p className="text-sm text-secondary mb-3 font-medium">{artist.genre}</p>
              <p className="text-xs text-foreground/60 italic line-clamp-2">{artist.bio}</p>
            </div>
          ))}
        </div>

        {/* Schedule timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Timeline Completo del Festival</h3>
          <div className="space-y-4">
            {FESTIVAL_INFO.schedule.map((item, index) => (
              <div
                key={index}
                className="cosmic-card p-4 rounded-lg flex items-center gap-6 hover:bg-card/80 transition-all"
              >
                <div className="shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 font-bold text-primary">
                    {index + 1}
                  </div>
                </div>
                <div className="grow">
                  <h4 className="font-bold text-primary">{item.day}</h4>
                  <p className="text-sm text-secondary">{item.type}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-bold text-accent">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info box */}
        <div className="mt-12 cosmic-card p-8 rounded-lg text-center">
          <p className="text-foreground/80 mb-4">
            ¡Más artistas por confirmar! Sigue nuestras redes sociales para actualizaciones.
          </p>
          <p className="text-sm text-foreground/60">
            El schedule está sujeto a cambios. Los horarios son aproximados.
          </p>
        </div>
      </div>

      {/* Artist Modal */}
      {selectedArtist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="cosmic-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedArtist(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors z-10"
            >
              <X className="w-6 h-6 text-primary" />
            </button>

            {/* Artist Image */}
            <div className="relative w-full h-96 overflow-hidden rounded-t-2xl">
              <img
                src={selectedArtist.image}
                alt={selectedArtist.name}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/90"></div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-4xl font-bold text-primary mb-2">
                {selectedArtist.name}
              </h2>
              
              <p className="text-xl text-secondary font-semibold mb-6">
                {selectedArtist.genre}
              </p>

              {/* Divider */}
              <div className="h-px bg-linear-to-r from-primary/0 via-primary/50 to-primary/0 mb-6"></div>

              {/* Bio */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Sobre el artista</h3>
                <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
                  {selectedArtist.bio}
                </p>
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setSelectedArtist(null)}
                  className="flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-primary/50 text-primary hover:bg-primary/10"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
