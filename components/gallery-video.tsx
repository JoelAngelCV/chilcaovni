'use client';
import { useEffect, useRef } from 'react';
import { loadYouTubeAPI } from '@/lib/youtube'; // Importa la utilidad

export default function GalleryVideo({ videoId, type }: { videoId: string, type: 'short' | 'horizontal' }) {
  const playerRef = useRef<any>(null);
  const containerId = `player-${videoId}`;

  useEffect(() => {
  let isMounted = true;

  loadYouTubeAPI(() => {
    // Si el componente se desmontó mientras cargaba la API, no hacemos nada
    if (!isMounted) return;

    // Si el reproductor ya existe para este ID, no lo duplicamos
    if (playerRef.current) return;

    playerRef.current = new (window as any).YT.Player(containerId, {
      videoId: videoId,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        origin: window.location.origin,
      },
    });
  });

  return () => {
    isMounted = false;
    // Limpieza opcional: destruir el player si el componente desaparece
    if (playerRef.current && playerRef.current.destroy) {
      playerRef.current.destroy();
    }
  };
}, [videoId, containerId]);


  const aspectClass = type === 'short' ? 'aspect-[9/16] max-w-[300px]' : 'aspect-video w-full';

  return (
    <div className={`relative ${aspectClass} rounded-2xl overflow-hidden bg-black`}>
      <div id={containerId} className="w-full h-full"></div>
    </div>
  );
}
