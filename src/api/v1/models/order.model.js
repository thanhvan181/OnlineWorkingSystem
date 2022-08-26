const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      default: '',
      require: true,
    },
    studentGrade: {
      type: String,
      default: '',
      require: true,
    },
    phone: {
      type: String,
      default: '',
      require: true,
    },
    schedule: {
      type: Date,
      default: Date.now(),
      require: true,
    },
  },
  { collection: 'orders', timestamps: true }
);

module.exports = mongoose.model('orders', OrderSchema);
