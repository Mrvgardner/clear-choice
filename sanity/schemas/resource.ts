import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required().max(90) }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'summary', type: 'text', validation: r => r.required().max(200) }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] }),
    defineField({
      name: 'productType',
      type: 'array',
      of: [{ type: 'string' }],
      options: { list: ['ATM', 'POS', 'Software', 'Kiosk'] },
    }),
    defineField({
      name: 'buyerType',
      type: 'array',
      of: [{ type: 'string' }],
      options: { list: ['Sales Agent', 'ISO', 'Support Team', 'Merchant'] },
    }),
    defineField({
      name: 'industry',
      type: 'array',
      of: [{ type: 'string' }],
      options: { list: ['Convenience', 'Liquor', 'Smoke Shop', 'Cannabis', 'Airport', 'Hospitality', 'Retail'] },
    }),
    defineField({
      name: 'media',
      type: 'file',
      options: { accept: 'application/pdf' },
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      validation: r => r.required(),
    }),
  ],
})
