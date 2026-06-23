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
      'Descuento 40%',
      'Merch exclusivo',
      'Entrada temprana',
    ],
    color: 'from-primary to-secondary',
  },
  {
    id: 'preventa-1',
    name: 'Preventa 1',
    description: 'Hasta el 31 de Octubre 2026',
    price: 22,
    pricePEN: 70,
    currency: 'USD',
    features: [
      'Acceso 3 días',
      'Descuento 30%',
      'Merch especial',
      'Acceso prioritario',
    ],
    color: 'from-secondary to-primary',
  },
  {
    id: 'preventa-2',
    name: 'Preventa 2',
    description: 'Hasta el 15 de Diciembre 2026',
    price: 25,
    pricePEN: 80,
    currency: 'USD',
    features: [
      'Acceso 3 días',
      'Descuento 17%',
      'Soporte prioritario',
      'Acceso general',
    ],
    color: 'from-accent to-secondary',
  },
  {
    id: 'general',
    name: 'General',
    description: 'Acceso completo al festival',
    price: 36,
    pricePEN: 120,
    currency: 'USD',
    features: [
      'Acceso 3 días',
      'Todas las áreas',
      'Soporte técnico',
      'Acceso general',
    ],
    color: 'from-secondary to-accent',
  },
  {
    id: 'vip',
    name: 'VIP',
    description: 'Experiencia premium exclusiva',
    price: 55,
    pricePEN: 180,
    currency: 'USD',
    features: [
      'Acceso 3 días',
      'Área VIP exclusiva',
      'Meet & Greet artistas',
      'Desayunos incluidos',
      'Duchas ilimitadas',
      'Merchandise premium',
    ],
    color: 'from-accent to-primary',
  },
]

export const PAYMENT_METHODS = {
  PAYPAL: 'paypal',
  WHATSAPP: 'whatsapp',
} as const

export const WHATSAPP_CONFIG = {
  phoneNumber: '51999999999', // Número de WhatsApp en formato internacional sin +
  countryCode: '+51',
  formattedNumber: '+51 999 999 999',
}

export const PAYPAL_CONFIG = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
  currency: 'USD',
  isConfigured: !!process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
}

export function isPeruvianNumber(phoneOrCode?: string): boolean {
  return phoneOrCode?.includes('PE') || phoneOrCode?.includes('51') || false
}

export function getPaymentMethod(country?: string): string {
  if (country === 'PE') return PAYMENT_METHODS.WHATSAPP
  return PAYMENT_METHODS.PAYPAL
}
