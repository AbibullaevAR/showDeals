import { Module } from '@nestjs/common';
import { ContactService } from 'src/contact/ContactService';
import { StatusService } from 'src/status/StatusService';
import { UserService } from 'src/user/UserService';
import { LeadController } from './LeadController';
import { LeadService } from './LeadService';


@Module({
  imports: [],
  controllers: [LeadController],
  providers: [ContactService, StatusService, UserService, LeadService],
})
export class LeadModule {}