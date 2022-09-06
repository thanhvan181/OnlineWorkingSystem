const catchAsync = require('../utils/catchAsync');
const paidmanagerService = require('../services/paidmanager.service');

module.exports = {
  create: catchAsync(async (req, res) => {
    const paidmanager = await paidmanagerService.create(req.body);
    return res.status(200).json(paidmanager);
  }),
  getAll: catchAsync(async (req, res) => {
    const paidmanagers = await paidmanagerService.findAll();
    return res.status(200).json(paidmanagers);
  }),
  get: catchAsync(async (req, res) => {
    const paidmanager = await paidmanagerService.findOne(req.params.id);
    return res.status(200).json(paidmanager);
  }),
  remove: catchAsync(async (req, res) => {
    const paidmanager = await paidmanagerService.findOneAndDelete(req.params.id);
    return res.status(200).json(paidmanager);
  }),
  update: catchAsync(async (req, res) => {
    const paidmanager = await paidmanagerService.findOneAndUpdate(req.params.id, req.body);
    return res.status(200).json(paidmanager);
  }),
};
