const mongoose = require('mongoose');

const SlotSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      default: '',
      unique: true,
      required: true,
    },
    start: {
      type: Date,
      default: Date.now(),
      required: true,
    },
    end: {
      type: Date,
      default: Date.now(),
      required: true,
    },
  },
  {collection: 'slots', timestamps: true}
);

module.exports = mongoose.model('slots', SlotSchema);
