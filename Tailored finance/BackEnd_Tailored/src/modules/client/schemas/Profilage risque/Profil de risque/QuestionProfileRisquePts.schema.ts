import {Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import * as mongoose from "mongoose";
import { ProfilRisque } from './profilRisque.schema';
import { BasicQuestion } from '../BasicQuestion.schema';


@Schema()

export class QuestionProfilRisquePts extends BasicQuestion //catégorie des questions avec attributs points;
{
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"ProfilRisque"})
    profilRisqueID:ProfilRisque;

    @Prop()
    points:number;
}

export const QuestionProfilRisquePtsSchema=SchemaFactory.createForClass(QuestionProfilRisquePts);