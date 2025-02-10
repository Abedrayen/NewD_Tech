import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'
 
 @Schema({versionKey:false,timestamps:true})
export class SousAffaire{
    @Prop()
    sousCategorie:string;

    @Prop()
    critere:string[];

    @Prop()
    montantInv:number;

    @Prop()
    montantInvMensuel:number;
}

export const sousAffaireSchema=SchemaFactory.createForClass(SousAffaire);