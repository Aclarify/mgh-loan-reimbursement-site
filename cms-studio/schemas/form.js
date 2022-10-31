export default {
  name: 'form',
  title: 'Form',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of the Form',
      type: 'string',
    },
    {
      title: 'Form Controls',
      name: 'formControls',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'formControl' }],
        },
      ],
    },
    {
      title: 'Button',
      name: 'button',
      type: 'reference',
      to: [{ type: 'cta' }],
    },
  ],
};
