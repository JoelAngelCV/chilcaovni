import { getPayload } from 'payload'
import config from '@payload-config'
import type { ArtistCategory } from '@/payload-types'

import { ArtistasPageClient } from './artistas-page-client'

export default async function ArtistasPage() {
  const payload = await getPayload({ config })

  const data = await payload.find({
    collection: 'artist-categories',
    depth: 2,
    where: {
      _status: {
        equals: 'published',
      },
    },
    sort: 'createdAt', 
    limit: 100,
  })

  return (
    <ArtistasPageClient categories={data.docs as ArtistCategory[]} />
  )
}