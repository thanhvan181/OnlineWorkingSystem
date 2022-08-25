const _slot = require('../models/slot.model');

module.exports = {
  create: async (data) => {
    const slot = await _slot.create(data);
    return slot;
  },
  getAll: async () => {
    const slot = await _slot.find();
    return slot;
  },
  get: async (id) => {
    const slot = await _slot.findById(id);
    return slot;
  },
  remove: async (id) => {
    const slot = await _slot.remove(id);
    return slot;
  },
  update: async (data) => {
    const slot = await _slot.findByIdAndUpdate(data.id, data, { new: true });
    return slot;
  },
};
