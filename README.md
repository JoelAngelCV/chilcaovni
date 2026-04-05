# Festival OVNI - Sitio Web Oficial

Bienvenido al sitio web del **Festival OVNI**, un festival de psytrance temática OVNI ubicado en la playa de Punta Yaya, Chilca, Lima, Perú.

## 🛸 Características

- **Diseño Cósmico OVNI**: Tema futurista con colores neón en púrpura, azul, verde esmeralda y plata
- **Página Principal Inmersiva**: Hero section con efectos visuales y información del evento
- **Sección de Artistas**: Lineup completo con descripciones e imágenes
- **Galería de Fotos/Videos**: Galería responsiva mostrando momentos del festival
- **Sistema de Compra Dual**: PayPal para pagos internacionales + WhatsApp para Perú
  - Early Bird - Compra anticipada con descuento
  - Entrada General - Acceso completo
  - VIP - Experiencia premium
  - Camping - Acampada en la playa
  - Precios en USD (PayPal) y PEN (WhatsApp)
- **Sección de Ubicación**: Mapa interactivo y información de transporte
- **Contacto y FAQ**: Preguntas frecuentes y formulario de contacto

## 🚀 Tecnologías

- **Next.js 16** - Framework React moderno
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling y diseño responsivo
- **PayPal** - Pagos internacionales
- **WhatsApp** - Compras locales en Perú
- **Lucide React** - Iconografía moderna

## 📋 Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd festival-ovni
```

2. **Instalar dependencias**
```bash
pnpm install
```

3. **Configurar variables de entorno**
Crea un archivo `.env.local` con:
```
# PayPal (de https://developer.paypal.com/)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id

# WhatsApp (formato: país + número sin +)
NEXT_PUBLIC_WHATSAPP_NUMBER=51987654321
```

4. **Ejecutar desarrollo**
```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx           # Página principal
│   ├── layout.tsx         # Layout base
│   ├── globals.css        # Estilos globales
├── components/
│   ├── header.tsx         # Navegación
│   ├── hero-section.tsx   # Sección hero
│   ├── event-info.tsx     # Información del evento
│   ├── lineup-section.tsx # Artistas y schedule
│   ├── gallery-section.tsx # Galería de fotos
│   ├── location-section.tsx # Ubicación e información
│   ├── tickets-section.tsx # Sistema de entradas
│   ├── contact-section.tsx # Contacto y footer
│   ├── payment-selector.tsx # Selector PayPal / WhatsApp
│   ├── paypal-checkout.tsx  # Integración PayPal
│   └── whatsapp-checkout.tsx # Formulario WhatsApp
├── lib/
│   ├── payment-config.ts  # Configuración de pagos (precios, métodos)
│   └── festival-config.ts # Configuración centralizada del evento
└── public/
    └── gallery-*.jpg      # Imágenes de galería
```

## 🎨 Tema de Diseño

El sitio utiliza un tema cósmico OVNI con:

- **Colores Primarios**:
  - Púrpura (#a855f7) - Color principal
  - Cyan/Azul (#3b82f6) - Secundario
  - Verde Esmeralda (#10b981) - Acento
  - Negro cósmico (#0f0a1e) - Fondo

- **Efectos Visuales**:
  - Glow effects en textos y bordes
  - Gradientes cósmicos
  - Animaciones suaves
  - Efectos de hover interactivos

## 💳 Sistema de Pagos Dual

El sistema utiliza **PayPal** (pagos internacionales) y **WhatsApp** (ventas locales en Perú).

| Producto | USD | PEN | Descripción |
|----------|-----|-----|-------------|
| Early Bird | $150 | S/. 560 | Compra anticipada con descuento |
| General | $200 | S/. 750 | Entrada general completa |
| VIP | $350 | S/. 1,300 | Experiencia premium con servicios |
| Camping | $250 | S/. 930 | Entrada + acampada en playa |

### PayPal (Extranjero)
- Pagos seguros con tarjeta de crédito
- SDK embebido en el sitio
- Confirmación instantánea

### WhatsApp (Perú)
- Contacto directo con equipo de ventas
- Precios en soles peruanos
- Depósito bancario o transferencia

## 📱 Responsividad

El sitio es completamente responsivo y funciona en:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🔧 Configuración

Para actualizar la información del festival, modifica `/lib/festival-config.ts`:

```typescript
export const FESTIVAL_INFO = {
  name: 'Festival OVNI',
  location: { /* ... */ },
  contact: { /* ... */ },
  artists: [ /* ... */ ],
  // ... más configuración
}
```

## 📧 Contacto

- Email: info@ovnifestival.com
- Teléfono: +51 (1) 2345-6789
- Instagram: @ovnifestival
- Facebook: facebook.com/ovnifestival

## 📄 Licencia

Todos los derechos reservados © 2024 Festival OVNI

## 🚀 Deploy

### En Vercel (Recomendado)

1. Push tu código a GitHub
2. Conecta el repo en [Vercel](https://vercel.com)
3. Agrega las variables de entorno en Settings
4. Deploy automático en cada push

### Otros proveedores

El sitio puede desplegarse en cualquier plataforma que soporte Next.js (AWS, Netlify, etc.)

---

**Creado con Next.js, Tailwind CSS y mucho ✨ cósmico**
