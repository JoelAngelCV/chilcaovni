import type { CollectionConfig } from 'payload'

export const ArtistCategories: CollectionConfig = {
  slug: 'artist-categories',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'key', 'updatedAt'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'key',
      type: 'text',
      required: true,
      unique: true,
      label: 'Clave',
      admin: {
        description: 'Clave interna del grupo, por ejemplo: djs, vjs, malabarismo',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'artists',
      type: 'array',
      label: 'Artistas',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Nombre',
        },
        {
          name: 'genre',
          type: 'text',
          label: 'Género',
        },
        {
          name: 'bio',
          type: 'text',
          label: 'Biografía',
        },
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram',
        },
        {
          name: 'facebook',
          type: 'text',
          label: 'Facebook',
        },
        {
          name: 'soundcloud',
          type: 'text',
          label: 'Soundcloud',
        },
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media',
          label: 'Foto',
        },
        {
          name: 'flag',
          type: 'text',
          label: 'Bandera',
        },
      ],
    },
  ],
}
