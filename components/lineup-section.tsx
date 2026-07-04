import Link from 'next/link'
import { FESTIVAL_INFO } from '@/lib/festival-config'
import { ArrowRight } from 'lucide-react'

interface Artist {
  id: number
  name: string
  genre: string
  image: string
  bio: string
  flag: string
}

const artists: Artist[] = FESTIVAL_INFO.artists
const featuredArtists = artists.slice(0, 8)

export function LineupSection() {

  return (
    <section id="lineup" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold glow-text mb-4">
            Lineup
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Artistas confirmados que estarán en Chilca Ovni Festival 2027
          </p>
        </div>

        {/* Featured Artists grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredArtists.map((artist) => (
            <div
              key={artist.id}
              className="cosmic-card p-6 rounded-lg hover:scale-105 transition-all duration-300 group overflow-hidden"
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-primary/10">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className='flex'>
                <h3 className="text-lg font-bold text-primary mb-2">{artist.name}</h3>
                {artist.flag && (
                  <img
                    src={artist.flag}
                    alt="Country flag"
                    className="w-5 h-5 ml-2 object-cover"
                  />
                )}
              </div>
              <p className="text-sm text-secondary mb-3 font-medium">{artist.genre}</p>
            </div>
          ))}
        </div>

        {/* View More button */}
        <div className="flex justify-center mb-12">
          <Link
            href="/artistas"
            className="neon-button px-8 py-4 rounded-lg font-bold inline-flex items-center gap-2 hover:scale-105 transition-all duration-300"
          >
            Ver Todos los Artistas
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Info box */}
        <div className="cosmic-card p-8 rounded-lg text-center">
          <p className="text-foreground/80 mb-4">
            ¡Más artistas por confirmar! Sigue nuestras redes sociales para actualizaciones.
          </p>
          <p className="text-sm text-foreground/60">
            Visita la página de artistas para ver a DJs, VJs, performers de fuego, talleres y mucho más.
          </p>
        </div>
      </div>
    </section>
  )
}

