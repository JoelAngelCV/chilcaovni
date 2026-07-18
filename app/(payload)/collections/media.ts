import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        read: () => true,
        create: ({ req }) => !!req.user,
        },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
    ],
    upload: {
        adminThumbnail: 'thumbnail',
        imageSizes: [
        {
            name: 'thumbnail',
            width: 300,
            height: 300,
            crop: 'center', // Ideal para avatares, fotos de perfil o iconos cuadrados
        },
        {
            name: 'mobile',
            width: 600,
            // Al no poner 'height', mantiene la proporción original de la foto sin deformarla
        },
        {
            name: 'tablet',
            width: 1024,
        },
        {
            name: 'desktop',
            width: 1920, // Para banners principales o fondos de pantalla completa
        }
        ]
    },
};