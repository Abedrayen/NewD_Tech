import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from "mongoose"
import { Categorie } from './Bases/categorie.schema';
import { Montant, MontantSchema } from './Bases/montant.schema';



@Schema({ timestamps: true,versionKey:false })

export class ProduitType1 {  //kif el Asset Management
    
  @Prop({ required: false })
  type: string;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], required: false,ref:"SousCategorie" })
  categorie: Categorie[];

  @Prop({type:Montant})
  montant:Montant
}

export const produitType1Schema = SchemaFactory.createForClass(ProduitType1);