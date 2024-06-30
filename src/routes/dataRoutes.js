const express = require('express');
const donationController = require('../controllers/donationController');
const contactController = require('../controllers/contactController');
const volunteerController = require('../controllers/volunteerController');

const router = express.Router();

// Donation Routes
router.post('/donations', donationController.createDonation);
// router.get('/donations', donationController.getAllDonations);
// router.get('/donations/:id', donationController.getDonationById);
// router.put('/donations/:id', donationController.updateDonation);
// router.delete('/donations/:id', donationController.deleteDonation);

// Contact Routes
router.post('/contact', contactController.createContact);
// router.get('/contact', contactController.getAllContacts);
// router.get('/contact/:id', contactController.getContactById);
// router.put('/contact/:id', contactController.updateContact);
// router.delete('/contact/:id', contactController.deleteContact);

// Volunteer Routes
router.post('/volunteer', volunteerController.createVolunteer);
router.get('/volunteer', volunteerController.getAllVolunteers);
// router.get('/volunteer/:id', volunteerController.getVolunteerById);
// router.put('/volunteer/:id', volunteerController.updateVolunteer);
// router.delete('/volunteer/:id', volunteerController.deleteVolunteer);

module.exports = router;
