import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Client } from '../../client.schema'; // Import Client schema to reference
import { Proprietaire } from 'src/shared/types/enums';
import { ProfilClient } from '../../profilClient.schema';

@Schema({timestamps:true})
export class Passif { 
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: false })
  clientID: Client; 

  @Prop({ required: true, maxlength: 255 })
  nature: string;  // Nature du passif (ex. prêt immobilier, prêt à la consommation).

  @Prop({ required: false })
  capital_restant_du: number;  

  @Prop({ required: false })
  remboursement_mensuel: number; 

  @Prop({ required: false })
  duree_restante: number;  //nombre des mois restantes

  @Prop({required:false})
  proprietaire:Proprietaire
}

export const PassifSchema = SchemaFactory.createForClass(Passif);
