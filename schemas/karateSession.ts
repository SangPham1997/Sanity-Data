import { defineType, defineField } from 'sanity'
import { DurationInput } from '../components/DurationInput'

export const karateSessionType = defineType({
  name: 'karateSession',
  title: 'Karate Session',
  type: 'document',
  fields: [
    defineField({ name: 'id', title: 'ID gốc', type: 'string' }),
    defineField({ name: 'name', title: 'Tên buổi', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'subName', title: 'Tên phụ', type: 'string' }),
    defineField({ name: 'target', title: 'Mục tiêu', type: 'text' }),
    defineField({
      name: 'duration',
      title: 'Thời lượng (giây)',
      type: 'number',
      components: { input: DurationInput },
    }),
    defineField({ name: 'durationDisplay', title: 'Hiển thị thời lượng', type: 'string' }),
    defineField({ name: 'category', title: 'Thể loại', type: 'string' }),
    defineField({ name: 'week', title: 'Tuần', type: 'number' }),
    defineField({
      name: 'level',
      title: 'Cấp độ',
      type: 'string',
      options: { list: ['Beginner', 'Intermediate', 'Advanced'] },
    }),
    defineField({ name: 'type', title: 'Type', type: 'string' }),
    defineField({ name: 'icon', title: 'Icon', type: 'string' }),
    defineField({ name: 'equipment', title: 'Dụng cụ', type: 'string' }),
    defineField({ name: 'source', title: 'Nguồn', type: 'string' }),
    defineField({ name: 'guide', title: 'Hướng dẫn', type: 'text' }),
    defineField({ name: 'homework', title: 'Bài tập về nhà', type: 'text' }),
    defineField({
      name: 'track',
      title: 'Track',
      type: 'string',
      options: { list: ['kihon', 'kata', 'kumite'] },
    }),
    defineField({ name: 'order', title: 'Thứ tự', type: 'number' }),
    defineField({ name: 'focus', title: 'Trọng tâm', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'techniques', title: 'Kỹ thuật', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'exercises',
      title: 'Bài tập chi tiết',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Tên', type: 'string' },
            { name: 'work', title: 'Khối lượng', type: 'string' },
            { name: 'note', title: 'Ghi chú', type: 'text' },
            { name: 'videoUrl', title: 'Video URL', type: 'url' },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'subName',
      track: 'track',
      week: 'week',
      level: 'level',
      durationDisplay: 'durationDisplay',
    },
    prepare({ title, subtitle, track, week, level, durationDisplay }: any) {
      const trackEmoji = track === 'kata' ? '📜' : track === 'kumite' ? '⚔️' : '🥋'
      const parts = [
        track ? track.toUpperCase() : '',
        week ? `Tuần ${week}` : '',
        level || '',
        durationDisplay || '',
      ].filter(Boolean)
      return {
        title: `${trackEmoji} ${title}`,
        subtitle: [subtitle, parts.join(' · ')].filter(Boolean).join(' — '),
      }
    },
  },
})

export default karateSessionType