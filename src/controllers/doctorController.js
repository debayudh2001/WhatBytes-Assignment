const prisma = require('../prismaClient');

const createDoctor = async (req, res, next) => {
  try {
    const { name, specialization, contact } = req.body;
    const userId = req.user.userId;

    const newDoctor = await prisma.doctor.create({
      data: { name, specialization, contact, userId }
    });

    res.status(201).json(newDoctor);
  } catch (error) {
    next(error);
  }
};

const getDoctors = async (req, res, next) => {
  try {
    const doctors = await prisma.doctor.findMany();
    res.json(doctors);
  } catch (error) {
    next(error);
  }
};

const getDoctorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const doctor = await prisma.doctor.findUnique({
      where: { id }
    });

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    res.json(doctor);
  } catch (error) {
    next(error);
  }
};

const updateDoctor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const doctor = await prisma.doctor.findUnique({ where: { id } });
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    const updatedDoctor = await prisma.doctor.update({
      where: { id },
      data
    });

    res.json(updatedDoctor);
  } catch (error) {
    next(error);
  }
};

const deleteDoctor = async (req, res, next) => {
  try {
    const { id } = req.params;

    const doctor = await prisma.doctor.findUnique({ where: { id } });
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    await prisma.doctor.delete({ where: { id } });
    res.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { createDoctor, getDoctors, getDoctorById, updateDoctor, deleteDoctor };
