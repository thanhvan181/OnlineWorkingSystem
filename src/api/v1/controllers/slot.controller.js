const slotService = require('../services/slot.service');
const catchAsync = require('../utils/catchAsync');

module.exports = {
  createSlot: catchAsync(async (req, res) => {
    const slot = await slotService.create(req.body);
    return res.status(200).json(slot);
  }),
  getAllSlots: catchAsync(async (req, res) => {
    const slot = await slotService.getAll();
    return res.status(200).json(slot);
  }),
  getSlot: catchAsync(async (req, res) => {
    const slot = await slotService.get(res.body.id);
    return res.status(200).json(slot);
  }),
  removeSlot: catchAsync(async (req, res) => {
    const slot = await slotService.remove(req.body.id);
    return res.status(200).json(slot);
  }),
  updateSlot: catchAsync(async (req, res) => {
    const slot = await slotService.update(req.body);
    return res.status(200).json(slot);
  }),
};
