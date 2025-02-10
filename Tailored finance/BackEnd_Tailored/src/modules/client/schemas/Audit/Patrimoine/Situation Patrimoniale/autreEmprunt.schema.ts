import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({versionKey:false,timestamps:true})

export class AutreEmprunt
{
    @Prop()
    destination:string;

    @Prop()
    montant:number;

    @Prop()
    dateFin:Date;

    @Prop()
    taux:number;

    @Prop()
    mensualite:number;
    
    @Prop()
    restant:number;
    
    @Prop()
    commentaires:string;
}

export const autreEmpruntSchema=SchemaFactory.createForClass(AutreEmprunt)