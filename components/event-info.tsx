'use client';

import YouTubeCentered from './youtube-centered';

export function EventInfo() {
  const features = [
    {
      icon: '🎵',
      title: 'Psytrance de Clase Mundial',
      description: 'Artistas internacionales en múltiples estilos, con el mejor sonido potenciado por nuestro sound system.'
    },
    {
      icon: '🎨',
      title: 'Arte Visionary',
      description: 'Instalaciones inmersivas, proyecciones 3D y arte temático OVNI en toda el área del festival.'
    },
    {
      icon: '🌊',
      title: 'Ubicación Paraíso',
      description: 'En la playa de Punta Yaya con vistas al océano y vibraciones cósmicas incomparables.'
    },
    {
      icon: '✨',
      title: 'Experiencia Integral',
      description: 'Zona holística, workshops, meditación y conexión con la comunidad global de psytrance.'
    },
  ]

  return (
    <section id="event" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold glow-text mb-4">
            Sobre el Evento
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Reviden Eventos presenta una experiencia transformadora de psytrance, visuales, arte y comunidad en una atmosfera psicodélica cósmica única.
          </p>
        </div>

        {/* Video section */}
        <YouTubeCentered videoId="191BheYX1C4"/>

        {/* Main event description */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="cosmic-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-primary mb-4">🛸 Chilca Ovni Festival</h3>
            <p className="text-foreground/80 mb-4">
              El festival celebra la intersección entre la música electrónica, la espiritualidad y el misterio cósmico. Cada elemento está diseñado para transportarte a otra dimensión.
            </p>
            <p className="text-foreground/80">
              Desde el escenario principal temático de naves alienígenas hasta las instalaciones interactivas, cada rincón del festival cuenta una historia del universo.
            </p>
          </div>

          <div className="space-y-4">
            <div className="cosmic-card p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <h4 className="font-bold text-primary mb-1">Ubicación</h4>
                  <p className="text-foreground/80">Playa Punta Yaya, Chilca - Lima, Perú</p>
                  <p className="text-sm text-foreground/60">A 60km al sur de Lima</p>
                </div>
              </div>
            </div>
            <div className="cosmic-card p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📅</span>
                <div>
                  <h4 className="font-bold text-primary mb-1">Fechas</h4>
                  <p className="text-foreground/80">Febrero 2027</p>
                  <p className="text-sm text-foreground/60">36 horas de experiencia cósmica</p>
                </div>
              </div>
            </div>
            <div className="cosmic-card p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🎪</span>
                <div>
                  <h4 className="font-bold text-primary mb-1">Capacidad</h4>
                  <p className="text-foreground/80">5,000 personas máximo</p>
                  <p className="text-sm text-foreground/60">Para una experiencia íntima y controlada</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="cosmic-card p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-lg font-bold text-primary mb-2">{feature.title}</h4>
              <p className="text-foreground/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
