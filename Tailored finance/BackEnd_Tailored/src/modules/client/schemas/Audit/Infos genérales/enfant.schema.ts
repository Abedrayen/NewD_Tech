import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'; 
import { Client } from '../../client.schema';

@Schema({timestamps:true,versionKey:false})
export class Enfant extends mongoose.Document{
  // @Prop({ unique: true })
  // id: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: false })
  clientID: Client; 

  @Prop({ required: false, maxlength: 255 })
  nom: string; 

  @Prop({ required: false, maxlength: 255 })
  prenom: string;

  @Prop({ required: false })
  date_naissance: Date;  

  @Prop({ required: false, default: false })
  a_charge: string; 

  @Prop({ maxlength: 500, required: false })
  remarques: string;  
}

export const EnfantSchema = SchemaFactory.createForClass(Enfant);
