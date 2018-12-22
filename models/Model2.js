const firearch = require('../../firearch');
const Schema = firearch.Schema;

const Model2Schema = new Schema({
  name: String,
  referenceExample: { ref: 'Model1' }
});

const autoPopulate = function(next) {
  this.populate({ path: 'referenceExample', model: 'Model1' });
  next();
};

Model2Schema
  .pre('findById', autoPopulate);

module.exports = firearch.model('Model2', Model2Schema);