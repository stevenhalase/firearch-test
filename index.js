const firearch = require('../firearch');
const firebaseConfig = require('./firebaseConfig');

const Model1 = require('./models/Model1');

firearch.connect(firebaseConfig, { timestampsInSnapshots: true });

Model1.save({
  title: 'A title',
  subtitle: 'A subtitle',
  something: 'is something'
})
.then(response => {
  console.log('RESPONSE: ', response);
})
.catch(error => {
  console.log('ERROR: ', error);
})

// Model1.findById('ad311ea7b95d128f1af123632433e707')
//   .then(response => {
//     console.log('RESPONSE: ', response);
//   })
//   .catch(error => {
//     console.log('ERROR: ', error);
//   })


