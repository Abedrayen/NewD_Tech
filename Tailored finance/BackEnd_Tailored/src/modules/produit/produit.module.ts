import { Module } from '@nestjs/common';
import { ProduitService } from './services/produit.service';
import { ProduitController } from './produit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Categorie, categorieSchema } from './schemas/old/Bases/categorie.schema';
import { SousCategorie, sousCategorieSchema } from './schemas/old/Bases/sousCategorie.schema';
import { ProduitType1, produitType1Schema } from './schemas/old/produitType1.schema';
import { ProduitType2, produitType2Schema } from './schemas/old/produitType2.schema';
import { ProduitType3, produitType3Schema } from './schemas/old/produitType3.schema';
import { InitilisationService } from './services/Initialization.service';
@Module({
  imports:[
    MongooseModule.forFeature([
      {name:Categorie.name,schema:categorieSchema},
      {name:SousCategorie.name,schema:sousCategorieSchema},
      {name:ProduitType1.name,schema:produitType1Schema},
      {name:ProduitType2.name,schema:produitType2Schema},
      {name:ProduitType3.name,schema:produitType3Schema}
  
    ])],
  providers: [ProduitService],
  controllers: [ProduitController]
})
export class ProduitModule {}
