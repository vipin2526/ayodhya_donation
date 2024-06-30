const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  Name: {
    type: String
  },
  Email: {
    type: String
  },
  Mobile: {
    type: String
  },
  Subject: {
    type: String
  },
  Message: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Volunteer', volunteerSchema);