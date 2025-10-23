import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'nav',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'main',
      title: 'Main Nav',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'label', type: 'string' },
        { name: 'href', type: 'string' },
      ]}],
    }),
    defineField({
      name: 'footer',
      title: 'Footer Links',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'label', type: 'string' },
        { name: 'href', type: 'string' },
      ]}],
    }),
  ],
})
