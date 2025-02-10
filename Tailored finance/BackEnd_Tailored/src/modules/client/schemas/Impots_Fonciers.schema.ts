import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ProfilClient } from './profilClient.schema';
import * as mongoose from "mongoose"
@Schema()

export class ImpotFoncier{
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ProfilClient', required: false })
    ProfilClientID: ProfilClient; 
    
    @Prop()
    Bien:String;

    @Prop()
    Nature:String;
}


export const ImpotFoncierSchema=SchemaFactory.createForClass(ImpotFoncier);