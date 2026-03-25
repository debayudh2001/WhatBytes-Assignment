const express = require('express');
const { createPatient, getPatients, getPatientById, updatePatient, deletePatient } = require('../controllers/patientController');
const { validate } = require('../middlewares/validationMiddleware');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { createPatientSchema, updatePatientSchema } = require('../validators/patientValidators');

const router = express.Router();

router.use(authMiddleware);

router.post('/', validate(createPatientSchema), createPatient);
router.get('/', getPatients);
router.get('/:id', getPatientById);
router.put('/:id', validate(updatePatientSchema), updatePatient);
router.delete('/:id', deletePatient);

module.exports = router;
