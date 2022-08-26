const teacherService = require('../services/teacher.service');
const catchAsync = require('../utils/catchAsync');

module.exports = {
  getAllTeacher: catchAsync(async (req, res) => {
    const teachers = await teacherService.findAll();
    return res.status(200).json(teachers);
  }),
  getTeacher: catchAsync(async (req, res) => {
    const filter = { _id: req.params.id };
    const teachers = await teacherService.find();
    return res.status(200).json(teachers);
  }),
  createTeacher: catchAsync(async (req, res) => {
    const teachers = await teacherService.create(req, res);
    return res.status(200).json(teachers);
  }),
  updateTeacher: catchAsync(async (req, res) => {
    const condition = { _id: req.params.id };
    const doc = req.body;
    const option = { new: true };
    const teachers = await teacherService.update(condition, doc, option);
    return res.status(200).json(teachers);
  }),
  removeTeacher: catchAsync(async (req, res) => {
    const condition = { _id: req.params.id };
    const teachers = await teacherService.remove(condition);
    res.status(200).json(teachers);
  }),
};
