import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Gestion } from "src/shared/types/enums";


@Schema({versionKey:false,timestamps:true})

export class Liquidite
{
    @Prop()
    nom:string;

    @Prop()
    valeur:number;

    @Prop()
    rentabilite:number;

    @Prop({type:"number",min:1,max:5})
    risque:number

    @Prop()
    disponible:number;

    @Prop()
    gestionnaire:string;

    @Prop()
    gestion:Gestion;

    @Prop()
    objectif:string;

    @Prop()
    dateOuverture:Date;

    @Prop()
    organisme:string;

    @Prop()
    support:string;

    @Prop()
    satisfait:string;
}

export const liquiditeSchema=SchemaFactory.createForClass(Liquidite);