const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      default: '',
      required: true,
    },
    studentGrade: {
      type: String,
      default: '',
      required: true,
    },
    phone: {
      type: String,
      default: '',
      required: true,
    },
    schedule: {
      type: Date,
      default: Date.now(),
      required: true,
    },
  },
  { collection: 'orders', timestamps: true }
);

module.exports = mongoose.model('orders', OrderSchema);
