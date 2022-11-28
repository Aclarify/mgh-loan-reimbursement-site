export default {
  name: 'eligibilityStatus',
  title: 'Eligibility Status',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Eligibility Status',
      type: 'string',
      options: {
        list: [
          { title: 'Eligible', value: 'YES' },
          { title: 'Not Eligible', value: 'NO' },
          { title: 'Might be eligible', value: 'MAYBE' },
        ],
      },
    },
    {
      name: 'eligibilityTitle',
      title: 'Eligibility Title',
      type: 'string',
    },
    {
      title: 'Content Notes',
      name: 'contentNotes',
      type: 'contentCoordinator',
    },
    {
      title: 'Button',
      name: 'button',
      type: 'reference',
      to: [{ type: 'cta' }],
    },
  ],
};
