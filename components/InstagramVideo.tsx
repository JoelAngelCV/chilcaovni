// 'use client'; // Necesario en App Router porque usa hooks internos

// import React from 'react';
// import { InstagramEmbed } from 'react-social-media-embed';

// interface Props {
//   url: string;
// }

// const InstagramVideo: React.FC<Props> = ({ url }) => {
//   return (
//     <div >
//       <InstagramEmbed 
//         url={url} 
//         width="90%"
//         // maxWidth={550} // Límite recomendado por Instagram
//       />
//     </div>
//   );
// };

// export default InstagramVideo;
// 'use client';

// import { useState, useEffect } from 'react';
// import { InstagramEmbed } from 'react-social-media-embed';

// export default function InstagramVideo({ url }: { url: string }) {
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   if (!hasMounted) {
//     return <div style={{ height: '400px', backgroundColor: '#f0f0f0' }}>Cargando...</div>; 
//     // Un placeholder ayuda a que no salte el layout
//   }

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       <InstagramEmbed url={url} width="100%" />
//     </div>
//   );
// }

// components/InstagramVideo.tsx
'use client';

import dynamic from 'next/dynamic';

// Cargamos el embed solo en el cliente y definimos qué mostrar mientras carga (loading)
const InstagramEmbed = dynamic(
  () => import('react-social-media-embed').then((mod) => mod.InstagramEmbed),
  { 
    ssr: false,
    loading: () => <InstagramSkeleton /> // Aquí llamamos al placeholder
  }
);

// --- El Placeholder "Bonito" (Skeleton) ---
const InstagramSkeleton = () => (
  <div className="animate-pulse flex flex-col items-center w-full max-w-137.5 border border-gray-200 rounded-xl p-4 bg-white">
    <div className="flex items-center space-x-3 w-full mb-4">
      <div className="rounded-full bg-gray-300 h-10 w-10"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3"></div>
    </div>
    <div className="w-full bg-gray-200 h-112.5 rounded-lg"></div>
    <div className="flex space-x-3 w-full mt-4">
      <div className="h-6 bg-gray-300 rounded w-6"></div>
      <div className="h-6 bg-gray-300 rounded w-6"></div>
    </div>
  </div>
);

// --- El Componente Principal con el "Hack" de recorte ---
export default function InstagramVideo({ url }: { url: string }) {
  return (
    <div className="flex justify-center w-full py-4 -my-2">
      {/* Contenedor del HACK: Recorta 50px de arriba y abajo para ocultar interfaz */}
      <div className="relative overflow-hidden w-full max-w-120 h-110 sm:h-125 rounded-2xl border border-l-purple-700 shadow-lg">
        <div className="absolute -top-13.75 left-0 w-full"> 
          {/* Ajustamos la posición para "subir" el video y tapar el autor */}
          <InstagramEmbed 
            url={url} 
            width="100%" 
          />
        </div>
      </div>
    </div>
  );
}
