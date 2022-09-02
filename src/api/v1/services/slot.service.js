const _slot = require('../models/slot.model');

module.exports = {
  create: async (data) => {
    const slot = await _slot.create(data);
    return slot;
  },
  getAll: async () => {
    const slots = await _slot.find();
    return slots;
  },
  get: async (id) => {
    const slot = await _slot.findById(id);
    return slot;
  },
  remove: async (id) => {
    const slot = await _slot.findByIdAndRemove(id);
    return slot;
  },
  update: async (id, data) => {
    const slot = await _slot.findByIdAndUpdate(id, data, {new: true});
    return slot;
  },
};
