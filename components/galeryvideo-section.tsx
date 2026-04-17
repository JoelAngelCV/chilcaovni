import GalleryVideo from './gallery-video';

export default function GallerySectionVideo() {
  const videos = [
    { id: 'rDlgfgDtGVc', type: 'short' },
    { id: 'CNUOZpnnW10', type: 'short' },
    { id: 'jxyvoFcqWD8', type: 'short' },
    { id: '191BheYX1C4', type: 'horizontal' },
    { id: '6zFLq_x4SVk', type: 'horizontal' },
    { id: 'C6Id5sdTCRA', type: 'horizontal' }
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Grid responsivo: ajusta columnas automáticamente */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {videos.map((video) => (
          <div key={video.id} className="flex justify-center">
            <GalleryVideo videoId={video.id} type={video.type as any} />
          </div>
        ))}
      </div>
    </div>
  );
}
