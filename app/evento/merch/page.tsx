'use client'

import { Header } from '@/components/header'
import { MERCHANDISE } from '@/lib/festival-config'
import { NewsletterForm } from '@/components/newsletter-form'

export default function MerchPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold glow-text mb-4">Merch Ovni</h1>
            <p className="text-xl text-foreground/70">Lleva la experiencia Chilca Ovni contigo con nuestro merchandise exclusivo.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {MERCHANDISE.map((product) => (
              <div key={product.id} className="cosmic-card rounded-lg overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative h-64 overflow-hidden bg-primary/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-accent">${product.price}</span>
                    <span className="text-xs text-foreground/60">USD</span>
                  </div>

                  {/* <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg neon-button">
                    <ShoppingCart className="w-5 h-5" />
                    Agregar al Carrito
                  </button> */}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            
            <p className="text-xl text-foreground/70">Para adquirir cualquier producto por favor <a href="/#contact" className="text-primary hover:underline">
              contacta
            </a> con nuestro equipo de ventas.</p>
          </div>

          <div className="cosmic-card p-8 rounded-lg text-center mb-12">
            <NewsletterForm
              source="merch-page"
              title="Próximos Diseños"
              description="Estamos diseñando nuevos productos exclusivos. Suscríbete a nuestro newsletter para ser el primero en enterarte."
              buttonLabel="Suscribir"
            />
          </div>

          <div className="cosmic-card p-8 rounded-lg">
            <h3 className="text-xl font-bold text-primary mb-4">Política de Entrega</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>Envío gratuito para órdenes mayores a $100 USD</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>Disponible en Perú</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>Entrega en 5-10 días hábiles</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>Satisfacción garantizada</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
