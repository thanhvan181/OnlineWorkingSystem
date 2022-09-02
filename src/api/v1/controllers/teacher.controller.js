const teacherService = require('../services/teacher.service');
const catchAsync = require('../utils/catchAsync');

module.exports = {
  getAllTeacher: catchAsync(async (req, res) => {
    const teachers = await teacherService.findAll();
    return res.status(200).json(teachers);
  }),
  getTeacher: catchAsync(async (req, res) => {
    const filter = {_id: req.params.id};
    const teacher = await teacherService.find(filter);
    return res.status(200).json(teacher);
  }),
  createTeacher: catchAsync(async (req, res) => {
    const teacher = await teacherService.create(req, res);
    return res.status(200).json(teacher);
  }),
  updateTeacher: catchAsync(async (req, res) => {
    const condition = {_id: req.params.id};
    const doc = req.body;
    const option = {new: true};
    const teacher = await teacherService.update(condition, doc, option);
    return res.status(200).json(teacher);
  }),
  removeTeacher: catchAsync(async (req, res) => {
    const condition = {_id: req.params.id};
    const teacher = await teacherService.remove(condition);
    res.status(200).json(teacher);
  }),
};
