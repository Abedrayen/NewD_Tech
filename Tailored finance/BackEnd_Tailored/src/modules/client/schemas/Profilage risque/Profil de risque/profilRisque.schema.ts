import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { QuestionProfilRisquePts } from './QuestionProfileRisquePts.schema';
import { QuestionProfilRisque } from './QuestionProfilRisque.schema';

@Schema()

export class ProfilRisque{
    @Prop({type:[mongoose.Schema.Types.ObjectId],ref:"QuestionProfilRisque"})
    questionsWithPts:QuestionProfilRisquePts[] // prémiere partie document profilage risque du question 1 jusqu'a question 7

    @Prop({type:[mongoose.Schema.Types.ObjectId],ref:"QuestionProfilRisque"})
    questions:QuestionProfilRisque[]  ///deuxiéme partie du document profilage risque qui ne contient pas de points attribuées a chaque question aka confirmation du profil
}


export const profilRisqueSchema=SchemaFactory.createForClass(ProfilRisque);