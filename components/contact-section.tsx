import { Mail, MapPin, MessageCircle, Instagram, Facebook } from 'lucide-react'
import { WHATSAPP_CONFIG } from '@/lib/payment-config'

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-primary/20">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="glow-text text-4xl sm:text-5xl font-bold mb-8">Contacto</h2>
            <p className="text-foreground/70 text-lg mb-8">
              ¿Preguntas? Ponte en contacto con nosotros. Estamos aquí para ayudarte.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
                  <p className="text-foreground/70">
                    Playa Punta Yaya, Chilca<br />
                    Lima, Perú
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-foreground/70">
                    <a href="mailto:info@ovnifestival.com" className="hover:text-primary transition-colors">
                      info@chilcaovnifestival.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-foreground/70">
                    <a 
                      href={`https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20el%20Chilca%20Ovni%20Festival`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {WHATSAPP_CONFIG.formattedNumber}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-primary/20">
              <h3 className="font-semibold text-foreground mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/chilca.ovni.festival"
                  className="w-12 h-12 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center text-primary transition-all hover:scale-110"
                  target="_blank"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/p/Chilca-OVNI-Festival-2026-100064821636017/"
                  className="w-12 h-12 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center text-primary transition-all hover:scale-110"
                  target="_blank"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="space-y-6">
            <div className="cosmic-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">Información del Evento</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="font-semibold text-primary text-sm uppercase mb-2">Fechas</dt>
                  <dd className="text-foreground/80">Por anunciar - Próximamente</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary text-sm uppercase mb-2">Ubicación</dt>
                  <dd className="text-foreground/80">Playa Punta Yaya, Chilca, Lima, Perú</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary text-sm uppercase mb-2">Duración</dt>
                  <dd className="text-foreground/80">3 días de música, arte y experiencias cósmicas</dd>
                </div>
              </dl>
            </div>

            <div className="cosmic-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">Newsletter</h3>
              <p className="text-foreground/70 mb-4">
                Suscríbete para recibir actualizaciones sobre el festival.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-4 py-2 bg-card border border-primary/30 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="w-full neon-button text-center"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-primary/20 text-center text-foreground/60">
          <p>© 2026 Reviden Eventos - Chilca Ovni Festival. Todos los derechos reservados.</p>
        </div>
      </div>
    </section>
  )
}
