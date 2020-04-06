const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = new Schema({
  id: { type: String, required: true },
  percentage: { type: String, required: true }
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;