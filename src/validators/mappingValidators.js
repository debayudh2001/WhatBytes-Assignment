const Joi = require('joi');

const assignDoctorSchema = Joi.object({
  patientId: Joi.string().required(),
  doctorId: Joi.string().required()
});

module.exports = { assignDoctorSchema };
