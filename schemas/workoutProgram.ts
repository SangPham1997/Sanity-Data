export default {
  name: 'workoutProgram',
  title: 'Workout Program',
  type: 'document',
  fields: [
    { name: 'id', title: 'ID', type: 'string' },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'accent', title: 'Accent', type: 'string' },
    { name: 'groupBy', title: 'Group By', type: 'string' },
    { 
      name: 'groups', 
      title: 'Groups', 
      type: 'array', 
      of: [{ 
        type: 'object',
        fields: [
          { name: 'id', title: 'ID', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'short', title: 'Short', type: 'string' },
          { name: 'icon', title: 'Icon', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
        ]
      }] 
    },
    { name: 'items', title: 'Items', type: 'array', of: [{ type: 'object', fields: [{ name: 'id', title: 'ID', type: 'string' }] }] },
  ],
}