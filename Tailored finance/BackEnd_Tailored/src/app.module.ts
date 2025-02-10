import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './modules/client/client.module';
import { DatabaseModule } from './shared/database/database.module';
import { ConsultantModule } from './modules/consultant/consultant.module';
import { MailModule } from './shared/mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { ProduitModule } from './modules/produit/produit.module';
import { AffaireModule } from './modules/Affaire/affaire.module';

@Module({
  imports: [ConfigModule.forRoot(),ClientModule,DatabaseModule,ConsultantModule,MailModule,AuthModule, ProduitModule,AffaireModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
