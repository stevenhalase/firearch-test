const firearch = require('../../firearch');
const Schema = firearch.Schema;

const Model1Schema = new Schema({
  title: String,
  subtitle: String
});

Model1Schema.virtual('subCollectionExample', {
  ref: 'Model2',
  localField: '_id',
  foreignField: 'referenceExample'
})

module.exports = firearch.model('Model1', Model1Schema);