const express = require('express');
const salemanController = require('../controllers/saleman.controller');

const router = express.Router();
router.get('/', salemanController.getAllSalemans);
router.get('/:id', salemanController.getSaleman);
router.post('/', salemanController.createSaleman);
router.delete('/:id', salemanController.removeSaleman);
router.patch('/:id', salemanController.updateSaleman);
module.exports = router;
