import {Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import * as mongoose from "mongoose";
import { ProfilRisque } from './profilRisque.schema';
import { BasicQuestion } from '../BasicQuestion.schema';


@Schema()

export class QuestionProfilRisque extends BasicQuestion  ///partie Confirmation du profil document profilage risque
{
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"BasicQuestion"})
    profilRisqueID:ProfilRisque    //Réference vers Profil Risque
    // 3 questions 8, 9 et 10
}

export const QuestionProfilRisqueSchema=SchemaFactory.createForClass(QuestionProfilRisque);