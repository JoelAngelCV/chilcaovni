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
    description: 'Acceso general + descuento temprano',
    price: 25,
    pricePEN: 80,
    currency: 'USD',
    features: [
      'Acceso 3 días',
      'Todas las áreas',
      'Descuento 35%',
      'Merch exclusivo',
    ],
    color: 'from-primary to-secondary',
  },
  {
    id: 'general',
    name: 'Entrada General',
    description: 'Acceso completo al festival',
    price: 35,
    pricePEN: 120,
    currency: 'USD',
    features: [
      'Acceso 3 días',
      'Todas las áreas',
      'Soporte prioritario',
      'Merch exclusivo',
    ],
    color: 'from-secondary to-accent',
  },
  {
    id: 'vip',
    name: 'VIP',
    description: 'Experiencia premium',
    price: 60,
    pricePEN: 200,
    currency: 'USD',
    features: [
      'Acceso 3 días',
      'Área VIP exclusiva',
      'Meet & Greet artistas',
      'DJ Booth privado',
      'Todas las áreas',
      'Ducha ilimitada',
      'Soporte premium',
      'Desayuno incluido',
      'Merchandise premium',
    ],
    color: 'from-accent to-primary',
  },
  {
    id: 'camping',
    name: 'Camping',
    description: 'Incluye tienda de campaña',
    price: 75,
    pricePEN: 250,
    currency: 'USD',
    features: [
      'Acceso 3 días',
      'Tienda de campaña',
      'Sleeping bag',
      'Todas las áreas',
      'Soporte prioritario',
      'Merch exclusivo',
    ],
    color: 'from-primary via-secondary to-accent',
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
