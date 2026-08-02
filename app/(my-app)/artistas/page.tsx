import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'
import type { ArtistCategory } from '@/payload-types'
import { ARTIST_CATEGORIES_LIST_TAG } from '@/lib/payload-cache'

import { ArtistasPageClient } from './artistas-page-client'

const getCachedArtistCategories = unstable_cache(
  async () => {
    const payload = await getPayload({ config })

    return await payload.find({
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
  },
  ['artist-categories-key'],
  { tags: [ARTIST_CATEGORIES_LIST_TAG] }
)

export default async function ArtistasPage() {
  const data = await getCachedArtistCategories()


  return (
    <ArtistasPageClient categories={data.docs as ArtistCategory[]} />
  )
}