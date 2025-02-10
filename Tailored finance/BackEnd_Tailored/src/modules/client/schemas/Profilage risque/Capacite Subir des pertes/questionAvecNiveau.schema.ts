import {Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import * as mongoose from "mongoose";
import { BasicQuestion } from '../BasicQuestion.schema';
import { CapaciteSubirPertes } from './capacite_subir_pertes.schema';
import { NiveauPerte } from 'src/shared/types/enums';



@Schema()

export class QuestionSubirPerteNiveau extends BasicQuestion   ////les question avec les niveaux , prémiere partie du document capacité a subir des pertes inclus dans le document profilage risque
{
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"CapaciteSubirPertes"})
    capaciteSubirPertesID:CapaciteSubirPertes

    @Prop()
    niveau:NiveauPerte
}

