# Guía de Animaciones Cósmicas OVNI - Tailwind v4

## Animaciones Disponibles

### 1. **Glow Pulse** - Brillo pulsante
```tsx
// Clases CSS
<div className="glow-border">Elemento con brillo pulsante</div>
<button className="neon-button-glow">Botón con glow</button>

// Animación: Alterna entre brillos suave y intenso cada 3 segundos
// Duración: 3s
// Ideal para: CTA buttons, cards destacadas, elementos importantes
```

### 2. **Float** - Flotación suave
```tsx
// Clase CSS
<div className="cosmic-float">Elemento flotante</div>

// Animación: Sube y baja suavemente
// Duración: 6s
// Ideal para: Imágenes, iconos, elementos decorativos
```

### 3. **Cosmic Pulse** - Pulso cósmico
```tsx
// Clase CSS
<div className="cosmic-card-pulse">Card con pulso</div>
<div className="pulse-glow">Elemento con pulso</div>

// Animación: Aumenta y disminuye escala manteniendo opacidad variable
// Duración: 3s / 2s (según elemento)
// Ideal para: Cards, iconos, elementos emergentes
```

### 4. **Shimmer** - Efecto brillo deslizante
```tsx
// Clase CSS
<div className="shimmer-bg p-4">Contenido con efecto shimmer</div>

// Animación: Brillo que se desliza de izquierda a derecha
// Duración: 8s
// Ideal para: Fondos, secciones, efectos de carga
```

### 5. **Orbit** - Órbita circular
```tsx
// Clase CSS
<div className="orbit">Elemento orbitando</div>

// Animación: Rota alrededor de un punto central
// Duración: 20s
// Ideal para: Elementos decorativos, efectos OVNI
```

### 6. **Pulse Neon** - Texto neón pulsante
```tsx
// Clase CSS
<p className="pulse-neon text-primary">Texto neón pulsante</p>
<h1 className="glow-text-pulse">Título con brillo</h1>

// Animación: Texto con efecto de brillo pulsante
// Duración: 2s
// Ideal para: Títulos, textos destacados, CTAs
```

## Clases de Componentes Predefinidas

### Botones
```tsx
// Botón normal con hover glow
<button className="neon-button">Comprar</button>

// Botón con animación glow continua
<button className="neon-button-glow">Entradas</button>

// Combinadas
<button className="neon-button hover:animate-pulse-neon">Especial</button>
```

### Cards
```tsx
// Card cósmica estática
<div className="cosmic-card">Contenido</div>

// Card cósmica con pulso
<div className="cosmic-card-pulse">Contenido destacado</div>

// Card con borde brillante
<div className="glow-border">Contenido especial</div>
```

### Textos
```tsx
// Texto con gradiente y brillo
<h1 className="glow-text">Título Principal</h1>

// Texto con brillo pulsante
<h2 className="glow-text-pulse">Subtítulo</h2>

// Párrafo con efecto neon
<p className="pulse-neon">Texto destacado</p>
```

## Combinando Animaciones

```tsx
// Ejemplo: Card flotante con pulso
<div className="cosmic-card cosmic-float pulse-glow">
  Contenido flotante pulsante
</div>

// Ejemplo: Botón con múltiples efectos
<button className="neon-button-glow hover:animate-bounce">
  Interactivo
</button>

// Ejemplo: Sección con shimmer y contenido flotante
<section className="shimmer-bg p-8">
  <div className="cosmic-float">
    <h1 className="glow-text">Sección Destacada</h1>
  </div>
</section>
```

## Duración y Ritmo

| Animación | Duración | Ritmo | Uso |
|-----------|----------|-------|-----|
| glow-pulse | 3s | ease-in-out | Elementos destacados |
| float | 6s | ease-in-out | Decoración suave |
| cosmic-pulse | 3s / 2s | ease-in-out | Cards y enfoque |
| shimmer | 8s | linear | Fondos y secciones |
| orbit | 20s | linear | Efectos especiales |
| pulse-neon | 2s | ease-in-out | Textos y botones |

## Personalizar Duraciones

Si quieres cambiar la duración de las animaciones, edita las variables en `globals.css`:

```css
/* En la sección @theme inline */
--duration-glow: 3s;      /* Cambiar duración glow-pulse */
--duration-float: 6s;     /* Cambiar duración float */
--duration-pulse: 2s;     /* Cambiar duración cosmic-pulse */
--duration-shimmer: 8s;   /* Cambiar duración shimmer */
```

## Mejores Prácticas

1. **No animar todo**: Usa animaciones solo para elementos clave
2. **Mantener el ritmo**: Combina animaciones con duraciones similares
3. **Accesibilidad**: Considera `prefers-reduced-motion`
4. **Performance**: Las animaciones con `transform` y `opacity` son más eficientes

## Agregar Nuevas Animaciones

### Opción 1: En `globals.css` (Recomendado para Tailwind v4)
```css
@keyframes new-animation {
  0% { /* estilos iniciales */ }
  100% { /* estilos finales */ }
}

@layer components {
  .your-class {
    animation: new-animation 3s ease-in-out infinite;
  }
}
```

### Opción 2: En `tailwind.config.ts`
```typescript
keyframes: {
  'new-animation': {
    '0%': { /* estilos */ },
    '100%': { /* estilos */ },
  },
},
animation: {
  'new-animation': 'new-animation 3s ease-in-out infinite',
}
```

## Ejemplo Completo: Sección Hero Animada

```tsx
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con shimmer */}
      <div className="absolute inset-0 shimmer-bg opacity-50" />
      
      {/* Contenido flotante */}
      <div className="relative z-10 text-center">
        {/* Título con brillo */}
        <h1 className="glow-text text-5xl font-bold mb-4">
          Festival OVNI
        </h1>
        
        {/* Subtítulo con pulso neon */}
        <p className="pulse-neon text-2xl text-primary mb-8">
          Experiencia Cósmica
        </p>
        
        {/* Botón con glow */}
        <button className="neon-button-glow">
          Comprar Entradas
        </button>
      </div>
      
      {/* Elemento decorativo orbitando */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 orbit">
        <div className="cosmic-card-pulse w-full h-full" />
      </div>
    </section>
  )
}
```

---

**Nota**: Todas estas animaciones están optimizadas para rendimiento y accesibilidad en Tailwind v4.
