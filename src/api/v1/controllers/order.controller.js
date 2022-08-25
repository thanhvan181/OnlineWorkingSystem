const orderService = require('../services/order.service');
const catchAsync = require('../utils/catchAsync');

module.exports = {
  getAllOrder: catchAsync(async (req, res, next) => {
    const order = await orderService.findAll();
    return res.status(200).json(order);
  }),
  getOrder: catchAsync(async (req, res, next) => {
    const order = await orderService.findOne(req.params._id);
    return res.status(200).json(order);
  }),
  createOrder: catchAsync(async (req, res, next) => {
    const order = await orderService.createOrder(req.body);
    return res.status(200).json(order);
  }),
  updateOrder: catchAsync(async (req, res, next) => {
    const order = await orderService.updateOrder(req.params._id, req.body);
    return res.status(200).json(order);
  }),
  deleteOrder: catchAsync(async (req, res, next) => {
    const order = await orderService.deleleOrder(req.params._id);
    return res.status(200).json(order);
  }),
};
