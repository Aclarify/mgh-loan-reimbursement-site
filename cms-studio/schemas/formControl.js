import formControlOptions from './formControlOptions';

export default {
  name: 'formControl',
  title: 'Form Control',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Form Control Name',
      type: 'string',
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'placeholder',
      title: 'Place holder/Default Value',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type of Form Control',
      type: 'string',
      options: {
        list: [
          { title: 'Text Input', value: 'textInput' },
          { title: 'Text Area', value: 'textArea' },
          { title: 'Single Select', value: 'singleSelect' },
          { title: 'Multi Select', value: 'multiSelect' },
          { title: 'Radio button', value: 'radio' },
          { title: 'Check Box', value: 'checkBox' },
        ],
      },
    },
    {
      name: 'options',
      title: 'List of Options',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'formControlOptions' }],
        },
      ],
    },
  ],
};
