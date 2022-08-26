const { string } = require('joi');
const mongoose = require('mongoose');
const { ObjectId } = require('mongoose');

const TeacherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: ''
    },
    gender: {
      type: String,
      default: 'Nam'
    },
    email: {
      type: String
    },
    country: {
      type: String,
      default: 'Vietnam'
    },
    phone: {
      type: String
    },
    languages: {
      type: String,
      default: 'Vietnamese'
    },
    status: {
      type: Boolean,
      default: true
    },
    demoBookedSlots: [
      {
        slots: {
          type: String
        },
        date: {
          type: Date,
          default: Date.now()
        }
      }
    ],
    paidBookedSlots: [
      {
        slots: {
          type: String
        },
        day: {
          type: String,
          default: 0
        }
      }
    ]
  },
  { collection: 'teachers', timestamps: true }
);

module.exports = mongoose.model('teachers', TeacherSchema);
