import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import AssetManagementProduct from "../assets/assetManagament.asset";
import { Categorie } from "../schemas/old/Bases/categorie.schema";
import { SousCategorie } from "../schemas/old/Bases/sousCategorie.schema";
import { ProduitType1 } from "../schemas/old/produitType1.schema";
import { ProduitType2 } from "../schemas/old/produitType2.schema";
import { ProduitType3 } from "../schemas/old/produitType3.schema";
import immobilierProduct from "../assets/immobilier.asset";
import foretProduct from "../assets/forets.asset";
import privateEquityProduct from "../assets/privateEquity.asset";


@Injectable()

export class InitilisationService implements OnModuleInit
{

    constructor(
        @InjectModel(Categorie.name) private readonly categorieModel:Model<Categorie>,
        @InjectModel(SousCategorie.name) private readonly sousCategorieModel:Model<SousCategorie>,
        @InjectModel(ProduitType1.name) private readonly produitType1Model:Model<ProduitType1>,
        @InjectModel(ProduitType2.name) private readonly produitType2Model:Model<ProduitType2>,
        @InjectModel(ProduitType3.name) private readonly produitType3Model:Model<ProduitType3>
    )
    {}
    async onModuleInit() 
    {
        console.log("Initialization Products logic running...")
        await this.seedProductsType1();
        await this.seedProductsType2()
        await this.seedProductsType3();
        console.log("Product Seeding Successfull");
    }

    private async seedProductsType1()
    {
        try {
            const exist=await this.produitType1Model.findOne({type:AssetManagementProduct.product.nom})
            if (!exist)
            {
            const AMProduct=new this.produitType1Model({type:AssetManagementProduct.product.nom})
            for (let categorie of AssetManagementProduct.product.categorie)
            {   const newCategorie=new this.categorieModel({nom:categorie.nom,sousCategorie:[]});
                await newCategorie.save();
                for (let sousCategorie of categorie.sousCategorie)
                {
                    let newSousCategorie=new this.sousCategorieModel({...sousCategorie})
                    newSousCategorie.categorieID=newCategorie;
                    await newSousCategorie.save();
                    
                    newCategorie.sousCategorie.push(newSousCategorie);
                }  
                await newCategorie.save()
                AMProduct.categorie.push(newCategorie)
            }
            await AMProduct.save()
        }
        } catch (error) {
            console.log("Error is "+error);
        }
    }
    

    private async seedProductsType2()
    {
        try 
        {
                const exist=await this.produitType2Model.findOne({type:immobilierProduct.type})
                if (!exist)
                {
                    const newImmobilierProduct=new this.produitType2Model({type:immobilierProduct.type,sousCategorie:[]});
                    await newImmobilierProduct.save();
                    for (let souscategorie of immobilierProduct.sousCategorie)
                    {
                        const newSousCategorie=new this.sousCategorieModel({...souscategorie,categorieID:newImmobilierProduct});
                        await newSousCategorie.save();
                        newImmobilierProduct.sousCategorie.push(newSousCategorie);
                    }
                    await newImmobilierProduct.save();
                    
                }
        } 
        catch (error) {
             console.log("Error is "+error);   
        }
    }


    private async seedProductsType3()
    {
        try 
        {
            let exist=await this.produitType3Model.findOne({type:foretProduct.type})
            if (!exist)
            {
                const newForetsProduct=new this.produitType3Model(foretProduct);
                await newForetsProduct.save();
            }
            exist=await this.produitType3Model.findOne({type:privateEquityProduct.type})
            if (!exist)
            {
                const newPrivateEquityProduct=new this.produitType3Model(privateEquityProduct);
                await newPrivateEquityProduct.save();
            }
        }
        catch (error) 
        {
            console.log("Error is "+error);    
        }
    }


}