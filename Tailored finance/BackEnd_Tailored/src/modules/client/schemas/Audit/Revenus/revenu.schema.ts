import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Frequence, Proprietaire } from 'src/shared/types/enums';
import { ProfilClient } from '../../profilClient.schema';
import { Client } from '../../client.schema';

@Schema({timestamps:true})
export class Revenus {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: false })
  clientID: Client;  

  @Prop({ required: true })
  montant: number;  

  @Prop({ required: true, maxlength: 255 })
  nature: string;  

  @Prop({ required: true, enum:Frequence })
  frequence: Frequence; 

  @Prop({ required: true, default: false })
  hors_france: boolean; 

  @Prop({ maxlength: 500, required: false })
  remarques: string;  
  
  @Prop({required:false})
  proprietaire:Proprietaire;
}

export const RevenusSchema = SchemaFactory.createForClass(Revenus);
