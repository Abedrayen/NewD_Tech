import {Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import * as mongoose from "mongoose";
import { QuestionSubirPerteNiveau } from './questionAvecNiveau.schema';
import { QuestionConfirmationProfil } from './questionConfirmationProfil_TF.schema';


@Schema()

export class CapaciteSubirPertes
{
    @Prop({type:[mongoose.Schema.Types.ObjectId],ref:"QuestionSubirPerteNiveau"})
    questionSubirPerteNiveau:QuestionSubirPerteNiveau[];///3 premiéres question subir pertes 

    @Prop({type:[mongoose.Schema.Types.ObjectId],ref:"QuestionConfirmationProfil"})
    QuestionConfirmationProfil:QuestionConfirmationProfil[] ///cohérance des données,complétude des données et avertissement RGPD envoyé au client aussi inclut dans cette

    @Prop()
    remarques:String;
}

export const CapaciteSubirPertesSchema=SchemaFactory.createForClass(CapaciteSubirPertes);
