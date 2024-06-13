import { UserAmoDTO } from './UserAmoDTO';
import { Injectable } from '@nestjs/common';
import { UserDTO } from './UserDTO';

@Injectable()
export class UserService {
  async getUser(id: number): Promise<UserDTO> {
    const response = await fetch(`https://aalim2019.amocrm.ru/api/v4/users/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.AMOCRM_TOKEN}`
      }
    });
    const user: UserAmoDTO = await response.json();

    return {
      name: user.name
    }
  }
}