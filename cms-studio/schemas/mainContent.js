export default {
  name: 'mainContent',
  title: 'Main Content',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Page Name',
      type: 'string',
    },
    {
      name: 'titleText',
      title: 'Content Title',
      type: 'string',
    },
    {
      title: 'Content Notes',
      name: 'contentNotes',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'contentCoordinator' }] }],
    },
    {
      name: 'subContentTitle',
      title: 'Sub Content Title',
      type: 'string',
    },
    {
      name: 'subContentTitleNote',
      title: 'Sub Content Title Note',
      type: 'string',
    },
    {
      title: 'Form',
      name: 'form',
      type: 'reference',
      to: [{ type: 'form' }],
    },
    {
      name: 'logoText',
      title: 'Logo Text',
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
  ],
};
