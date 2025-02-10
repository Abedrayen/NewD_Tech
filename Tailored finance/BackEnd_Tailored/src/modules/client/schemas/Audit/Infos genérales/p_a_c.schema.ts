import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Client } from '../../client.schema';


@Schema()
export class PersonneACharge {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: false })
  ProfilClientID: Client;

  @Prop({ required: false, maxlength: 255 })
  nom: string;

  @Prop({ required: false, maxlength: 255 })
  prenom: string;

  // @Prop({ required: false })
  // date_naissance: Date;

  // @Prop({ maxlength: 500, required: false })
  // remarques: string;
}

export const PersonneAChargeSchema =SchemaFactory.createForClass(PersonneACharge);
