import { MapPin, Navigation } from 'lucide-react'

export function LocationSection() {
  return (
    <section id="location" className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-primary/20">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">UBICACIÓN DEL EVENTO</span>
          </div>
          <h2 className="glow-text text-4xl sm:text-5xl font-bold mb-4">
            Playa Punta Yaya, Chilca - Lima, Perú
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Ubicado en una de las playas más hermosas del sur de Lima. Un epicentro de avistamientos ovni y paraíso costero perfecto para una
            experiencia cósmica única.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map embedding */}
          <div className="cosmic-card p-4 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4234.279863324872!2d-76.736181!3d-12.547701799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105741dd5fdeeef%3A0xf9663b73e20c59e!2sPlaya%20Punta%20Yaya%20-%20Las%20Salinas!5e1!3m2!1ses!2spe!4v1775422731039!5m2!1ses!2spe"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">¿Cómo Llegar?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mt-1">
                    <Navigation className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Desde Lima Centro</h4>
                    <p className="text-foreground/70">
                      Aproximadamente 60 km al sur de Lima. Toma la Panamericana Sur hacia Chilca.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center mt-1">
                    <Navigation className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">En Vehículo</h4>
                    <p className="text-foreground/70">
                      Estacionamiento disponible en el sitio. Proporcionaremos información detallada a
                      asistentes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mt-1">
                    <Navigation className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Transporte Público</h4>
                    <p className="text-foreground/70">
                      Buses disponibles desde Lima centro. Detalles de rutas se compartirán próximamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features of location */}
            <div className="cosmic-card p-6 rounded-xl">
              <h4 className="font-bold text-foreground mb-4">Por Qué Playa Punta Yaya</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-foreground/80">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Punto de actividad extraterrestre y avistamientos de ovnis
                </li>
                <li className="flex items-center gap-2 text-foreground/80">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Ambiente natural perfecto para el festival
                </li>
                <li className="flex items-center gap-2 text-foreground/80">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Acceso a actividades acuáticas
                </li>
                <li className="flex items-center gap-2 text-foreground/80">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Infraestructura completa para festival
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
