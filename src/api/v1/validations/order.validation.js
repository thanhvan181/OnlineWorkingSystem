const Joi = require('joi');

const objectId = (value, helpers) => {
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.message('"{{#label}}" must be a valid mongo id');
  }
  return value;
};

const getAllOrders = {
  query: Joi.object().keys({
    studentName: Joi.string(),
    studentGrade: Joi.string(),
    phone: Joi.string(),
    schedule: Joi.date(),
  }),
};

const getOrder = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

const createOrder = {
  body: Joi.object().keys({
    studentName: Joi.string().required(),
    studentGrade: Joi.string().required(),
    phone: Joi.string().required().min(10),
    schedule: Joi.date().required(),
  }),
};
const updateOrder = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    studentName: Joi.string().required(),
    studentGrade: Joi.string().required(),
    phone: Joi.string().required().min(10),
    schedule: Joi.date().required(),
  }),
};
const deleteOrder = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};
module.exports = {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
