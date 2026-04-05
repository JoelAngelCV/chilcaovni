// Festival OVNI Configuration
// Centralizado para fácil actualización

export const FESTIVAL_INFO = {
  name: 'Chilca Ovni Festival',
  tagline: 'Experiencia Cósmica en Playa Punta Yaya',
  description: 'El festival de psytrance más inmersivo de Sudamérica, ubicado en un punto de actividad Ovni',
  
  // Ubicación
  location: {
    name: 'Playa Punta Yaya',
    city: 'Chilca',
    region: 'Lima',
    country: 'Perú',
    coordinates: {
      lat: -12.547476,
      lng: -76.736032,
    },
  },

  // Contacto
  contact: {
    email: 'info@ovnifestival.com',
    phone: '+51 (1) 2345-6789',
    social: {
      instagram: 'https://instagram.com/chilca.ovni.festival',
      facebook: 'https://www.facebook.com/p/Chilca-OVNI-Festival-2026-100064821636017/',
      tiktok: 'https://tiktok.com/@ovnifestival',
    },
  },

  // Artistas de ejemplo
  artists: [
    {
      id: 1,
      name: 'Pepe Jones 🇧🇷',
      genre: 'Full-On',
      image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775019507/replicantboy_3753648540154229483_s2026-3-31-23.15.399_story_fsdlbd.jpg',
      bio: 'Sus sets fusionan grooves hipnóticos, atmósferas psicodélicas',
    },
    {
      id: 2,
      name: 'Uaky',
      genre: 'Dark Prog - Forest',
      image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775019507/uaky.music_3394827090610618914_hm1ojd.webp',
      bio: 'Su estilo ha mutado desde el Forest hacia vertientes ligadas al Techno y el Progresivo.',
    },
    {
      id: 3,
      name: 'Factor RH',
      genre: 'Psy Tek - Dark Psy - Forest',
      image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775019507/factorrhfrh_3829105098589371886_csyv9b.jpg',
      bio: 'Destacado como fiel representante del underground consolidando su identidad.',
    },
    {
      id: 4,
      name: 'Adren Aline',
      genre: 'Psychedelic Trance - Goa',
      image: '/',
      bio: 'Natural de Moscu Rusia ha sabido integrarse con la mistica del valle sagrado.',
    },
    {
      id: 5,
      name: 'Naropa',
      genre: 'Full On - Hi-Tech',
      image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775432138/535092847_24876493528623577_2210560228682095712_n_jmctam.jpg',
      bio: 'DJ y productor de música meditativa, fundador de Psycosmica y New Psychedelic.',
    },
    {
      id: 6,
      name: 'Galax',
      genre: 'Full On Night - Forest',
      image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775019507/galaxram_2298871274109506488_t5t4yn.jpg',
      bio: 'Siempre apuntando hacia los sonidos viajeros con bases sólidas poco oscuras.',
    },
    {
      id: 7,
      name: 'PsyCieza',
      genre: 'Full On',
      image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775019507/psycieza_2518799821427917872_pmxhxz.jpg',
      bio: 'Es artista y fundador del label intirunas 2015 y del proyecto " SOLUNA FEST" @solunafest',
    },
    {
      id: 8,
      name: 'Kiddsan',
      genre: 'Techno HardGroove',
      image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775019507/kiddsan.wav_3572581680088156604_rzd6ba.webp',
      bio: 'DJ y productor peruano, cofundador de Overkill, activo en la escena underground.',
    },
    {
      id: 9,
      name: 'DJ Nestor Guerrero',
      genre: 'Ambient - Psychill - Techno',
      image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775019507/djnestorguerrero_3842418949782840091_iclb1z.webp',
      bio: 'DJ y productor peruano en Lima, reconocido por su formación y su estilo artístico.',
    },
    {
      id: 10,
      name: 'Demencia',
      genre: 'Techno',
      image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775019506/d3m3n.cia_3706423021206942753_s2026-3-31-23.57.881_story_bz0agc.webp',
      bio: 'Creador de Círculo del Sonido, buscando revolucionar la experiencia en vivo.',
    },
    {
      id: 11,
      name: 'Sisa',
      genre: 'Psytrance',
      image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775316225/oficialsisa_3865783924883050673_s2026-4-4-10.20.73_story_h4aga5.webp',
      bio: 'DJ y productora peruana, su melodía y vibraciones elevan la frecuencia.',
    },
    {
      id: 12,
      name: 'Astral Mind',
      genre: 'Progressive Psy',
      image: '/',
      bio: 'Willy Gil de Lima Perú, en sus mezclas fusiona sonidos orgánicos y digitales.',
    },
    {
      id: 13,
      name: 'Carlos Tong',
      genre: 'Dark Psy - Goa',
      image: '/',
      bio: 'Explorador de frecuencias psicodélicas oscuras, creando atmósferas hipnóticas.',
    },
    {
      id: 14,
      name: 'Timeless Symphony',
      genre: 'Progressive Trance',
      image: '/',
      bio: 'Inició en los 2000s con el proyecto independiente llamado Synthetic Groove.',
    },
    {
      id: 15,
      name: 'Mike Tayle',
      genre: 'Progressive Trance',
      image: '/',
      bio: 'DJ peruano, conocido por su estilo melódico y enérgico en la escena trance.',
    },
    {
      id: 16,
      name: 'Intergalactkika',
      genre: 'Hi-Tech',
      image: '/',
      bio: 'DJ Open Format, toca y estudia ritmos de todo el mundo con un toque de brasilidad.',
    },
    {
      id: 17,
      name: 'Alien Diabolic',
      genre: 'Speed Trance - Hi-Tech',
      image: '/',
      bio: 'DJ y artista chileno con una pasión que tiene raíces en el punk, hardcore y rock.',
    },
  ],

  // Schedule de ejemplo
  schedule: [
    { day: 'Viernes', time: '17:00 - 20:00', type: 'Inicio y Ceremonia de Apertura' },
    { day: 'Viernes', time: '20:00 - 00:00', type: 'Sesiones Principales' },
    { day: 'Sábado', time: '00:00 - 10:00', type: 'Música Imparable' },
    { day: 'Sábado', time: '10:00 - 15:00', type: 'Talleres y Actividades' },
    { day: 'Sábado', time: '15:00 - 00:00', type: 'Maratón Musical' },
    { day: 'Domingo', time: '00:00 - 10:00', type: 'Psytrance Interdimensional' },
    { day: 'Domingo', time: '10:00 - 12:00', type: 'Viaje de Regreso a la Tierra' },
  ],

  // Información del evento
  event: {
    duration: '3 días',
    expectedAttendees: '5000+',
    yearFounded: 2024,
    theme: 'OVNI - Encuentro Cósmico',
  },
}

export const NAV_LINKS = [
  { label: 'Inicio', href: '#home' },
  { label: 'Evento', href: '#event' },
  { label: 'Artistas', href: '#lineup' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Ubicación', href: '#location' },
  { label: 'Entradas', href: '#tickets' },
  { label: 'Contacto', href: '#contact' },
]
