const _user = require('../models/user.model');

module.exports = {
  findAll: async () => {
    const users = await _user.find({});
    return users;
  },
};
