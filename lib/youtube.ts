// lib/youtube.ts
export const loadYouTubeAPI = (callback: () => void) => {
  if ((window as any).YT && (window as any).YT.Player) {
    callback();
    return;
  }

  const existingTag = document.getElementById('youtube-api-script');
  if (!existingTag) {
    const tag = document.createElement('script');
    tag.id = 'youtube-api-script';
    tag.src = "https://youtube.com";
    document.body.appendChild(tag);
  }

  // Guardamos los callbacks en una lista para ejecutarlos todos
  const previousOnReady = (window as any).onYouTubeIframeAPIReady;
  (window as any).onYouTubeIframeAPIReady = () => {
    if (previousOnReady) previousOnReady();
    callback();
  };
};
