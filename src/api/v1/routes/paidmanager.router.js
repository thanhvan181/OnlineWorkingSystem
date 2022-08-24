const express = require('express');
const paidmanagerController = require('../controllers/paidmanager.controller');

const router = express.Router();

router.get('/paidmanager', paidmanagerController.paidmanager);
module.exports = router;
