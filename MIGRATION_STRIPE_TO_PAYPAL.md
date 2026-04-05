# Migración: Stripe → PayPal + WhatsApp

## Resumen de cambios

Se ha reemplazado el sistema de pagos de Stripe por un sistema dual:
- **PayPal** para pagos internacionales (USD)
- **WhatsApp** para ventas locales en Perú (PEN)

## Archivos Eliminados

```
✗ lib/stripe.ts
✗ components/checkout.tsx
✗ app/actions/stripe.ts
✗ lib/products.ts
```

## Archivos Creados

```
✓ lib/payment-config.ts          # Configuración centralizada de pagos
✓ components/payment-selector.tsx # Selector PayPal/WhatsApp
✓ components/paypal-checkout.tsx  # Integración PayPal
✓ components/whatsapp-checkout.tsx # Formulario WhatsApp
✓ PAYMENT_SETUP.md               # Guía de configuración completa
✓ QUICK_PAYMENT_SETUP.md         # Guía rápida
✓ PAYMENT_EXAMPLES.md            # Ejemplos de uso
✓ MIGRATION_STRIPE_TO_PAYPAL.md  # Este archivo
```

## Archivos Modificados

```
~ components/tickets-section.tsx  # Ahora usa PaymentSelector
~ .env.example                   # Nuevas variables de entorno
~ package.json                   # Removidas dependencies de Stripe
~ README.md                      # Documentación actualizada
```

## Cambios en Dependencias

### Eliminadas
```json
"@stripe/react-stripe-js": "^2.4.0",
"@stripe/stripe-js": "^3.0.0",
"stripe": "^14.0.0"
```

### No se agregaron nuevas dependencias
PayPal y WhatsApp funcionan sin packages adicionales:
- PayPal: SDK cargado dinámicamente desde CDN
- WhatsApp: Links https://wa.me/ nativos

## Variables de Entorno

### Antes (Stripe)
```bash
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### Ahora (PayPal + WhatsApp)
```bash
NEXT_PUBLIC_PAYPAL_CLIENT_ID=...
NEXT_PUBLIC_WHATSAPP_NUMBER=51987654321
```

## Cambios en Estructura de Datos

### Antes: PRODUCTS (Stripe)
```typescript
interface Product {
  id: string
  name: string
  description: string
  priceInCents: number // Almacenado en centavos
  images?: string[]
}
```

### Ahora: TICKETS (PayPal + WhatsApp)
```typescript
interface TicketType {
  id: string
  name: string
  description: string
  price: number        // USD para PayPal
  pricePEN: number    // PEN para WhatsApp
  currency: string
  features: string[]
  color: string
}
```

## Flujo de Pago

### Antes (Stripe)
```
Usuario → Selecciona entrada → Stripe Checkout → Pago procesado automático
```

### Ahora (PayPal + WhatsApp)
```
Usuario → Selecciona entrada
   ├─→ PayPal: Usuario completa pago automático
   └─→ WhatsApp: Usuario abre WhatsApp → Vendedor confirma manualmente
```

## Ventajas del Nuevo Sistema

✓ **PayPal**: Pagos seguros internacionales instantáneos  
✓ **WhatsApp**: Contacto directo con vendedores, soporte local  
✓ **Sin backend**: Ambos métodos funcionan sin servidor  
✓ **Precios duales**: USD para extranjero, PEN para Perú  
✓ **Flexibilidad**: Fácil agregar más métodos de pago  
✓ **Menor costo**: Sin comisiones de transacción (WhatsApp)  

## Cambios en UX

### Selección de Entradas
Igual - Los usuarios seleccionan el mismo tipo de entrada

### Checkout
Ahora los usuarios eligen entre 2 métodos:
1. **PayPal** (🌍 Internacional - USD)
2. **WhatsApp** (💬 Perú - PEN)

### Confirmación de Pago
- **PayPal**: Instantánea en pantalla
- **WhatsApp**: Conversación por chat

## Pasos para Implementar

### 1. Obtener PayPal Client ID
- Ir a https://developer.paypal.com/
- Crear aplicación
- Copiar Client ID

### 2. Configurar Variables de Entorno
```bash
NEXT_PUBLIC_PAYPAL_CLIENT_ID=tu_client_id
NEXT_PUBLIC_WHATSAPP_NUMBER=51987654321
```

### 3. Instalar Dependencias
```bash
pnpm install  # Stripe dependencies se removieron automáticamente
```

### 4. Actualizar Precios (Opcional)
Editar `lib/payment-config.ts` - array `TICKETS`

### 5. Deploy
```bash
pnpm build
# Deploy a Vercel, AWS, Netlify, etc.
```

## Testing

### PayPal (Modo Sandbox)
- Cliente ID de Sandbox en PayPal Developer
- Tarjeta de prueba: 4111111111111111
- Funciona en localhost y producción

### WhatsApp
- Probar en móvil o WhatsApp Web
- Verificar que el número sea correcto
- Revisar formato del mensaje

## Rollback (Si es necesario)

Si necesitas volver a Stripe:

1. Revertir commits de Git
2. O agregar manualmente de nuevo:
   - `checkout.tsx`
   - `lib/stripe.ts`
   - `app/actions/stripe.ts`
   - Dependencies en `package.json`

## Soporte y Mantenimiento

### Mantener Precios Actualizados
Los precios están en `lib/payment-config.ts`:
```typescript
const TICKETS: TicketType[] = [
  {
    price: 150,      // USD
    pricePEN: 560,   // PEN (aprox 3.73x)
  },
  // ...
]
```

### Cambiar Número de WhatsApp
Editar `WHATSAPP_CONFIG.phoneNumber` en `lib/payment-config.ts`

### Agregar Nuevo Método de Pago
1. Crear componente tipo `paypal-checkout.tsx`
2. Agregar a `PAYMENT_METHODS` enum
3. Actualizar `PaymentSelector`

## Documentación de Referencia

Para más detalles, consulta:
- **PAYMENT_SETUP.md** - Configuración completa
- **QUICK_PAYMENT_SETUP.md** - Setup en 5 minutos
- **PAYMENT_EXAMPLES.md** - Ejemplos de código

## Notas Técnicas

### PayPal SDK
- Se carga dinámicamente desde CDN
- No requiere bundling
- Soporta modo Sandbox y Live
- Handles seguridad automáticamente

### WhatsApp Integration
- Links nativos wa.me/
- Funciona en todos los dispositivos
- Preformatea mensajes automáticamente
- No requiere API key

### Detectar Ubicación
El código puede extenderse para detectar automáticamente:
```typescript
const response = await fetch('https://ipapi.co/json/')
const data = await response.json()
if (data.country_code === 'PE') {
  // Sugerir WhatsApp
}
```

## FAQ Técnico

**¿PayPal requiere backend?**
No, el SDK se ejecuta en el navegador del cliente.

**¿WhatsApp es seguro?**
Sí, pero es manual. El usuario debe completar el pago después.

**¿Puedo usar ambos simultáneamente?**
Sí, el sistema está diseñado para ambos.

**¿Cómo manejo reembolsos?**
PayPal: Dashboard de PayPal
WhatsApp: Coordinación manual

**¿Qué pasa si caduca el Client ID de PayPal?**
El sitio mostrará un error. Actualiza en `.env.local`.

---

**Migración completada exitosamente** ✓
