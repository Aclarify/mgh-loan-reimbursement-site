export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
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
      name: 'textLogo',
      title: 'Text Logo',
      type: 'reference',
      to: [{ type: 'textLogo' }],
    },
    {
      title: 'Call-to-Action',
      name: 'cta',
      type: 'reference',
      to: [{ type: 'cta' }],
    },
    {
      title: 'Link Group',
      name: 'linkGroup',
      type: 'reference',
      to: [{ type: 'linkGroup' }],
    },
    {
      title: 'Nav Links',
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'link' }],
        },
      ],
    },
    {
      title: 'Text/Icon Group',
      name: 'contactIconGroup',
      type: 'reference',
      to: [{ type: 'textIconGroup' }],
    },
    {
      title: 'Social Media Icon List',
      name: 'mediaIconList',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'mediaIconItem' }] }],
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'contentCoordinator' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
