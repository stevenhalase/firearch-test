const firearch = require('../../firearch');
const Schema = firearch.Schema;

const Model1Schema = new Schema({
  title: String,
  subtitle: String,
  published: Boolean,
  createdDate: Date,
  count: Number,
  styles: [{ ref: 'Model2' }],
  type: { ref: 'Model2' }
});

// Model1Schema.virtual('subCollectionExample', {
//   ref: 'Model2',
//   localField: '_id',
//   foreignField: 'referenceExample'
// })

const autoPopulate = function(next) {
  this.populate({ path: 'type', model: 'Model2' });
  next();
};

Model1Schema
  .pre('findById', autoPopulate);

Model1Schema
  .pre('find', autoPopulate);

module.exports = firearch.model('Model1', Model1Schema);