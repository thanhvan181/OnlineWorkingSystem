const salemanService = require('../services/saleman.service');
const catchAsync = require('../utils/catchAsync');

module.exports = {
  createSaleman: catchAsync(async (req, res) => {
    const saleman = await salemanService.create(req.body);
    return res.status(200).json(saleman);
  }),
  getAllSalemans: catchAsync(async (req, res) => {
    const salemans = await salemanService.findAll();
    return res.status(200).json(salemans);
  }),
  getSaleman: catchAsync(async (req, res) => {
    const saleman = await salemanService.findOne(req.params.id);
    return res.status(200).json(saleman);
  }),
  removeSaleman: catchAsync(async (req, res) => {
    const saleman = await salemanService.findOneAndDelete(req.params.id);
    return res.status(200).json(saleman);
  }),
  updateSaleman: catchAsync(async (req, res) => {
    const saleman = await salemanService.findOneAndUpdate(req.params.id, req.body);
    return res.status(200).json(saleman);
  }),
};
