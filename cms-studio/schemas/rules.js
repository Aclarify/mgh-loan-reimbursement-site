export default {
  name: 'ruleGroup',
  title: 'Rule Group',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      title: 'Rules',
      name: 'rules',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'rule' }],
        },
      ],
    },
  ],
};

export const rule = {
  name: 'rule',
  title: 'Rule',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Rule Name',
      type: 'string',
    },
    {
      name: 'operator',
      title: 'AND/OR',
      type: 'string',
      options: {
        list: [
          { title: 'AND', value: 'all' },
          { title: 'OR', value: 'any' },
        ],
      },
    },
    {
      name: 'conditions',
      title: 'Condtions',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'condition' }],
        },
      ],
    },
  ],
};

export const condition = {
  name: 'condition',
  title: 'Condition',
  type: 'document',
  fields: [
    {
      name: 'fieldName',
      title: 'Field Name',
      type: 'string',
    },
    {
      name: 'operator',
      title: 'Operator',
      type: 'string',
      options: {
        list: [
          { title: 'Equal', value: 'equal' },
          { title: 'Greater than', value: 'greaterThan' },
          { title: 'Greater than and equal to', value: 'greaterThanInclusive' },
        ],
      },
    },
    {
      name: 'fieldValue',
      title: 'Field Value',
      type: 'string',
    },
    // {
    //   title: 'conditions',
    //   name: 'Conditions',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [{ type: 'condition' }],
    //     },
    //   ],
    // },
  ],
};
