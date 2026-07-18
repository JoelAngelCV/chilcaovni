import type { CollectionConfig } from 'payload'

export const Timeline: CollectionConfig = {
  slug: 'timeline',
  admin: {
    useAsTitle: 'artist', // Título que se muestra en el panel de control
    defaultColumns: ['time', 'artist', 'genre'], // Columnas que se muestran por defecto
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
      name: 'time',
      type: 'text',
      required: true,
    },
    {
      name: 'artist',
      type: 'text',
      required: true,
    },
    {
      name: 'genre',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Foto',
    },
    // {
    //   name: 'author',
    //   type: 'relationship',
    //   relationTo: 'users',
    //   required: true,
    // },
    // {
    //   name: 'title',
    //   type: 'text',
    //   required: true,
    // },
    // {
    //   name: 'content',
    //   type: 'richText',
    //   required: true,
    // },
    // {
    //   name: 'author',
    //   type: 'relationship',
    //   relationTo: 'users',
    //   required: true,
    // },
  ],
}
