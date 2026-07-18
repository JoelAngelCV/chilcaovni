import type { CollectionConfig } from 'payload'

export const Sponsors: CollectionConfig = {
    slug: 'sponsors',
    admin: {
        useAsTitle: 'name', // Título que se muestra en el panel de control
        defaultColumns: ['name', 'image'], // Columnas que se muestran por defecto
    },
    // 1. Activa las versiones y borradores para habilitar el campo _status
    versions: {
        drafts: true,
    },
    access: {
        read: () => true, // Cualquiera puede leer los artículos
        create: ({ req }) => !!req.user, // Solo usuarios logueados pueden crear
    },
    fields: [
        {
        name: 'name',
        type: 'text',
        required: true,
        },
        {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
        label: 'Foto',
        },
     ],
}