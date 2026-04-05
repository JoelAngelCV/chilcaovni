# Comenzar: PayPal + WhatsApp para Festival OVNI

## En 3 Pasos

### Paso 1: PayPal Client ID (2 minutos)

```
1. Ve a → https://developer.paypal.com/
2. Inicia sesión o crea cuenta
3. Click en "Apps & Credentials"
4. Asegúrate de estar en "Sandbox" (para pruebas)
5. Copia tu "Client ID" bajo "REST API signature"
```

**Guardalo**: `AbCdEfGhIjKlMnOpQrStUvWxYz123...`

### Paso 2: Crear .env.local (1 minuto)

En la raíz del proyecto, crea archivo `.env.local`:

```bash
# Pega aquí tu PayPal Client ID
NEXT_PUBLIC_PAYPAL_CLIENT_ID=AbCdEfGhIjKlMnOpQrStUvWxYz123...

# Tu número de WhatsApp (sin + ni espacios)
# Ejemplo: 51987654321 (Perú: país 51 + número)
NEXT_PUBLIC_WHATSAPP_NUMBER=51987654321
```

### Paso 3: Ejecutar (2 minutos)

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor
pnpm dev

# Abrir en navegador
# http://localhost:3000
```

✓ **¡Listo!** Sistema de pagos funcionando

---

## Próximos Pasos

### 1. Actualizar Precios (Si es necesario)

Archivo: `lib/payment-config.ts`

```typescript
{
  id: 'vip',
  name: 'VIP',
  price: 350,      // USD - Actualiza aquí
  pricePEN: 1300,  // PEN - Actualiza aquí
  // ...
}
```

### 2. Actualizar Número de WhatsApp

Archivo: `lib/payment-config.ts`

```typescript
export const WHATSAPP_CONFIG = {
  phoneNumber: '51987654321',  // Cambia este número
  // ...
}
```

### 3. Probar en Navegador

- [ ] Abre http://localhost:3000
- [ ] Scroll a "Entradas"
- [ ] Selecciona una entrada
- [ ] Prueba PayPal (Sandbox) → tarjeta `4111111111111111`
- [ ] Prueba WhatsApp → abre en móvil
- [ ] Verifica que el mensaje se genera correctamente

### 4. Deploy a Producción

Cuando estés listo:

```bash
# Build para producción
pnpm build

# Subirá a Vercel / tu hosting
# (Si está conectado a GitHub)
```

**Importante**: 
- En producción, usar PayPal **Live** Client ID (no Sandbox)
- Agregar variables en el panel de hosting

---

## Sistema Completo

El sitio ya incluye:

```
✓ Página de inicio hermosa (Hero section)
✓ Información del evento
✓ Lineup de artistas
✓ Galería de fotos
✓ Ubicación (Punta Yaya, Chilca)
✓ Sistema de entradas (4 tipos)
✓ PayPal para pagos internacionales
✓ WhatsApp para ventas en Perú
✓ Responsive (móvil + desktop)
✓ Tema cósmico OVNI
✓ Animaciones y efectos
```

---

## Documentación Rápida

Si necesitas:

| Necesito | Ver |
|----------|-----|
| Setup rápido | QUICK_PAYMENT_SETUP.md |
| Configuración completa | PAYMENT_SETUP.md |
| Ejemplos de código | PAYMENT_EXAMPLES.md |
| Detalles técnicos | MIGRATION_STRIPE_TO_PAYPAL.md |
| Visión general | SYSTEM_OVERVIEW.md |
| Checklist antes de launch | SETUP_CHECKLIST.md |

---

## Troubleshooting Rápido

### Error: "PayPal no carga"

```
✓ Verificar que .env.local existe
✓ Verificar NEXT_PUBLIC_PAYPAL_CLIENT_ID está correcto
✓ Reiniciar servidor: Ctrl+C y pnpm dev
✓ Revisar console del navegador (F12)
```

### Error: "WhatsApp no abre"

```
✓ Verificar número en lib/payment-config.ts
✓ Formato correcto: 51987654321 (sin +)
✓ Si estás en desktop, necesita WhatsApp Web abierto
✓ En móvil, debe tener WhatsApp instalado
```

### Los precios están mal

```
✓ Editar lib/payment-config.ts
✓ Actualizar array TICKETS
✓ Guardar y recargar navegador
✓ Los cambios aplican automáticamente
```

---

## Flujo de Venta

### Cliente en USA/Extranjero

```
1. Selecciona entrada → Selecciona PayPal → Completa pago automático
2. Confirmación instantánea en pantalla
3. Email de confirmación en minutos
```

### Cliente en Perú

```
1. Selecciona entrada → Selecciona WhatsApp
2. Completa nombre + email + cantidad
3. Se abre WhatsApp con tu número
4. Envía mensaje automático
5. Tu equipo responde
6. Cliente completa depósito bancario
7. Confirmación por WhatsApp
```

---

## Mantener Actualizado

Cambios normales:

```bash
# Actualizar precios
→ Editar lib/payment-config.ts

# Cambiar número WhatsApp
→ Editar lib/payment-config.ts → WHATSAPP_CONFIG

# Agregar artista
→ Editar lib/festival-config.ts

# Cambiar textos
→ Editar componentes en components/

# Para producción: Cambiar PayPal Client ID
→ Actualizar variable en panel de hosting
```

---

## Para ir a Producción

Cuando estés listo para vender:

### 1. Obtener PayPal Live Client ID
```
PayPal Dashboard → Cambiar a "Live"
→ Copiar Client ID de producción
```

### 2. Actualizar Variables
```
.env.local (o panel de hosting):
NEXT_PUBLIC_PAYPAL_CLIENT_ID=sk_live_...
```

### 3. Deploy
```bash
git push  # Si estás usando GitHub + Vercel
# Vercel hará build y deploy automático
```

### 4. Probar
```
Visita tu dominio
Prueba transacción pequeña en PayPal Live
Verifica que WhatsApp funciona
```

---

## Soporte

### Preguntas sobre el código
- Ver PAYMENT_EXAMPLES.md
- Revisar componentes en components/

### Preguntas sobre PayPal
- https://developer.paypal.com/docs/
- Dashboard: https://developer.paypal.com/dashboard/

### Preguntas sobre WhatsApp
- No requiere documentación API
- Es nativo en navegadores y móviles

---

## Resumen Final

| Componente | Estado | Acción |
|-----------|--------|--------|
| PayPal | ✓ Implementado | Agregar Client ID |
| WhatsApp | ✓ Implementado | Agregar número |
| Precios | ✓ Implementado | Revisar y ajustar |
| Diseño | ✓ Completo | Listo para usar |
| Documentación | ✓ Completa | Consultar cuando necesites |

**Tu sitio está 100% listo para vender entradas** 🎉

Cualquier duda, revisa la documentación o contacta soporte.

¡Que comience el Festival OVNI! 🛸✨
