import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ProfilClient } from './profilClient.schema';
import * as mongoose from 'mongoose';
@Schema()

export class IRPPFoyer{
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ProfilClient', required: false })
    ProfilClientID: ProfilClient; 

    @Prop()
    année_derniére:String;

    @Prop()
    année_jugée_moyenne_client:String;

    @Prop()
    Evolution_prévisibles:String;
}


export const  IRPPFoyerSchema=SchemaFactory.createForClass(IRPPFoyer);