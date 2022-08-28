const _paidmanager = require('../models/paidmanager.model');


module.exports = {
  findAll: async () => {
    const salemans = await _paidmanager.find();
    return salemans;
  },
  findOne: async (id) => {
    const saleman = await _paidmanager.findById(id);
    return saleman;
  },
  findOneAndDelete: async (id) => {
    const saleman = await _paidmanager.findByIdAndRemove(id);
    return saleman;
  },
  findOneAndUpdate: async (id, data) => {
    const saleman = await _paidmanager.findByIdAndUpdate(id, data, { new: true });
    return saleman;
  },
  create: async (data) => {
    const saleman = await _paidmanager.create(data);
    return saleman;
  },
};
;