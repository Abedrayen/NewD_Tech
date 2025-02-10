import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ConnaissanceMatiereInvestissement } from './Connaissance_en_matiere_investissement';

@Schema()
export class Question6CMI
{

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:"ConnaissanceMatiereInvestissement"})
  CMI_ID:ConnaissanceMatiereInvestissement;

  @Prop({ required: true })
  nom: string; //example Fonds Euros,Livret A,LDD

  @Prop({ required: true, default: false })
  connaitCaracteristiquesEtRisques: boolean;

  @Prop({ required: true, default: false })
  aInvestiDansLes3DernieresAnnees: boolean;
}

export const Question6Schema = SchemaFactory.createForClass(Question6CMI);
