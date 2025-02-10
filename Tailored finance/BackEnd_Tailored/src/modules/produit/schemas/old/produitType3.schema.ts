import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Montant } from './Bases/montant.schema';


@Schema({ timestamps: true,versionKey:false })

export class ProduitType3{ //kima foret wel private equity
    
  @Prop({ required: false })
  type: string;

  @Prop()
  critere:string[]

  @Prop({type:Montant})
  montant:Montant
}

export const produitType3Schema = SchemaFactory.createForClass(ProduitType3);