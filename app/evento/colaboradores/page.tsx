import { Header } from '@/components/header'
import { COLLABORATORS } from '@/lib/festival-config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Colaboradores - OVNI Festival',
  description: 'Conoce a las personas que hicieron posible el Festival OVNI',
}

export default function CollaboratorsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-black mb-6 tracking-tighter">
              <span className="glow-text">Nuestros Colaboradores</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Un sincero agradecimiento a todas las personas que dedicaron su tiempo, energía y pasión para hacer posible esta experiencia cósmica
            </p>
          </div>

          {/* Collaborators Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {COLLABORATORS.map((collaborator) => (
              <div key={collaborator.id} className="cosmic-card p-6 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
                {/* Image */}
                <div className="relative h-56 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={collaborator.image}
                    alt={collaborator.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent"></div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">{collaborator.name}</h3>
                  <p className="text-sm text-secondary font-semibold mb-3">{collaborator.role}</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">{collaborator.contribution}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Special Thanks Section */}
          <div className="cosmic-card p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Agradecimiento Especial</h2>
            <div className="space-y-4 text-center text-foreground/80">
              <p>
                A todos los voluntarios que trabajaron sin descanso para que cada asistente disfrutara de una experiencia mágica.
              </p>
              <p>
                A las comunidades locales de Chilca y Punta Yaya por abrir sus puertas a nuestra visión cósmica.
              </p>
              <p>
                A cada artista, facilitador y performer que puso su alma en el escenario.
              </p>
              <p>
                A los auspiciadores que creyeron en nuestra misión y la financiaron.
              </p>
              <p className="text-lg font-semibold text-secondary pt-4">
                Y a ti, asistente del Chilca Ovni Festival, por ser parte de esta familia cósmica.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center cosmic-card p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">¿Quieres colaborar?</h3>
            <p className="text-foreground/70 mb-6">
              Si te apasiona nuestra visión y deseas ser parte del equipo en próximas ediciones, ponte en contacto con nosotros.
            </p>
            <a
              href="https://wa.me/51987654321?text=Hola%2C%20me%20gustaría%20colaborar%20en%20el%20Festival%20OVNI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block neon-button"
            >
              Contáctanos por WhatsApp
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
