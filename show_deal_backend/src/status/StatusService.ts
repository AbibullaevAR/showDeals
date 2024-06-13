import { StatusAmoDTO } from './StatusAmoDTO';
import { Injectable } from '@nestjs/common';
import { StatusDTO } from './StatusDTO';

@Injectable()
export class StatusService {
  async getStatus(id: number): Promise<StatusDTO> {
    const response = await fetch(`https://aalim2019.amocrm.ru/api/v4/leads/pipelines/8272834/statuses/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.AMOCRM_TOKEN}`
      }
    });
    const status: StatusAmoDTO = await response.json();

    return {
      color: status.color,
      name: status.name
    }
  }
}