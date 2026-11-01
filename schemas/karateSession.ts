export default {
  name: 'karateSession',
  title: 'Karate Session',
  type: 'document',
  fields: [
    { name: 'id', title: 'ID', type: 'string' },
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'subName', title: 'Sub Name', type: 'string' },
    { name: 'target', title: 'Target', type: 'string' },
    { name: 'duration', title: 'Duration', type: 'number' },
    { name: 'durationDisplay', title: 'Duration Display', type: 'string' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'week', title: 'Week', type: 'number' },
    { name: 'level', title: 'Level', type: 'string' },
    { name: 'type', title: 'Type', type: 'string' },
    { name: 'icon', title: 'Icon', type: 'string' },
    { name: 'equipment', title: 'Equipment', type: 'string' },
    { name: 'source', title: 'Source', type: 'string' },
    { name: 'guide', title: 'Guide', type: 'text' },
    { name: 'homework', title: 'Homework', type: 'string' },
    { name: 'track', title: 'Track', type: 'string' },
    { name: 'order', title: 'Order', type: 'number' },
    { name: 'focus', title: 'Focus', type: 'array', of: [{ type: 'string' }] },
    { name: 'techniques', title: 'Techniques', type: 'array', of: [{ type: 'string' }] },
    { 
      name: 'exercises', 
      title: 'Exercises', 
      type: 'array', 
      of: [{ 
        type: 'object',
        fields: [
          { name: 'name', title: 'Name', type: 'string' },
          { name: 'work', title: 'Work', type: 'string' },
          { name: 'note', title: 'Note', type: 'text' },
          { name: 'videoUrl', title: 'Video URL', type: 'url' },
        ]
      }] 
    },
  ],
}