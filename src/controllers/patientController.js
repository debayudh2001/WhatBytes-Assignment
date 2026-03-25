const prisma = require('../prismaClient');

const createPatient = async (req, res, next) => {
  try {
    const { name, age, gender, contact } = req.body;
    const userId = req.user.userId;

    const newPatient = await prisma.patient.create({
      data: { name, age, gender, contact, userId }
    });

    res.status(201).json(newPatient);
  } catch (error) {
    next(error);
  }
};

const getPatients = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const patients = await prisma.patient.findMany({
      where: { userId }
    });

    res.json(patients);
  } catch (error) {
    next(error);
  }
};

const getPatientById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const patient = await prisma.patient.findUnique({
      where: { id }
    });

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    res.json(patient);
  } catch (error) {
    next(error);
  }
};

const updatePatient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const patient = await prisma.patient.findUnique({ where: { id } });
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    const updatedPatient = await prisma.patient.update({
      where: { id },
      data
    });

    res.json(updatedPatient);
  } catch (error) {
    next(error);
  }
};

const deletePatient = async (req, res, next) => {
  try {
    const { id } = req.params;

    const patient = await prisma.patient.findUnique({ where: { id } });
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    await prisma.patient.delete({ where: { id } });
    res.json({ message: 'Patient deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { createPatient, getPatients, getPatientById, updatePatient, deletePatient };
