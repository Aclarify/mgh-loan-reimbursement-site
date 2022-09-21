export default {
  name: 'cta',
  title: 'Call-To-Action',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'href',
      type: 'url',
    },
    {
      title: 'Button Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Primary Brand Color', value: 'primary' },
        ], // <-- predefined values
      },
    },
  ],
};
