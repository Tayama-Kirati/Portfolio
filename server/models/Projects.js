const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type:     String,
      required: [true, 'Title is required'],
      trim:     true,
    },
    description: {
      type:     String,
      required: [true, 'Description is required'],
      trim:     true,
    },
    link: {
      type:    String,
      default: '#',
      trim:    true,
    },
    image_url: {
      type:    String,
      default: null,
    },
    category: {
      type:    String,
      enum:    ['Design', 'Full Stack', 'Frontend'],
      default: 'Design',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Project', projectSchema);