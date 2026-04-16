import GalleryVideo from './gallery-video';

export default function GallerySectionVideo() {
  const videos = [
    // { id: 'dQw4w9WgXcQ', type: 'horizontal' }, // Video normal
    // { id: '5S8m_x3yv98', type: 'short' },      // Un Short (ID de ejemplo)
    // { id: 'another-id', type: 'short' },       // Otro Short
    // { id: 'video-id-3', type: 'horizontal' },  // Otro horizontal
    // { id: '191BheYX1C4', type: 'horizontal' },
    { id: 'rDlgfgDtGVc', type: 'short' },
    { id: 'CNUOZpnnW10', type: 'short' },
    { id: 'jxyvoFcqWD8', type: 'short' },
  ];

  return (
    <section className="max-w-7xl mx-auto p-8">
      {/* Grid responsivo: ajusta columnas automáticamente */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {videos.map((video) => (
          <div key={video.id} className="flex justify-center">
            <GalleryVideo videoId={video.id} type={video.type as any} />
          </div>
        ))}
      </div>
    </section>
  );
}
