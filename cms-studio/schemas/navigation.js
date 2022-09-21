export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Call-to-Action',
      name: 'cta',
      type: 'reference',
      to: [{ type: 'cta' }],
    },
    {
      title: 'Nav Links',
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'link' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
