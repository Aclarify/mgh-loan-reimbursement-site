export default {
  name: 'textIconGroup',
  title: 'Text Icon Group',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of Group',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      title: 'Child Text',
      name: 'textIcons',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'textIconItem' }],
        },
      ],
    },
  ],
};
