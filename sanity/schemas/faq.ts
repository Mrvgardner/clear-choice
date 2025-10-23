import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'question', type: 'string', validation: r => r.required().max(120) }),
    defineField({ name: 'answer', type: 'text', validation: r => r.required().max(600) }),
    defineField({ name: 'category', type: 'string' }),
  ],
})
