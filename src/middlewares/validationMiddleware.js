const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({ error: 'Validation Error', details: errorMessages });
  }
  req.body = value;
  next();
};

module.exports = { validate };
