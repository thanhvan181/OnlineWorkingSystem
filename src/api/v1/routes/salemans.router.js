const express = require('express');
const salemansController = require('../controllers/salemans.controller');

const router = express.Router();
router.get('/', salemansController.getAllSalemans);
router.get('/:id', salemansController.getSaleman);
router.post('/', salemansController.createSaleman);
router.delete('/:id', salemansController.removeSaleman);
router.patch('/:id', salemansController.updateSaleman);


module.exports = router;