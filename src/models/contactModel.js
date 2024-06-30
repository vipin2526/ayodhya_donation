const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  Name: {
    type: String
  },
  Email: {
    type: String
  },
  Mobile: {
    type: String,

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

module.exports = mongoose.model('Contact', contactSchema);