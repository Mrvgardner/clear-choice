import { createClient } from 'next-sanity'
import { client } from './sanity.client'

export const previewClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: process.env.SANITY_API_VERSION || '2024-08-01',
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN,
})

export const getClient = (preview = false) => (preview ? previewClient : client)
