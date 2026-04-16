'use client';
import { useEffect, useRef } from 'react';
import { loadYouTubeAPI } from '@/lib/youtube'; // Importa la utilidad

export default function GalleryVideo({ videoId, type }: { videoId: string, type: 'short' | 'horizontal' }) {
  const playerRef = useRef<any>(null);
  const containerId = `player-${videoId}`;

  useEffect(() => {
    loadYouTubeAPI(() => {
      // Evitar doble inicialización
      if (playerRef.current) return;

      playerRef.current = new (window as any).YT.Player(containerId, {
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          controls: 1,
          rel: 0,
          modestbranding: 1,
          enablejsapi: 1,
          showinfo: 0, 
          origin: window.location.origin
        },
      });
    });
  }, [videoId, containerId]);

  const aspectClass = type === 'short' ? 'aspect-[9/16] max-w-[300px]' : 'aspect-video w-full';

  return (
    <div className={`relative ${aspectClass} rounded-2xl overflow-hidden bg-black`}>
      <div id={containerId} className="w-full h-full"></div>
    </div>
  );
}
