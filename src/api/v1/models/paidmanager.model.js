const mongoose = require('mongoose');

const PaidmanagerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: '',
    },
    gender: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    country: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      default: '',
    },
    languages: {
      type: String,
      default: '',
    },
  },
  { collection: 'paidmanagers', timestamps: true }
);

module.exports = mongoose.model('paidmanagers', PaidmanagerSchema);
