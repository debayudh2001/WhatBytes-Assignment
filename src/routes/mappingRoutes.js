const express = require('express');
const { assignDoctor, getMappings, getDoctorsByPatient, removeMapping } = require('../controllers/mappingController');
const { validate } = require('../middlewares/validationMiddleware');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { assignDoctorSchema } = require('../validators/mappingValidators');

const router = express.Router();

// Apply auth middleware to protect endpoints
router.use(authMiddleware);

router.post('/', validate(assignDoctorSchema), assignDoctor);
router.get('/', getMappings);
router.get('/:patientId', getDoctorsByPatient);
router.delete('/:id', removeMapping);

module.exports = router;
