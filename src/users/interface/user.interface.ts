import { Specialization } from '../enum/user-specialization.enum';

export interface UserI {
  id: string;
  firstname: string;
  lastname: string;
  specialization: Specialization;
}
