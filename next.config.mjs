import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@payloadcms/ui'],
  serverExternalPackages: ['payload', '@payloadcms/db-postgres', '@payloadcms/db-mongodb'],
}

export default withPayload(nextConfig)
