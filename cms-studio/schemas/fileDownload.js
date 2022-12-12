export default {
  title: 'File Download',
  name: 'fileDownload',
  type: 'document',
  fields: [
    {
      name: 'btnText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'fileName',
      title: 'Name of File to be downloaded',
      type: 'string',
    },
    {
      name: 'downloadableFileURL',
      title: 'Source File URL',
      type: 'string',
    },
  ],
};
