'use client'

import { useState } from 'react'
import { FESTIVAL_INFO } from '@/lib/festival-config'

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
              Ver Horario
            </button>
          ))}
        </div> */}

        {/* Artists grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="cosmic-card p-6 rounded-lg hover:scale-105 transition-all duration-300 group overflow-hidden"
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
          <h3 className="text-3xl font-bold text-primary mb-10 text-center">Timeline del Festival</h3>
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
            El horario está sujeto a cambios. Los horarios son aproximados.
          </p>
        </div>
      </div>
    </section>
  )
}
