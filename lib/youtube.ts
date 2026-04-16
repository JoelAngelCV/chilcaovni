// lib/youtube.ts
export const loadYouTubeAPI = (callback: () => void) => {
  // 1. Si la API ya está cargada y lista, ejecutamos y salimos
  if ((window as any).YT && (window as any).YT.Player) {
    callback();
    return;
  }

  // 2. Si no está cargada, preparamos el callback global
  const previousOnReady = (window as any).onYouTubeIframeAPIReady;
  
  (window as any).onYouTubeIframeAPIReady = () => {
    if (previousOnReady) previousOnReady();
    callback();
  };

  // 3. Solo creamos el script si no existe ya en el documento
  if (!document.getElementById('youtube-api-script')) {
    const tag = document.createElement('script');
    tag.id = 'youtube-api-script';
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
};
