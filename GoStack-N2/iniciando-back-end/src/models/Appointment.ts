import { v4 } from 'uuid';

class Appointment {
  provider: string;

  date: Date;

  id: string;

  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    this.provider = provider;
    this.date = date;
    this.id = v4();
  }
}

export default Appointment;
