const catchAsync = require('../utils/catchAsync');
const paidmanagerService = require('../services/paidmanager.service');

module.exports = {
  paidmanager: catchAsync(async (req, res, ) => {
    const paidmanagers = await paidmanagerService.findAll();
    return res.status(200).json(paidmanagers);
  }),
};

