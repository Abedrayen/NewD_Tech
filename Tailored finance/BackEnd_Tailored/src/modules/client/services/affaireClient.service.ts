import {  Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Affaire } from "src/modules/Affaire/schemas/affaire.schema";
import { Client } from "../schemas/client.schema";
import { SousAffaire } from "src/modules/Affaire/schemas/sousAffaire.schema";

@Injectable()
export class affaireClientService
{
    constructor(@InjectModel(Affaire.name) private readonly affaireModel:Model<Affaire>,
                @InjectModel(Client.name) private readonly clientModel:Model<Client>,
                @InjectModel(SousAffaire.name) private readonly sousAffaireModel:Model<SousAffaire>           
){}

    async ajouterAffaire(data:any)
    {   const clientID=data.clientID;
        try
        {  const client=await this.clientModel.findById(clientID);
            const newAffaire=new this.affaireModel(data);
            newAffaire.type=data[0].selectedProduct;
            
            client.affaire.push(newAffaire);
            data.addedProducts.forEach(element => {
                
            });
          
            
            newAffaire.clientID=client;
            await client.save();
            await newAffaire.save();
            return true;
        }
        catch(error)
        {   
            console.log("Error is "+error);
            return false;
        }
    }

}