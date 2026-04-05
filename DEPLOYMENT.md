# Guía de Despliegue - Festival OVNI

## Pasos Rápidos para Deploy en Vercel

### 1. Preparación Inicial

Asegúrate de tener:
- Cuenta en GitHub
- Código pusheado a un repositorio GitHub
- Cuenta en [Stripe Dashboard](https://dashboard.stripe.com)
- Claves de API de Stripe listas

### 2. Obtener Claves de Stripe

1. Ve a [Stripe Dashboard](https://dashboard.stripe.com)
2. En "API Keys", encontrarás:
   - **Publishable key** (pk_test_...)
   - **Secret key** (sk_test_...)

**⚠️ IMPORTANTE:** 
- La Secret Key NUNCA debe compartirse ni exponerse en el cliente
- Usa claves de TEST mientras desarrollas
- Cambia a claves LIVE cuando estés listo para producción

### 3. Desplegar en Vercel

1. **Conectar GitHub**
   - Ve a [vercel.com](https://vercel.com)
   - Haz click en "New Project"
   - Selecciona tu repositorio

2. **Configurar Variables de Entorno**
   - En la página de configuración, ve a "Environment Variables"
   - Agrega las siguientes variables:

```
STRIPE_SECRET_KEY = sk_test_xxxxx...
STRIPE_PUBLISHABLE_KEY = pk_test_xxxxx...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_test_xxxxx...
STRIPE_MCP_KEY = [Opcional]
```

3. **Deploy**
   - Vercel detectará Next.js automáticamente
   - Click en "Deploy"
   - Tu sitio estará en vivo en ~1 minuto

### 4. Configuración de Webhook (Opcional)

Para notificaciones en tiempo real cuando se completen pagos:

1. Ve a [Stripe Webhooks](https://dashboard.stripe.com/webhooks)
2. Crea un nuevo endpoint
3. URL: `https://tudominio.com/api/webhooks/stripe`
4. Eventos a escuchar:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`

## Actualizar Información del Festival

Todos los datos del evento están centralizados en `/lib/festival-config.ts`

Para actualizar:

```typescript
// /lib/festival-config.ts

export const FESTIVAL_INFO = {
  name: 'Festival OVNI',
  location: {
    name: 'Punta Yaya',
    city: 'Chilca',
    region: 'Lima',
    country: 'Perú',
  },
  // ... más campos
}
```

**Cambios en vivo**: Simplemente git push y Vercel desplegará automáticamente.

## Pasar a Producción

### Cambiar de Test a Live Keys

1. En Stripe Dashboard, cambia de "Test mode" a "Live mode"
2. Obtén tus LIVE keys (pk_live_... y sk_live_...)
3. En Vercel Settings:
   - Crea una nueva variable `STRIPE_SECRET_KEY_LIVE`
   - Actualiza `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` con el key live
4. Redeploy

### Dominio Personalizado

1. En Vercel Project Settings → Domains
2. Agrega tu dominio personalizado
3. Sigue las instrucciones de DNS

### SSL/HTTPS

Vercel proporciona certificado SSL gratis automáticamente.

## Monitoreo y Mantenimiento

### Revisar Pagos en Stripe Dashboard

- Dashboard principal muestra recientes transacciones
- Reportes de ingresos en "Reports"
- Listado de clientes en "Customers"

### Analytics

- Habilita Google Analytics o Vercel Analytics
- Monitorea tráfico y conversiones de entradas

### Logs

En Vercel Dashboard:
- "Deployments" → "View Logs" para errores
- "Functions" para API errors

## Troubleshooting

### Error: "Stripe key not found"
- Verifica que las variables de entorno estén correctamente nombradas
- Redeploy después de agregar variables

### Error: "Payment declined"
- En test mode, usa tarjeta: `4242 4242 4242 4242`
- Cualquier fecha futura y cualquier CVC

### El checkout no carga
- Verifica que `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` sea accesible
- Revisa browser console para errores JavaScript

## Soporte

- **Vercel Support**: vercel.com/support
- **Stripe Support**: stripe.com/support
- **Documentación**: nextjs.org, stripe.com/docs

## Checklist Pre-Lanzamiento

- [ ] Claves Stripe configuradas en Vercel
- [ ] Variables de entorno validadas
- [ ] Información del festival actualizada
- [ ] Test de compra completado
- [ ] Contacto en footer funcional
- [ ] Analytics configurado
- [ ] Dominio personalizado apuntando
- [ ] SSL funcionando (HTTPS)

---

**¡Tu sitio está listo para recibir compras de entradas!** 🛸
