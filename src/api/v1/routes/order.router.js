const express = require('express');
const orderController = require('../controllers/order.controller');
const validate = require('../middlewares/validate.middleware');
const orderValidatetion = require('../validations/order.validation')

const router = express.Router();

router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrder);
router.post('/',validate(orderValidatetion.createOrder) ,orderController.createOrder);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
