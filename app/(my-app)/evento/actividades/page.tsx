'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { ACTIVITIES } from '@/lib/festival-config'
import { X } from 'lucide-react'

export default function ActividadesPage() {
  const [selectedActivity, setSelectedActivity] = useState<typeof ACTIVITIES[0] | null>(null)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold glow-text mb-4">Actividades</h1>
            <p className="text-xl text-foreground/70">Experiencias transformadoras en Chilca Ovni Festival</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {ACTIVITIES.map((activity) => (
              <div
                key={activity.id}
                onClick={() => setSelectedActivity(activity)}
                className="cosmic-card p-6 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-primary/10 blur">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{activity.name}</h3>
                <p className="text-foreground/70 text-sm">{activity.description}</p>
                <button className="mt-4 text-secondary hover:text-primary transition-colors text-sm font-semibold">
                  Ver más →
                </button>
              </div>
            ))}
          </div>

          <div className="cosmic-card p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Próximas Actividades</h2>
            <p className="text-foreground/70">Se anunciarán más actividades próximamente. Sigue nuestras redes sociales para estar actualizado.</p>
          </div>
        </div>

        {selectedActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="cosmic-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors z-10"
              >
                <X className="w-6 h-6 text-primary" />
              </button>

              <div className="relative w-full h-96 overflow-hidden rounded-t-2xl blur">
                <img
                  src={selectedActivity.image}
                  alt={selectedActivity.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90"></div>
              </div>

              <div className="p-8">
                <h2 className="text-4xl font-bold text-primary mb-4">{selectedActivity.name}</h2>
                <div className="h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 mb-6"></div>
                <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap mb-8">
                  {selectedActivity.fullDescription}
                </p>

                <button
                  onClick={() => setSelectedActivity(null)}
                  className="w-full px-6 py-3 rounded-lg font-semibold neon-button"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Footer */}
          <div className="pt-0 pb-0 border-t border-primary/20 text-center text-foreground/60">
            <p>© 2026 Reviden Eventos - Chilca Ovni Festival. Todos los derechos reservados.</p>
          </div>
      </main>
      
    </>
  )
}
