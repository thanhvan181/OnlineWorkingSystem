const Joi = require('joi');

const createOrder = {
  body: Joi.object().keys({
    studentName: Joi.string().required(),
    studentGrade: Joi.string().required(),
    phone: Joi.number().required().min(10),
    schedule: Joi.date().required(),
  }),
};
module.exports = {
  createOrder,
};
