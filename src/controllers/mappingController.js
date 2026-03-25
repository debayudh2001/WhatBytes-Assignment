const prisma = require('../prismaClient');

const assignDoctor = async (req, res, next) => {
  try {
    const { patientId, doctorId } = req.body;

    // Check if patient and doctor exist
    const patient = await prisma.patient.findUnique({ where: { id: patientId } });
    const doctor = await prisma.doctor.findUnique({ where: { id: doctorId } });

    if (!patient || !doctor) {
      return res.status(404).json({ error: 'Patient or Doctor not found' });
    }

    // Check if mapping already exists
    const existingMapping = await prisma.patientDoctor.findUnique({
      where: {
        patientId_doctorId: {
          patientId,
          doctorId
        }
      }
    });

    if (existingMapping) {
      return res.status(400).json({ error: 'Doctor is already assigned to this patient' });
    }

    const mapping = await prisma.patientDoctor.create({
      data: { patientId, doctorId }
    });

    res.status(201).json(mapping);
  } catch (error) {
    next(error);
  }
};

const getMappings = async (req, res, next) => {
  try {
    const mappings = await prisma.patientDoctor.findMany({
      include: {
        patient: true,
        doctor: true
      }
    });
    res.json(mappings);
  } catch (error) {
    next(error);
  }
};

const getDoctorsByPatient = async (req, res, next) => {
  try {
    const { patientId } = req.params;

    const mappings = await prisma.patientDoctor.findMany({
      where: { patientId },
      include: {
        doctor: true
      }
    });

    res.json(mappings);
  } catch (error) {
    next(error);
  }
};

const removeMapping = async (req, res, next) => {
  try {
    const { id } = req.params;

    const mapping = await prisma.patientDoctor.findUnique({ where: { id } });
    if (!mapping) {
      return res.status(404).json({ error: 'Mapping not found' });
    }

    await prisma.patientDoctor.delete({ where: { id } });
    res.json({ message: 'Mapping removed successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { assignDoctor, getMappings, getDoctorsByPatient, removeMapping };
