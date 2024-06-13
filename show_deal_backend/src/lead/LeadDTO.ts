import { ContactDTO } from 'src/contact/ContactDTO';
import { StatusDTO } from 'src/status/StatusDTO';
import { UserDTO } from 'src/user/UserDTO';

export interface LeadDTO {
  id: number,
  name: string,
  createDate: string,
  price: number,
  status: StatusDTO,
  responsibleUser: UserDTO,
  contacts: ContactDTO[]
}