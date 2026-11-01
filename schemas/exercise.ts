import { defineType, defineField } from 'sanity'
import { DurationInput } from '../components/DurationInput'
import { VideoUrlInput } from '../components/VideoUrlInput'

export const exerciseType = defineType({
  name: 'exercise',
  title: 'Exercise',
  type: 'document',
  fields: [
    defineField({ name: 'id', title: 'ID gốc', type: 'string' }),
    defineField({ name: 'name', title: 'Tên (VI)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'subName', title: 'Tên (EN)', type: 'string' }),
    defineField({ name: 'target', title: 'Mục tiêu', type: 'text' }),
    defineField({
      name: 'mode',
      title: 'Chế độ',
      type: 'string',
      options: { list: ['time', 'reps'] },
    }),
    defineField({
      name: 'duration',
      title: 'Thời lượng / Số lần',
      type: 'number',
      components: { input: DurationInput },
    }),
    defineField({ name: 'sets', title: 'Số hiệp', type: 'number' }),
    defineField({ name: 'reps', title: 'Số lần/hiệp', type: 'number' }),
    defineField({ name: 'rest', title: 'Nghỉ (giây)', type: 'number' }),
    defineField({ name: 'guide', title: 'Hướng dẫn', type: 'text' }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      components: { input: VideoUrlInput },
    }),
    defineField({ name: 'category', title: 'Nhóm cơ', type: 'string' }),
    defineField({ name: 'week', title: 'Tuần (Home)', type: 'number' }),
    defineField({ name: 'level', title: 'Cấp độ (Spine)', type: 'number' }),
    defineField({ name: 'equipment', title: 'Dụng cụ', type: 'string' }),
    defineField({ name: 'bar', title: 'Loại xà', type: 'string' }),
    defineField({ name: 'spineFocus', title: 'Spine Focus', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'deskIssues', title: 'Desk Issues', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'safety', title: 'An toàn', type: 'text' }),
    defineField({ name: 'regression', title: 'Regression', type: 'string' }),
    defineField({ name: 'progression', title: 'Progression', type: 'string' }),
    defineField({ name: 'groupId', title: 'Group ID (Spine)', type: 'string' }),
    defineField({ name: 'type', title: 'Animation type', type: 'string' }),
    defineField({ name: 'svg', title: 'SVG name', type: 'string' }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'subName',
      category: 'category',
      week: 'week',
      groupId: 'groupId',
      mode: 'mode',
      duration: 'duration',
      sets: 'sets',
    },
    prepare({ title, subtitle, category, week, groupId, mode, duration, sets }: any) {
      const emoji = groupId ? '🧘' : '🏋️'
      const context = groupId ? groupId.toUpperCase() : week ? `Tuần ${week}` : ''
      const timing = mode === 'time' ? `${duration}s × ${sets}` : `${duration} reps × ${sets}`
      return {
        title: `${emoji} ${title}`,
        subtitle: [subtitle, category, context, timing].filter(Boolean).join(' · '),
      }
    },
  },
})

export default exerciseType