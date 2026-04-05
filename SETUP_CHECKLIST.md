# Checklist de Setup: PayPal + WhatsApp

## Pre-Launch (Antes de ir a producción)

### PayPal Configuration
- [ ] Crear cuenta en https://developer.paypal.com/
- [ ] Ir a **Apps & Credentials**
- [ ] Copiar **Client ID** (Sandbox)
- [ ] Crear `.env.local` con:
  ```bash
  NEXT_PUBLIC_PAYPAL_CLIENT_ID=tu_client_id_aqui
  ```
- [ ] Probar pagos en modo Sandbox
- [ ] Crear tarjeta de prueba (4111111111111111)
- [ ] Validar flujo completo de pago

### WhatsApp Configuration
- [ ] Definir número de WhatsApp para ventas
- [ ] Editar `lib/payment-config.ts` - `WHATSAPP_CONFIG.phoneNumber`
- [ ] Formato: `51987654321` (sin +)
- [ ] Agregar a `.env.local`:
  ```bash
  NEXT_PUBLIC_WHATSAPP_NUMBER=51987654321
  ```
- [ ] Probar mensaje en móvil
- [ ] Verificar que se abre WhatsApp correctamente

### Precios y Configuración
- [ ] Revisar precios en `lib/payment-config.ts`
- [ ] Actualizar precios USD si es necesario
- [ ] Actualizar tipos de cambio PEN (USD * 3.7-3.9)
- [ ] Verificar descripciones de entradas
- [ ] Revisar features de cada entrada

### Documentación
- [ ] Leer `PAYMENT_SETUP.md`
- [ ] Entender flujo de PayPal
- [ ] Entender flujo de WhatsApp
- [ ] Revisar ejemplos en `PAYMENT_EXAMPLES.md`

### Testing Local
- [ ] Instalar dependencias: `pnpm install`
- [ ] Ejecutar: `pnpm dev`
- [ ] Abrir http://localhost:3000
- [ ] Probar selección de entradas
- [ ] Probar selector PayPal/WhatsApp
- [ ] Probar flujo PayPal (Sandbox)
- [ ] Probar flujo WhatsApp
- [ ] Verificar responsive design en móvil
- [ ] Revisar todas las secciones del sitio

### Build y Optimización
- [ ] Ejecutar: `pnpm build`
- [ ] Resolver cualquier error de build
- [ ] Verificar que build es exitoso
- [ ] Revisar bundle size

### Environment Variables
- [ ] Crear `.env.local` con variables necesarias
- [ ] No incluir `.env.local` en Git
- [ ] `.gitignore` incluye `.env.local`
- [ ] Preparar variables para producción

## Launch (Ir a Producción)

### PayPal Live Mode
- [ ] Crear aplicación Live en PayPal
- [ ] Obtener **Client ID** de Live
- [ ] Actualizar `NEXT_PUBLIC_PAYPAL_CLIENT_ID` (live)
- [ ] Cambiar modo de Sandbox a Live
- [ ] Probar transacción real (con monto pequeño)

### Hosting/Deploy
- [ ] Configurar dominio
- [ ] Conectar a Vercel (o hosting elegido)
- [ ] Agregar variables de entorno en hosting
- [ ] Deploy automático desde Git
- [ ] Verificar que deploy fue exitoso

### Verificación de Producción
- [ ] Acceder al sitio en el dominio live
- [ ] Probar flujo PayPal completo
- [ ] Probar flujo WhatsApp completo
- [ ] Verificar que mensajes de WhatsApp se reciben
- [ ] Verificar que confirmaciones de PayPal funcionan
- [ ] Probar en navegadores móviles
- [ ] Probar en navegadores desktop

### Monitoreo
- [ ] Configurar analytics (Google Analytics, Vercel)
- [ ] Configurar alertas de errores
- [ ] Monitorear transacciones de PayPal
- [ ] Revisar mensajes de WhatsApp

## Post-Launch (Mantenimiento)

### Semanal
- [ ] Revisar órdenes de WhatsApp
- [ ] Verificar transacciones de PayPal
- [ ] Revisar cualquier reporte de error

### Mensual
- [ ] Revisar números de ventas
- [ ] Validar precios y tipos de cambio
- [ ] Revisar feedback de clientes

### Según sea necesario
- [ ] Actualizar precios si es necesario
- [ ] Agregar nuevas entradas
- [ ] Cambiar número de WhatsApp si es necesario
- [ ] Agregar métodos de pago adicionales

## Troubleshooting Rápido

### "PayPal no carga"
- [ ] Verificar `NEXT_PUBLIC_PAYPAL_CLIENT_ID` existe
- [ ] Verificar Client ID es correcto
- [ ] Revisar console del navegador
- [ ] Reiniciar servidor: `pnpm dev`

### "WhatsApp no abre"
- [ ] Verificar número en `WHATSAPP_CONFIG.phoneNumber`
- [ ] Verificar formato: `51987654321` (sin +)
- [ ] Probar en móvil
- [ ] Revisar que WhatsApp está instalado

### "Precios incorrectos"
- [ ] Editar `lib/payment-config.ts`
- [ ] Actualizar array `TICKETS`
- [ ] Los cambios aplican sin rebuild

### "Build falla"
- [ ] Ejecutar `pnpm install` nuevamente
- [ ] Eliminar `.next` y rebuildar
- [ ] Revisar errores en console
- [ ] Contactar con soporte si persiste

## Documentación de Referencia

Consulta estos archivos según tus necesidades:

| Archivo | Para qué |
|---------|----------|
| `QUICK_PAYMENT_SETUP.md` | Setup en 5 minutos |
| `PAYMENT_SETUP.md` | Configuración detallada |
| `PAYMENT_EXAMPLES.md` | Ejemplos de código |
| `MIGRATION_STRIPE_TO_PAYPAL.md` | Detalles de migración |
| `README.md` | Documentación general |

## Contactos Importantes

### PayPal Support
- Dashboard: https://developer.paypal.com/dashboard/
- Documentation: https://developer.paypal.com/docs/
- Status: https://www.paypalstatus.com/

### WhatsApp
- No requiere soporte técnico
- Es nativo en navegadores y móviles
- Links de formato: https://wa.me/

## Notas Finales

✓ Sistema está listo para producción  
✓ Ambos métodos de pago funcionan sin backend  
✓ Completamente responsivo en móvil  
✓ Fácil de mantener y actualizar  

**¡Listos para vender entradas!** 🎉
