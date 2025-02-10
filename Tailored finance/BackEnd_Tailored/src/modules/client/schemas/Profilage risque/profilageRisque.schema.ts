import {Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import * as mongoose from "mongoose";
import { ProfilRisque } from './Profil de risque/profilRisque.schema';
import { ConnaissanceMatiereInvestissement } from './Connaissance et experience en matiere d\'investissement/Connaissance_en_matiere_investissement';
import { CapaciteSubirPertes } from './Capacite Subir des pertes/capacite_subir_pertes.schema';
import { ProfilClient } from '../profilClient.schema';

@Schema()

export class ProfilageRisque
{
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"ProfilRisque"})
    profilRisque:ProfilRisque

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"ConnaissanceMatiereInvestissement"})
    connaissanceMatiereInvestissement:ConnaissanceMatiereInvestissement

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"CapaciteSubirPertes"})
    capaciteSubirPertes:CapaciteSubirPertes

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"ProfilClient"})
    ProfilClientID:ProfilClient
}

export const profilageRisqueSchema=SchemaFactory.createForClass(ProfilageRisque);