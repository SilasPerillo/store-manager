const { idSchema, nameSchema } = require('./schemas');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'INVALID_VALUE', message: 'Invalid format id' };

  return { type: null, message: '' };
};

const validadeName = (name) => {
  const { error } = nameSchema.validate(name);
  if (error) return { type: error.details[0].type, message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validadeName,
};
