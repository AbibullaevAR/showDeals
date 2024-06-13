import { LeadAmoDTO, LeadAmoResponse } from './LeadAmoDTO';
import { Headers, Injectable } from '@nestjs/common';
import { LeadDTO } from './LeadDTO';
import { ContactService } from 'src/contact/ContactService';
import { StatusService } from 'src/status/StatusService';
import { UserService } from 'src/user/UserService';

@Injectable()
export class LeadService {
  constructor(
    private readonly contactService: ContactService, 
    private readonly statusService: StatusService,
    private readonly userService: UserService
  ){

  }
  private async joinLead(lead: LeadAmoDTO): Promise<LeadDTO> {
    const contactIds = lead._embedded.contacts.map(contact => contact.id);
    const userId = lead.responsible_user_id;
    const statusId = lead.status_id;

    const [ user, status, contacts ] = await Promise.all([
      this.userService.getUser(userId),
      this.statusService.getStatus(statusId),
      this.contactService.getContacts(contactIds),
    ])

    const date = new Date(lead.created_at);

    return {
      id: lead.id,
      name: lead.name,
      createDate: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
      price: lead.price,
      status: status,
      responsibleUser: user,
      contacts: contacts
    }
  }
  async getLeads(query: string): Promise<LeadDTO[]> {
    
    try {
      const response = await fetch(`https://aalim2019.amocrm.ru/api/v4/leads?with=contacts&query=${query}`, {
        headers: {
          Authorization: `Bearer ${process.env.AMOCRM_TOKEN}`
        }
      });
      const leadResponse: LeadAmoResponse = await response.json();
      const leads = leadResponse._embedded.leads;
      const joinedLeads = await Promise.all(leads.map(lead => this.joinLead(lead)));

      return joinedLeads;
    } catch (e) {
      return [];
    }
  }
}
