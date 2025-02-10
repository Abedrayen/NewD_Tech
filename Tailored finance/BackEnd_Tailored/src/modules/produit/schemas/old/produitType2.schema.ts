import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from "mongoose"
import { SousCategorie } from './Bases/sousCategorie.schema';
import { Montant } from './Bases/montant.schema';

@Schema({ timestamps: true,versionKey:false })

export class ProduitType2{ //kif el Immobilier
    
  @Prop({ required: false })
  type: string;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], required: false ,ref:'SousCategorie'})
  sousCategorie: SousCategorie[];

  @Prop({type:Montant})
    montant:Montant
}

export const produitType2Schema = SchemaFactory.createForClass(ProduitType2);