'use client'

import { useEffect, useState, useRef } from 'react'
import { TicketType, PAYPAL_CONFIG } from '@/lib/payment-config'

declare global {
  interface Window {
    paypal?: any
  }
}

interface PayPalCheckoutProps {
  ticket: TicketType
  onSuccess?: (details: any) => void
  onError?: (error: any) => void
}

export function PayPalCheckout({ ticket, onSuccess, onError }: PayPalCheckoutProps) {
  const [error, setError] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [showPayPalButton, setShowPayPalButton] = useState(false)
  const [isRenderingButtons, setIsRenderingButtons] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Cargar el script de PayPal solo una vez al montar
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
    if (!clientId) {
      setError('PayPal Client ID no configurado. Revisa las variables de entorno.')
      return
    }

    // Si PayPal ya está cargado, no hacer nada
    if (window.paypal) {
      return
    }

    const script = document.createElement('script')
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=${PAYPAL_CONFIG.currency}`
    script.async = true
    
    script.onerror = () => {
      setError('No se pudo cargar el servicio de PayPal. Intenta nuevamente.')
    }
    
    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  // Renderizar botones cuando showPayPalButton cambia
  useEffect(() => {
    if (!showPayPalButton) return

    const renderButtons = async () => {
      setIsRenderingButtons(true)

      // Esperar a que PayPal esté disponible
      let attempts = 0
      while (!window.paypal && attempts < 30) {
        await new Promise((resolve) => setTimeout(resolve, 100))
        attempts++
      }

      if (!window.paypal) {
        setError('PayPal no se pudo cargar. Intenta recargar la página.')
        setIsRenderingButtons(false)
        return
      }

      if (!containerRef.current) {
        setError('Error: contenedor no encontrado.')
        setIsRenderingButtons(false)
        return
      }

      try {
        // Limpiar contenedor
        containerRef.current.innerHTML = ''

        const totalAmount = (ticket.price * quantity).toFixed(2)

        window.paypal
          .Buttons({
            createOrder: (data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: totalAmount,
                      currency_code: PAYPAL_CONFIG.currency,
                    },
                    description: `${quantity}x ${ticket.name} - OVNI Festival 2024`,
                    custom_id: `name:${name}|email:${email}|quantity:${quantity}`,
                  },
                ],
              })
            },
            onApprove: (data: any, actions: any) => {
              return actions.order.capture().then((details: any) => {
                onSuccess?.(details)
              })
            },
            onError: (err: any) => {
              setError('Hubo un error procesando el pago. Intenta nuevamente.')
              onError?.(err)
            },
          })
          .render(containerRef.current)

        setIsRenderingButtons(false)
      } catch (err) {
        setError('Error al renderizar PayPal. Intenta recargar la página.')
        setIsRenderingButtons(false)
      }
    }

    renderButtons()
  }, [showPayPalButton, name, email, quantity, ticket, onSuccess, onError])

  const handleContinueClick = () => {
    if (name.trim() && email.trim()) {
      setShowPayPalButton(true)
    }
  }

  const isFormValid = name.trim().length > 0 && email.trim().length > 0

  if (error) {
    return (
      <div className="cosmic-card p-6 rounded-lg border border-red-500/50 bg-red-500/10">
        <p className="text-red-400 text-center">{error}</p>
        <p className="text-sm text-foreground/60 mt-2 text-center">
          Por favor, contacta con soporte o usa la opción de WhatsApp
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="cosmic-card p-6 rounded-lg border border-red-500/50 bg-red-500/10">
        <p className="text-red-400 text-center">{error}</p>
        <p className="text-sm text-foreground/60 mt-2 text-center">
          Por favor, intenta nuevamente o usa la opción de WhatsApp
        </p>
      </div>
    )
  }

  return (
    <div className="cosmic-card p-6 rounded-lg space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-primary mb-2">{ticket.name}</h3>
        <p className="text-sm text-foreground/70">
          Precio: <span className="text-accent font-bold">${ticket.price}</span> USD
        </p>
      </div>

      {!showPayPalButton ? (
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
                Total: ${(ticket.price * quantity).toFixed(2)}
              </span>
            </div>
          </div>

          <button
            onClick={handleContinueClick}
            disabled={!isFormValid}
            className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              isFormValid
                ? 'neon-button hover:scale-105'
                : 'bg-primary/30 text-primary/50 cursor-not-allowed'
            }`}
          >
            Continuar con PayPal
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              setShowPayPalButton(false)
              setName('')
              setEmail('')
              setQuantity(1)
            }}
            className="mb-4 text-sm text-primary hover:text-secondary transition"
          >
            ← Volver a editar
          </button>

          {isRenderingButtons ? (
            <div className="flex justify-center items-center min-h-37.5">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary border-t-accent"></div>
            </div>
          ) : (
            <div ref={containerRef} className="w-full" />
          )}
        </div>
      )}

      <p className="text-xs text-foreground/60 text-center">
        Tu información es segura. Los pagos se procesan directamente con PayPal.
      </p>
    </div>
  )
}

