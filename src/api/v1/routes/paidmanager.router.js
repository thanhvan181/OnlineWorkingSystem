const express = require('express');
const paidmanagerController = require('../controllers/paidmanager.controller');

const router = express.Router();
router.get('/', paidmanagerController.getAll);
router.get('/:id', paidmanagerController.get);
router.post('/', paidmanagerController.create);
router.delete('/:id', paidmanagerController.remove);
router.patch('/:id', paidmanagerController.update);
module.exports = router;
