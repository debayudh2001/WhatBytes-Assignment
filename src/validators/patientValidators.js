const Joi = require('joi');

const createPatientSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().integer().min(0).required(),
  gender: Joi.string().valid('Male', 'Female', 'Other').required(),
  contact: Joi.string().required()
});

const updatePatientSchema = Joi.object({
  name: Joi.string(),
  age: Joi.number().integer().min(0),
  gender: Joi.string().valid('Male', 'Female', 'Other'),
  contact: Joi.string()
}).min(1);

module.exports = { createPatientSchema, updatePatientSchema };
