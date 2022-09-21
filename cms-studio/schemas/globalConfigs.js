export default {
  name: 'globalConfigs',
  title: 'Global Configurations',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'headerNav',
      title: 'Header Navigation',
      type: 'reference',
      to: [{ type: 'navigation' }],
    },
    {
      name: 'footerNav',
      title: 'Footer Navigation',
      type: 'reference',
      to: [{ type: 'navigation' }],
    },
  ],
};
