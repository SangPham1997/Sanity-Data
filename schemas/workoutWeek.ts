import { defineType, defineField, defineArrayMember } from 'sanity'

export const workoutWeekType = defineType({
  name: 'workoutWeek',
  title: 'Workout Week',
  type: 'document',
  fields: [
    defineField({
      name: 'weekNumber',
      title: 'Tuần số',
      type: 'number',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'label',
      title: 'Nhãn',
      type: 'string',
    }),
    defineField({
      name: 'focus',
      title: 'Mục tiêu tuần',
      type: 'string',
    }),
    defineField({
      name: 'exercises',
      title: 'Bài tập',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'exercise' }] })],
    }),
  ],
  preview: {
    select: {
      weekNumber: 'weekNumber',
      label: 'label',
      focus: 'focus',
      exercisesCount: 'exercises.length',
    },
    prepare({ weekNumber, label, focus, exercisesCount }: any) {
      return {
        title: label || `Tuần ${weekNumber ?? '?'}`,
        subtitle: [focus, exercisesCount ? `${exercisesCount} bài` : '']
          .filter(Boolean)
          .join(' · '),
      }
    },
  },
})

export default workoutWeekType