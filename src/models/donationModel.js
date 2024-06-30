const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorName: {
    type: String
  },
  panNumber: {
    type: String
  },
  address: {
    type: String,
  },
  donationAmount: {
    type: Number
  },
  email: {
    type: String
  },
  mobileNumber: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports= mongoose.model('Donation', donationSchema);