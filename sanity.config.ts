import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// Schema imports
import page from './sanity/schemas/page'
import service from './sanity/schemas/service'
import testimonial from './sanity/schemas/testimonial'
import faq from './sanity/schemas/faq'
import resource from './sanity/schemas/resource'
import nav from './sanity/schemas/nav'
import settings from './sanity/schemas/settings'

export default defineConfig({
  name: 'default',
  title: 'Clear Choice Payment Solutions',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Site Settings (singleton)
            S.listItem()
              .title('Site Settings')
              .id('settings')
              .child(
                S.document()
                  .schemaType('settings')
                  .documentId('settings')
              ),
            
            // Navigation (singleton)
            S.listItem()
              .title('Navigation')
              .id('navigation')
              .child(
                S.document()
                  .schemaType('nav')
                  .documentId('navigation')
              ),

            S.divider(),

            // Pages
            S.listItem()
              .title('Pages')
              .schemaType('page')
              .child(S.documentTypeList('page')),

            // Services
            S.listItem()
              .title('Services')
              .schemaType('service')
              .child(S.documentTypeList('service')),

            // Resources
            S.listItem()
              .title('Resources')
              .schemaType('resource')
              .child(S.documentTypeList('resource')),

            S.divider(),

            // Testimonials
            S.listItem()
              .title('Testimonials')
              .schemaType('testimonial')
              .child(S.documentTypeList('testimonial')),

            // FAQs
            S.listItem()
              .title('FAQs')
              .schemaType('faq')
              .child(S.documentTypeList('faq')),
          ])
    }),
    visionTool(),
  ],

  schema: {
    types: [
      page,
      service,
      testimonial,
      faq,
      resource,
      nav,
      settings,
    ],
  },
})
