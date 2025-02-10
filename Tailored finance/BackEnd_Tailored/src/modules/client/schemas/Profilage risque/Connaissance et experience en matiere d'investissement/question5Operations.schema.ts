import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from "mongoose"
import { Operation } from 'src/shared/types/enums';
import { ConnaissanceMatiereInvestissement } from './Connaissance_en_matiere_investissement';

@Schema()
export class Question5CMI {

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:"ConnaissanceMatiereInvestissement"})
  CMI_ID:ConnaissanceMatiereInvestissement;

  @Prop({ required: true})
  fondsEuros: Operation;

  @Prop({ required: true})
  produitObligataires: Operation;

  @Prop({ required: true})
  produitsActions: Operation;

  @Prop({ required: true})
  immobilierDirect: Operation;

  @Prop({ required: true})
  immobilierIndirect: Operation;
}

export const Question5Schema = SchemaFactory.createForClass(Question5CMI);
