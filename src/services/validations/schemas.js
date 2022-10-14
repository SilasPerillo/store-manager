const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const nameSchema = Joi.object({
  name: Joi.string().min(5).required(),
});

const salesSchema = Joi.array().items({
  productId: idSchema.label('productId'),
  quantity: idSchema.label('quantity'),
});

module.exports = {
  idSchema,
  nameSchema,
  salesSchema,
};
