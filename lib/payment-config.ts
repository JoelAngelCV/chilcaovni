export interface TicketType {
  id: string
  name: string
  description: string
  price: number
  pricePEN: number
  currency: string
  features: string[]
  color: string
}

export const TICKETS: TicketType[] = [
  {
    id: 'early-bird',
    name: 'Early Bird',
    description: 'Hasta el 30 de Agosto 2026',
    price: 15,
    pricePEN: 50,
    currency: 'USD',
    features: [
      'Acceso 3 días',
      'Descuento 67%',
      'Entrada temprana',
    ],
    color: 'from-primary to-secondary',
  },
  {
    id: 'preventa-1',
    name: 'Preventa 1',
    description: 'Hasta el 31 de Octubre 2026',
    price: 24,
    pricePEN: 80,
    currency: 'USD',
    features: [
      'Acceso 3 días',
      'Descuento 47%',
      'Acceso general',
    ],
    color: 'from-secondary to-primary',
  },
  {
    id: 'preventa-2',
    name: 'Preventa 2',
    description: 'Hasta el 31 de Diciembre 2026',
    price: 30,
    pricePEN: 100,
    currency: 'USD',
    features: [
      'Acceso 3 días',
      'Descuento 33%',
      'Acceso general',
    ],
    color: 'from-accent to-secondary',
  },
  {
    id: 'preventa-3',
    name: 'Preventa 3',
    description: 'Hasta el 04 de Febrero 2027',
    price: 36,
    pricePEN: 120,
    currency: 'USD',
    features: [
      'Acceso 3 días',
      'Descuento 20%',
      'Soporte tecnico',
      'Acceso general',
    ],
    color: 'from-primary to-accent',
  },
  {
    id: 'general',
    name: 'General',
    description: 'Día del evento',
    price: 45,
    pricePEN: 150,
    currency: 'USD',
    features: [
      'Acceso 3 días',
      'Todas las áreas',
      'Soporte prioritario',
      'Merch especial',
      'Acceso prioritario',
    ],
    color: 'from-secondary to-accent',
  }
]

export const PAYMENT_METHODS = {
  PAYPAL: 'paypal',
  WHATSAPP: 'whatsapp',
} as const

export const WHATSAPP_CONFIG = {
  phoneNumber: '51986487619', // Número de WhatsApp en formato internacional sin +
  countryCode: '+51',
  formattedNumber: '+51 986 487 619',
}

const toBoolean = (value?: string) => ['1', 'true', 'yes', 'on'].includes((value || '').toLowerCase())

export function getPayPalEnvironment(): 'sandbox' | 'live' {
  const explicitMode = process.env.NEXT_PUBLIC_PAYPAL_MODE || process.env.PAYPAL_MODE
  if (explicitMode) {
    const normalizedMode = explicitMode.toLowerCase()
    if (normalizedMode === 'sandbox' || normalizedMode === 'live') {
      return normalizedMode
    }
  }

  const sandboxFlag = process.env.NEXT_PUBLIC_PAYPAL_SANDBOX || process.env.PAYPAL_SANDBOX
  if (sandboxFlag !== undefined) {
    return toBoolean(sandboxFlag) ? 'sandbox' : 'live'
  }

  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || process.env.PAYPAL_CLIENT_ID || ''
  if (clientId.toLowerCase().includes('sandbox')) {
    return 'sandbox'
  }

  return 'live'
}

export const PAYPAL_CONFIG = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
  currency: 'USD',
  isConfigured: !!process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  mode: getPayPalEnvironment(),
}

export function isPeruvianNumber(phoneOrCode?: string): boolean {
  return phoneOrCode?.includes('PE') || phoneOrCode?.includes('51') || false
}

export function getPaymentMethod(country?: string): string {
  if (country === 'PE') return PAYMENT_METHODS.WHATSAPP
  return PAYMENT_METHODS.PAYPAL
}
