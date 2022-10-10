export default {
  name: 'linkGroup',
  title: 'Link Group',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of Link Group',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      title: 'Child Links',
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'link' }],
        },
      ],
    },
  ],
};
