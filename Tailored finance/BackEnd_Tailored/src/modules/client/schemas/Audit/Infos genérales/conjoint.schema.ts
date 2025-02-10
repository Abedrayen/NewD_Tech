import * as mongoose from "mongoose"
import { Prop, Schema,SchemaFactory } from '@nestjs/mongoose';
import { Client } from '../../client.schema'; 
import { ConnaissanceFinancieres } from "src/shared/types/enums";

@Schema()
export class Conjoint{


  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: false })
  clientID: Client;  

  @Prop({ required: false, maxlength: 255 })
  nom: string; 

  @Prop({ required: false, maxlength: 255 })
  prenom: string;

  @Prop({ required: false })
  date_naissance: Date;  

  @Prop({ required: false, maxlength: 255 })
  lieu_naissance: string;  

  @Prop({ required: false, maxlength: 255 })
  profession: string;  

  @Prop({ required: false, maxlength: 20 })
  telephone: string;  

  @Prop({ required: false, maxlength: 255 })
  email: string;  

  @Prop({ required: false, maxlength: 255 })
  connaissance_financieres: ConnaissanceFinancieres;  

  @Prop()
  forme_legale:String;

  @Prop()
  depuis:Date;
}

export const ConjointSchema = SchemaFactory.createForClass(Conjoint);
