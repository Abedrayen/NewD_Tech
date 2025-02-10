import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'
import { QuestionCMI } from './Question.schema';
import { Question4CMI } from './Question4.schema';
import { Question5CMI } from './question5Operations.schema';
import { Question6CMI } from './question6.schema';

@Schema()
export class ConnaissanceMatiereInvestissement
{
    @Prop({type:[mongoose.Schema.Types.ObjectId],ref:"Question"})
    questions:QuestionCMI[];  ///only the first 3 questions;

    @Prop()
    question4:Question4CMI

    @Prop()
    question5:Question5CMI

    @Prop()
    question6:Question6CMI[]
    
}

export const connaissanceMatiereInvestissementSchema=SchemaFactory.createForClass(ConnaissanceMatiereInvestissement);