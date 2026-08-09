const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema(
  {
    company: {
      type:     String,
      required: [true, 'Company is required'],
      trim:     true,
    },
    role: {
      type:     String,
      required: [true, 'Role is required'],
      trim:     true,
    },
    period: {
      type:     String,
      required: [true, 'Period is required'],
    },
    description: {
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

module.exports = mongoose.model('Experience', experienceSchema);
