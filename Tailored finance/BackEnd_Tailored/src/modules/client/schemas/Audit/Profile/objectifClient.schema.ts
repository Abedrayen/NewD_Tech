import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'; 
import { Status } from 'src/shared/types/enums';
import { Client } from '../../client.schema';

@Schema({timestamps:true})
export class ObjectifsClient {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: false })
  ClientID: Client; 

  @Prop({ required: false, maxlength: 255 })
  objectif: string; 

  @Prop({ required: false })
  priorite: number;  // Ordre de priorité de l'objectif.

  @Prop({ required: false })
  horizon: number;  // Horizon d’investissement en années.

  @Prop({required:false})
  status:Status
}

export const ObjectifsClientSchema = SchemaFactory.createForClass(ObjectifsClient);
