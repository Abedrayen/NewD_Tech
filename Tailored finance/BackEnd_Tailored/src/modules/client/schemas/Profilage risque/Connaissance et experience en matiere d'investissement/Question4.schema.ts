import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'
import { ConnaissanceMatiereInvestissement } from './Connaissance_en_matiere_investissement';

@Schema()

export class Question4CMI
{
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"ConnaissanceMatiereInvestissement"})
    CMI_ID:ConnaissanceMatiereInvestissement;

    @Prop({ required: true ,default:false})
    gestionDirecte: boolean;
  
    @Prop({ required: true,default:false})
    gestionConseillee: boolean;
  
    @Prop({ required: true,default:false})
    gestionSousMandat: boolean;
}

export const question4Schema=SchemaFactory.createForClass(Question4CMI);