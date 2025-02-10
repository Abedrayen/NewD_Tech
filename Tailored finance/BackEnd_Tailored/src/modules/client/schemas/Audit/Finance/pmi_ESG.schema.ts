import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ProfilClient } from "../../profilClient.schema";
import * as mongoose from "mongoose" 
import { Client } from "../../client.schema";

@Schema()

export class PMI_ESG  ///performance moindre en cas d'investissement
{
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Client",required:false})
    clientID:Client
    
    @Prop()
    objectif_env_dur_social_souhaite:number; // Pourcentage dédié aux investissements ESG (Environmental, Social, Governance).   

    @Prop()
    patrimoine:number;


    //Indicateurs environnementaux,sociaux Missing Here...
}
export const pmiEsgSchema=SchemaFactory.createForClass(PMI_ESG)