const firearch = require('../../firearch');
const Schema = firearch.Schema;

const Model1 = require('./Model1');

const Model2Schema = new Schema({
  name: String,
  packId: { ref: Model1 }
});

module.exports = firearch.model('Model2', Model2Schema);