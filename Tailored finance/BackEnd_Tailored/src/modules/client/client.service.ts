import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client,  } from './schemas/client.schema';
import { Conjoint,  } from './schemas/Audit/Infos genérales/conjoint.schema';
import { Enfant  } from './schemas/Audit/Infos genérales/enfant.schema';
import { Revenus,  } from './schemas/Audit/Revenus/revenu.schema';
import { Passif,  } from './schemas/Audit/Revenus/passif.schema';
import { Immobilier } from './schemas/Audit/Patrimoine/Situation Patrimoniale/immobilier.schema';
import { ObjectifsClient } from './schemas/Audit/Profile/objectifClient.schema';
import { PMI_ESG } from './schemas/Audit/Finance/pmi_ESG.schema';
import { CreateClientDto } from './dto/createNewClient.dto';
import { ProduitEpargne } from './schemas/Audit/Finance/produitEpargne.schema';
import { CapaciteEpargne } from './schemas/capaciteEpargne.schema';
import { ProfilClient } from './schemas/profilClient.schema';
import { PersonneACharge } from './schemas/Audit/Infos genérales/p_a_c.schema';
import { Consultant } from 'src/modules/consultant/schemas/consultant.schema';
import { AutrePF } from './schemas/Audit/Patrimoine/Patrimoine Financier/autrePF.schema';
import { Liquidite } from './schemas/Audit/Patrimoine/Patrimoine Financier/liquidite.schema';
import { PlacementFinancier } from './schemas/Audit/Patrimoine/Patrimoine Financier/placementFinancier.schema';
import { Professionel } from './schemas/Audit/Patrimoine/Patrimoine Professionel/professionel.schema';
import { AutreBienSP } from './schemas/Audit/Patrimoine/Situation Patrimoniale/autreBienSP.schema';
import { AutreEmprunt } from './schemas/Audit/Patrimoine/Situation Patrimoniale/autreEmprunt.schema';
import { Projet } from './schemas/Audit/Patrimoine/Situation Patrimoniale/projet.schema';


@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name) private readonly clientModel: Model<Client>,
    @InjectModel(ProfilClient.name) private readonly profilClientModel:Model<ProfilClient>,
    @InjectModel(Conjoint.name) private readonly conjointModel: Model<Conjoint>,
    @InjectModel(Enfant.name) private readonly enfantModel: Model<Enfant>,
    @InjectModel(Revenus.name) private readonly revenuModel: Model<Revenus>,
    @InjectModel(Passif.name) private readonly passifModel: Model<Passif>,
    @InjectModel(Immobilier.name) private readonly immobilierModel: Model<Immobilier>,
    @InjectModel(ObjectifsClient.name) private readonly objectifClientModel: Model<ObjectifsClient>,
    @InjectModel(PMI_ESG.name) private readonly pmiEsgModel:Model<PMI_ESG>,
    @InjectModel(ProduitEpargne.name) private readonly produitEpargneModel:Model<ProduitEpargne>,
    @InjectModel(CapaciteEpargne.name) private readonly capaciteEpargneModel:Model<CapaciteEpargne>,
    @InjectModel(PersonneACharge.name) private readonly personneAChargeModel:Model<PersonneACharge>,
    @InjectModel(Consultant.name) private readonly consultantModel:Model<Consultant>,
    @InjectModel(AutrePF.name) private readonly autrePFModel:Model<AutrePF>,
    @InjectModel(Liquidite.name) private readonly liquiditeModel:Model<Liquidite>,
    @InjectModel(PlacementFinancier.name) private readonly placementFinancierModel:Model<PlacementFinancier>,
    @InjectModel(Professionel.name) private readonly ProfessionelModel:Model<Professionel>,
    @InjectModel(AutreBienSP.name) private readonly autreBienSPModel:Model<AutreBienSP>,
    @InjectModel(AutreEmprunt.name) private readonly autreEmpruntModel:Model<AutreEmprunt>,
    @InjectModel(Projet.name) private readonly projetModel:Model<Projet>
  ) {}

  // Create a new client with related data
  async createClient(consultantID:string,createClientDto: any): Promise<boolean> {
    try
    {
      const { conjoint, enfants, revenus, passifs, immobilier, objectif_clients,pmiesg,produits_epargne,autres_impots_acquittes,
        capaciteEpargne,nom,prenom,profession,adresse_fiscale,connaissance_financieres,
        date_naissance,date_union,email,regime_matrimonial,situation_matrimoniale,telephone,lieu_naissance,personnes_a_charge,profil_risque
      ,autreBien,autreEmprunts,projets,liquidite,placementFinancier,autrePF,
      patrimoineProfessionnel } = createClientDto;
    const nouveauClient = new this.clientModel({nom,prenom,adresse_fiscale,date_naissance,email,lieu_naissance,profession,telephone,regime_matrimonial,
      situation_matrimoniale,date_union,connaissance_financieres,profil_risque});
    const consultant=await this.consultantModel.findById(consultantID);
    console.log(consultant)
    const partKey=consultant.clients.length+1;
    nouveauClient.id=consultant.firstName[0]+consultant.firstName[1]+consultant.firstName[2]+partKey;///this id only for showing purposes right npw
        
    if (pmiesg)
    {
        const createPmiEsg= new this.pmiEsgModel(pmiesg);
        createPmiEsg.clientID=nouveauClient;
        await createPmiEsg.save();
        nouveauClient.pmi_ESG=createPmiEsg;
    }
    if (objectif_clients) {
        const objToInsert=objectif_clients.map((obj)=>{return {clientID:nouveauClient._id,...obj}})
        const createdObjectifs = await this.objectifClientModel.insertMany(objToInsert);
        nouveauClient.objectifs_clients = createdObjectifs.map((objectif) => objectif._id);
      }

      
    if (passifs) {
        const passifToInsert=passifs.map((obj)=>{return {clientID:nouveauClient._id,...obj}})
        const createdPassifs = await this.passifModel.insertMany(passifToInsert);
        nouveauClient.passifs = createdPassifs.map((passif) => passif._id);
      }

      if (immobilier) {
        const immobToInsert=immobilier.map((obj)=>{return {clientID:nouveauClient._id,...obj}})
        const createdImmobilier = await this.immobilierModel.insertMany(immobToInsert);
        nouveauClient.immobilier = createdImmobilier.map((immobilierItem) => immobilierItem._id);
      }

    if (produits_epargne)
    {   const produitEpargneToInsert=produits_epargne.map((obj)=>{return {clientID:nouveauClient._id,...obj}})
        const createdProduitEpargne=await this.produitEpargneModel.insertMany(produitEpargneToInsert);
        nouveauClient.produits_epargne=createdProduitEpargne.map((p)=>p._id);
    }

    if (conjoint) {

      const createdConjoint = new this.conjointModel(conjoint);
      createdConjoint.clientID=nouveauClient;
      await createdConjoint.save();
      nouveauClient.conjoint = createdConjoint;
    }

    if (enfants) {
      const enfantToInsert=enfants.map((obj)=>{return {clientID:nouveauClient._id,...obj}})
      const createdEnfants = await this.enfantModel.insertMany(enfantToInsert);
      nouveauClient.enfants = createdEnfants.map((enfant) => enfant._id);
    }

    if (personnes_a_charge)
    {   const pacToInsert=personnes_a_charge.map((obj)=>{return {clientID:nouveauClient._id,...obj}})
        const createdPAC=await this.personneAChargeModel.insertMany(pacToInsert);
        nouveauClient.personnes_a_charge=createdPAC.map((p)=>p._id);
    }

    if (revenus) {
      const revenusToInsert=revenus.map((obj)=>{return {clientID:nouveauClient._id,...obj}})
      const createdRevenus = await this.revenuModel.insertMany(revenusToInsert);
      nouveauClient.revenus = createdRevenus.map((revenu) => revenu._id);
    }

    if (autres_impots_acquittes)
    {   
        nouveauClient.autre_impots_acquittes=autres_impots_acquittes;
    }
    if (capaciteEpargne)
    {
        const createdCapaciteEpargne=new this.capaciteEpargneModel(capaciteEpargne);
        createdCapaciteEpargne.clientID=nouveauClient
        await createdCapaciteEpargne.save();
        nouveauClient.capaciteEpargne=createdCapaciteEpargne;
    }

    if (autreBien) {
      const createdAutreBien = await this.autreBienSPModel.insertMany(
          autreBien.map(obj => ({ clientID: nouveauClient._id, ...obj }))
      );
      nouveauClient.autresBienSP = createdAutreBien.map(ab => ab._id);
  }

  // Handle autreEmprunts
  if (autreEmprunts) {
      const createdAutreEmprunts = await this.autreEmpruntModel.insertMany(
          autreEmprunts.map(obj => ({ clientID: nouveauClient._id, ...obj }))
      );
      nouveauClient.autreEmprunts = createdAutreEmprunts.map(ae => ae._id);
  }

  // Handle projets
  if (projets) {
      const createdProjets = await this.projetModel.insertMany(
          projets.map(obj => ({ clientID: nouveauClient._id, ...obj }))
      );
      nouveauClient.projet = createdProjets.map(pr => pr._id);
  }

  // Handle placementFinancier
  if (placementFinancier) {
      const createdPlacementFinancier = await this.placementFinancierModel.insertMany(
          placementFinancier.map(obj => ({ clientID: nouveauClient._id, ...obj }))
      );
      nouveauClient.placementFinancier = createdPlacementFinancier.map(pf => pf._id);
  }

  // Handle patrimoineProfessionnel
  if (patrimoineProfessionnel) {
      const createdPatrimoineProfessionnel = await this.ProfessionelModel.insertMany(
          patrimoineProfessionnel.map(obj => ({ clientID: nouveauClient._id, ...obj }))
      );
      nouveauClient.patrimoineProfessionnel = createdPatrimoineProfessionnel.map(pp => pp._id);
  }

  if (autrePF)
  {
    const createdautrePF = await this.autrePFModel.insertMany(
      autrePF.map(obj => ({ clientID: nouveauClient._id, ...obj }))
  );
  nouveauClient.autrePF = createdautrePF.map(pp => pp._id);
  }

  if (liquidite)
    {
      const createdLiquidite = await this.liquiditeModel.insertMany(
        liquidite.map(obj => ({ clientID: nouveauClient._id, ...obj }))
    );
    nouveauClient.liquidite = createdLiquidite.map(pp => pp._id);
    }

    await nouveauClient.save();
    nouveauClient.consultant=consultant
    await nouveauClient.save();
    consultant.clients.push(nouveauClient);
    await consultant.save();
    return true;}
    catch(error)
    {   
        console.log("Error : "+error);
        return false;
    }
  }

///we could change this later to one function to handle both
// async addProfilClient(consultantID:string,addProfilClientDTO:any) ///if any update from in the dcc when adding an affair
// { 
//   try
//   { 
//     const {email, conjoint, enfants, revenus, passifs, immobilier, objectifs_clients,pmiesg,produits_epargne,autres_impots_acquittes,
//       capaciteEpargne,adresse_fiscale,connaissance_financieres,
//       date_union,regime_matrimonial,situation_matrimoniale,personnes_a_charge,profil_risque } = addProfilClientDTO;
//       const client=await this.clientModel.findOne({email})
//       if (!client)
//       {
//         return false;
//       }
//       if (client.consultant.toString()!=consultantID)
//       {
//         throw new ForbiddenException("client profile can only be added by the consultant of the client");
//       }
//       const nouveauProfilClient= new this.profilClientModel({regime_matrimonial,situation_matrimoniale,date_union,connaissance_financieres,profil_risque});
//       nouveauProfilClient.client_id=client
//       if (pmiesg)
//         {
//             const createPmiEsg= new this.pmiEsgModel(pmiesg);
//             createPmiEsg.ProfilClientID=nouveauProfilClient;
//             await createPmiEsg.save();
//             nouveauProfilClient.pmi_ESG=createPmiEsg;
//         }
//         if (objectifs_clients) {
//             const objToInsert=objectifs_clients.map((obj)=>{return {ProfilClientID:nouveauProfilClient._id,...obj}})
//             const createdObjectifs = await this.objectifClientModel.insertMany(objToInsert);
//             nouveauProfilClient.objectifs_clients = createdObjectifs.map((objectif) => objectif._id);
//           }
    
          
//         if (passifs) {
//             const passifToInsert=passifs.map((obj)=>{return {ProfilClientID:nouveauProfilClient._id,...obj}})
//             const createdPassifs = await this.passifModel.insertMany(passifToInsert);
//             nouveauProfilClient.passifs = createdPassifs.map((passif) => passif._id);
//           }
    
//           if (immobilier) {
//             const immobToInsert=immobilier.map((obj)=>{return {ProfilClientID:nouveauProfilClient._id,...obj}})
//             const createdImmobilier = await this.immobilierModel.insertMany(immobToInsert);
//             nouveauProfilClient.immobilier = createdImmobilier.map((immobilierItem) => immobilierItem._id);
//           }
    
//         if (produits_epargne)
//         {   const produitEpargneToInsert=produits_epargne.map((obj)=>{return {ProfilClientID:nouveauProfilClient._id,...obj}})
//             const createdProduitEpargne=await this.produitEpargneModel.insertMany(produitEpargneToInsert);
//             nouveauProfilClient.produits_epargne=createdProduitEpargne.map((p)=>p._id);
//         }
    
//         if (conjoint) {
    
//           const createdConjoint = new this.conjointModel(conjoint);
//           createdConjoint.ProfilClientID=nouveauProfilClient;
//           await createdConjoint.save();
//           nouveauProfilClient.conjoint = createdConjoint;
//         }
    
//         if (enfants) {
//           const enfantToInsert=enfants.map((obj)=>{return {ProfilClientID:nouveauProfilClient._id,...obj}})
//           const createdEnfants = await this.enfantModel.insertMany(enfantToInsert);
//           nouveauProfilClient.enfants = createdEnfants.map((enfant) => enfant._id);
//         }
    
//         if (personnes_a_charge)
//         {   const pacToInsert=personnes_a_charge.map((obj)=>{return {ProfilClientID:nouveauProfilClient._id,...obj}})
//             const createdPAC=await this.personneAChargeModel.insertMany(pacToInsert);
//             nouveauProfilClient.personnes_a_charge=createdPAC.map((p)=>p._id);
//         }
    
//         if (revenus) {
//           const revenusToInsert=revenus.map((obj)=>{return {ProfilClientID:nouveauProfilClient._id,...obj}})
//           const createdRevenus = await this.revenuModel.insertMany(revenusToInsert);
//           nouveauProfilClient.revenus = createdRevenus.map((revenu) => revenu._id);
//         }
    
//         if (autres_impots_acquittes)
//         {   
//             nouveauProfilClient.autres_Impots_Acquittes=autres_impots_acquittes;
//         }
//         if (capaciteEpargne)
//         {
//             const createdCapaciteEpargne=new this.capaciteEpargneModel(capaciteEpargne);
//             createdCapaciteEpargne.ProfilClientID=nouveauProfilClient
//             await createdCapaciteEpargne.save();
//             nouveauProfilClient.capaciteEpargne=createdCapaciteEpargne;
//         }
//         await nouveauProfilClient.save();
//         client.profilsClients.push(nouveauProfilClient);
//         await client.save();
//         return true;
//       }
//   catch(error)
//   {
//     console.log('error :'+error);
//     throw error;
//   }
// } 

async findClients(consultantID:string,pageNumber:number,pageLimit:number)
{
  try
  {
    const skip = (pageNumber - 1) * pageLimit;
    const clients=await this.clientModel.find({consultant:consultantID})
    .skip(skip+1)//1 will be 16 in production
    .limit(pageLimit);
    if (clients.length==0)
    {
      return false;
    }
    const total=clients.length;
    return clients
  }
  catch(error)
  {
    console.log("error is "+error)
    throw error;
  }
}


async getClientsCount(consultantID:string)
{
  try 
  {
    const consultant=await this.consultantModel.findById(consultantID)
    return {count:consultant.clients.length};
  }
   catch (error) {
    console.log("error is "+error)
    throw error;
  }
}

  // Get all clients
  async findAll(): Promise<Client[]> {
    return await this.clientModel.find().populate({path:"profilsClients",populate:[{path:"pmi_ESG"},
      {path:"objectifs_clients"},
      {path:"passifs"},
      {path:"immobilier"},
      {path:"produits_epargne"},
      {path:"conjoint"},
      {path:"enfants"},
      {path:"personnes_a_charge"},
      {path:"revenus"},
      {path:"capaciteEpargne"}
    ]});
  }

  // Get a single client by ID
  async getProfilClientByID(id: string): Promise<Client> {
    const client = await this.clientModel.findById(id).populate(['conjoint', 'enfants', 'revenus', 'passifs', 'immobilier', 'objectifs_clients','personnes_a_charge',
      "autrePF","autreEmprunts","projet","liquidite","placementFinancier","autresBienSP",
    "patrimoineProfessionnel"]);
    if (!client) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }
    return client;
  }

//   // Update a client by ID
//   async update(id: string, updateClientDto: UpdateClientDto): Promise<Client> {
//     const updatedClient = await this.clientModel.findByIdAndUpdate(id, updateClientDto, { new: true }).populate(['conjoint', 'enfants', 'revenus', 'passifs', 'immobilier', 'objectifs']);
//     if (!updatedClient) {
//       throw new NotFoundException(`Client with ID ${id} not found`);
//     }
//     return updatedClient;
//   }

//   // Delete a client by ID
//   async remove(id: string): Promise<void> {
//     const result = await this.clientModel.findByIdAndDelete(id);
//     if (!result) {
//       throw new NotFoundException(`Client with ID ${id} not found`);
//     }
//   }
}
