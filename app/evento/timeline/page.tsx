import { Header } from '@/components/header'
import { FESTIVAL_SCHEDULE } from '@/lib/festival-config'
import { Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Timeline - Festival OVNI 2026',
  description: 'Horario de presentaciones del Festival OVNI 2026 en Punta Yaya',
}

export default function TimelinePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground pt-24 pb-16">
        {/* Hero with timeline image */}
        <div className="relative w-full h-100 sm:h-125 overflow-hidden rounded-xl mx-4 sm:mx-6 lg:mx-8 mb-16">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/timelinechilca2025-7SzwZHhlMpQXEoRD7DczaUBAXVxitq.jpg"
            alt="Timeline Festival OVNI 2026"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/80 rounded-xl"></div>
        </div>

        {/* Schedule Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold glow-text mb-4">
              Timeline del Festival
            </h1>
            <p className="text-foreground/80 text-lg">
              Viernes 27 a Sábado 28 de Junio - Festival OVNI 2026 en Punta Yaya
            </p>
          </div>

          {/* Timeline cards */}
          <div className="space-y-4">
            {FESTIVAL_SCHEDULE.map((entry, idx) => (
              <div
                key={idx}
                className="cosmic-card p-6 rounded-lg hover:scale-105 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
              >
                {/* Time */}
                <div className="shrink-0 w-full sm:w-auto">
                  <div className="flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-lg w-fit">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-xl font-bold text-primary">{entry.time}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="grow w-full sm:w-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                    {entry.name}
                  </h3>
                  <p className="text-secondary font-semibold text-base sm:text-lg mb-1">
                    {entry.genre}
                  </p>
                  <p className="text-foreground/60 text-sm">
                    {entry.artist}
                  </p>
                </div>

                {/* Artist image */}
                {entry.image && (
                  <div className="shrink-0 hidden sm:block">
                    <img
                      src={entry.image}
                      alt={entry.name}
                      className="w-20 h-20 rounded-lg object-cover border border-primary/30"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Info box */}
          <div className="mt-16 cosmic-card p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Información Importante</h2>
            <p className="text-foreground/80 mb-4">
              El horario está sujeto a cambios. Los artistas pueden variar según disponibilidad. Verifica las redes sociales oficiales para actualizaciones.
            </p>
            <p className="text-sm text-foreground/60">
              Esperamos que disfrutes de una experiencia única en Punta Yaya con los mejores artistas de psytrance de Sudamérica.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
