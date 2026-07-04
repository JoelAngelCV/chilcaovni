'use client'

import { Header } from '@/components/header'
import { SPONSORS } from '@/lib/festival-config'
import { WHATSAPP_CONFIG } from '@/lib/payment-config'
import { Mail, MessageCircle } from 'lucide-react'

export default function AuspiciadoresPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold glow-text mb-4">Auspiciadores</h1>
            <p className="text-xl text-foreground/70">Las marcas que lo hacen posible</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {SPONSORS.map((sponsor) => (
              <div key={sponsor.id} className="cosmic-card p-6 rounded-lg flex items-center justify-center min-h-37.5 blur">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="cosmic-card p-12 rounded-lg mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6">Sé Parte de la Experiencia Ovni</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Chilca Ovni Festival es una plataforma única para conectar con una audiencia vibrante, consciente e internacional. Somos más que un evento, somos una comunidad de exploradores cósmicos.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <span className="text-accent text-2xl">✦</span>
                  <p className="text-foreground/70">Acceso a un público masivo de asistentes comprometidos</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent text-2xl">✦</span>
                  <p className="text-foreground/70">Visibilidad en redes sociales y medios especializados</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent text-2xl">✦</span>
                  <p className="text-foreground/70">Oportunidades de branding creativo y memorable</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent text-2xl">✦</span>
                  <p className="text-foreground/70">Conexión con la comunidad electrónica y espiritual</p>
                </div>
              </div>

              <p className="text-lg text-foreground/80 mb-8">
                Si tu marca quiere ser parte de esta experiencia única, contacta con nosotros hoy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=Hola%2C%20estoy%20interesado%20en%20ser%20auspiciador%20del%20Festival%20OVNI`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 px-6 py-4 rounded-lg neon-button"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contactar por WhatsApp
                </a>
                <a
                  href="mailto:contacto@ovnifestival.com"
                  className="flex items-center justify-center gap-2 flex-1 px-6 py-4 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Enviar Email
                </a>
              </div>
            </div>
          </div>

          <div className="cosmic-card p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-primary mb-2">Paquetes de Patrocinio Disponibles</h3>
            <p className="text-foreground/70">Contáctanos para conocer las opciones de patrocinio y personalizar tu participación</p>
          </div>
        </div>
        {/* Footer */}
        <div className="pt-0 pb-0 border-t border-primary/20 text-center text-foreground/60">
          <p>© 2026 Reviden Eventos - Chilca Ovni Festival. Todos los derechos reservados.</p>
        </div>
      </main>
      
    </>
  )
}
