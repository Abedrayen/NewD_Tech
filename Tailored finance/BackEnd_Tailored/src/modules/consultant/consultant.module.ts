import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsultantController } from './consultant.controller';
import { ConsultantService } from './consultant.service';
import { Consultant, consultantSchema } from './schemas/consultant.schema';
import { MailModule } from 'src/shared/mail/mail.module';
import { JwtService } from '@nestjs/jwt';
import { Client, ClientSchema } from 'src/modules/client/schemas/client.schema';
;


@Module({
  imports: [MailModule  
    ,MongooseModule.forFeature(
      [
        {name:Consultant.name,schema:consultantSchema},
        {name:Client.name,schema:ClientSchema}
      ])],
  controllers: [ConsultantController],
  providers: [ConsultantService,JwtService],
})
export class ConsultantModule {}
