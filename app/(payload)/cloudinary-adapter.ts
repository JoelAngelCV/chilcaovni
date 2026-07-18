import { createReadStream } from 'fs'
import type { Adapter } from '@payloadcms/plugin-cloud-storage/types'
import { v2 as cloudinary } from 'cloudinary'

const configureCloudinary = () => {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error(
      'Cloudinary credentials are not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET.',
    )
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  })

  return cloudinary
}

const sanitizePublicId = (value: string) => value.replace(/[^a-zA-Z0-9._/-]+/g, '-')

const getPublicId = ({ filename, prefix }: { filename: string; prefix?: string }) => {
  // Cloudinary no requiere la extensión en el public_id para imágenes/videos, 
  // pero para evitar conflictos y mantener compatibilidad con Payload la conservamos sanitizada
  const parts = [prefix, filename].filter(Boolean)
  return sanitizePublicId(parts.join('/'))
}

// NUEVA FUNCIÓN: Detecta el tipo de recurso dinámicamente según la extensión
const getResourceType = (filename: string): 'image' | 'video' | 'raw' => {
  const ext = filename.split('.').pop()?.toLowerCase()
  if (!ext) return 'raw'
  
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif', 'svg', 'heic']
  const videoExtensions = ['mp4', 'mov', 'avi', 'mkv', 'webm', 'ogv']
  
  if (imageExtensions.includes(ext)) return 'image'
  if (videoExtensions.includes(ext)) return 'video'
  return 'raw'
}

export const cloudinaryAdapter: Adapter = ({ prefix }) => ({
  name: 'cloudinary',

  async handleUpload({ file }) {
    const client = configureCloudinary()
    
    const uploadResult = await new Promise<any>((resolve, reject) => {
      const uploadStream = client.uploader.upload_stream(
        {
          folder: prefix ?? '',
          overwrite: false,
          // Eliminamos la extensión del public_id si es imagen/video para que Cloudinary use su estructura nativa
          public_id: getPublicId({ filename: file.filename.replace(/\.[^/.]+$/, ""), prefix }),
          resource_type: 'auto', // Aquí sí dejamos auto para que Cloudinary lo clasifique al subir
        },
        (error, result) => {
          if (error || !result) {
            reject(error ?? new Error('Cloudinary upload failed'))
            return
          }
          resolve(result)
        },
      )

      if (file.buffer) {
        uploadStream.end(file.buffer)
      } else if (file.tempFilePath) {
        const stream = createReadStream(file.tempFilePath)
        stream.on('error', reject)
        stream.pipe(uploadStream)
      } else {
        reject(new Error('No file content is available for Cloudinary upload'))
      }
    })

    return {
      filename: file.filename,
      filesize: uploadResult.bytes || file.filesize,
      mimeType: file.mimeType,
      url: uploadResult.secure_url, // URL limpia absoluta devuelta por Cloudinary
      width: uploadResult.width,
      height: uploadResult.height,
    }
  },

  async handleDelete({ doc, filename }) {
    const client = configureCloudinary()
    const targetFilename = doc.filename || filename
    const cleanFilename = targetFilename.replace(/\.[^/.]+$/, "")
    const publicId = getPublicId({ filename: cleanFilename, prefix: doc.prefix })
    
    await client.uploader.destroy(publicId, { 
      resource_type: getResourceType(targetFilename) 
    })
  },

    // CORRECCIÓN AQUÍ: Forzamos a Cloudinary a estructurar la URL real
  generateURL({ filename, prefix }) {
    const client = configureCloudinary()
    const ext = filename.split('.').pop() // Extrae la extensión original (ej: jpg)
    const cleanFilename = filename.replace(/\.[^/.]+$/, "") // Quita la extensión del publicId
    
    return client.url(getPublicId({ filename: cleanFilename, prefix }), {
      resource_type: getResourceType(filename), // Detecta correctamente 'image'
      secure: true,
      format: ext, // Al pasarle el formato, Cloudinary le añade el '.jpg' al final
      force_version: true, // Esto obliga a Cloudinary a buscar e inyectar el código de versión vXXXXXXXXXX
      urlAnalytics: false // Limpia el ?_a=BAM del final
    })
  },

  // CORRECCIÓN AQUÍ: Hacemos lo mismo para el redireccionamiento estático
  staticHandler(_req, { params }) {
    const client = configureCloudinary()
    const ext = params.filename.split('.').pop()
    const cleanFilename = params.filename.replace(/\.[^/.]+$/, "")
    
    const publicUrl = client.url(
      getPublicId({ filename: cleanFilename, prefix: params.prefix }),
      {
        resource_type: getResourceType(params.filename),
        secure: true,
        format: ext,
        force_version: true,
        urlAnalytics: false
      },
    )
    return Response.redirect(publicUrl, 307)
  },
})
