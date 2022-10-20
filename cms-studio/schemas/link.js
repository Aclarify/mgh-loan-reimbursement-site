export default {
  name: 'link',
  title: 'Link',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of Link',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'href',
      type: 'string',
    },
    {
      title: 'Link Type',
      name: 'type',
      type: 'string',
      options: {
        list: [{ title: 'Default Text Color', value: 'default' }], // <-- predefined values
      },
    },
  ],
};
