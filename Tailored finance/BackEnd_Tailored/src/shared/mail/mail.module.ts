import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
import { join } from "path";
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { MailService } from "./mail.service";

@Module({
    imports:[
        MailerModule.forRoot({
            transport: {
              host: 'smtp.gmail.com', 
              port: 25,
              secure: false,
              auth: {
                user: 'ecoartteampi@gmail.com',
                pass:"zwsb opga qbas fwnl"
                
              },
            },
            defaults: {
              from: '"Tailored Finance" <ecoartteampi@gmail.com>',
            },
            template: { 
              dir: join(__dirname, 'templates'),
              adapter: new EjsAdapter(), 
              options: {
                strict: true,
              },
            },
          }),
    ],
    providers:[MailService],
    exports:[MailService]
})

export class MailModule{}   