const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: 'use project id here',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: 'use token id here ',
  useCdn: true, // `false` if you want to ensure fresh data
});

const query = `
  *[ _type in ["use document name (to be deleted) here"] ]
  {_id, "refs": count(*[ references(^._id) ])}
  [ refs == 0 ]
  ._id
`;

client
  .fetch(query)
  .then((ids) => {
    if (!ids.length) {
      console.log('No assets to delete');
      return true;
    }
    console.log(ids);
    console.log(`Deleting ${ids.length} assets`);
    return ids
      .reduce((trx, id) => trx.delete(id), client.transaction())
      .commit()
      .then(() => console.log('Done!'));
  })
  .catch((err) => {
    if (err.message.includes('Insufficient permissions')) {
      console.error(err.message);
      console.error('Did you forget to pass `--with-user-token`?');
    } else {
      console.error(err.stack);
    }
  });
