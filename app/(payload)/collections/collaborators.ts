import type { CollectionConfig } from 'payload'
import { revalidateTag } from 'next/cache';

export const Collaborators: CollectionConfig = {
  slug: 'collaborators',
  hooks: {
     // Se ejecuta al crear o editar un post
    afterChange: [
      ({ doc }) => {
        if (doc?.slug) {
          revalidateTag(`posts-slug-${doc.slug}`, { expire: 0 });
          revalidateTag('posts-list', { expire: 0 });
        }
      },
    ],
    // CORREGIDO: afterDelete usa "doc" (que contiene los datos del elemento borrado)
    afterDelete: [
      ({ doc }) => {
        if (doc?.slug) {
          // Usamos los datos del documento eliminado para saber qué slug limpiar
          revalidateTag(`posts-slug-${doc.slug}`, { expire: 0 });
          revalidateTag('posts-list', { expire: 0 });
        }
      },
    ],
  },
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
