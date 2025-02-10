import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'
import { Client } from './client.schema';

@Schema()
export class CapaciteEpargne{
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Client"})
    clientID:Client

    @Prop()
    montant:Number;  ///par mois ou par autre chose que je ne c pas 

    @Prop()
    periodicite:String;

    @Prop()
    quote_part_patrimoine:number;

    @Prop()
    endettement_global:number;

}

export const CapaciteEpargneSchema=SchemaFactory.createForClass(CapaciteEpargne);