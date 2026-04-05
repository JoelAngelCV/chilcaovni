'use client'

import { useState } from 'react'
import Link from 'next/link'
import { TicketType, WHATSAPP_CONFIG } from '@/lib/payment-config'

interface WhatsAppCheckoutProps {
  ticket: TicketType
  buyerName?: string
  buyerEmail?: string
}

export function WhatsAppCheckout({ ticket, buyerName = '', buyerEmail = '' }: WhatsAppCheckoutProps) {
  const [name, setName] = useState(buyerName)
  const [email, setEmail] = useState(buyerEmail)
  const [quantity, setQuantity] = useState(1)

  const createWhatsAppMessage = () => {
    const message = `¡Hola! Me gustaría comprar ${quantity} entrada(s) ${ticket.name} para el Chilca Ovni Festival.

Detalles:
- Entrada: ${ticket.name}
- Cantidad: ${quantity}
- Precio unitario: S/. ${ticket.pricePEN}
- Total: S/. ${ticket.pricePEN * quantity}

Mi información:
- Nombre: ${name || 'No especificado'}
- Email: ${email || 'No especificado'}

¿Cuál es el siguiente paso para completar la compra?`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`
    return whatsappUrl
  }

  const isFormValid = name.trim().length > 0 && email.trim().length > 0

  return (
    <div className="cosmic-card p-6 rounded-lg space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-primary mb-2">{ticket.name}</h3>
        <p className="text-sm text-foreground/70">
          Precio: <span className="text-accent font-bold">S/. {ticket.pricePEN}</span> PEN
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Tu nombre
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Juan Pérez"
            className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Tu email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Cantidad
          </label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition"
            >
              −
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-16 px-3 py-2 rounded-lg bg-input border border-border text-center text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition"
            >
              +
            </button>
            <span className="ml-4 text-foreground/70 text-sm">
              Total: S/. {(ticket.pricePEN * quantity).toLocaleString('es-PE')}
            </span>
          </div>
        </div>
      </div>

      <Link
        href={createWhatsAppMessage()}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
          isFormValid
            ? 'neon-button hover:scale-105'
            : 'bg-primary/30 text-primary/50 cursor-not-allowed'
        }`}
      >
        Contactar por WhatsApp
      </Link>

      <p className="text-xs text-foreground/60 text-center">
        Te conectaremos con nuestro equipo de ventas vía WhatsApp para completar tu compra de forma segura.
      </p>
    </div>
  )
}
