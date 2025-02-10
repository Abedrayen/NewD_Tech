import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Categorie } from './categorie.schema';
import { ProduitType2 } from '../produitType2.schema';

@Schema({versionKey:false,timestamps:true})

export class SousCategorie{

    @Prop({type:mongoose.Schema.Types.ObjectId})
    categorieID?:Categorie|ProduitType2
    
    @Prop()
    type:string;
        
    @Prop()
    critere:string[];
}

export const sousCategorieSchema=SchemaFactory.createForClass(SousCategorie);