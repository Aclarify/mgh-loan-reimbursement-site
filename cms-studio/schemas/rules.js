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
      name: 'ruleGroupType',
      title: 'Eligibility Rule Type',
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
      title: 'Conditions',
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
      name: 'name',
      title: 'Condition Name',
      type: 'string',
    },
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
          // { title: 'Greater than', value: 'greaterThan' },
          // { title: 'Greater than and equal to', value: 'greaterThanInclusive' },
          { title: 'Equals to any of', value: 'in' },
          // { title: 'Not Equals to any of', value: 'notIn' },
        ],
      },
    },
    {
      name: 'fieldValue',
      title: 'Field Value',
      type: 'string',
      hidden: ({ parent }) =>
        parent && parent.operator && ['in', 'notIn'].includes(parent.operator),
    },
    {
      name: 'fieldValues',
      title: 'Field Values',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      hidden: ({ parent }) =>
        !(
          parent &&
          parent.operator &&
          ['in', 'notIn'].includes(parent.operator)
        ),
    },
  ],
};
