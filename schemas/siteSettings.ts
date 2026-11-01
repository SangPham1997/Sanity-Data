import { defineType, defineField } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'appName', title: 'App Name', type: 'string' }),
    defineField({ name: 'description', title: 'Mô tả', type: 'text' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'achievements', title: 'Thành tích', type: 'array', of: [{ type: 'object', fields: [
      { name: 'id', title: 'ID', type: 'string' },
      { name: 'title', title: 'Tên', type: 'string' },
      { name: 'description', title: 'Mô tả', type: 'text' },
      { name: 'icon', title: 'Icon', type: 'string' },
      { name: 'xpReward', title: 'XP', type: 'number' },
    ] }] }),
  ],
  preview: {
    select: { title: 'appName' },
  },
})

export default siteSettingsType