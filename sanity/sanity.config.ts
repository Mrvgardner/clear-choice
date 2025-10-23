import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'clearchoice-cms',
  title: 'Clear Choice CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || 'production',
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
  schema: { types: schemaTypes },
})
