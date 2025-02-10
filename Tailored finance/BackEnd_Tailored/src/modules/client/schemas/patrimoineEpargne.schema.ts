import { Schema,SchemaFactory,Prop } from "@nestjs/mongoose";
import { ProfilClient } from "./profilClient.schema";
import mongoose from "mongoose";
import { Proprietaire } from 'src/shared/types/enums';


@Schema({timestamps:true,versionKey:false})
export class PatrimoineEpargne
{   
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"ProfilClient"})
    profilClientID:ProfilClient;

    @Prop()
    type:string

    @Prop()
    montant:number;

    @Prop()
    depuisQuand:Date;

    @Prop()
    proprietaire:Proprietaire
}


const patrimoineEpargneSchema=SchemaFactory.createForClass(PatrimoineEpargne)



