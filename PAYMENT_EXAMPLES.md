# Ejemplos de Uso: PayPal + WhatsApp

## Usar el componente de pago

### 1. Seleccionar entrada y mostrar opciones de pago

```tsx
import { TicketsSection } from '@/components/tickets-section'

export default function Tickets() {
  return <TicketsSection />
}
```

El `TicketsSection` maneja automáticamente:
- Selección de entrada
- Selector de PayPal/WhatsApp
- Procesamiento de pago

### 2. Usar PaymentSelector directamente

```tsx
import { PaymentSelector } from '@/components/payment-selector'
import { TICKETS } from '@/lib/payment-config'

export default function CheckoutPage() {
  const ticket = TICKETS[0] // Early Bird
  
  return (
    <div>
      <h1>Checkout</h1>
      <PaymentSelector ticket={ticket} />
    </div>
  )
}
```

### 3. Usar solo PayPal

```tsx
import { PayPalCheckout } from '@/components/paypal-checkout'
import { TICKETS } from '@/lib/payment-config'

export default function PayPalPage() {
  const ticket = TICKETS[2] // VIP
  
  return (
    <PayPalCheckout 
      ticket={ticket}
      onSuccess={(details) => console.log('Pago exitoso:', details)}
      onError={(error) => console.log('Error:', error)}
    />
  )
}
```

### 4. Usar solo WhatsApp

```tsx
import { WhatsAppCheckout } from '@/components/whatsapp-checkout'
import { TICKETS } from '@/lib/payment-config'

export default function WhatsAppPage() {
  const ticket = TICKETS[1] // General
  
  return (
    <WhatsAppCheckout 
      ticket={ticket}
      buyerName="Juan Pérez"
      buyerEmail="juan@example.com"
    />
  )
}
```

## Acceder a información de precios

### Obtener todos los tickets

```tsx
import { TICKETS } from '@/lib/payment-config'

// TICKETS es un array de TicketType
TICKETS.forEach(ticket => {
  console.log(`${ticket.name}: $${ticket.price} USD / S/. ${ticket.pricePEN}`)
})
```

### Buscar entrada específica

```tsx
import { TICKETS } from '@/lib/payment-config'

const vipTicket = TICKETS.find(t => t.id === 'vip')
console.log(vipTicket?.name) // "VIP"
console.log(vipTicket?.price) // 350
```

### Acceder a configuración de PayPal

```tsx
import { PAYPAL_CONFIG } from '@/lib/payment-config'

console.log(PAYPAL_CONFIG.clientId) // Desde env
console.log(PAYPAL_CONFIG.currency) // "USD"
```

### Acceder a configuración de WhatsApp

```tsx
import { WHATSAPP_CONFIG } from '@/lib/payment-config'

console.log(WHATSAPP_CONFIG.phoneNumber) // "51987654321"
console.log(WHATSAPP_CONFIG.countryCode) // "+51"
console.log(WHATSAPP_CONFIG.formattedNumber) // "+51 987 654 321"
```

## Detectar país y sugerir método de pago

```tsx
import { getPaymentMethod, PAYMENT_METHODS } from '@/lib/payment-config'

// Función que retorna el método recomendado según país
const method = getPaymentMethod('PE') // PAYMENT_METHODS.WHATSAPP
const method2 = getPaymentMethod('US') // PAYMENT_METHODS.PAYPAL
```

## Crear mensaje de WhatsApp personalizado

### Opción 1: Usar WhatsAppCheckout component (automático)

El componente genera automáticamente el mensaje basado en los inputs.

### Opción 2: Manual

```tsx
import { WHATSAPP_CONFIG, TICKETS } from '@/lib/payment-config'

const ticket = TICKETS[0]
const quantity = 2
const name = 'Juan Pérez'
const email = 'juan@example.com'

const message = `¡Hola! Me gustaría comprar ${quantity} entrada(s) ${ticket.name}.

Detalles:
- Entrada: ${ticket.name}
- Cantidad: ${quantity}
- Precio unitario: S/. ${ticket.pricePEN}
- Total: S/. ${ticket.pricePEN * quantity}

Nombre: ${name}
Email: ${email}`

const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(message)}`

// Abrir WhatsApp
window.open(whatsappUrl, '_blank')
```

## Almacenar preferencia de usuario

El `PaymentSelector` guarda automáticamente la preferencia en `localStorage`:

```tsx
// Obtener preferencia guardada
const saved = localStorage.getItem('payment-preference')
if (saved === 'paypal') {
  // Usuario prefiere PayPal
}
```

## Validar información antes de pagar

### Validación en WhatsApp

```tsx
import { WhatsAppCheckout } from '@/components/whatsapp-checkout'

export default function CheckWhatsApp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  
  const isValid = name.trim().length > 0 && email.trim().length > 0
  
  return (
    <div>
      {!isValid && <p>Por favor completa todos los campos</p>}
      <WhatsAppCheckout 
        ticket={ticket}
        buyerName={name}
        buyerEmail={email}
      />
    </div>
  )
}
```

## Casos de uso típicos

### Case 1: Usuario desde el extranjero

```
1. Selecciona entrada
2. Sistema sugiere PayPal
3. Completa pago con tarjeta internacional
4. Recibe confirmación al instante
```

### Case 2: Usuario desde Perú

```
1. Selecciona entrada (precios en PEN)
2. Sistema sugiere WhatsApp
3. Completa formulario
4. Se abre WhatsApp
5. Vendedor confirma por WhatsApp
6. Usuario realiza depósito
```

## Extender el sistema

### Agregar nuevo método de pago (ej: Mercado Pago)

1. Crear componente: `components/mercadopago-checkout.tsx`
2. Agregar a `PAYMENT_METHODS` en `lib/payment-config.ts`
3. Agregar opción en `PaymentSelector`
4. Actualizar `.env.example`

### Agregar más entradas

```tsx
// lib/payment-config.ts
export const TICKETS: TicketType[] = [
  // ... existentes ...
  {
    id: 'vip-plus',
    name: 'VIP Plus',
    description: 'Experiencia ultra premium',
    price: 500,
    pricePEN: 1850,
    currency: 'USD',
    features: ['Acceso VIP', 'Meet & Greet privado', 'Transporte incluido'],
    color: 'from-primary to-accent',
  },
]
```

### Registrar compra en base de datos

```tsx
// Agregar en PayPalCheckout.tsx onSuccess
async function recordPurchase(details: any) {
  await fetch('/api/purchases', {
    method: 'POST',
    body: JSON.stringify({
      paypalId: details.id,
      ticketId: ticket.id,
      amount: ticket.price,
      // ... más datos
    })
  })
}
```

## Troubleshooting

### "NEXT_PUBLIC_PAYPAL_CLIENT_ID no está definido"

```
Error: PayPal no está configurado correctamente

Solución:
1. Crea .env.local
2. Agrega: NEXT_PUBLIC_PAYPAL_CLIENT_ID=tu_id
3. Reinicia servidor: pnpm dev
```

### "WhatsApp no abre desde el navegador"

```
El navegador debe tener WhatsApp Web instalado o
el usuario debe abrir en un dispositivo móvil.
En desktop, WhatsApp Web se abre automáticamente.
```

### "Precios muestran incorrectamente"

```
Edita TICKETS en lib/payment-config.ts
Los cambios aplican inmediatamente (sin rebuild)
```
