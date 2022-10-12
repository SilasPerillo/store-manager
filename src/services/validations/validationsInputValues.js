const { idSchema } = require('./schemas');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'INVALID_VALUE', message: 'Invalid format id' };

  return { type: null, message: '' };
};

module.exports = {
  validateId,
};
