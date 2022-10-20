export default {
  title: 'Text/Icon Item',
  name: 'textIconItem',
  type: 'document',
  fields: [
    {
      name: 'icon',
      type: 'string',
      title: 'Icon',
      options: {
        list: [
          { title: 'Phone', value: 'phone' },
          { title: 'Envelope', value: 'envelope' },
          { title: 'Location', value: 'map-pin' },
        ],
      },
    },
    { name: 'text', type: 'string', title: 'Text' },
    { name: 'href', type: 'string', title: 'Link Href' },
  ],
};
