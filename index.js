const firearch = require('../firearch');
const firebaseConfig = require('./firebaseConfig');

const Model1 = require('./models/Model1');
const Model2 = require('./models/Model2');

const crypto = require('crypto');

firearch.connect(firebaseConfig, { timestampsInSnapshots: true });

// Model1.save({
//   title: 'A title',
//   subtitle: 'A subtitle'
// })
// .then(response => {
//   console.log('RESPONSE: ', response);
// })
// .catch(error => {
//   console.log('ERROR: ', error);
// });

// Model2.save({
//   name: 'Another nother name again',
//   referenceExample: 'UvvYkz14CdtlNhxAXx4U'
// })
// .then(response => {
//   console.log('RESPONSE: ', response);
// })
// .catch(error => {
//   console.log('ERROR: ', error);
// });

// Model2.findById('H5K5zlmDUKf45a0nAcjH')
//   .then(response => {
//     console.log('RESPONSE: ', response);
//   })
//   .catch(error => {
//     console.log('ERROR: ', error);
//   });

Model1.findById('UvvYkz14CdtlNhxAXx4U')
  .then(response => {
    console.log('RESPONSE: ', response);
  })
  .catch(error => {
    console.log('ERROR: ', error);
  });

// Model1.find('title', '==', 'A title')
// .then(response => {
//   console.log('RESPONSE: ', response);
// })
// .catch(error => {
//   console.log('ERROR: ', error);
// });


