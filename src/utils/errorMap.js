const errorMap = {
  INVALID_VALUE: 404,
  PRODUCT_NOT_FOUND: 404,
  INVALID_VALUE_NAME: 400,
  'string.empty': 422,
  'any.required': 400,
  'string.min': 422,
  'number.min': 422,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
