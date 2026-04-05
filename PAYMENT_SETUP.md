# Guía de Configuración: PayPal + WhatsApp

Este documento explica cómo configurar y usar el nuevo sistema de pagos dual (PayPal para pagos internacionales y WhatsApp para clientes en Perú).

## Descripción General

El sitio web del Festival OVNI ahora utiliza dos métodos de pago complementarios:

- **PayPal**: Para pagos internacionales en USD
- **WhatsApp**: Para clientes en Perú con precios en PEN (Soles)

## Configuración Requerida

### 1. PayPal Setup

#### Paso 1: Crear cuenta en PayPal
1. Ve a [PayPal Developer](https://developer.paypal.com/)
2. Regístrate o inicia sesión con tu cuenta de PayPal
3. Accede al Dashboard

#### Paso 2: Obtener Client ID
1. En el Dashboard, ve a **Apps & Credentials**
2. Asegúrate de estar en ambiente **Sandbox** (para pruebas)
3. Copia tu **Client ID** bajo la sección "REST API signature"
4. Para producción, cambia a ambiente **Live** y obtén el Client ID de producción

#### Paso 3: Agregar Client ID a variables de entorno
1. Abre `.env.local` (o crea uno si no existe)
2. Agrega:
   ```
   NEXT_PUBLIC_PAYPAL_CLIENT_ID=tu_paypal_client_id_aqui
   ```

#### Configuración de Moneda
- El sistema está configurado para usar **USD**
- Los precios de entradas están en USD en la interfaz de PayPal
- Puedes cambiar la moneda editando `PAYPAL_CONFIG.currency` en `lib/payment-config.ts`

### 2. WhatsApp Setup

#### Paso 1: Configurar número de WhatsApp
1. El número está configurado en `lib/payment-config.ts` en la constante `WHATSAPP_CONFIG.phoneNumber`
2. El formato debe ser: país + número sin espacios ni caracteres especiales
   - Ejemplo para Perú: `51987654321` (sin el +)

#### Paso 2: Agregar número a variables de entorno (opcional)
Para mayor flexibilidad, puedes agregar a `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=51987654321
```

#### Flujo de WhatsApp
1. Usuario completa formulario con:
   - Nombre completo
   - Email
   - Cantidad de entradas
2. Hace clic en "Contactar por WhatsApp"
3. Se abre WhatsApp con un mensaje preformateado
4. Tu equipo de ventas recibe el mensaje y completa la compra

## Estructura de Componentes

### `lib/payment-config.ts`
- Define tipos de entradas (TICKETS)
- Precios en USD y PEN
- Configuración de PayPal y WhatsApp
- Métodos auxiliares para detectar país y método de pago

### `components/payment-selector.tsx`
- Componente padre que maneja la selección de método de pago
- Detecta preferencia del usuario y la guarda en localStorage
- Renderiza PayPal o WhatsApp según selección

### `components/paypal-checkout.tsx`
- Integración de botones de PayPal
- Carga dinámicamente el SDK de PayPal
- Maneja transacciones seguras

### `components/whatsapp-checkout.tsx`
- Formulario de información del comprador
- Selector de cantidad de entradas
- Genera URL de WhatsApp con mensaje preformateado

## Precios de Entradas

Los precios están configurados en `lib/payment-config.ts`:

| Entrada | USD | PEN |
|---------|-----|-----|
| Early Bird | $150 | S/. 560 |
| General | $200 | S/. 750 |
| VIP | $350 | S/. 1,300 |
| Camping | $250 | S/. 930 |

Para actualizar precios, edita el array `TICKETS` en `payment-config.ts`.

## Conversión de Moneda

El tipo de cambio USD a PEN está hardcodeado en los precios. Para actualizar:
1. Edita los valores `pricePEN` en `lib/payment-config.ts`
2. Usa un tipo de cambio realista (actualmente ~3.7-3.9 PEN por USD)

## Testing

### PayPal Testing
1. Usa modo **Sandbox**
2. Crea una cuenta de prueba en PayPal Developer
3. Usa tarjetas de crédito de prueba de PayPal

Credenciales de prueba comunes:
- Email: cualquier email de prueba
- Tarjeta: 4111111111111111 (Visa de prueba)
- Expiración: cualquier fecha futura
- CVV: cualquier número

### WhatsApp Testing
1. Puedes cambiar el número de prueba en `WHATSAPP_CONFIG.phoneNumber`
2. Envía mensajes de prueba a tu número
3. Verifica que los formatos de mensaje sean correctos

## Flujos de Pago

### Compra Internacional (PayPal)
1. Usuario selecciona entrada
2. Elige "PayPal" como método
3. Se carga el SDK de PayPal
4. Completa el pago con su información de PayPal
5. Recibe confirmación en pantalla

### Compra en Perú (WhatsApp)
1. Usuario selecciona entrada
2. Elige "WhatsApp" como método
3. Completa formulario con nombre y email
4. Selecciona cantidad
5. Hace clic en "Contactar por WhatsApp"
6. Se abre WhatsApp con número preformateado
7. Tu equipo recibe el mensaje y completa manualmente

## Mejoras Futuras Sugeridas

1. **Base de datos para órdenes**: Guardar compras en base de datos
2. **Confirmación por email**: Enviar confirmación automática
3. **Sistema de códigos QR**: Códigos para entrada al evento
4. **Webhook de PayPal**: Automatizar confirmaciones de pago
5. **Integración de API de WhatsApp Business**: Respuestas automáticas
6. **Carrito de compra**: Permitir comprar múltiples entradas de una vez
7. **Historial de transacciones**: Panel de usuario para ver compras

## Soporte

Si encuentras problemas:

1. **PayPal no carga**: Verifica que `NEXT_PUBLIC_PAYPAL_CLIENT_ID` esté correcto
2. **WhatsApp no abre**: Verifica que el número esté en formato correcto
3. **Precios incorrectos**: Actualiza valores en `lib/payment-config.ts`

## Variables de Entorno Requeridas

Para producción, asegúrate de tener en `.env.local`:

```bash
# PayPal (Obtén de https://developer.paypal.com/dashboard/)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=tu_client_id_aqui

# WhatsApp (Formato: país + número sin +)
NEXT_PUBLIC_WHATSAPP_NUMBER=51987654321
```

## Archivos Relacionados

- `lib/payment-config.ts` - Configuración central de pagos
- `components/payment-selector.tsx` - Selector de método de pago
- `components/paypal-checkout.tsx` - Integración PayPal
- `components/whatsapp-checkout.tsx` - Formulario WhatsApp
- `components/tickets-section.tsx` - Sección de entradas principal
