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
    description: 'Acceso con descuento exclusivo',
    price: 100,
    pricePEN: 375,
    currency: 'USD',
    features: [
      'Acceso 2 días',
      'Descuento 40%',
      'Merch exclusivo',
      'Entrada temprana',
    ],
    color: 'from-primary to-secondary',
  },
  {
    id: 'preventa-1',
    name: 'Preventa 1',
    description: 'Primera fase de ventas',
    price: 130,
    pricePEN: 485,
    currency: 'USD',
    features: [
      'Acceso 2 días',
      'Descuento 30%',
      'Merch especial',
      'Acceso prioritario',
    ],
    color: 'from-secondary to-primary',
  },
  {
    id: 'preventa-2',
    name: 'Preventa 2',
    description: 'Segunda fase de ventas',
    price: 165,
    pricePEN: 615,
    currency: 'USD',
    features: [
      'Acceso 2 días',
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
    price: 200,
    pricePEN: 750,
    currency: 'USD',
    features: [
      'Acceso 2 días',
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
    price: 350,
    pricePEN: 1300,
    currency: 'USD',
    features: [
      'Acceso 2 días',
      'Área VIP exclusiva',
      'Meet & Greet artistas',
      'Comida y bebida ilimitada',
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
  phoneNumber: '51925610070', // Número de WhatsApp en formato internacional sin +
  countryCode: '+51',
  formattedNumber: '+51 925 610 070',
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
