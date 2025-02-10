import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Proprietaire } from 'src/shared/types/enums';
import { ProfilClient } from '../../../profilClient.schema';

@Schema({timestamps:true})
export class Mobilier {
  @Prop({ required: true, unique: true })
  id: number;  

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ProfilClient', required: true })
  ProfilClientID: ProfilClient; 

  @Prop({ required: true, maxlength: 255 })
  type: string;  

  @Prop({ required: true })
  montant: number;  

  @Prop({ required: true })
  depuis_quand: Date;

  @Prop({required:true})
  propriétaire:Proprietaire
}

export const MobilierSchema = SchemaFactory.createForClass(Mobilier);
