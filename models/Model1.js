const firearch = require('../../firearch');
const Schema = firearch.Schema;

const Model2 = require('./Model2');

const Model1Schema = new Schema({
  title: String,
  subtitle: String,
  loops: [Model2]
});

module.exports = firearch.model('Model1', Model1Schema);