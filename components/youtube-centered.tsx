'use client';
import { useEffect, useRef, useState } from 'react';

interface Props {
  videoId: string;
}

export default function YouTubeCentered({ videoId }: Props) {
  const playerRef = useRef<any>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // 1. Definir la función de inicialización de forma global
    const initPlayer = () => {
      // Verificamos si el elemento existe antes de intentar montarlo
      if (!document.getElementById('youtube-player')) return;

      playerRef.current = new (window as any).YT.Player('youtube-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
          loop: 1,
          playlist: videoId, // Requerido para el bucle
          mute: 1,           // Obligatorio para autoplay
          playsinline: 1,
          modestbranding: 1,
          enablejsapi: 1, 
          origin: typeof window !== 'undefined' ? window.location.origin : '', 
        },
        events: {
          onReady: (event: any) => event.target.playVideo(),
          
        },
      });
    };

    // 2. Manejar la carga del script
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      (window as any).onYouTubeIframeAPIReady = initPlayer; // Registrar callback
      document.body.appendChild(tag);
    } else if ((window as any).YT && (window as any).YT.Player) {
      // Si la API ya estaba cargada (ej. por navegación entre páginas), inicializar directo
      initPlayer();
    }
  }, [videoId]);

  const toggleMute = () => {
    if (playerRef.current) {
      isMuted ? playerRef.current.unMute() : playerRef.current.mute();
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="w-full flex justify-center py-14 px-4">
      <div className="relative w-full max-w-300 aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(168,85,247,0.4)] bg-black">
        
        {/* Contenedor del video: Escalado para ocultar textos de YouTube */}
        <div className="absolute inset-0 pointer-events-none scale-[1.15]">
          <div id="youtube-player" className="w-full h-full"></div>
        </div>

        {/* 2. Capa Morada (Overlay) */}
        <div className="absolute inset-0 bg-purple-900/20 pointer-events-none mix-blend-multiply"></div>


        {/* Botón de sonido */}
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-6 z-20 bg-purple-600/80 hover:bg-purple-500 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-all text-xs font-bold shadow-lg pointer-events-auto"
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
      </div>
    </div>
  );
}


