const _teacher = require('../models/teacher.model');

module.exports = {
  findAll: async () => {
    const users = await _teacher.find({});
    return users;
  },
  find: async (filter) => {
    const users = await _teacher.findOne(filter);
    return users;
  },
  update: async (condition, doc, option) => {
    const users = await _teacher.findOneAndUpdate(condition, doc, option);
    return users;
  },
  remove: async (condition) => {
    const users = await _teacher.findOneAndDelete(condition);
    return users;
  },
  create: async (req, res) => {
    const users = await new _teacher(req.body).save();
    return users;
  },
};
