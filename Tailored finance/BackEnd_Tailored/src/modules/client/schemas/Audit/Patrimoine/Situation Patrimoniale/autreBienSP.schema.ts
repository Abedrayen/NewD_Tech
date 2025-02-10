import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({versionKey:false,timestamps:true})

export class AutreBienSP
{
    @Prop()
    biens:string;

    @Prop()
    dateFin:Date;

    @Prop()
    valeurAchat:number;

    @Prop()
    valeurActuelle:number;

    @Prop()
    emprunt:number;

    @Prop()
    mensualite:number;

    @Prop()
    loyer:number;

    @Prop()
    rapportLocatif:string;

    @Prop()
    estimation:number;

    @Prop()
    dateAcq:Date;

    @Prop()
    restant:number;

    @Prop()
    taux:number;

    @Prop()
    rentabilite:number;
}

export const autreBienSPSchema=SchemaFactory.createForClass(AutreBienSP);