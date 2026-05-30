"use client"

import { Header } from '@/components/header'
import { ARTIST_CATEGORIES } from '@/lib/festival-config'
import { useState } from 'react'

// export const metadata = {
//   title: 'Artistas - Festival OVNI 2026',
//   description: 'Conoce a todos los artistas que participan en el Festival OVNI 2026',
// }

export default function ArtistasPage() {
  const categories = Object.entries(ARTIST_CATEGORIES)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold glow-text mb-4">
              Artistas del Festival
            </h1>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
              Descubre a todos los artistas, performers y creadores que harán posible la experiencia cósmica del Festival OVNI 2026
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-16">
            {categories.map(([key, category]) => (
              <section key={key} className="scroll-mt-24" id={key}>
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                    {category.title}
                  </h2>
                  <p className="text-foreground/70 text-lg">
                    {category.description}
                  </p>
                </div>

                {/* Artists Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.artists.map((artist, idx) => (
                    <ArtistCard key={idx} artist={artist} />
                  ))}
                </div>

                {/* Divider */}
                {categories.indexOf([key, category]) < categories.length - 1 && (
                  <div className="mt-12 pt-12 border-t border-primary/20"></div>
                )}
              </section>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-20 cosmic-card p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">¿Quieres ser parte de OVNI?</h2>
            <p className="text-foreground/80 mb-6">
              Si eres artista y quieres participar en el Festival OVNI 2026, contáctanos a través de nuestras redes sociales o por email.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 neon-button rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Contactar
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

function ArtistCard({ artist }: { artist: { name: string; genre: string; image: string } }) {
  const [selectedArtist, setSelectedArtist] = useState<typeof artist | null>(null)

  return (
    <>
      <div
        onClick={() => setSelectedArtist(artist)}
        className="cosmic-card p-6 rounded-lg hover:scale-105 transition-all duration-300 group overflow-hidden cursor-pointer"
      >
        <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-primary/10">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 className="text-lg font-bold text-primary mb-2">{artist.name}</h3>
        <p className="text-sm text-secondary mb-3 font-medium">{artist.genre}</p>
        <p className="text-xs text-foreground/60 cursor-pointer hover:text-primary transition-colors">
          Ver más →
        </p>
      </div>

      {/* Artist Modal */}
      {selectedArtist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="cosmic-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedArtist(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors z-10"
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Artist Image */}
            <div className="relative w-full h-96 overflow-hidden rounded-t-2xl">
              <img
                src={selectedArtist.image}
                alt={selectedArtist.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90"></div>
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
              <div className="h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 mb-6"></div>

              {/* About */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-foreground">Sobre el artista</h3>
                <p className="text-foreground/80 leading-relaxed">
                  {selectedArtist.name} es uno de los artistas más destacados del Festival OVNI, trayendo su energía y talento para crear una experiencia inolvidable.
                </p>
              </div>

              {/* Close button */}
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