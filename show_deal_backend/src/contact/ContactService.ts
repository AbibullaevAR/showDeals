import { ContactAmoDTO } from './ContactAmoDTO';
import { Injectable } from '@nestjs/common';
import { ContactDTO } from './ContactDTO';

@Injectable()
export class ContactService {
  async getContact(id: number): Promise<ContactDTO> {
    const response = await fetch(`https://aalim2019.amocrm.ru/api/v4/contacts/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.AMOCRM_TOKEN}`
      }
    });
    const contact: ContactAmoDTO = await response.json();

    return {
      name: contact.name,
      phone: contact.custom_fields_values.find(customField => customField.field_code === 'PHONE')?.values[0]?.value || '',
      email: contact.custom_fields_values.find(customField => customField.field_code === 'EMAIL')?.values[0]?.value || ''
    }
  }
  async getContacts(ids: number[]): Promise<ContactDTO[]> {
    return await Promise.all(ids.map(id => this.getContact(id)));
  }
}