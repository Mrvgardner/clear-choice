import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteTitle', type: 'string', initialValue: 'Clear Choice Payment Solutions' }),
    defineField({ name: 'tagline', type: 'string', initialValue: 'Payments Without Limits.' }),
    defineField({ name: 'footerOwner', type: 'string', initialValue: 'A Switch Commerce Company' }),
    defineField({ name: 'defaultOgImage', type: 'image' }),
  ],
})
