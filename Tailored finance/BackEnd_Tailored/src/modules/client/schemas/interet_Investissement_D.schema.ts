import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'
import { ProfilClient } from './profilClient.schema';


@Schema()

export class InteretInvestissementDurable
{
  @Prop({type:mongoose.Schema.Types.ObjectId,ref:"ProfilClient"})
  profilClientID:ProfilClient

  @Prop({ required: false ,default:false})
  critere_relatif_sfdr: boolean;  //  critères relatifs à la réglementation SFDR 
    
  @Prop()
  reglementation_taxonomie: boolean;  

  @Prop()
  principe_incidences_negatives:boolean;
}