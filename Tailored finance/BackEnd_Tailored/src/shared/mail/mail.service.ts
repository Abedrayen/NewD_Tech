import { Injectable } from "@nestjs/common";
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';
import * as ejs from "ejs"


@Injectable()

export class MailService
{
    constructor(private readonly mailerService:MailerService){}

    async sendConsultantCredentials(consultantCredentials:any)
    {   
        try
        {   const te=await ejs.renderFile("./src/mail/templates/newConsultant.ejs",{name:consultantCredentials.firstName,email:consultantCredentials.email,password:consultantCredentials.password})
            const sent=await this.mailerService.sendMail({
                to:consultantCredentials.email,
                subject:"Account Credentials",
                html:te
            })
            return true;
        }
       
        catch(error)
        {   
            console.log("error is "+error);
            return false;
        }
    }
}