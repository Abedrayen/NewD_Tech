import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({versionKey:false,timestamps:true})

export class Professionel
{
    @Prop()
    formeJuridique:string;

    @Prop()
    nombreAssocie:number;

    @Prop()
    detention:number;

    @Prop()
    dateCreation:Date;

    @Prop()
    valorisation:number;

    @Prop()
    passif:number;

    @Prop()
    tresorerie:number;

    @Prop()
    CA:number;

    @Prop()
    benefice:number;

    @Prop()
    activite:string;
}

export const professionelSchema=SchemaFactory.createForClass(Professionel);