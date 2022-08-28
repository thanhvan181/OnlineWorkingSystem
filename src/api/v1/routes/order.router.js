const express = require('express');
const orderController = require('../controllers/order.controller');
const validate = require('../middlewares/validate.middleware');
const orderValidatetion = require('../validations/order.validation');

const router = express.Router();

router.get('/', validate(orderValidatetion.getAllOrders), orderController.getAllOrders);
router.get('/:id', validate(orderValidatetion.getOrder), orderController.getOrder);
router.post('/', validate(orderValidatetion.createOrder), orderController.createOrder);
router.put('/:id', validate(orderValidatetion.updateOrder), orderController.updateOrder);
router.delete('/:id', validate(orderValidatetion.deleteOrder), orderController.deleteOrder);

module.exports = router;
