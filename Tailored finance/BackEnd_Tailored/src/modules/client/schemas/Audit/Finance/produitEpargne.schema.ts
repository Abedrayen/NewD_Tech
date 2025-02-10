    import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
    import * as mongoose from 'mongoose';
    import { Client } from '../../client.schema'; 
    import { ModeGestion, Proprietaire } from 'src/shared/types/enums';
import { ProfilClient } from '../../profilClient.schema';
    
    @Schema({timestamps:true})
    export class ProduitEpargne { 

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: false })
    clientID: ClientTypes; 

    @Prop({ required: false }) //si passé=oui alors ce champ existe;page 3/11 DCC
    mode_gestion: string;  

    @Prop({ required: false, default: true })
    est_actuel: boolean; 

    @Prop({required:false})
    proprietaire:Proprietaire
    }

    export const ProduitEpargneSchema = SchemaFactory.createForClass(ProduitEpargne);
