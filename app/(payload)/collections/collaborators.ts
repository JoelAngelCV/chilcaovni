import type { CollectionConfig } from 'payload'

export const Collaborators: CollectionConfig = {
  slug: 'collaborators',
  admin: {
    useAsTitle: 'name', // Título que se muestra en el panel de control
    defaultColumns: ['name', 'artist', 'genre'], // Columnas que se muestran por defecto
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
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'contribution',
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
