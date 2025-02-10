import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from './schemas/client.schema';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { CapaciteEpargne, CapaciteEpargneSchema } from './schemas/capaciteEpargne.schema';
import { Conjoint, ConjointSchema } from './schemas/Audit/Infos genérales/conjoint.schema';
import { Enfant, EnfantSchema } from './schemas/Audit/Infos genérales/enfant.schema';
import { ObjectifsClient, ObjectifsClientSchema } from './schemas/Audit/Profile/objectifClient.schema';
import { PersonneACharge, PersonneAChargeSchema } from './schemas/Audit/Infos genérales/p_a_c.schema';
import { Passif, PassifSchema } from './schemas/Audit/Revenus/passif.schema';
import { Immobilier, ImmobilierSchema } from './schemas/Audit/Patrimoine/Situation Patrimoniale/immobilier.schema';
import { PMI_ESG, pmiEsgSchema } from './schemas/Audit/Finance/pmi_ESG.schema';
import { ProduitEpargne, ProduitEpargneSchema } from './schemas/Audit/Finance/produitEpargne.schema';
import { ProfilClient, ProfilClientSchema } from './schemas/profilClient.schema';
import { Revenus, RevenusSchema } from './schemas/Audit/Revenus/revenu.schema';
import { JwtService } from '@nestjs/jwt';
import { Consultant, consultantSchema } from 'src/modules/consultant/schemas/consultant.schema';
import { AutrePF, autrePFSchema } from './schemas/Audit/Patrimoine/Patrimoine Financier/autrePF.schema';
import { Liquidite, liquiditeSchema } from './schemas/Audit/Patrimoine/Patrimoine Financier/liquidite.schema';
import { PlacementFinancier, placementFinancierSchema } from './schemas/Audit/Patrimoine/Patrimoine Financier/placementFinancier.schema';
import { Professionel, professionelSchema } from './schemas/Audit/Patrimoine/Patrimoine Professionel/professionel.schema';
import { AutreBienSP, autreBienSPSchema } from './schemas/Audit/Patrimoine/Situation Patrimoniale/autreBienSP.schema';
import { AutreEmprunt, autreEmpruntSchema } from './schemas/Audit/Patrimoine/Situation Patrimoniale/autreEmprunt.schema';
import { Projet,projetSchema } from './schemas/Audit/Patrimoine/Situation Patrimoniale/projet.schema';
import { Affaire, affaireSchema } from '../Affaire/schemas/affaire.schema';
import { affaireClientService } from './services/affaireClient.service';
import { SousAffaire, sousAffaireSchema } from '../Affaire/schemas/sousAffaire.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Client.name, schema: ClientSchema },
      { name: ProfilClient.name, schema: ProfilClientSchema },
      { name: Conjoint.name, schema: ConjointSchema },
      { name: Enfant.name, schema: EnfantSchema },
      { name: Revenus.name, schema: RevenusSchema },
      { name: Passif.name, schema: PassifSchema },
      { name: Immobilier.name, schema: ImmobilierSchema },
      { name: ObjectifsClient.name, schema: ObjectifsClientSchema },
      { name: PMI_ESG.name, schema: pmiEsgSchema },
      { name: ProduitEpargne.name, schema: ProduitEpargneSchema },
      { name: CapaciteEpargne.name, schema: CapaciteEpargneSchema },
      { name: PersonneACharge.name, schema: PersonneAChargeSchema },
      {name:Consultant.name,schema:consultantSchema},
      {name:AutrePF.name,schema:autrePFSchema},
      {name:Liquidite.name,schema:liquiditeSchema},
      {name:PlacementFinancier.name,schema:placementFinancierSchema},
      {name:Professionel.name,schema:professionelSchema},
      {name:AutreBienSP.name,schema:autreBienSPSchema},
      {name:AutreEmprunt.name,schema:autreEmpruntSchema},
      {name:Projet.name,schema:projetSchema},
      {name:Affaire.name,schema:affaireSchema},
      {name:SousAffaire.name,schema:sousAffaireSchema}
    ]),
  ],
  providers: [ClientService,JwtService,affaireClientService],
  controllers: [ClientController],
})
export class ClientModule {}
