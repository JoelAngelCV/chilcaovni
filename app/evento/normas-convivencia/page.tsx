"use client"

import { Header } from '@/components/header'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const NORMAS = [
  {
    id: 1,
    title: 'Respeto Mutuo',
    description: 'Todos los asistentes deben tratar a otros participantes con respeto, independientemente de su origen, género, orientación sexual o identidad. La discriminación, el acoso y la violencia no serán tolerados bajo ninguna circunstancia.',
  },
  {
    id: 2,
    title: 'Consentimiento y Límites Personales',
    description: 'El consentimiento es fundamental. Respeta los límites físicos y emocionales de otros. No toques, fotografíes o grabes a personas sin su consentimiento previo. Si alguien te pide que te detengas, respeta esa petición inmediatamente.',
  },
  {
    id: 3,
    title: 'Sustancias y Salud',
    description: 'Aunque es un festival celebratorio, cuidamos la salud de todos. No se permite el consumo de drogas ilegales. El consumo de alcohol es responsabilidad de cada adulto. Cualquier comportamiento peligroso o agresivo resultará en expulsión inmediata.',
  },
  {
    id: 4,
    title: 'Cuidado del Medio Ambiente',
    description: 'Punta Yaya es un espacio sagrado. No dejes basura, recicla correctamente y ayuda a mantener la playa limpia. Utiliza los contenedores designados y participa en nuestros programas de limpieza comunitaria.',
  },
  {
    id: 5,
    title: 'Seguridad y Protección',
    description: 'Mantén tus pertenencias seguras. Los organizadores no se hacen responsables de pérdidas o robos. En caso de emergencia, acude a los puntos de asistencia señalizados. Sigue las instrucciones de seguridad de nuestro equipo.',
  },
  {
    id: 6,
    title: 'Respeto por los Artistas y Equipo',
    description: 'Los artistas y personal del festival merecen respeto. No interrumpas las presentaciones, mantén el ruido controlado en áreas de descanso y sigue las indicaciones del personal de seguridad y logística.',
  },
  {
    id: 7,
    title: 'Expresión Artística Responsable',
    description: 'Celebramos la libertad de expresión, pero dentro de límites respetuosos. Las manifestaciones artísticas no deben ofender, discriminar o incitar a la violencia. El festival se reserva el derecho de actuar ante comportamientos inapropiados.',
  },
  {
    id: 8,
    title: 'Horarios y Zonas Designadas',
    description: 'Respeta los horarios establecidos para cada actividad. Cumple con las áreas designadas para acampar, estacionamiento y actividades especiales. Las áreas restringidas existen por razones de seguridad.',
  },
  {
    id: 9,
    title: 'Comunicación y Resolución de Conflictos',
    description: 'Si experimentas un conflicto, comunícate directamente con la persona involucrada de manera respetuosa. Si no se resuelve, acude a nuestro equipo de mediación. Los insultos y la agresión no son métodos aceptables de resolución.',
  },
  {
    id: 10,
    title: 'Consecuencias',
    description: 'El no cumplimiento de estas normas puede resultar en advertencias, expulsión del festival sin reembolso, o reportes a las autoridades según la gravedad del incidente. Trabajamos para mantener un espacio seguro y acogedor para todos.',
  },
]

export default function NormasConvivenciaPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold glow-text mb-4">Normas de Convivencia</h1>
            <p className="text-xl text-foreground/80 mb-6">
              Estas normas fueron creadas para asegurar que Chilca Ovni Festival sea un espacio seguro, inclusivo y respetuoso para todos.
            </p>
            <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-8"></div>
          </div>

          {/* Introduction */}
          <div className="cosmic-card p-8 rounded-lg mb-12">
            <p className="text-foreground/90 leading-relaxed mb-4">
              Chilca Ovni Festival es un espacio de libertad, expresión artística y transformación comunitaria. Para que este espacio sea positivo para todos, necesitamos que cada participante se comprometa con nuestras normas de convivencia.
            </p>
            <p className="text-foreground/80">
              Estas normas no buscan limitar, sino proteger. Queremos que disfrutes plenamente del festival en un ambiente seguro donde todos nos sentimos bienvenidos y respetados.
            </p>
          </div>

          {/* Normas Accordion */}
          <div className="space-y-4 mb-12">
            {NORMAS.map((norma) => (
              <div
                key={norma.id}
                className="cosmic-card rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedId(expandedId === norma.id ? null : norma.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/10 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-primary text-left">{norma.id}. {norma.title}</h3>
                  <ChevronDown
                    className={`w-6 h-6 text-secondary transition-transform duration-300 flex-shrink-0 ml-4 ${
                      expandedId === norma.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedId === norma.id && (
                  <div className="px-6 py-4 border-t border-primary/20 bg-primary/5">
                    <p className="text-foreground/80 leading-relaxed">{norma.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Compromiso */}
          <div className="cosmic-card p-8 rounded-lg mb-12 border-primary/50">
            <h2 className="text-2xl font-bold text-primary mb-4">Nuestro Compromiso</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              El equipo de Chilca Ovni Festival se compromete a:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">✓</span>
                <span>Aplicar estas normas de manera justa y equitativa para todos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">✓</span>
                <span>Proporcionar espacios seguros de reporte y mediación</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">✓</span>
                <span>Actuar rápidamente ante reportes de comportamientos inapropiados</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">✓</span>
                <span>Mantener confidencialidad en casos de reportes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">✓</span>
                <span>Crear un ambiente inclusivo donde todos se sienten bienvenidos</span>
              </li>
            </ul>
          </div>

          {/* Contacto para reportes */}
          <div className="cosmic-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">¿Necesitas Ayuda?</h2>
            <p className="text-foreground/80 mb-6">
              Si experimentas acoso, violencia, o cualquier comportamiento que viole estas normas, reportalo inmediatamente.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Email de Reportes</h3>
                <a href="mailto:seguridad@ovnifestival.com" className="text-secondary hover:text-primary transition-colors">
                  seguridad@ovnifestival.com
                </a>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">WhatsApp de Emergencia</h3>
                <a href="https://wa.me/51987654321" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                  +51 987 654 321
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}