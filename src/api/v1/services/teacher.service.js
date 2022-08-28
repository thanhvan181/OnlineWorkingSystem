const _teacher = require('../models/teacher.model');

module.exports = {
  findAll: async () => {
    const teachers = await _teacher.find({});
    return teachers;
  },
  find: async (filter) => {
    const teacher = await _teacher.findOne(filter);
    return teacher;
  },
  update: async (condition, doc, option) => {
    const teacher = await _teacher.findOneAndUpdate(condition, doc, option);
    return teacher;
  },
  remove: async (condition) => {
    const teacher = await _teacher.findOneAndDelete(condition);
    return teacher;
  },
  create: async (req, res) => {
    const teacher = await new _teacher(req.body).save();
    return teacher;
  }
};
