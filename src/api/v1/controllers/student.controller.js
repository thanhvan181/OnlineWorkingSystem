const catchAsync = require('../utils/catchAsync');
const studentService = require('../services/student.service');

module.exports = {
  createStudent: catchAsync(async (req, res) => {
    const student = await studentService.create(req.body);
    return res.status(200).json(student);
  }),
  getAllStudents: catchAsync(async (req, res) => {
    const students = await studentService.findAll();
    return res.status(200).json(students);
  }),
  getStudent: catchAsync(async (req, res) => {
    const student = await studentService.findOne(req.params.id);
    return res.status(200).json(student);
  }),
  removeStudent: catchAsync(async (req, res) => {
    const student = await studentService.findOneAndDelete(req.params.id);
    return res.status(200).json(student);
  }),
  updateStudent: catchAsync(async (req, res) => {
    const student = await studentService.findOneAndUpdate(req.params.id, req.body);
    return res.status(200).json(student);
  }),
};
