'use client'

import Image from 'next/image'
import { useState } from 'react'
import Script from 'next/script';

interface GalleryItem {
  id: number
  src: string
  title: string
  description: string
  category: 'photo' | 'video'
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775430948/20260301_114058_isl9si.jpg',
    title: 'Main Stage',
    description: 'Disfrutando al lado del imponente escenario ovni.',
    category: 'photo'
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775430947/20260301_013142_dbcrd0.jpg',
    title: 'Noche de Danza Psicodelica',
    description: 'La oscuridad iluminada por luces psicodélicas y la energía de la multitud.',
    category: 'photo'
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775430947/20260227_194048_k9iteb.jpg',
    title: 'Ceremonia de Apertura',
    description: 'Asistiendo a la ceremonia de apertura con rituales sanadores para el espiritu.',
    category: 'photo'
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775430946/20260228_194835_xui8ty.jpg',
    title: 'Dancefloor Magico',
    description: 'Bailando bajo un cielo estrellado con luces psicodélicas.',
    category: 'photo'
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775430948/20260301_074336_tpqsqb.jpg',
    title: 'Escena Local',
    description: 'Djs locales en el gran escenario ovni. La energía de la comunidad se siente en cada beat.',
    category: 'photo'
  },
  {
    id: 6,
    src: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775881803/replicantboy_3870025704729836178_s2026-4-10-23.6.803_story_aj6wwp.webp',
    title: 'Ceremonia de apertura',
    description: 'Uno de los momentos más mágicos del festival.',
    category: 'photo'
  },
  {
    id: 7,
    src: 'https://www.instagram.com/reel/DWEpapAETIY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    title: 'Ceremonia de apertura',
    description: 'Uno de los momentos más mágicos del festival.',
    category: 'video'
  },
  // {
  //   id: 7,
  //   src: '/gallery-2.jpg',
  //   title: 'Instalación Futurista',
  //   description: 'Arte visionary temático OVNI con proyecciones holográficas',
  //   category: 'photo'
  // },
  // {
  //   id: 8,
  //   src: '/gallery-3.jpg',
  //   title: 'Performance DJ',
  //   description: 'Artista en acción con efectos visuales de otro mundo',
  //   category: 'photo'
  // },
  // {
  //   id: 9,
  //   src: '/gallery-4.jpg',
  //   title: 'Atardecer Cósmico',
  //   description: 'La playa de Punta Yaya con iluminación futurista al anochecer',
  //   category: 'photo'
  // },
  // {
  //   id: 10,
  //   src: '/gallery-5.jpg',
  //   title: 'Experiencia Inmersiva',
  //   description: 'Zona de arte interactivo con efectos de luz hipnotizantes',
  //   category: 'photo'
  // },
  // {
  //   id: 11,
  //   src: '/gallery-6.jpg',
  //   title: 'Comunidad Cósmica',
  //   description: 'Energía de conexión bajo las estrellas del festival OVNI',
  //   category: 'photo'
  // },
]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'photo' | 'video'>('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold glow-text mb-4">
            Galería del Evento
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Revive los momentos mágicos del festival anterior. Imágenes de reels de eventos anteriores
          </p>
        </div>

        {/* Category filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'photo', 'video'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as 'all' | 'photo' | 'video')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'neon-button'
                  : 'border border-primary/50 text-primary hover:bg-primary/10'
              }`}
            >
              {category === 'all' ? 'Todos' : category === 'photo' ? 'Fotos' : 'Videos'}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer relative overflow-hidden rounded-lg cosmic-card hover:scale-105 transition-all duration-300"
            >
              <div className="relative w-full h-64 sm:h-72">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/80">{item.description}</p>
                </div>
                {item.category === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all">
                    <div className="text-4xl text-white">▶️</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="max-w-4xl w-full bg-card rounded-lg overflow-hidden cosmic-card"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 text-primary hover:text-accent transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative w-full h-96 sm:h-125">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-primary mb-4">{selectedItem.title}</h3>
                <p className="text-lg text-foreground/80">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Info box */}
        <div className="cosmic-card p-8 rounded-lg text-center">
          <p className="text-foreground/80 mb-2">
            ✨ Estas imágenes son del evento anterior. ¡Prepárate para vivir una experiencia aún más épica!
          </p>
          <p className="text-sm text-foreground/60">
            Comparte tus fotos y videos en redes con #OVNIFestival
          </p>
        </div>
      </div>
    </section>
  )
}
