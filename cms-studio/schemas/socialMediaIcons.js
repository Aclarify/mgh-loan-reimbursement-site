export default {
  title: 'SocialMedia Icon Item',
  name: 'mediaIconItem',
  type: 'document',
  fields: [
    {
      name: 'icon',
      type: 'string',
      title: 'Icon',
      options: {
        list: [
          { title: 'Facebook', value: 'Facebook' },
          { title: 'Twitter', value: 'Twitter' },
          { title: 'Instagram', value: 'Instagram' },
          { title: 'LinkedIn', value: 'LinkedIn' },
          { title: 'GitHub', value: 'GitHub' },
          { title: 'Dribble', value: 'Dribble' },
        ],
      },
    },
    { name: 'text', type: 'string', title: 'Text' },
    { name: 'href', type: 'string', title: 'Link Href' },
  ],
};
