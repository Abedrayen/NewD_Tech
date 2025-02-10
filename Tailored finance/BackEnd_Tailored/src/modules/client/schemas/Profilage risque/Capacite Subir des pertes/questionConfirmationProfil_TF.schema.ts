import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from "mongoose"
import { CapaciteSubirPertes } from './capacite_subir_pertes.schema';

@Schema()

export class QuestionConfirmationProfil /// dérniere partie du document profilage risque
{
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"CapaciteSubirPertes"})
    CapaciteSubirPertesID:CapaciteSubirPertes

    @Prop()
    question:String;

    @Prop()
    reponse:Boolean;
}

export const questionConfirmationProfilSchema=SchemaFactory.createForClass(QuestionConfirmationProfil);