const _paidmanager = require('../models/paidmanager.model');

module.exports = {
  findAll: async () => {
    const paidmanagers = await _paidmanager.find();
    return paidmanagers;
  },
  findOne: async (id) => {
    const paidmanager = await _paidmanager.findById(id);
    return paidmanager;
  },
  findOneAndDelete: async (id) => {
    const paidmanager = await _paidmanager.findByIdAndRemove(id);
    return paidmanager;
  },
  findOneAndUpdate: async (id, data) => {
    const paidmanager = await _paidmanager.findByIdAndUpdate(id, data, { new: true });
    return paidmanager;
  },
  create: async (data) => {
    const paidmanager = await _paidmanager.create(data);
    return paidmanager;
  },
};
