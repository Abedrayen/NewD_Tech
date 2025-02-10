import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Proprietaire } from 'src/shared/types/enums';
import { Client } from 'src/modules/client/schemas/client.schema';

@Schema({timestamps:true})
export class Immobilier {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: false })
  clientID: Client;  

  @Prop({ required: false, maxlength: 255 })
  localisation: string;

  @Prop()
  valeur:number;

  @Prop()
  emprunt:number;

  @Prop()
  dateFin:Date;

  @Prop()
  mensualite:number;

  @Prop({ required: false })
  dateAcq: Date;  

  @Prop()
  restant:number;

  @Prop()
  taux:number;

  @Prop()
  duree:string;

  @Prop({ required: false })
  valeur_indicative: number;  

  
  @Prop({required:false})
  proprietaire:Proprietaire
}

export const ImmobilierSchema = SchemaFactory.createForClass(Immobilier);
