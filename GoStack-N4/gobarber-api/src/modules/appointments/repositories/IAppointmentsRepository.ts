import Appointment from "../infra/entities/Appointment";

export default interface IAppointmentsRepository {
  findByDate(date: Date): Promise<Appointment | undefined>
}
