import { Controller, Get, Query } from '@nestjs/common';
import { LeadService } from './LeadService';

@Controller('api/')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @Get('leads')
  async getLeads(@Query('query') query: string) {
    try {
      return await this.leadService.getLeads(query);
    } catch (e) {
      return e;
    }
  }
}
