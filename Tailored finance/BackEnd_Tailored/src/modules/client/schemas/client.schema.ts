import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'
import { Consultant } from '../../consultant/schemas/consultant.schema';
import { ConnaissanceFinancieres } from 'src/shared/types/enums';
import { CapaciteEpargne } from './capaciteEpargne.schema';
import { Conjoint } from './Audit/Infos genérales/conjoint.schema';
import { Enfant } from './Audit/Infos genérales/enfant.schema';
import { ObjectifsClient } from './Audit/Profile/objectifClient.schema';
import { PersonneACharge } from './Audit/Infos genérales/p_a_c.schema';
import { Passif } from './Audit/Revenus/passif.schema';
import { Immobilier } from './Audit/Patrimoine/Situation Patrimoniale/immobilier.schema';
import { PatrimoineEpargne } from './patrimoineEpargne.schema';
import { PMI_ESG } from './Audit/Finance/pmi_ESG.schema';
import { ProduitEpargne } from './Audit/Finance/produitEpargne.schema';
import { ProfilageRisque } from './Profilage risque/profilageRisque.schema';
import { Revenus } from './Audit/Revenus/revenu.schema';
import { AutreBienSP } from './Audit/Patrimoine/Situation Patrimoniale/autreBienSP.schema';
import { AutreEmprunt } from './Audit/Patrimoine/Situation Patrimoniale/autreEmprunt.schema';
import { Projet } from './Audit/Patrimoine/Situation Patrimoniale/projet.schema';
import { Liquidite } from './Audit/Patrimoine/Patrimoine Financier/liquidite.schema';
import { PlacementFinancier } from './Audit/Patrimoine/Patrimoine Financier/placementFinancier.schema';
import { Professionel } from './Audit/Patrimoine/Patrimoine Professionel/professionel.schema';
import { AutrePF } from './Audit/Patrimoine/Patrimoine Financier/autrePF.schema';
import { Affaire } from 'src/modules/Affaire/schemas/affaire.schema';

@Schema({timestamps:true,versionKey:false})

export class Client{
  @Prop({  unique: false })
  id: string;///generated from the consultant Name 

  @Prop()
  potentiel:string;

  @Prop({ required: false, maxlength: 255 })
  nom: string; 

  @Prop({ required: false, maxlength: 255 })
  prenom: string;

  @Prop({ required: false })
  date_naissance: Date;

  @Prop({ required: false, maxlength: 255 })
  lieu_naissance: string;  

  @Prop({ required: false, maxlength: 255 })
  profession: string;  

  @Prop({ required: false, maxlength: 255 })
  adresse_fiscale: string; 

  @Prop({ required: false, maxlength: 20 })
  telephone: string;  

  @Prop({ required: false, maxlength: 255 })
  email: string; 

  @Prop({default:"en attente"})
  status:string;

  @Prop({ required: false, min: 1, max: 7 })
  profil_risque: number; 

  @Prop({  maxlength: 50 })
  situation_matrimoniale: string;  

  @Prop({  maxlength: 50 })
  regime_matrimonial: string;  

  @Prop({ type: Date, required: false })
  date_union: Date | null;  

  @Prop()
  connaissance_financieres: ConnaissanceFinancieres;  

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:"PMI_ESG"})
  pmi_ESG:PMI_ESG

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'ObjectifsClient' })
  objectifs_clients: ObjectifsClient[];  

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Passif' })
  passifs: Passif[]; 

  

  // @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Mobilier' })
  // mobilier: Mobilier[];  

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'ProduitEpargne' })
  produits_epargne: ProduitEpargne[]; 

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Conjoint', required: false })
  conjoint:Conjoint; 

  @Prop({type:[{type: mongoose.Schema.Types.ObjectId, ref: 'Enfant'} ]})
  enfants: Enfant[];

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'PersonneACharge' })
  personnes_a_charge: PersonneACharge[];  

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Revenus' })
  revenus: Revenus[];  

  @Prop()
  autre_impots_acquittes:String[];///Finance

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:"CapaciteEpargne"})
  capaciteEpargne:CapaciteEpargne

  @Prop()
  remarques:String;

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:"ProfilageRisque"})
  profilageRisque:ProfilageRisque;

  @Prop({type:[mongoose.Schema.Types.ObjectId],ref:"PatrimoineEpargne"})  //hedhy fhemthesh
  patrimoineEpargne:PatrimoineEpargne;


  /////////Situation Patrimoniale////////////
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Immobilier' })
  immobilier: Immobilier[];  

  @Prop({type:[mongoose.Schema.Types.ObjectId],ref:"AutrePF"})
  autrePF:AutrePF[]

  @Prop({type:[mongoose.Schema.Types.ObjectId],ref:"AutreEmprunt"})
  autreEmprunts:AutreEmprunt[]

  @Prop({type:[mongoose.Schema.Types.ObjectId],ref:"Projet"})
  projet:Projet[]

  /////////Patrimoine Financiére//////////////
  @Prop({type:[mongoose.Schema.Types.ObjectId],ref:"Liquidite"})
  liquidite:Liquidite[]

  @Prop({type:[mongoose.Schema.Types.ObjectId],ref:"PlacementFinancier"})
  placementFinancier:PlacementFinancier[]

  @Prop({type:[mongoose.Schema.Types.ObjectId],ref:"AutreBienSP"})
  autresBienSP:AutreBienSP[]
  
  /////////////Patrimoine Professionel///////////
  @Prop({type:[mongoose.Schema.Types.ObjectId],ref:"Professionel"})
  patrimoineProfessionnel:Professionel[]

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Consultant"})
  consultant:Consultant
  ///////////Affaires////////////
  @Prop({type:[mongoose.Schema.Types.ObjectId],ref:"Affaire"})
  affaire:Affaire[];
}

export const ClientSchema = SchemaFactory.createForClass(Client);
