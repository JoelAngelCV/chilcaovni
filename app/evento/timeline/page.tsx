import { Header } from '@/components/header'
// import { FESTIVAL_TIMELINE } from '@/lib/festival-config'
import { Metadata } from 'next'
import { FESTIVAL_INFO } from '@/lib/festival-config'

export const metadata: Metadata = {
  title: 'Timeline - OVNI Festival',
  description: 'Historia y evolución del Festival OVNI a través de los años',
}

export default function TimelinePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground pt-24 pb-16">
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
            El horario está sujeto a cambios. Los horarios son aproximados.
          </p>
        </div>
      </main>
    </>
  )
}
