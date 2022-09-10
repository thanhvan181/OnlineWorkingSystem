const _order = require('../models/order.model');

module.exports = {
  findAll: async () => {
    const orders = await _order.find({}).populate('schedule');
    return orders;
  },
  findOne: async (_id) => {
    const orders = await _order.findOne(_id);
    return orders;
  },
  createOrder: async (data) => {
    const orders = await new _order({...data}).save();
    return orders;
  },
  updateOrder: async (_id, data) => {
    const orders = await _order.findOneAndUpdate(_id, data, {new: true}).exec();
    return orders;
  },
  deleleOrder: async (_id) => {
    const orders = await _order.findOneAndDelete(_id).exec();
    return orders;
  },
};
