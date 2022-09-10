const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema;

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
      type: ObjectId,
      ref: 'slots',
    },
  },
  {collection: 'orders', timestamps: true}
);

module.exports = mongoose.model('orders', OrderSchema);
