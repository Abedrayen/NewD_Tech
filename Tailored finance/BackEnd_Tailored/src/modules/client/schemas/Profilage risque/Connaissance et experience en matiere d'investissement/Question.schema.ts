import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'
import { Connaissance } from 'src/shared/types/enums';
import { ConnaissanceMatiereInvestissement } from './Connaissance_en_matiere_investissement';
import { BasicQuestion } from '../BasicQuestion.schema';

@Schema()

export class QuestionCMI extends BasicQuestion
{
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"ConnaissanceMatiereInvestissement"})
    CMI_ID:ConnaissanceMatiereInvestissement;

    @Prop()
    connaissance:Connaissance
}

export const questionSchema=SchemaFactory.createForClass(QuestionCMI);