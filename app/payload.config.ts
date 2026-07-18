import { postgresAdapter } from '@payloadcms/db-postgres'
import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { ArtistCategories } from './(payload)/collections/artist-categories'
import { Timeline } from './(payload)/collections/timeline'
import { Media } from './(payload)/collections/media'
import { cloudinaryAdapter } from './(payload)/cloudinary-adapter'
import { Sponsors } from './(payload)/collections/sponsors'
import { Collaborators } from './(payload)/collections/collaborators'

// Función de control de acceso compatible con Payload v3
const isAdmin = ({ req: { user } }: { req: any }) => {
  return Boolean(user && user.roles?.includes('admin'))
}

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),
  
  // Define and configure your collections in this array
  collections: [
    Timeline, 
    ArtistCategories, 
    Media, 
    Sponsors, 
    Collaborators,
    // Inyectamos la colección de usuarios explícitamente para controlar sus accesos
    {
      slug: 'users',
      auth: true, // Reemplaza la colección por defecto de Payload
      admin: {
        useAsTitle: 'email',
        // Oculta la colección de la barra lateral si el usuario NO es admin
        hidden: ({ user }) => !user?.roles?.includes('admin'),
        // hidden: false,
      },
      access: {
        // Permite que un usuario lea sus propios datos (evita el error not-found), 
        // pero solo los 'admin' pueden leer los datos de otros usuarios.
        read: ({ req: { user } }) => {
          if (!user) return false
          if (user.roles?.includes('admin')) return true
          
          // Si no es admin, solo puede leer su propio ID
          return {
            id: {
              equals: user.id,
            },
          }
        },
        // Solo los administradores reales pueden crear, actualizar o borrar
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
      },
      fields: [
        // Añadimos el campo de roles para segmentar los accesos
        {
          name: 'roles',
          type: 'select',
          hasMany: true,
          defaultValue: ['user'],
          required: true,
          options: [
            { label: 'Administrador', value: 'admin' },
            { label: 'Usuario Restringido', value: 'user' },
          ],
          // Protege el campo para que el usuario normal no pueda hacerse admin a sí mismo
          access: {
            create: isAdmin,
            update: isAdmin,
          },
        },
      ],
    }
  ],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  
  // Whichever Database Adapter you're using should go here
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),

  // If you want to resize images, crop, set focal point, etc.
  plugins: [
    cloudStoragePlugin({
      enabled: Boolean(
        process.env.CLOUDINARY_CLOUD_NAME && 
        process.env.CLOUDINARY_API_KEY && 
        process.env.CLOUDINARY_API_SECRET,
      ),
      collections: {
        media: {
          adapter: cloudinaryAdapter,
          disableLocalStorage: true,
          disablePayloadAccessControl: true,
        },
      },
    }),
  ],
})
