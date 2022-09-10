const _student = require('../models/student.model');

module.exports = {
  findAll: async () => {
    const students = await _student.find();
    return students;
  },
  findOne: async (id) => {
    const student = await _student.findById(id);
    return student;
  },
  findOneAndDelete: async (id) => {
    const student = await _student.findByIdAndRemove(id);
    return student;
  },
  findOneAndUpdate: async (id, data) => {
    const student = await _student.findByIdAndUpdate(id, data, {new: true});
    return student;
  },
  create: async (data) => {
    const student = await _student.create(data);
    return student;
  },
};
