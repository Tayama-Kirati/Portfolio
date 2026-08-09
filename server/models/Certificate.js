const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema(
  {
    title: {
      type:     String,
      required: [true, 'Title is required'],
      trim:     true,
    },
    issuer: {
      type:     String,
      required: [true, 'Issuer is required'],
      trim:     true,
    },
    date: {
      type:     String,
      required: [true, 'Date is required'],
    },
    link: {
      type:    String,
      default: null,
    },
    sortOrder: {
      type:    Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Certificate', certificateSchema);
