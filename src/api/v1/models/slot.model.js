const mongoose = require('mongoose');

const SlotSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  }
}, { collection: 'slots', timestamps: true });

module.exports = mongoose.model('slots', SlotSchema);
