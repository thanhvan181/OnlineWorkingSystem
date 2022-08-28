const salemanService = require('../services/saleman.service');
const catchAsync = require('../utils/catchAsync');

module.exports = {
  createSaleman: catchAsync(async (req, res) => {
    const saleman = await salemanService.create(req.body);
    return res.status(200).json(saleman);
  }),
  getAllSalemans: catchAsync(async (req, res) => {
    const salemans = await salemanService.getAll();
    return res.status(200).json(salemans);
  }),
  getSaleman: catchAsync(async (req, res) => {
    const saleman = await salemanService.get(req.params.id);
    return res.status(200).json(saleman);
  }),
  removeSaleman: catchAsync(async (req, res) => {
    const saleman = await salemanService.remove(req.params.id);
    return res.status(200).json(saleman);
  }),
  updateSaleman: catchAsync(async (req, res) => {
    const saleman = await salemanService.update(req.params.id, req.body);
    return res.status(200).json(saleman);
  }),
};
