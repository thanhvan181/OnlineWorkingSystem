const userService = require('../services/user.service');
const catchAsync = require('../utils/catchAsync');

module.exports = {
  getAllUsers: catchAsync(async (req, res) => {
    const users = await userService.findAll();
    return res.status(200).json(users);
  }),
};
