// import sanityClient from '@sanity/client';
const { nanoid } = require('nanoid');
const sanityClient = require('@sanity/client');
const csv = require('csv-parser');
const fs = require('fs');
try {
  const client = sanityClient({
    projectId: 'xwbbz1k9',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token:
      'skullmuTQ8lKEVqjDgD0tByxMqgUdE9NojpQtHLMLr7QwMo3OGfEbaIvQk7a0fD1tvl539PlnZc7ym9LsSO5QdInF3Pql33xzRfTnd8kAN8FxlQHitUwguhnDV8GIGn69eR7bBMU9kXIn4UMb1nDDXflAmqjQyN1KJcvIEViWPtgbuxmIA2N', // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
  });

  // Create organization documents
  const results = [];

  fs.createReadStream('seed/org-cap-rem.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      console.log(results);
      for (const data of results) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        await importData(data);
      }
      // await Promise.all(results.map(importData)).catch((err) => {
      //   console.log('err-->', err);
      // });
    });

  const importData = async (orgData) => {
    const doc = {
      _id: `org_${nanoid()}`,
      _type: 'formControlOptions',
      label: orgData.label,
      value: orgData.value,
    };
    console.log('doc:::', doc);
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    client
      .createOrReplace(doc)
      .then((res) => {
        console.log(`Organization was created, document ID is ${res._id}`);
        ////Add this formcontrol as option to form
        client
          .patch('42985e13-e2cf-4966-9cc3-bb2b09660ca7')
          .setIfMissing({ options: [] })
          .append('options', [{ _type: 'reference', _ref: res._id }])
          .commit({ autoGenerateArrayKeys: true })
          .catch((err) => {
            console.log('errcommit-->', err);
          });
        //// Add this formcontrol label to rules engine
        // client
        //   .patch('34032a6f-3cb6-45cd-873c-5dcf395981e3')
        //   .setIfMissing({ fieldValues: [] })
        //   .append('fieldValues', [orgData.value])
        //   .commit({ autoGenerateArrayKeys: true });
      })
      .catch((err) => {
        console.log('err1-->', err);
      });
  };
} catch (err) {
  console.log(err);
}

// For list of organizations

// client.createOrReplace(doc).then((res) => {
//   console.log(`Animal was created, document ID is ${res._id}`);
//   client
//   .patch(res._id)
//   .setIfMissing({characters: []})
//   .append('characters', [{_type: 'reference', _ref: 'characteristics-2'}])
//   .commit({autoGenerateArrayKeys: true})
// });
//formControl 8cd97c42-5e8b-4235-9d38-57a0a4f8c404 O9klWLVHIbOtth-m2qO5q
