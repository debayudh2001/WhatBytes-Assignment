const Joi = require('joi');

const createDoctorSchema = Joi.object({
  name: Joi.string().required(),
  specialization: Joi.string().required(),
  contact: Joi.string().required()
});

const updateDoctorSchema = Joi.object({
  name: Joi.string(),
  specialization: Joi.string(),
  contact: Joi.string()
}).min(1);

module.exports = { createDoctorSchema, updateDoctorSchema };
