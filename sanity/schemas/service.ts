import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required().max(60) }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title', maxLength: 80 }, validation: r => r.required() }),
    defineField({ name: 'subtitle', type: 'string', description: 'Short value prop', validation: r => r.required().max(140) }),
    defineField({ name: 'heroImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'problem', type: 'text', rows: 3, validation: r => r.required().max(240) }),
    defineField({ name: 'solution', type: 'text', rows: 3, validation: r => r.required().max(280) }),
    defineField({
      name: 'plan',
      title: 'Three Step Plan',
      type: 'array',
      of: [{ type: 'string' }],
      validation: r => r.required().min(3).max(3),
    }),
    defineField({
      name: 'outcomes',
      type: 'array',
      of: [{ type: 'string' }],
      validation: r => r.required().min(3).max(6),
    }),
    defineField({
      name: 'testimonial',
      type: 'reference',
      to: [{ type: 'testimonial' }],
    }),
    defineField({
      name: 'ctaLabel',
      type: 'string',
      initialValue: 'Book a Free Demo Now',
      validation: r => r.required(),
    }),
    defineField({ name: 'ctaHref', type: 'url', validation: r => r.uri({ allowRelative: true }) }),
    defineField({
      name: 'seo',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string', validation: r => r.max(60) }),
        defineField({ name: 'description', type: 'text', rows: 3, validation: r => r.max(160) }),
      ],
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'subtitle' } },
})
