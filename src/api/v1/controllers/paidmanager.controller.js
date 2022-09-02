const catchAsync = require('../utils/catchAsync');
const paidmanagerService = require('../services/paidmanager.service');

module.exports = {
  create: catchAsync(async (req, res) => {
    const saleman = await paidmanagerService.create(req.body);
    return res.status(200).json(saleman);
  }),
  getAll: catchAsync(async (req, res) => {
    const salemans = await paidmanagerService.getAll();
    return res.status(200).json(salemans);
  }),
  get: catchAsync(async (req, res) => {
    const saleman = await paidmanagerService.get(req.params.id);
    return res.status(200).json(saleman);
  }),
  remove: catchAsync(async (req, res) => {
    const saleman = await paidmanagerService.remove(req.params.id);
    return res.status(200).json(saleman);
  }),
  update: catchAsync(async (req, res) => {
    const saleman = await paidmanagerService.update(req.params.id, req.body);
    return res.status(200).json(saleman);
  }),
};
