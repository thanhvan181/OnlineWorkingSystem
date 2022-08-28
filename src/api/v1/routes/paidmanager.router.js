const express = require('express');
const paidmanagerController = require('../controllers/paidmanager.controller');


const router = express.Router();
router.get('/', paidmanagerController.getAllSalemans);
router.get('/:id', paidmanagerController.getSaleman);
router.post('/', paidmanagerController.createSaleman);
router.delete('/:id', paidmanagerController.removeSaleman);
router.patch('/:id', paidmanagerController.updateSaleman);
module.exports = router;