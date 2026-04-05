# Visión General del Sistema de Pagos

## Arquitectura

```
┌─────────────────────────────────────────────────────────┐
│                    OVNI Festival Website                 │
│                   (Next.js + Tailwind)                   │
└─────────────────┬───────────────────────────────────────┘
                  │
                  ├─ lib/payment-config.ts
                  │  ├─ TICKETS[] (Catálogo)
                  │  ├─ PAYPAL_CONFIG
                  │  └─ WHATSAPP_CONFIG
                  │
        ┌─────────┴──────────────────┐
        │                            │
        ▼                            ▼
   ┌─────────────┐            ┌──────────────┐
   │   PayPal    │            │  WhatsApp    │
   │  (USD $)    │            │  (PEN S/.)   │
   └─────┬───────┘            └──────┬───────┘
         │                           │
    SDK Global                   wa.me/ URLs
    (CDN Load)                   (Native)
         │                           │
         ├─────────────────────┬─────┤
         │                     │
         ▼                     ▼
  ┌─────────────────┐  ┌──────────────────┐
  │ PayPal Checkout │  │ WhatsApp Message │
  │   (Seguro)      │  │  (Manual)        │
  └────────┬────────┘  └────────┬─────────┘
           │                    │
           ▼                    ▼
      Pago Automático    Contacto Directo
      Confirmación       Validación Manual
      Instantánea        Depósito Bancario
```

## Flujo de Usuario

### Comprador Internacional (PayPal)

```
1. Visita Festival OVNI Website
           ▼
2. Explora secciones (Hero, Artistas, Galería)
           ▼
3. Selecciona tipo de entrada (Early Bird, General, VIP, Camping)
           ▼
4. Ve precios en USD
           ▼
5. Elige "PayPal" como método de pago
           ▼
6. Se carga botón de PayPal
           ▼
7. Completa información y pago
           ▼
8. PayPal procesa transacción
           ▼
9. Recibe confirmación en pantalla
           ▼
10. Email de confirmación en buena hora
```

### Comprador Peruano (WhatsApp)

```
1. Visita Festival OVNI Website
           ▼
2. Explora secciones
           ▼
3. Selecciona tipo de entrada
           ▼
4. Ve precios en PEN
           ▼
5. Elige "WhatsApp" como método de pago
           ▼
6. Completa formulario (nombre, email, cantidad)
           ▼
7. Presiona "Contactar por WhatsApp"
           ▼
8. Se abre WhatsApp con número preformateado
           ▼
9. Envía mensaje con detalle de compra
           ▼
10. Vendedor recibe y responde
           ▼
11. Coordina depósito bancario o pago
           ▼
12. Confirmación por WhatsApp
```

## Componentes del Sistema

### Frontend Components

```
payment-selector.tsx
├─ Renderiza botones de selección (PayPal / WhatsApp)
├─ Detecta preferencia del usuario
├─ Guarda en localStorage
└─ Renderiza componente apropiado

paypal-checkout.tsx
├─ Carga dinámicamente SDK de PayPal
├─ Renderiza botón de pago
├─ Maneja transacciones
└─ Callbacks de éxito/error

whatsapp-checkout.tsx
├─ Formulario de información
├─ Selector de cantidad
├─ Genera mensaje preformateado
└─ Link a WhatsApp
```

### Configuration Files

```
lib/payment-config.ts
├─ TICKETS[] array con todas las entradas
├─ PAYPAL_CONFIG con Client ID
├─ WHATSAPP_CONFIG con número
└─ Funciones auxiliares
```

### Integration Points

```
tickets-section.tsx
├─ Renderiza grid de entradas
├─ Permite seleccionar entrada
├─ Renderiza PaymentSelector
└─ Muestra precios en USD y PEN
```

## Tipos de Entrada

| ID | Nombre | USD | PEN | Features |
|----|--------|-----|-----|----------|
| `early-bird` | Early Bird | $150 | S/. 560 | 2 días + camping + descuento 25% |
| `general` | General | $200 | S/. 750 | 2 días + todas las áreas |
| `vip` | VIP | $350 | S/. 1,300 | 2 días + VIP exclusivo + Meet & Greet |
| `camping` | Camping | $250 | S/. 930 | 2 días + tienda + servicios |

## Variables de Entorno

```bash
# PayPal (Obtén de https://developer.paypal.com/)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=AbCdEfGhIj...

# WhatsApp (Formato: país + número)
NEXT_PUBLIC_WHATSAPP_NUMBER=51987654321
```

## Flujo de Datos

### PayPal Payment Flow

```
1. Usuario presiona botón de PayPal
   ↓
2. paypal-checkout.tsx carga SDK
   ↓
3. SDK renderiza interfaz de PayPal
   ↓
4. Usuario completa pago en PayPal
   ↓
5. PayPal retorna details del pago
   ↓
6. onSuccess callback procesa confirmación
   ↓
7. Usuario ve confirmación en pantalla
```

### WhatsApp Message Flow

```
1. Usuario completa formulario (nombre, email, cantidad)
   ↓
2. Usuario presiona "Contactar por WhatsApp"
   ↓
3. whatsapp-checkout.tsx genera mensaje
   ↓
4. Mensaje incluye: entrada, cantidad, precios, info del usuario
   ↓
5. Abre wa.me/ link con mensaje preformateado
   ↓
6. Usuario abre WhatsApp (móvil o desktop)
   ↓
7. Mensaje se completa automáticamente
   ↓
8. Usuario presiona enviar
   ↓
9. Tu equipo recibe mensaje y responde
```

## Ventajas Comparativas

### vs Stripe

| Aspecto | PayPal + WhatsApp | Stripe |
|---------|-------------------|--------|
| Setup | 15 minutos | 30 minutos |
| Backend | No necesario | Necesario |
| Costo | Bajo (WhatsApp gratis) | $0.30 + % |
| Soporte Local | Sí (WhatsApp) | No |
| Automático | PayPal sí, WhatsApp no | Sí |
| Desarrollo | Más simple | Más complejo |
| Mantenimiento | Fácil | Requiere webhooks |

## Security Features

### PayPal
- ✓ SSL/TLS encryption
- ✓ PCI DSS compliant
- ✓ Fraud protection
- ✓ Buyer protection
- ✓ Secure tokens

### WhatsApp
- ✓ End-to-end encryption (nativa)
- ✓ Verificación de número
- ✓ Manual verification
- ✓ No almacena datos sensibles
- ✓ Mensajes en servidor de WhatsApp

## Escalabilidad

### Fase 1: Inicial
- PayPal en Sandbox
- WhatsApp manual
- Archivos estáticos

### Fase 2: Crecimiento
- PayPal en modo Live
- Agregar Mercado Pago
- Base de datos para órdenes

### Fase 3: Avanzado
- Webhook de PayPal automático
- WhatsApp Business API
- Dashboard de administrador
- Sistema de tickets QR

## Métricas a Monitorear

```
PayPal
├─ Transacciones exitosas
├─ Tasa de abandono
├─ Ingresos USD
└─ Promedio de transacción

WhatsApp
├─ Mensajes recibidos
├─ Conversión a compra
├─ Ingresos PEN
├─ Tiempo de respuesta
└─ Satisfacción del cliente
```

## Roadmap

### Corto Plazo (1-2 semanas)
- [ ] Live con PayPal
- [ ] Validación completa de WhatsApp
- [ ] Testing en producción
- [ ] Documentación de procesos

### Mediano Plazo (1-2 meses)
- [ ] Base de datos para órdenes
- [ ] Confirmación automática por email
- [ ] Códigos QR para entradas
- [ ] Dashboard básico

### Largo Plazo (3+ meses)
- [ ] WhatsApp Business API
- [ ] Webhook de PayPal automático
- [ ] Panel de administrador completo
- [ ] Análisis de datos
- [ ] Más métodos de pago regionales

## Contacto y Soporte

Para preguntas sobre:
- **PayPal**: https://developer.paypal.com/docs/
- **WhatsApp**: Links nativos, sin API necesaria
- **Sistema**: Ver PAYMENT_SETUP.md

## Archivos de Documentación

1. **README.md** - Visión general del proyecto
2. **QUICK_PAYMENT_SETUP.md** - Setup en 5 minutos
3. **PAYMENT_SETUP.md** - Configuración detallada
4. **PAYMENT_EXAMPLES.md** - Ejemplos de código
5. **MIGRATION_STRIPE_TO_PAYPAL.md** - Detalles de migración
6. **SETUP_CHECKLIST.md** - Lista de verificación
7. **SYSTEM_OVERVIEW.md** - Este archivo

---

**Sistema de Pagos Dual Completamente Implementado** ✓
