import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'
import { Client } from 'src/modules/client/schemas/client.schema';
import { SousAffaire } from './sousAffaire.schema';

@Schema({versionKey:false,timestamps:true})

export class Affaire 
{
    @Prop()
    type:string;

    @Prop()
    categorie:string;

    @Prop({type:[mongoose.Schema.Types.ObjectId],ref:'SousAffaire'})
    sousAffaire:SousAffaire[];

    @Prop({ required: false })
    versementLibre: number;

    @Prop({ required: false })
    fraisEntreeVersementLibrePourcentage: number;

    @Prop({ required: false })
    versementProgrameMensuel: number;

    @Prop({ required: false })
    fraisEntreeProgrammeMensuelPourcentage: number;

    @Prop({ required: false })
    cash: number;

    @Prop({ required: false })
    tauxDeFinancement: number;

    @Prop({ required: false })
    dureeDeCredit: number;

    @Prop({ required: false })
    forets: number;

    @Prop({ required: false })
    privateEquity: number;

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Client"})
    clientID:Client;
}

export const affaireSchema=SchemaFactory.createForClass(Affaire);