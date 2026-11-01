import { defineType, defineField, defineArrayMember } from 'sanity'

export const workoutProgramType = defineType({
  name: 'workoutProgram',
  title: 'Workout Program',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Tên chương trình', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'subtitle', title: 'Phụ đề', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'description', title: 'Mô tả', type: 'text' }),
    defineField({ name: 'accent', title: 'Màu chủ đề', type: 'string' }),
    defineField({ name: 'groupBy', title: 'Group By', type: 'string' }),
    defineField({
      name: 'programType',
      title: 'Loại chương trình',
      type: 'string',
      options: { list: ['weekly', 'library', 'karate'] },
    }),
    defineField({
      name: 'groups',
      title: 'Nhóm',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'id', title: 'ID', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'short', title: 'Short', type: 'string' },
            { name: 'icon', title: 'Icon', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'exercise' }, { type: 'karateSession' }] })],
    }),
    defineField({ name: 'weeks', title: 'Các tuần', type: 'array', of: [defineArrayMember({ type: 'reference', to: [{ type: 'workoutWeek' }] })] }),
    defineField({ name: 'categories', title: 'Danh mục', type: 'array', of: [defineArrayMember({ type: 'reference', to: [{ type: 'exerciseCategory' }] })] }),
    defineField({ name: 'order', title: 'Thứ tự', type: 'number' }),
    defineField({ name: 'isActive', title: 'Kích hoạt', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'programType' },
  },
})

export default workoutProgramType