'use client'

import { useState, useEffect } from 'react'
import { TicketType, PAYMENT_METHODS, WHATSAPP_CONFIG, PAYPAL_CONFIG } from '@/lib/payment-config'
import { PayPalCheckout } from './paypal-checkout'
import { WhatsAppCheckout } from './whatsapp-checkout'

interface PaymentSelectorProps {
  ticket: TicketType
}

export function PaymentSelector({ ticket }: PaymentSelectorProps) {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)
  const [isPeruan, setIsPeruan] = useState(false)

  useEffect(() => {
    // Detectar ubicación basado en localStorage o geolocation
    const saved = localStorage.getItem('payment-preference')
    if (saved) {
      setSelectedPayment(saved)
      setIsPeruan(saved === PAYMENT_METHODS.WHATSAPP)
    } else {
      // Por defecto mostrar ambas opciones, pero sugerir PayPal si está configurado
      if (PAYPAL_CONFIG.isConfigured) {
        setSelectedPayment(PAYMENT_METHODS.PAYPAL)
      } else {
        setSelectedPayment(PAYMENT_METHODS.WHATSAPP)
      }
    }
  }, [])

  const handlePaymentChange = (method: string) => {
    setSelectedPayment(method)
    setIsPeruan(method === PAYMENT_METHODS.WHATSAPP)
    localStorage.setItem('payment-preference', method)
  }

  return (
    <div className="space-y-6">
      {/* PayPal Configuration Warning */}
      {!PAYPAL_CONFIG.isConfigured && (
        <div className="cosmic-card p-4 rounded-lg border border-yellow-500/50 bg-yellow-500/10">
          <p className="text-yellow-400 text-sm">
            ⚠️ <strong>PayPal no está configurado.</strong> Para aceptar pagos internacionales, agrega <code className="bg-background px-2 py-1 rounded text-xs">NEXT_PUBLIC_PAYPAL_CLIENT_ID</code> a tu archivo <code className="bg-background px-2 py-1 rounded text-xs">.env.local</code>
          </p>
          <p className="text-yellow-300 text-xs mt-2">
            Consulta <strong>PAYMENT_SETUP.md</strong> para instrucciones completas.
          </p>
        </div>
      )}

      {/* Payment method selector */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => handlePaymentChange(PAYMENT_METHODS.PAYPAL)}
          disabled={!PAYPAL_CONFIG.isConfigured}
          className={`flex-1 p-4 rounded-lg border-2 transition-all duration-300 ${
            selectedPayment === PAYMENT_METHODS.PAYPAL
              ? 'border-primary bg-primary/10'
              : 'border-border bg-card/50 hover:border-primary/50'
          } ${!PAYPAL_CONFIG.isConfigured ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🌍</span>
            <div className="text-left">
              <p className="font-semibold text-foreground">PayPal</p>
              <p className="text-xs text-foreground/60">
                {PAYPAL_CONFIG.isConfigured ? 'Internacional - USD' : 'No configurado'}
              </p>
            </div>
          </div>
        </button>

        <button
          onClick={() => handlePaymentChange(PAYMENT_METHODS.WHATSAPP)}
          className={`flex-1 p-4 rounded-lg border-2 transition-all duration-300 ${
            selectedPayment === PAYMENT_METHODS.WHATSAPP
              ? 'border-accent bg-accent/10'
              : 'border-border bg-card/50 hover:border-accent/50'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">💬</span>
            <div className="text-left">
              <p className="font-semibold text-foreground">WhatsApp</p>
              <p className="text-xs text-foreground/60">Perú - PEN</p>
            </div>
          </div>
        </button>
      </div>

      {/* Payment component based on selection */}
      {selectedPayment === PAYMENT_METHODS.PAYPAL && <PayPalCheckout ticket={ticket} />}

      {selectedPayment === PAYMENT_METHODS.WHATSAPP && <WhatsAppCheckout ticket={ticket} />}

      {/* Info box */}
      <div className="glow-border p-4 rounded-lg">
        <p className="text-sm text-foreground/80">
          {selectedPayment === PAYMENT_METHODS.PAYPAL
            ? '💳 Pago seguro con PayPal. Acepta tarjetas de crédito, débito y monederos digitales internacionales.'
            : '💬 Envía tu información por WhatsApp y nuestro equipo te contactará para confirmar tu compra. Aceptamos depósitos bancarios y transferencias.'}
        </p>
      </div>
    </div>
  )
}
