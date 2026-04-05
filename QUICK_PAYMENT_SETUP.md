# Setup Rápido: PayPal + WhatsApp

## En 5 minutos

### 1. PayPal Client ID
```bash
# Ve a https://developer.paypal.com/ → Apps & Credentials → Sandbox
# Copia tu Client ID
# Agrega a .env.local:
NEXT_PUBLIC_PAYPAL_CLIENT_ID=AbCdEfGhIjKlMnOpQrStUvWxYz...
```

### 2. WhatsApp Número
```bash
# Edita lib/payment-config.ts
# Actualiza WHATSAPP_CONFIG.phoneNumber con tu número
# Formato: 51987654321 (sin + ni espacios)
```

### 3. Precios (opcional)
```typescript
// lib/payment-config.ts - Array TICKETS
{
  id: 'early-bird',
  name: 'Early Bird',
  price: 150,      // USD
  pricePEN: 560,   // PEN
  // ...
}
```

### 4. Deploy
```bash
pnpm install
pnpm build
# Deploy a Vercel (o tu hosting preferido)
```

## Test Rápido

1. **PayPal**: Modo Sandbox - tarjeta test 4111111111111111
2. **WhatsApp**: Abre en móvil y prueba el mensaje

## Cambios Respecto a Stripe

| Antes | Ahora |
|-------|-------|
| `lib/stripe.ts` | Eliminado |
| `components/checkout.tsx` | Eliminado |
| `app/actions/stripe.ts` | Eliminado |
| `lib/products.ts` | → `lib/payment-config.ts` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `NEXT_PUBLIC_PAYPAL_CLIENT_ID` |
| - | `NEXT_PUBLIC_WHATSAPP_NUMBER` |

## Dudas Comunes

**¿Cuál es la conversión USD a PEN?**
Actualmente 3.7-3.9. Actualiza manualmente en `TICKETS`.

**¿Puedo cambiar el número de WhatsApp?**
Sí, edita `WHATSAPP_CONFIG.phoneNumber` en `lib/payment-config.ts`.

**¿PayPal requiere servidor?**
No, el SDK se carga directamente en el navegador.

**¿Cómo recibo las órdenes de WhatsApp?**
Directamente en tu WhatsApp. Luego confirmas manualmente.
