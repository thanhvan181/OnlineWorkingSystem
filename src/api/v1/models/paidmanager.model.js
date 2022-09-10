const mongoose = require('mongoose');

const PaidmanagerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    languages: {
      type: String,
      required: true,
    },
  },
  { collection: 'paidmanagers', timestamps: true }
);

module.exports = mongoose.model('paidmanagers', PaidmanagerSchema);
