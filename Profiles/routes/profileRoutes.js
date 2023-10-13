const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const {verifyIdentity} = require('../config/jwtHandler');

router.post('/create', verifyIdentity, profileController.createProfile);

router.delete('/delete', verifyIdentity, profileController.deleteProfile);

router.get('/getAllProfiles', profileController.getAllProfiles);

module.exports = router;