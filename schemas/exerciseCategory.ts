import { defineType, defineField } from 'sanity'

export const exerciseCategoryType = defineType({
  name: 'exerciseCategory',
  title: 'Exercise Category',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Tên', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'description', title: 'Mô tả', type: 'text' }),
    defineField({ name: 'order', title: 'Thứ tự', type: 'number' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'description' },
  },
})

export default exerciseCategoryType