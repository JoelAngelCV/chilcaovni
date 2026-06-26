'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import GallerySectionVideo from './galeryvideo-section'
import { ArrowRight } from 'lucide-react'

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
    src: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780546031/replicantboy_s2026-5-7-22.36.624_story_pbkluf.jpg',
    title: 'Chilca Ovni Festival 2026',
    description: 'Noches de mucho psytrance.',
    category: 'photo'
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184777/493690365_3730583217232834_1329389117890993979_n_imu9lg.jpg',
    title: 'Chilca Ovni Fest 2017',
    description: 'El dancefloor encendido bajo el sol.',
    category: 'photo'
  },
  {
    id: 3,
    src: 'https://scontent.flim2-5.fna.fbcdn.net/v/t1.6435-9/38847471_1973162139641626_2966526816061227008_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeGDCrMoUelmPYyuB8RlT5NUsZdgURRlqpGxl2BRFGWqkVZAbzf2o6HO1VYlgR-MJjKF60dlCkr221u8uuVbpdNf&_nc_ohc=kfq6p6eedb0Q7kNvwFs65eL&_nc_oc=Adq4Otex2VWc-ay9VVU4wmDo0eZtFnJkbGMehEhMQOyQGKyLXte6IsaeNaTM3jVjrJbJF_3__kfFnbomZeGnoeOk&_nc_zt=23&_nc_ht=scontent.flim2-5.fna&_nc_gid=qim8M6MftniJ_89X_7HRvA&_nc_ss=7b2a8&oh=00_Af-wm48xi4LJBtA_889MxTnt5I2kUeimFzNT0ZgzeMWMvw&oe=6A4842C0',
    title: 'Chilca Ovni Festival 2018',
    description: 'Vibrando juntos en una misma frecuencia.',
    category: 'photo'
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184777/494114485_3730582867232869_85733598352756017_n_zzh1ek.jpg',
    title: 'Chilca Ovni Fest 2017',
    description: 'La danza psicodélica toma el control.',
    category: 'photo'
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184776/485881724_1073333368170708_7090447895610459931_n_njr2mg.jpg',
    title: 'Psychedelic Alienigenación 2.0',
    description: 'El teaser antes del regreso del festival.',
    category: 'photo'
  },
  {
    id: 6,
    src: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1781905522/nochechof26_pn61r4.jpg',
    title: 'Chilca Ovni Festival 2026',
    description: 'Pepe Jones piloteando la nave en la segunda noche.',
    category: 'photo'
  },
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
            Revive los momentos de festivales anteriores a través de esta galería de fotos y videos que capturan la esencia psicodélica y la energía única de Chilca Ovni Festival.
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
                  width={500}
                  height={500}
                  className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  {/* <p className="text-sm text-foreground/80">{item.description}</p> */}
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
                  key={selectedItem.id}
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 90vw"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-primary mb-4">{selectedItem.title}</h3>
                <p className="text-lg text-foreground/80">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        )}

        <GallerySectionVideo  />

        {/* Info box */}
        <div className="cosmic-card p-8 rounded-lg text-center">
          <p className="text-foreground/80 mb-2">
            Estas imágenes son de eventos anteriores. ¡Prepárate para vivir una experiencia aún más épica en la próxima edición!
          </p>
          <p className="text-sm text-foreground/60">
            Comparte tus fotos y videos en redes con #chilcaovnifestival
          </p>
        </div>

        {/* Year galleries invitation */}
        <div className="border-t border-primary/20 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold glow-text mb-4">
              Galería de Ediciones Anteriores
            </h3>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Revive la historia de Chilca Ovni Festival a través de los años. Explora galerías de eventos pasados.
            </p>
          </div>

          {/* Year cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[2017, 2018, 2019, 2024, 2025, 2026].map((year) => (
              <Link
                key={year}
                href={`/galeria/${year}`}
                className="cosmic-card p-6 rounded-lg hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-bold text-primary">{year}</span>
                  <ArrowRight className="w-6 h-6 text-secondary group-hover:text-primary transition-colors" />
                </div>
                <p className="text-foreground/70 group-hover:text-foreground transition-colors">
                  Ver galería del año {year}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
