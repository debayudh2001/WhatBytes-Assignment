const express = require('express');
const { createDoctor, getDoctors, getDoctorById, updateDoctor, deleteDoctor } = require('../controllers/doctorController');
const { validate } = require('../middlewares/validationMiddleware');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { createDoctorSchema, updateDoctorSchema } = require('../validators/doctorValidators');

const router = express.Router();

// Apply auth middleware to protect endpoints
router.use(authMiddleware);

router.post('/', validate(createDoctorSchema), createDoctor);
router.get('/', getDoctors);
router.get('/:id', getDoctorById);
router.put('/:id', validate(updateDoctorSchema), updateDoctor);
router.delete('/:id', deleteDoctor);

module.exports = router;
