'use client'

import { useState } from 'react'
import { TICKETS } from '@/lib/payment-config'
import { PaymentSelector } from './payment-selector'
import { ChevronDown, Sparkles } from 'lucide-react'

export function TicketsSection() {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqItems = [
    {
      question: '¿Cuándo son las fechas del festival?',
      answer:
        'Chilca Ovni Festival se llevará a cabo en Punta Yaya, Chilca durante 3 días consecutivos. Las fechas específicas se anunciarán próximamente.',
    },
    {
      question: '¿Puedo cambiar o devolver mi entrada?',
      answer:
        'Las entradas son no reembolsables. Sin embargo, puedes transferir tu entrada a otra persona si contactas a nuestro equipo de soporte.',
    },
    {
      question: '¿Qué incluye cada tipo de entrada?',
      answer:
        'Cada entrada incluye acceso al festival. Las entradas VIP incluyen acceso prioritario y servicios premium. Todos los tipos de entradas incluyen un espacio para acampar en la playa.',
    },
    {
      question: '¿Hay descuentos para grupos?',
      answer: 'Sí, contáctanos para consultar sobre descuentos especiales para grupos de 10 o más personas.',
    },
    {
      question: '¿Cómo llego a Playa Punta Yaya?',
      answer:
        'Punta Yaya se encuentra en Chilca, al sur de Lima, Perú. Está a aproximadamente 60 km del centro de Lima. Proporcionaremos información detallada sobre transporte próximamente.',
    },
  ]

  return (
    <section id="tickets" className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-primary/20">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">ENTRADAS DISPONIBLES</span>
          </div>
          <h2 className="glow-text text-4xl sm:text-5xl font-bold mb-4">
            Elige Tu Experiencia Cósmica
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Selecciona el tipo de entrada que mejor se adapte a ti
            y asegura tu lugar en Chilca Ovni Festival.
          </p>
        </div>

        {/* Tickets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TICKETS.map((ticket) => (
            <div
              key={ticket.id}
              className={`cosmic-card p-6 rounded-xl cursor-pointer transition-all duration-300 transform ${
                selectedTicket === ticket.id
                  ? 'ring-2 ring-primary scale-105'
                  : 'hover:scale-105 hover:ring-1 hover:ring-primary/50'
              }`}
              onClick={() => setSelectedTicket(ticket.id)}
            >
              {/* Featured badge for VIP */}
              {ticket.id === 'vip' && (
                <div className="mb-3 inline-block px-3 py-1 bg-linear-to-r from-primary to-accent rounded-full">
                  <span className="text-xs font-bold text-background">★ RECOMENDADO</span>
                </div>
              )}

              <h3 className="text-xl font-bold text-foreground mb-2">{ticket.name}</h3>
              <p className="text-foreground/60 text-sm mb-4">{ticket.description}</p>

              {/* Price - Dual currency */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-primary">${ticket.price}</span>
                  <span className="text-foreground/60 text-sm">USD</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-secondary">S/. {ticket.pricePEN}</span>
                  <span className="text-foreground/60 text-xs">PEN</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {ticket.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="text-accent mt-1">✦</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Select button */}
              <button
                className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  selectedTicket === ticket.id
                    ? 'neon-button'
                    : 'bg-primary/20 text-primary hover:bg-primary/30'
                }`}
              >
                {selectedTicket === ticket.id ? 'SELECCIONADO' : 'SELECCIONAR'}
              </button>
            </div>
          ))}
        </div>

        {/* Payment Section */}
        {selectedTicket && (
          <div className="mb-16 cosmic-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Selecciona tu método de pago</h3>
            <PaymentSelector ticket={TICKETS.find((t) => t.id === selectedTicket)!} />
          </div>
        )}

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Preguntas Frecuentes</h3>
          <div className="space-y-3 max-w-3xl mx-auto">
            {faqItems.map((item, idx) => (
              <div key={idx} className="cosmic-card rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-colors"
                >
                  <span className="font-semibold text-foreground text-left">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 border-t border-primary/20 text-foreground/80">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
