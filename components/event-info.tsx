'use client';

import { CalendarDays, MapPin, Users } from "lucide-react";

export function EventInfo() {
  const features = [
    {
      icon: './icons8-música-64.png',
      title: 'Psychedelic Trance',
      description: 'Artistas internacionales en múltiples estilos como Full-On, Goa Trance, Darkpsy, Hi-Tech y más.'    },
    {
      icon: './icons8-art-64.png',
      title: 'Arte Visionary',
      description: 'Instalaciones decoradas de arte temático, conectando el mundo físico con el espiritual y místico.'
    },
    {
      icon: './icons8-marcador-64.png',
      title: 'Ubicación Paraíso',
      description: 'En la playa de Punta Yaya con vistas al océano y vibraciones incomparables.'
    },
    {
      icon: './icons8-bardo-48.png',
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
            Sobre el Festival
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Reviden Eventos presenta una experiencia transformadora de Psytrance, visuales, arte y comunidad en una atmósfera psicodélica única.
          </p>
        </div>

        {/* Main event description */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="cosmic-card p-8 rounded-xl">
            <div className="flex items-center">
              <img className="mb-4 mr-2" src="/icons8-ovni-48.png" alt="Ovni" width={35}/>
              <h3 className="text-2xl font-bold text-primary mb-4">Chilca Ovni Festival</h3>
            </div>
            <p className="text-foreground/80 mb-4">
              Un acontecimiento sensorial avanzado donde la música electrónica, la tecnología, la conciencia y el misterio convergen en una misma frecuencia. No es solo un festival. Es un punto de encuentro entre lo humano y lo desconocido.
            </p>
            <p className="text-foreground/80 mb-4">
              Un ritual musical y místico frente al mar donde el tiempo se disuelve y el cuerpo danza en trance bajo la luna y las estrellas. Cada elemento está diseñado para transportarte a otra dimensión.
            </p>
          </div>

          <div className="space-y-4">
            <div className="cosmic-card p-6 rounded-lg">
              <div className="flex items-start gap-4">  
                <MapPin className="text-secondary/90"/>
                <div>
                  <h4 className="font-bold text-primary mb-1">Ubicación</h4>
                  <p className="text-foreground/80">Playa Punta Yaya, Chilca - Lima, Perú</p>
                  <p className="text-sm text-foreground/60">A 60km al sur de Lima</p>
                </div>
              </div>
            </div>
            <div className="cosmic-card p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <CalendarDays className="text-secondary/90"/>
                <div>
                  <h4 className="font-bold text-primary mb-1">Fechas</h4>
                  <p className="text-foreground/80">Febrero 2027</p>
                  <p className="text-sm text-foreground/60">36 horas de música electrónica</p>
                </div>
              </div>
            </div>
            <div className="cosmic-card p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Users className="text-secondary/90"/>
                <div>
                  <h4 className="font-bold text-primary mb-1">Capacidad</h4>
                  <p className="text-foreground/80">5,000 personas</p>
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
              <img
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  className="mb-2"
                />              
              <h4 className="text-lg font-bold text-primary mb-2">{feature.title}</h4>
              <p className="text-foreground/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
