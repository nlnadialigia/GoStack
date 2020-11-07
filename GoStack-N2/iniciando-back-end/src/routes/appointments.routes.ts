import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();

appointmentsRouter.post('/', async (request, response) => {
  const { provider, date } = request.body;
  const parsedDate = parseISO(date);
  const createAppointment = new CreateAppointmentService();

  const appointment = await createAppointment.execute({
    provider,
    date: parsedDate,
  });

  return response.json(appointment);
});

appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});
export default appointmentsRouter;
