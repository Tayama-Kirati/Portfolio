const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema(
  {
    school: {
      type:     String,
      required: [true, 'School is required'],
      trim:     true,
    },
    degree: {
      type:     String,
      required: [true, 'Degree is required'],
      trim:     true,
    },
    period: {
      type:     String,
      required: [true, 'Period is required'],
    },
    gpa: {
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

module.exports = mongoose.model('Education', educationSchema);