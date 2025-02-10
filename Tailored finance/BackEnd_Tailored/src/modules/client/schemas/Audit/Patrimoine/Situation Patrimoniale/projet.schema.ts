import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({versionKey:false,timestamps:true})

export class Projet
{
    @Prop()
    type:string;

    @Prop()
    valeurAchat:number;

    @Prop()
    emprunt:number;

    @Prop()
    dateFin:Date;

    @Prop()
    mensualite:number;

    @Prop()
    loyer:number;

    @Prop()
    rapportLocatif:string;

    @Prop()
    taux:number;

    @Prop()
    duree:string;

    @Prop()
    rentabilite:number;
}

export const projetSchema=SchemaFactory.createForClass(Projet);