# Índice de Documentación - Festival OVNI

## Documentos principales

### 📖 [README.md](./README.md)
Introducción general al proyecto, características, tecnologías y instrucciones de instalación.

**Secciones**:
- Características principales
- Tecnologías utilizadas
- Guía de instalación
- Estructura de carpetas
- Configuración del tema
- Sistema de pagos
- Responsividad

### 🚀 [DEPLOYMENT.md](./DEPLOYMENT.md)
Guía paso a paso para desplegar el sitio en Vercel y pasar a producción.

**Secciones**:
- Setup en Vercel
- Configuración de variables de entorno Stripe
- Webhooks (opcional)
- Cambiar de test a live mode
- Domain personalizado
- Troubleshooting
- Checklist pre-lanzamiento

### 🎯 [FUTURE_ENHANCEMENTS.md](./FUTURE_ENHANCEMENTS.md)
Propuestas de mejoras futuras y expansiones del sitio.

**Secciones**:
- Funcionalidades corto plazo (1-2 semanas)
- Funcionalidades mediano plazo (3-4 semanas)
- Funcionalidades largo plazo (1-2 meses)
- Mejoras técnicas
- Scripts útiles
- Priorización recomendada

---

## Configuración y Archivos de Referencia

### 🔧 [lib/festival-config.ts](./lib/festival-config.ts)
Configuración centralizada de todo el festival. Aquí se actualiza:
- Nombre y descripción del festival
- Ubicación (coordenadas, ciudad, país)
- Información de contacto
- Lista de artistas
- Schedule del evento
- Enlaces de navegación

**Uso**: Este archivo es el "source of truth" para todos los datos del sitio.

### 🛒 [lib/products.ts](./lib/products.ts)
Catálogo de productos (entradas) para el sistema de Stripe.

**Entradas disponibles**:
- Early Bird ($150 USD) - Compra anticipada con descuento
- General ($200 USD) - Entrada general completa
- VIP ($350 USD) - Experiencia premium
- Camping ($250 USD) - Entrada + acampada

### 🔐 [lib/stripe.ts](./lib/stripe.ts)
Cliente de Stripe configurado como server-only para máxima seguridad.

### 📝 [.env.example](./.env.example)
Template de variables de entorno. Copia a `.env.local` y completa con tus claves.

---

## Estructura de Componentes

### Página Principal (`app/page.tsx`)
Integra todos los componentes en una single-page fluida.

### Componentes principales (`components/`)

#### Navegación
- **header.tsx** - Navigation bar con menú responsive
- **contact-section.tsx** - Sección de contacto y footer

#### Contenido Principal
- **hero-section.tsx** - Sección hero animada con CTA
- **event-info.tsx** - Información general del evento
- **lineup-section.tsx** - Artistas y schedule del festival
- **gallery-section.tsx** - Galería de fotos/videos
- **location-section.tsx** - Ubicación con mapa interactivo
- **tickets-section.tsx** - Sistema de compra de entradas

#### Sistema de Pagos
- **checkout.tsx** - Componente de Stripe Checkout
- **app/actions/stripe.ts** - Server actions para pagos

---

## Tema y Estilos

### [app/globals.css](./app/globals.css)
Define el tema cósmico OVNI con:
- Paleta de colores (púrpura, cyan, verde esmeralda)
- Utilidades custom (glow-text, neon-button, cosmic-card)
- Efectos de fondo y animaciones

**Variables CSS principales**:
- `--primary`: Púrpura (#a855f7)
- `--secondary`: Cyan (#3b82f6)
- `--accent`: Verde esmeralda (#10b981)
- `--background`: Negro cósmico (#0f0a1e)

---

## Archivos de Activos

### Imágenes
- `/public/gallery-1.jpg` a `/public/gallery-6.jpg` - Galería del evento

---

## Flujo de Desarrollo

### 1. Desarrollar localmente
```bash
npm install
npm run dev
```

### 2. Actualizar información
Editar `/lib/festival-config.ts` con datos actualizados

### 3. Hacer push a GitHub
```bash
git add .
git commit -m "Update festival info"
git push
```

### 4. Deploy automático en Vercel
El sitio se actualiza automáticamente con cada push.

---

## Guías Rápidas

### ¿Cómo actualizar artistas?
1. Editar `lib/festival-config.ts`
2. Actualizar array `FESTIVAL_INFO.artists`
3. Git push → Vercel auto-deploya

### ¿Cómo cambiar precios de entradas?
1. Editar `lib/products.ts`
2. Actualizar `priceInCents` en cada producto
3. Git push

### ¿Cómo cambiar colores del tema?
1. Editar `app/globals.css`
2. Modificar variables CSS en `:root`
3. Git push

### ¿Cómo agregar sección nueva?
1. Crear componente en `components/nueva-seccion.tsx`
2. Importar en `app/page.tsx`
3. Agregar a NAV_LINKS en `lib/festival-config.ts`

---

## Seguridad

### Variables de Entorno
- NUNCA commitear `.env.local` (incluido en `.gitignore`)
- STRIPE_SECRET_KEY debe estar solo en Vercel (servidor)
- NEXT_PUBLIC_* puede exponerse (cliente)

### Validación de Pagos
- Precios validados en servidor
- Imposible manipular precios desde cliente
- Webhook confirmará en producción

---

## Soporte y Recursos

### Documentación Oficial
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Stripe Docs](https://stripe.com/docs)
- [Tailwind CSS](https://tailwindcss.com)

### Comunidades
- [Next.js Discord](https://discord.gg/bUG7V3v)
- [Vercel Community](https://vercel.com/community)
- [Stripe Forums](https://stackoverflow.com/questions/tagged/stripe)

---

## Changelog

### v1.0.0 (Inicial)
- ✅ Diseño cósmico OVNI
- ✅ Página principal con hero section
- ✅ Información del evento
- ✅ Lineup de artistas con schedule
- ✅ Galería de fotos
- ✅ Mapa de ubicación
- ✅ Sistema de compra de entradas con Stripe
- ✅ Sección de contacto y FAQ
- ✅ Responsive design
- ✅ Documentación completa

---

## Contacto y Soporte

Para problemas o preguntas:
- Email: info@ovnifestival.com
- GitHub Issues: [Reportar problema]
- Vercel Support: vercel.com/support

---

**Creado con ❤️ usando Next.js, Tailwind CSS y mucho ✨ cósmico**

*Última actualización: Marzo 2024*
