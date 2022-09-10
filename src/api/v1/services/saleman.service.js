const _salemans = require('../models/saleman.model');

module.exports = {
  findAll: async () => {
    const salemans = await _salemans.find();
    return salemans;
  },
  findOne: async (id) => {
    const saleman = await _salemans.findById(id);
    return saleman;
  },
  findOneAndDelete: async (id) => {
    const saleman = await _salemans.findByIdAndRemove(id);
    return saleman;
  },
  findOneAndUpdate: async (id, data) => {
    const saleman = await _salemans.findByIdAndUpdate(id, data, {new: true});
    return saleman;
  },
  create: async (data) => {
    const saleman = await _salemans.create(data);
    return saleman;
  },
};
