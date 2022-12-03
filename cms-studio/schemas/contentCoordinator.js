import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt';
import { FaLink } from '@react-icons/all-files/fa/FaLink';

export const breakType = {
  name: 'break',
  type: 'object',
  title: 'Break',
  fields: [
    {
      name: 'style',
      type: 'string',
      title: 'Break style',
      options: {
        list: [{ title: 'Line break', value: 'lineBreak' }],
      },
    },
  ],
};

export default {
  name: 'contentCoordinator',
  title: 'ContentCoordinator',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title Text',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'internalLink',
                type: 'link',
                title: 'Internal link',
                blockEditor: {
                  icon: FaLink,
                },
              },
              {
                title: 'External Link',
                name: 'externalLink',
                type: 'object',
                blockEditor: {
                  icon: FaExternalLinkAlt,
                },
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                    validation: (Rule) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ['https', 'http', 'mailto', 'tel'],
                      }),
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'break',
        },
      ],
    },
    {
      name: 'highlightText',
      title: 'Highlight Text',
      type: 'string',
    },
  ],
};
