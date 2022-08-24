const _paidmanager = require('../models/paidmanager.model');

module.exports = {
  findAll: async () => {
    const users = await _paidmanager.find({});
    return users;
  },
};
