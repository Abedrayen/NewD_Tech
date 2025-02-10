import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {  SousCategorie } from './sousCategorie.schema';
import mongoose from 'mongoose';
import { ProduitType1 } from '../produitType1.schema';
import { ProduitType3 } from '../produitType3.schema';
import { ProduitType2 } from '../produitType2.schema';


@Schema({versionKey:false,timestamps:true})

export class Categorie {

  @Prop({ required: false })
  nom: string;

  @Prop({ type:[mongoose.Schema.Types.ObjectId], required: false })
  sousCategorie: SousCategorie[];

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:"ProduitType1"})
  produitID:ProduitType1
}

export const categorieSchema = SchemaFactory.createForClass(Categorie);
