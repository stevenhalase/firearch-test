const firearch = require('../firearch');
const firebaseConfig = require('./firebaseConfig');

const Model1 = require('./models/Model1');
const Model2 = require('./models/Model2');

const crypto = require('crypto');

firearch.connect(firebaseConfig, { timestampsInSnapshots: true });

// Model1.save({
//   title: 'Some title',
//   subtitle: 'Some subtitle'
// })
// .then(response => {
//   console.log('RESPONSE: ', response);
// })
// .catch(error => {
//   console.log('ERROR: ', error);
// })

// Model2.save({
//   name: 'A name',
//   referenceExample: '4dd423eb052a95cdb407001b3ad03c5f'
// })
// .then(response => {
//   console.log('RESPONSE: ', response);
// })
// .catch(error => {
//   console.log('ERROR: ', error);
// })

Model2.findById('849cbd68f7a40b1db2229506bd3e576b')
  .then(response => {
    // console.log('RESPONSE: ', response);
  })
  .catch(error => {
    // console.log('ERROR: ', error);
  })


