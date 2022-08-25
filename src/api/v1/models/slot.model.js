const mongoose = require('mongoose');

const SlotSchema = new mongoose.Schema({
  text: {
    type: String,
    default: ''
  },
  value: {
    type: Date,
    default: ''
  }
}, { collection: 'slots', timestamps: true });

module.exports = mongoose.model('slots', SlotSchema);
