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
      name: 'Pepe Jones',
      genre: 'Full-On',
      image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775019507/replicantboy_3753648540154229483_s2026-3-31-23.15.399_story_fsdlbd.jpg',
      bio: 'Natural de Poços de Caldas (MG, Brasil), Pepe Jones actúa en la escena psytrance desde 2002 y debutó como DJ en 2006. Desde entonces, ha construido una trayectoria sólida, marcada por la dedicación, la evolución y una presencia constante en la escena nacional e internacional.\n\n Residente de la reconocida fiesta Mandallah, se ha presentado en los festivales más importantes de Brasil, como Universo Paralello (303 Stage), Soulvision, Mundo de Oz, Samsara Festival, Festival Alternativo do Kranti, Puma Punku Festival y Resistência Main Floor, además de diversos eventos independientes por todo el país. En el exterior, llevó su sonido a pistas de España, Portugal, Perú, Chile, Uruguay y Bolivia, destacando festivales como Arkana (Perú), Inchala (Uruguay), MonteMapu (Chile), Amazon Andes Festival (Isla del Sol) y Amazon Festival (Rurrenabaque), ambos en Bolivia.\n\n​Actualmente, integra el casting de Replicant Records (Australia), con participaciones en la serie V/A Light & Shadow (vol. 1 y 2) y el DJ set Replicant & Friends. Sus sets fusionan grooves hipnóticos, atmósferas psicodélicas y una conexión profunda con la pista de baile',
    },
    {
      id: 2,
      name: 'Uaky',
      genre: 'Dark Prog - Forest',
      image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775019507/uaky.music_3394827090610618914_hm1ojd.webp',
      bio: 'Diego Barbaguelatta A.K.A. \n\nUaky Con más de una década de recorrido y presencia en las pistas de Chile, Bolivia, Perú y Brasil, Uaky es un artista que domina la narrativa nocturna. Perteneciente a los sellos Andean Tribe Records y Quantum Forest Records, su estilo ha mutado desde el Forest más puro hacia vertientes vanguardistas ligadas al Techno y el Progresivo, garantizando una sesión de alta factura técnica y profundidad psicodélica.'
    },
    {
      id: 3,
      name: 'Factor RH',
      genre: 'Psy Tek - Dark Psy - Forest',
      image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775019507/factorrhfrh_3829105098589371886_csyv9b.jpg',
      bio: 'FACTOR RH / FRH, compositor, mc, dj y productor ecuatoriano que a través de su propuesta contundente conjuga frecuencias introspectivas y versatilidad.\n\nExplorando los límites del sonido, traslada esa experiencia musical ganada a lo largo de su carrera desde "South America Hit&Trip" como sello personal a nivel nacional e internacional, ejecutando hábilmente las frecuencias del Techno y Psychedelic, creando experiencias únicas que trascienden las fronteras de la psyche, combinando beats oceánicos con sutiles y profundas ondas sonoras. \n\nSe ha destacado como un fiel representante del underground consolidando su propia identidad y marca.',
    },
    {
      id: 4,
      name: 'Adren Aline',
      genre: 'Psychedelic Trance - Goa',
      image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775869961/adrenaline_xfefmp.jpg',
      bio: 'Alexander Bakunin DJ, Natural de Moscu Rusia ha sabido integrar la atmosfera pscodelica de su tierra con la mistica de las montanas del valle sagrado. Adren Aline ha sido pionero de las jornadas psicodelicas en Lima desde el 2010 junto a los ex Trilobite Music.\n\nActualmente viviendo aislado en las profundas montanas del Valle Sagrado de los Incas, tiende ese puente de amor y amistad con intensos sets en cada una de sus presentaciones.\n\nDesde Rusia hasta Chilca, Adren Aline nos transportará con su fina selección hacia un viaje mistico.',
    },
    // {
    //   id: 5,
    //   name: 'Naropa',
    //   genre: 'Full On - Hi-Tech',
    //   image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775432138/535092847_24876493528623577_2210560228682095712_n_jmctam.jpg',
    //   bio: 'Naropa descubrió su pasión por el Psytrance en Marcahuasi Festival del 2016. Desde entonces, se ha convertido en un miembro emergente de la escena Psytrance en Lima, colaborando con Trilobites Music, Reviden Psy y promoviendo el género en la ciudad.\n\nComo productor musical, Naropa lanzo su primer EP "Om", que refleja su interés en la música meditativa. Su principal característica es la mezcla de sonidos electrónicos e instrumentos orgánicos, influenciados por sus experiencias con la meditación y enteógenos.\n\nNaropa organizo sesiones de Psytrance en la isla de Cozumel, Mexico bajo el nombre "Psytrance en la Isla" y es fundador de las fiestas Psycosmica y New Psychedelic que se desarrollan en Lima, Peru\n\nEn 2025, fue invitado a participar en el "Amazon Festival" en Rurrenabaque, Bolivia, marcando su segunda participación fuera de Perú.\n\nEsta vez lidera, junto a Eventos Reviden, la cuarta edicion de Chilca Ovni Festival.',
    // },
    // {
    //   id: 6,
    //   name: 'Galax',
    //   genre: 'Full On Night - Forest',
    //   image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775019507/galaxram_2298871274109506488_t5t4yn.jpg',
    //   bio: 'Jose Sanchez Ramos, aka Galax, nacido en lima Perú influenciado por el psychedelic, su influencia se dió en Brasil, en el año 2005 , con casi 20 años de experiencia siempre ha trabajado para el lado de produccion musical así como con bandas de rock y grunge.\n\nHa participado en festivales de Perú como Arkana, Markahuasi Festival, psychedelic carnival, CHILCA Ovni festival entre otros.\n\nSiempre apuntando hacia los sonidos psychedelicos viajeros con bases sólidas poco oscuras Dark fullon y forest para poder tener una linda cómoda experiencia en el vuelo llamado fiesta.',
    // },
    // {
    //   id: 7,
    //   name: 'PsyCieza',
    //   genre: 'Full On',
    //   image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775019507/psycieza_2518799821427917872_pmxhxz.jpg',
    //   bio: 'Alan Cieza, a.k.a Psycieza, es artista fundador del label intirunas 2015 y del proyecto " SOLUNA FEST" @solunafest\n\nInició su carrera musical como selector de música en el 2000, en el 2008 en cusco Perú, en ese proceso se enfoco en el género del psytrance y progressive trance y en el 2015 que nació el proyecto " psycieza" con su mezcla de sonidos nocturnos llevandolos hacia la luz...\n\nParticipo en muchos eventos en Perú, Bolivia, Argentina, Chile, Ecuador y Uruguay, lo que lo lleva hacer uno de los principales y más importante dj y producto la escena psytrance de cusco y una pieza importante de la escena andina... 👽🎧',
    // },
    // {
    //   id: 8,
    //   name: 'Kiddsan',
    //   genre: 'Techno HardGroove',
    //   image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775019507/kiddsan.wav_3572581680088156604_rzd6ba.webp',
    //   bio: 'Kiddsan, DJ y productor peruano, cofundador de Overkill, activo dentro de la escena underground.\n\nSu propuesta sonora se centra en schranz, neorave y hardgroove, desarrollando sets contundentes, dinámicos y de alta intensidad en pista, con una narrativa sólida y un flujo constante orientado al baile y la resistencia.\n\nTrabaja principalmente en rangos de 140–160 BPM, diseñando sesiones para entornos warehouse, rave y club alternativo.',
    // },
    // {
    //   id: 9,
    //   name: 'DJ Nestor Guerrero',
    //   genre: 'Ambient - Psychill - Techno',
    //   image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775019507/djnestorguerrero_3842418949782840091_iclb1z.webp',
    //   bio: 'DJ Néstor Guerrero es un DJ y productor peruano radicado en Lima, reconocido por su formación en escuelas locales y su estilo enfocado en la sensibilidad artística y ritmos energéticos. Participa en eventos y conceptos musicales, habiendo sido asociado con presentaciones en vivo.',
    // },
    // {
    //   id: 10,
    //   name: 'Demencia',
    //   genre: 'Techno',
    //   image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775019506/d3m3n.cia_3706423021206942753_s2026-3-31-23.57.881_story_bz0agc.webp',
    //   bio: 'Demencia, el cerebro detrás del caos sonoro. Con 3 años de experiencia en la escena underground y con su estilo único que fusiona el techno oscuro, tétrico, eufórico y rítmico, se consolida como un referente en la escena.\n\nCreador de Círculo del Sonido, una promotora que busca revolucionar la forma en que se experimenta la música en vivo, Demencia se prepara para llevarnos a un viaje sin retorno en Chilca Ovni Fest. \n\nCon un set lleno de melodías que te harán viajar hacia un portal donde no querrás salir del beat.',
    // },
    // {
    //   id: 11,
    //   name: 'Sisa',
    //   genre: 'Psytrance',
    //   image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775316225/oficialsisa_3865783924883050673_s2026-4-4-10.20.73_story_h4aga5.webp',
    //   bio: 'SISA es una DJ y productora peruana que canaliza energía pura a través del psytrance. Su sonido combina fuerza, melodía y vibraciones mentales que elevan la frecuencia del dancefloor. Cada set es un viaje hipnótico donde la música se convierte en conexión y expansión de conciencia.\n\nActualmente viene promocionando su track Violeta, disponible en todas las plataformas de streaming ',
    // },
    // {
    //   id: 12,
    //   name: 'Astral Mind',
    //   genre: 'Progressive Psy',
    //   image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775870230/astralmind_rnexlz.jpg',
    //   bio: 'ASTRAL MIND es Willy Gil, de Lima Perú. DJ de la escena Psychedelic Trance (Psytrance – Goa trance) y el Progressive Trance. Desde sus inicios como DJ con vinilos hasta su innovador Proyecto ASTRAL SESSION, extiende su domino musical a los universos downtempo y dub fusionando raíces de la vieja escuela con un sonido innovador y fresco.\n\nASTRAL MIND en sus mezclas fusiona sonidos orgánicos y digitales. Combina con maestría diversos elementos, desde líneas de bajo vibrantes hasta melodías etéreas, creando una atmósfera profunda y un ritmo solido texturizado e hipnótico, transportando al público a un viaje emocional.',
    // },
    // {
    //   id: 13,
    //   name: 'Carlos Tong',
    //   genre: 'Dark Psy - Goa',
    //   image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775870443/ctong_gtob0x.jpg',
    //   bio: 'Carlos Tong emerge como un explorador de frecuencias psicodélicas, creando atmósferas hipnóticas que despiertan la conexión entre cuerpo y mente. Con una energía intensa y envolvente, sus sets llevan a la audiencia hacia estados elevados de conciencia, generando una experiencia colectiva de trance, unión y transformación interior.',
    // },
    // {
    //   id: 14,
    //   name: 'Timeless Symphony',
    //   genre: 'Progressive Trance',
    //   image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775870680/timeles_zvlywo.jpg',
    //   bio: 'Julio Cesar Vicharra A.K.A. Timeless Symphony Inició en los 2000s con un proyecto de música electrónica independiente llamado Synthetic Groove y realizó una maqueta de música electrónica experimental llamada DARK SIDE EP, influenciado por sonidos de break beat, techno, trance y house realizado artesanalmente con el famoso DAW Propellerhead Reason. Después de un alejamiento de la escena tras muchos años, el 2023 volvió a presentarse con el proyecto Timeless Simphony donde busca coleccionar y dar a conocer el sonido de la música electrónica desde sus inicios hasta la actualidad recordando con temas emblemáticos para el público de la old school y también mostrando producciones recientes a las nuevas generaciones pasando por diversos géneros, en esta ocasión el Progressive Trance y el Psytrance Trance serán los protagonistas en esta edición del Chilca Ovni Festival 2026.',
    // },
    // {
    //   id: 15,
    //   name: 'Mike Tayle',
    //   genre: 'Progressive Trance',
    //   image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775871064/mike_v6iklv.jpg',
    //   bio: 'DJ peruano, conocido por su estilo melódico y enérgico en la escena trance.',
    // },
    // {
    //   id: 16,
    //   name: 'Intergalactkika',
    //   genre: 'Hi-Tech',
    //   image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775871517/intergalactkika_3409932223950462317_rvpshg.webp',
    //   bio: 'Intergalactkika es el a.k.a de Anadeje Silva.  Dj Open Format, mochilera y aprendiz constante. \n\nComo DJ Open Format, toca y estudia ritmos de todo el mundo.  Como DJ raver, sus sets varían de prog, full-on, psytrance, forest, hi-tech y dark psy, elevando la energía de la pista siempre con un toque de brasilidad. \n\nPara ella, la música abre portales y lleva a otros mundos, esferas y dimensiones, además de ser una excelente medicina para las emociones y una verdadeira puente a la Espiritualidad.\n\nSus inspiraciones actuales son Vegas, Ace Ventura, Menumas, Talamasca, Neelix, Phaxe, Omiki, Altruism, Gioli & Asia, Olivatti, Claudinho Brasil, Kayos, Vendetta, Henrique Camacho, además de otros DJs que han aparecido en la historia del psytrance brasileño y mundial.',
    // },
    // {
    //   id: 17,
    //   name: 'Alien Diabolic',
    //   genre: 'Speed Trance - Hi-Tech',
    //   image: 'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775871064/alien_ryem91.jpg',
    //   bio: 'Aliendiabolic es un DJ y artista chileno con una pasión por la música que se remonta a sus raíces en el punk, el hardcore y el rock, aliendiabolic ha encontrado en el psytrance y el techno su verdadera vocación.\n\nAliendiabolic ha estado experimentando con la música electrónica y ha desarrollado un sonido que es una fusión de ritmos y texturas. Su estilo es una mezcla de energía y emoción, con un enfoque en crear un viaje sonoro que lleva a la gente a otro plano.\n\nAliendiabolic es un artista multifacético que se dedica a la pintura, el surf, las artes marciales y los malabares. Su creatividad y pasión por la música se reflejan en su arte y en su enfoque en la vida.',
    // },
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

export const COLLABORATORS = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    role: 'Productor General',
    contribution: 'Liderazgo en la coordinación general del festival, desde la planificación hasta la ejecución de todas las actividades.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'María Rodríguez',
    role: 'Directora de Contenido',
    contribution: 'Diseño y curaduría de todas las actividades espirituales y artísticas del festival.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Juan Pérez',
    role: 'Director de Producción',
    contribution: 'Coordinación técnica de sonido, luces y toda la infraestructura del evento.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Laura García',
    role: 'Coordinadora de Voluntarios',
    contribution: 'Reclutamiento y capacitación de más de 200 voluntarios que hicieron posible el festival.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'Diego López',
    role: 'Director de Seguridad',
    contribution: 'Implementación de protocolos de seguridad y protección para todos los asistentes.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'Andrea Silva',
    role: 'Coordinadora de Sostenibilidad',
    contribution: 'Gestión ambiental y programas de reciclaje para mantener Punta Yaya limpia y protegida.',
    image: 'https://images.unsplash.com/photo-1517841905240-74f88813b794?w=400&h=400&fit=crop',
  },
  {
    id: 7,
    name: 'Roberto Castillo',
    role: 'Maestro de Ceremonias',
    contribution: 'Conducción y animación de todas las actividades principales y transiciones del festival.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    id: 8,
    name: 'Sofía Morales',
    role: 'Coordinadora Médica',
    contribution: 'Coordinación de servicios de salud y bienestar para asegurar la seguridad de todos.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
]

export const FESTIVAL_TIMELINE = [
  {
    id: 1,
    date: '2017',
    title: 'Edición Inaugural',
    description: 'Nace el Festival OVNI con una visión revolucionaria de unir música electrónica y espiritualidad.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    date: '2018',
    title: 'Expansión Cósmica',
    description: 'El festival se consolida y atrae artistas internacionales de renombre mundial.',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    date: '2019',
    title: 'Convergencia Galáctica',
    description: 'Reunión de más de 15,000 personas en la playa de Punta Yaya para una experiencia única.',
    image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    date: '2024',
    title: 'Resurrección Cósmica',
    description: 'Después de 5 años, el festival retorna con más fuerza que nunca.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    date: '2025',
    title: 'Dimensión Desconocida',
    description: 'La edición actual continúa rompiendo barreras y expandiendo consciencias.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    date: '2026',
    title: 'Futuro Infinito',
    description: 'Próxima edición con innovaciones nunca antes vistas en festivales de trance.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
  },
]

export const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { 
    label: 'Evento', 
    href: '#event',
    submenu: [
      { label: 'Timeline', href: '/evento/timeline' },
      { label: 'Actividades', href: '/evento/actividades' },
      { label: 'Auspiciadores', href: '/evento/auspiciadores' },
      { label: 'Colaboradores', href: '/evento/colaboradores' },
      { label: 'Normas de convivencia', href: '/evento/normas-convivencia' },
      { label: 'Merch', href: '/evento/merch' },
    ]
  },
  { label: 'Artistas', href: '/artistas' },
  { 
    label: 'Galería', 
    href: '/#gallery',
    submenu: [
      { label: '2017', href: '/galeria/2017' },
      { label: '2018', href: '/galeria/2018' },
      { label: '2019', href: '/galeria/2019' },
      { label: '2024', href: '/galeria/2024' },
      { label: '2025', href: '/galeria/2025' },
      { label: '2026', href: '/galeria/2026' },
    ]
  },
  { label: 'Ubicación', href: '/#location' },
  { label: 'Entradas', href: '/#tickets' },
  { label: 'Contacto', href: '/#contact' },
]

export const ACTIVITIES = [
  {
    id: 1,
    name: 'Meditación Activa',
    description: 'Una experiencia transformadora de meditación dinámica en la playa.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=500&fit=crop',
    fullDescription: 'Únete a nuestras sesiones de meditación activa donde la música, el movimiento y la conciencia se fusionan. Bajo el cielo estrellado de Punta Yaya, experimentarás una transformación profunda de tu ser interior.\n\nEsta práctica combina técnicas ancestrales con energía contemporánea para despertar tu consciencia.'
  },
  {
    id: 2,
    name: 'Taller de Geometría Sagrada',
    description: 'Explora los patrones cósmicos y la geometría del universo.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&h=500&fit=crop',
    fullDescription: 'Descubre los misterios de la geometría sagrada y cómo se manifiesta en el universo. Un viaje visual y espiritual a través de patrones fractales, símbolos ancestrales y la geometría del cosmos.\n\nAprenderás a reconocer estas formas en la naturaleza y en ti mismo, conectando con la inteligencia universal.'
  },
  {
    id: 3,
    name: 'Activación de Movimiento',
    description: 'Danza libre y movimiento consciente bajo las estrellas.',
    image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&h=500&fit=crop',
    fullDescription: 'Libera tu cuerpo y tu espíritu a través del movimiento consciente. Nuestros facilitadores te guiarán en una experiencia de danza libre donde tu cuerpo es el instrumento y la música el universo.\n\nEsta activación te permitirá expresar tu ser más auténtico sin limitaciones.'
  },
  // {
  //   id: 4,
  //   name: 'Crónicas del Futuro',
  //   description: 'Charla visionaria sobre tendencias cósmicas y transformación.',
  //   image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop',
  //   fullDescription: 'Escucha a expertos en espiritualidad y visionarios que comparten sus perspectivas sobre la evolución humana y cósmica. Un espacio para explorar ideas revolucionarias y conectar con otros buscadores de verdad.'
  // },
  // {
  //   id: 5,
  //   name: 'Soundbath Cósmico',
  //   description: 'Baño sonoro con instrumentos ancestrales y electrónicos.',
  //   image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
  //   fullDescription: 'Sumérgete en un océano de sonidos que penetran tu ser. Combinamos gongs ancestrales, cuencos tibetanos y sintetizadores electrónicos para crear un viaje sonoro único.\n\nEsta experiencia activa los chakras y regenera tu energía vital.'
  // },
]

export const SPONSORS = [
  {
    id: 1,
    name: 'Sponsor 1',
    logo: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=300&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Sponsor 2',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Sponsor 3',
    logo: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=300&h=100&fit=crop',
  },
  {
    id: 4,
    name: 'Sponsor 4',
    logo: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=300&h=100&fit=crop',
  },
]

export const MERCHANDISE = [
  {
    id: 1,
    name: 'Camiseta Chilca OVNI Festival',
    description: 'Camiseta 100% algodón con diseño exclusivo',
    price: 60,
    image: 'https://scontent.flim2-6.fna.fbcdn.net/v/t51.82787-15/671192444_17896357449438799_1988454534264300371_n.webp?stp=dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHTA7ejj7abI4iWSL5jsaOl4DYUvl93zQngNhS-X3fNCR6bylp7fySZSuZIaWIY4ImzFRG_BqBBf8g0qWhR_LfZ&_nc_ohc=NgRqW5EXupcQ7kNvwH03K8S&_nc_oc=Adoit6pWKSY8KG_M65F5iTF8fycQ0PkGCFPXNOxcizwif9UzE5zJQWq7aO8blzfDkZjIjEZF9i9UgZXbL0LvuOl9&_nc_zt=23&_nc_ht=scontent.flim2-6.fna&_nc_gid=ZrFvOwCoEpDNCAUgU5HA8A&_nc_ss=7b2a8&oh=00_Af_Pii7kraweyjwjyDwdB3QVHYdtP_kHpc6JPDD378GJlA&oe=6A26E6F8',
  },
  {
    id: 2,
    name: 'Vaso Cosmic',
    description: 'Vaso reutilizable con diseño holográfico',
    price: 25,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop',
  },
  {
    id: 3,
    name: 'Stickers OVNI Set',
    description: 'Pack de 5 stickers holográficos',
    price: 12,
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop',
  },
  // {
  //   id: 4,
  //   name: 'Hoodie Cósmico',
  //   description: 'Hoodie premium con diseño fluorescente',
  //   price: 75,
  //   image: 'https://images.unsplash.com/photo-1556821840-8a63f6ca3086?w=500&h=500&fit=crop',
  // },
  // {
  //   id: 5,
  //   name: 'Pulsera Energética',
  //   description: 'Pulsera con cristales y diseño OVNI',
  //   price: 35,
  //   image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop',
  // },
  // {
  //   id: 6,
  //   name: 'Gorra Trucker',
  //   description: 'Gorra trucker con logo bordado',
  //   price: 40,
  //   image: 'https://images.unsplash.com/photo-1606402316001-d41f0f9abb52?w=500&h=500&fit=crop',
  // },
]

export const FESTIVAL_YEARS = [
  {
    year: 2017,
    title: 'CHILCA OVNI FEST 2017',
    description: 'CHILCA OVNI FEST, FESTIVAL DE ARTE Y MISTERIOS DEL PERU - 02 AL 05 DEL FEBRERO DEL 2017. PRODUCIDO POR: OVNI FEST & DROP PERU - TRILOBITE MUSIC. Colaboradores: - SEPHIRA REC - KARTIKEYA MUSIC - DP DECO ART DP - MARKAHUASI FESTIVAL - XENDRA FESTIVAL - PSYFACTOR FESTIVALS - GAYATRI GRAPICS ARTS - LYRIAN MYSTICAL SHOP - MYSTIK MAKE UP - SATIN PULSERAS - SANHA PRODUCTOS NATURALES',
    images: [
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184776/492972317_3728300790794410_5704735522101215059_n_1_og9d0e.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184779/494268282_3730581877232968_6795827925521536851_n_per2o8.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184777/494001793_3730582877232868_6824121004130314037_n_yivv6f.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184777/493900874_3730583050566184_8094001779553639472_n_qhhuvn.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184777/493011344_3730583127232843_7863708980689198463_n_a5uvlr.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184776/492574112_3730583103899512_1800331571554154489_n_w4ipc3.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184777/494046333_3730582937232862_9158983398833673101_n_plrpsn.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184777/493690365_3730583217232834_1329389117890993979_n_imu9lg.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184777/494114485_3730582867232869_85733598352756017_n_zzh1ek.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184777/494173483_3730582873899535_806301977102771707_n_te71hn.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184779/494232855_3730582880566201_2128023154337203591_n_hwpopr.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184780/494397613_3730582980566191_8482426013882736403_n_sn99ti.jpg',
    ],
  },
  {
    year: 2018,
    title: 'Chilca OVNI Festival 2018',
    description: 'Chilca OVNI Festival •••The VJS 2018 !! Son 4 días de festival 1 al 4 de febrero donde bailaremos por la paz y la curación de nuestro planeta tierra. Esta vez en la playa Ñave de Chilca al sur de Lima, km. 63!! Line Up Internacional (active meditation music & .meditation music) Visuales, Talleres, Charlas, Exposiciones, Performances •Ceremonia Ancestral, Yoga, Meditación •Contacto con la naturaleza y con los extraterrestres.',
    images: [
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184779/494266707_3732853157005840_3092825141736986782_n_uypzkk.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184780/494446300_3734694996821656_3545251223446501319_n_e6upl2.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184778/494196017_3735104703447352_4437331952052726622_n_zsrytd.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184781/494716897_3735103566780799_3991185038801595516_n_fkmydc.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184781/494523215_3735103276780828_4080075332463040733_n_ta6ghi.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184778/494180514_3735104580114031_1387557799286373345_n_xxxsgv.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184784/495171803_3735107396780416_5720135692135384176_n_unr8qv.jpg',
      'https://scontent.flim2-2.fna.fbcdn.net/v/t1.6435-9/38840314_1973152652975908_5781897330496110592_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeG465Q7Ze5D1OApQgJzc0RWIblEtWk9vlAhuUS1aT2-UK0hNQcmxoC6zAh5jcH68u0T3r1W28UowT_1f5o_aHqT&_nc_ohc=r_vmZonzAWMQ7kNvwHlyLD5&_nc_oc=AdrV9Tk_MilQpb1AH41kJTACRYBUUHOpXcB0B86lZxuhLU080X_gnIF9qVO2j0szzcTTDcHB4pdQ1sEnAByLW5HX&_nc_zt=23&_nc_ht=scontent.flim2-2.fna&_nc_gid=sQ7Xvks17_Be2O18VBWg9w&_nc_ss=7b2a8&oh=00_Af9OzT64e29P6fg_Cs-4fwDlOwxfgVow5b0stylJtNKbbg&oe=6A4732F0',
      'https://scontent.flim2-2.fna.fbcdn.net/v/t1.6435-9/38914361_1973152489642591_6616331565402161152_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeGAOzlZEm9yTCgZeICMntNcBjJF4V6GOkoGMkXhXoY6SpCgwjYr82UCxF5xoYcNbyGhPgL7DUZ7YQYoqdAt_ZXG&_nc_ohc=AynNUBX5vP8Q7kNvwFWfEsC&_nc_oc=Adq9ZNI4crYz5sWx2VKtl1pPXUW8-7zZB6fUdLbh7RFNPCG7iuHcLkRX_rWT35LgOvWLYACnEkIeJEQDxaEUvNdA&_nc_zt=23&_nc_ht=scontent.flim2-2.fna&_nc_gid=nIoJmvbVL_5t5LJffHlQlQ&_nc_ss=7b2a8&oh=00_Af8cZKYklgV62f1r1MOPGuoX1yPua0uNsYqJQIq5VIm8tA&oe=6A472C46',
      'https://scontent.flim2-6.fna.fbcdn.net/v/t1.6435-9/38782891_1973152882975885_1997769437477863424_n.jpg?stp=c426.0.1092.1092a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=969c58&_nc_eui2=AeHlinKZZhmNMqDYZCy6pnXCEamG4OLcEVsRqYbg4twRW3sBcylVD0Q2TH5bPDemaTi4hg7Z4qKKUeMkYko2jdTs&_nc_ohc=wua-uB4XsKoQ7kNvwFYOexp&_nc_oc=AdrZDscIRd94DCy271L-eyJ_PNx8AJGz1UTxCuQ_K5dlQjtMOUV-txeV6zu_C_Z1qUXSYA85aKOhQJXnSJgg3lQU&_nc_zt=23&_nc_ht=scontent.flim2-6.fna&_nc_gid=UIKqfYN1nO1j8p2ZydOQrg&_nc_ss=7b2a8&oh=00_Af9_bNLJ7Yzne5eXkfLNDk-v7Fx5LNdGdpeY30NMt84_hA&oe=6A484BAB',
      'https://scontent.flim2-6.fna.fbcdn.net/v/t1.6435-9/38802586_1973161752974998_413168659804979200_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeGMKwRmp7zLBlDeRQPFkvucHUGK70M06s4dQYrvQzTqzjday0y-GOKWmpJVemEsJrHUflNr7dE_CNyNX_Mh7BQE&_nc_ohc=usPKzjaDTFIQ7kNvwGZtOZQ&_nc_oc=AdrBy68PY05bA2GWRuJW5RJGAVSQb_WcgF-StqiWRnQvSfj46TtakUu_2w4-eimXXyMHb1w_f947izRr0N8llKkc&_nc_zt=23&_nc_ht=scontent.flim2-6.fna&_nc_gid=S0AGZKChliCeqpiBdAVpYQ&_nc_ss=7b2a8&oh=00_Af_m9a4BFyu7Fg0lU3rRTIfXHumEL5aHQ9jzwuz6GfP2Vw&oe=6A48474A',
      'https://scontent.flim2-5.fna.fbcdn.net/v/t1.6435-9/38847471_1973162139641626_2966526816061227008_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeGDCrMoUelmPYyuB8RlT5NUsZdgURRlqpGxl2BRFGWqkVZAbzf2o6HO1VYlgR-MJjKF60dlCkr221u8uuVbpdNf&_nc_ohc=kfq6p6eedb0Q7kNvwFs65eL&_nc_oc=Adq4Otex2VWc-ay9VVU4wmDo0eZtFnJkbGMehEhMQOyQGKyLXte6IsaeNaTM3jVjrJbJF_3__kfFnbomZeGnoeOk&_nc_zt=23&_nc_ht=scontent.flim2-5.fna&_nc_gid=qim8M6MftniJ_89X_7HRvA&_nc_ss=7b2a8&oh=00_Af-wm48xi4LJBtA_889MxTnt5I2kUeimFzNT0ZgzeMWMvw&oe=6A4842C0',
    ],
  },
  {
    year: 2019,
    title: 'Chilca OVNI Festival 2019',
    description: 'OVNI Festival & Trilobite Music presentan este verano Chilca OVNI Festival 2019 ❀ Tercera Edición 4 días de festival 7 al 10 de febrero en la playa Ñave de Chilca al sur de Lima, km. 63.',
    images: [
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184776/36929112_1943060055985168_4984731742293196800_n_jx5wx1.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184783/495358733_3735881523369670_4197565618394092206_n_chvjgr.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1781457281/201917536_n_jtoblp.jpg',
    ]
  },
  {
    year: 2024,
    title: 'PSYCHEDELIC ALIENIGENACIÓN',
    description: 'Volvimos renovados!! 👽👽👽 Bienvenidos en PSYCHEDELIC ALIENIGENACIÓN party en Chilca, el teaser de uno de los festivales más grandes de Perú, "Chilca Ovni Fest" que estará regresando en su cuarta edición próximamente. Chilca es uno de los primeros pueblo en el mundo por número de avistamientos de alienígenas y al que se le atribuye el rasgo especial de ser la fuente de energía para los ovnis que del cerro suben al cielo. Aquí puedes disfrutar de varias playas muy acogedoras, bañarte en una de las tres lagunas legendarias y "milagrosas" con propiedades benéficas para la salud, gustar una rica nieve artesanal hechas con productos locales como higo, lúcuma , granada o pecana y visitar el peculiar museo de Víctor Tumay Caycho que es un chilcano que lo instalo en el garaje de su casa donde, según ha declarado a diversos medios, hay piezas extraterrestres dejadas por algún OVNI avistado en la localidad. El party queda a un costado del sendero para subir al cerrito panorámico con arriba el resto de una huaca donde suelen reportar avistamientos ovni y está cerca de todos estos lugares atractivos que puedes alcanzar simplemente caminando. Este evento fue creado por la unión de varios artistas, músicos y amigos uniendo esfuerzos con la intención de disfrutar del verano que está a punto de terminar, celebrando la vida al ritmo de los beats psicodélicos. La música empezará a la 5 pm del sábado 30 de marzo con estilos como Etno, Dub, Progressive, Trance y seguirá en la noche con Psytrance, Forest, Darkpsy, Hi-Tech, Darkprog, Zenonesque y Goatrance hasta que esté bien alto el sol en la mañana del domingo 31.',
    images: [
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184777/480882766_1055702916600420_3886740375525878676_n_ujqzrf.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1781458151/202447382177_n_mwj1ct.jpg',
    ],
  },
  {
    year: 2025,
    title: 'PSYCHEDELIC ALIENIGENACIÓN 2.0',
    description: 'PSYCHEDELIC ALIENIGENACIÓN 2.0 Psytrance en Chilca, el teaser de uno de los festivales más grandes de Perú, "Chilca Ovni Festival" que estará regresando muy pronto.',
    images: [
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1781458153/20254655832_b8syww.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184776/485881724_1073333368170708_7090447895610459931_n_njr2mg.jpg',
    ],
  },
  {
    year: 2026,
    title: '🛸 CHILCA OVNI FESTIVAL 2026 🛸',
    description: 'En un lugar donde el desierto observa al cielo y el tiempo deja de comportarse como debería, la señal vuelve a activarse. Chilca Ovni Festival 2026 abre el portal. 🔹 Sonidos futuristas y psicodélicos 🔹 Visuales inmersivos y arquitectura lumínica 🔹 Ritual colectivo bajo cielos activos 🔹 Comunidad, exploración y expansión 📡 Coordenadas del evento 📍 Playa Punta Yaya – Las Salinas, Chilca, Perú 📅 27, 28 de febrero y 1 de marzo 2026 ⏰ Transmisión continua desde las 5pm 👁️ Advertencia: Una vez que entras en la señal, algo cambia. No prometemos respuestas. Prometemos experiencia. CHILCA OVNI FESTIVAL 2026 No mires el cielo esperando permiso.',
    images: [
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780184784/506860702_1136014311902613_7813509344103617472_n_lgocw7.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1781458491/2026626159627_orqdfa.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1781458491/2026640932087_qrw0mf.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780545739/replicantboy_s2026-5-7-22.40.159_story_f0rdkh.webp',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780545732/chilca.ovni.festival_s2026-5-7-22.29.441_story_mzinfh.webp',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780545722/chilca.ovni.festival_s2026-5-7-22.29.52_story_qwirse.webp',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780546036/replicantboy_s2026-5-7-22.35.963_story_eqsxhq.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1780546031/replicantboy_s2026-5-7-22.36.624_story_pbkluf.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775430948/20260301_074336_tpqsqb.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775430947/20260227_194048_k9iteb.jpg',
      'https://res.cloudinary.com/da6s9ujgm/image/upload/v1775430947/20260301_013142_dbcrd0.jpg'
    ],
  },
]

export const FESTIVAL_SCHEDULE = [
  { time: '17:00', name: 'CEREMONIA APERTURA', artist: 'Milagros Guzmán', genre: 'Ambient / Psy Chill', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=500&fit=crop' },
  { time: '18:00', name: 'Néstor Guerrero', artist: 'Néstor Guerrero', genre: 'Ambient / Psy Chill', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop' },
  { time: '21:00', name: 'Demencia', artist: 'Demencia', genre: 'Techno', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop' },
  { time: '22:15', name: 'Factor RH', artist: 'Factor RH', genre: 'Psy Tek', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop' },
  { time: '23:30', name: 'Astral Mind', artist: 'Astral Mind', genre: 'Progressive Psy', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop' },
  { time: '00:30', name: 'Uaky', artist: 'Uaky', genre: 'Dark Prog', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop' },
  { time: '02:00', name: 'Aren Aline', artist: 'Aren Aline', genre: 'Psychedelic', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop' },
  { time: '03:30', name: 'Pepe Jones', artist: 'Pepe Jones', genre: 'Full On Night', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop' },
  { time: '05:00', name: 'Naropa', artist: 'Naropa', genre: 'Full On Groove', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop' },
  { time: '05:30', name: 'Alien Diabolic', artist: 'Alien Diabolic', genre: 'Speed Trance', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop' },
  { time: '07:30', name: 'Intercalactika', artist: 'Intercalactika', genre: 'Hi-Tech', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop' },
  { time: '08:30', name: 'Carlos Tong', artist: 'Carlos Tong', genre: 'Goa', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop' },
  { time: '09:30', name: 'Break', artist: 'Break', genre: '', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop' },
]

export const ARTIST_CATEGORIES = {
  djs: {
    title: 'DJs',
    description: 'Los mejores DJs de psytrance y electrónica del continente',
    artists: [
      { name: 'Milagros Guzmán', genre: 'Ambient / Psy Chill', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=500&fit=crop' },
      { name: 'Néstor Guerrero', genre: 'Ambient / Psy Chill', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop' },
      { name: 'Demencia', genre: 'Techno', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop' },
      { name: 'Factor RH', genre: 'Psy Tek', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop' },
    ]
  },
  vjs: {
    title: 'VJs',
    description: 'Proyecciones visuales y arte digital inmersivo',
    artists: [
      { name: 'Cosmic Visuals', genre: 'Proyecciones 3D', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop' },
      { name: 'Neon Dreams', genre: 'Mapping de luz', image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&h=500&fit=crop' },
    ]
  },
  malabarismo: {
    title: 'Malabarismo',
    description: 'Artistas de fuego y malabarismo cósmico',
    artists: [
      { name: 'Fire Spinners Crew', genre: 'Fuego y poi', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop' },
      { name: 'Cosmic Jugglers', genre: 'Malabarismo LED', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop' },
    ]
  },
  flow_arts: {
    title: 'Artistas de Flow',
    description: 'Danzantes de contact staff, hula hoop y movimiento cósmico',
    artists: [
      { name: 'Flow Masters', genre: 'Staff de contacto', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop' },
      { name: 'Hula Cosmic', genre: 'Hula Hoop LED', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=500&fit=crop' },
    ]
  },
  live_painting: {
    title: 'Pintura en Vivo',
    description: 'Artistas visuales creando en tiempo real',
    artists: [
      { name: 'Abstract Cosmos', genre: 'Pintura acrílica', image: 'https://images.unsplash.com/photo-1549887534-f3eda5f0c50d?w=500&h=500&fit=crop' },
      { name: 'Mandala Artist', genre: 'Arte sagrado', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop' },
    ]
  },
  fire_show: {
    title: 'Show de Fuego',
    description: 'Espectáculos pirotécnicos y performances con fuego',
    artists: [
      { name: 'Fire Breathers', genre: 'Tragafuego', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop' },
      { name: 'Pyro Masters', genre: 'Show pirotécnico', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=500&fit=crop' },
    ]
  },
  meditative_music: {
    title: 'Música Meditativa',
    description: 'Espacios sonoros para relajación y transformación interior',
    artists: [
      { name: 'Soundbath Cosmic', genre: 'Cuencos tibetanos', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop' },
      { name: 'Ambient Healers', genre: 'Meditación sonora', image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&h=500&fit=crop' },
    ]
  },
  workshops: {
    title: 'Talleres',
    description: 'Experiencias educativas y de crecimiento personal',
    artists: [
      { name: 'Geometría Sagrada', genre: 'Taller educativo', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop' },
      { name: 'Danza Consciente', genre: 'Movimiento y mindfulness', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop' },
    ]
  }
}
