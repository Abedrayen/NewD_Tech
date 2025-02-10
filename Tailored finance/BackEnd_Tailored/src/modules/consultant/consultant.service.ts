import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException, OnModuleInit } from "@nestjs/common";
import {Model} from "mongoose"
import { Consultant } from "./schemas/consultant.schema";
import { InjectModel } from "@nestjs/mongoose";
import {generate} from "generate-password";
import * as bcrypt from 'bcrypt';
import { MailService } from "src/shared/mail/mail.service";
import { Client } from "src/modules/client/schemas/client.schema";
import { Role } from "src/shared/types/enums";

@Injectable()
export class ConsultantService implements OnModuleInit{
    constructor(private mailService:MailService
    ,@InjectModel(Consultant.name) private readonly consultantModel:Model<Consultant>,
    @InjectModel(Client.name) private readonly clientModel:Model<Client>){}

    async onModuleInit() {
        await this.seedAdmins();
    }

    private async seedAdmins()
    {
        try
        {
            const admins=[
                {firstName:process.env.firstNameAdmin1,
                 lastName:process.env.lastNameAdmin1,
                 email:process.env.emailAdmin1,
                 password:process.env.passwordAdmin1
                }
            ]
            for (let admin of admins)
            {
                const existadmin=await this.consultantModel.findOne({email:admin.email})
                if (!existadmin)
                {   const hashedPassword=bcrypt.hashSync(admin.password,10);
                    console.log({
                        ...admin,role:Role.ADMIN,password:hashedPassword
                    })
                    
                    await  this.consultantModel.create(
                        {
                            ...admin,role:Role.ADMIN,password:hashedPassword
                        }
                    )
                }
                
            }
            
        }
        catch(error)
        {
            console.log(error)
            throw error;
        }
    }


    async addConsultant(adminID:string,addConsultantDTO:any)
    {
        try
        {   
            const consultant=await this.consultantModel.findOne({email:addConsultantDTO.email});
            if (consultant)
                throw new ConflictException("Consultant Already Found");
            const newConsultant=new this.consultantModel(addConsultantDTO);
            const admin=await this.consultantModel.findById(adminID);
            newConsultant.addedBy=admin;
            const password=generate(
                {
                    length:10,
                    // numbers:true,
                    // lowercase:true,
                    // uppercase:true,
                    // symbols:true,
                }
            )
            const salt=bcrypt.genSaltSync(10);
            const hashedPassword=bcrypt.hashSync(password,salt);
            newConsultant.password=hashedPassword;
            console.log("password is "+password);
            // const mailsent=await this.mailService.sendConsultantCredentials({email:addConsultantDTO.email,firstName:addConsultantDTO.firstName,password})
            // if (!mailsent)
            //     return false;
            await newConsultant.save();
            return {succes:"Consultant Created Successfully"};
        } 
        catch (error) {     
         console.log("error is "+error);
         throw error
        }
    }

    async updateConsultant(consultantID:string,updateConsultantDTO:any)
    {
        try
        {
            const updated=await this.consultantModel.findByIdAndUpdate(consultantID,updateConsultantDTO,{new:true});
            return !!updated;
        }
        catch(error)
        {
            console.log("error is "+error);
            return false;
        }
    }


    async transfertClient(fromConsultantID:string,toConsultantID:string,clientID:string)
    {const session=await this.consultantModel.startSession();
        session.startTransaction()
        try
        {  
            const from=await this.consultantModel.findById(fromConsultantID).session(session);
            const to=await this.consultantModel.findById(toConsultantID).session(session);
            if (!to)
                throw new NotFoundException("Consultant to transfer client to not found");
            const client=await this.clientModel.findById(clientID).session(session);
            if (!client)
                throw new NotFoundException("Client to transfer Not Found")
            if (!from.clients.some(c => c.toString() === clientID))
            {
                throw new ForbiddenException("Client is not on your clients list")
            }
            from.clients=from.clients.filter((c)=>c.toString()!=clientID);
            to.clients.push(client);
            client.consultant=to;
            await to.save({session});
            await from.save({session})
            await client.save({session});
            await session.commitTransaction();
            session.endSession()
            return true;
        }
        catch(error)
        {   console.log("error is "+error);
            await session.abortTransaction();
            session.endSession();
            throw error;
        }
    }

    async getConsultantWithClients(consultantID: string) {  //changed with paginated function in client service
        try {
          const consultant = await this.consultantModel
            .findById(consultantID)
            .select("-password -createdAt")
            .populate({path:"clients",select:"-createdAt"}); 
      
          if (!consultant) {
            throw new NotFoundException("Consultant non trouvé");
          }
          const numClients=consultant.clients.length;
          consultant.clients.splice(1)// will change to 16 after in production
         
          return {consultant,numClients};
        } catch (error) {
          console.log("Erreur lors de la récupération du consultant :", error);
          throw error;
        }
      }
      
      async getAllConsultantsWithClients(consultantID:string) {
        try {
            const consultants = await this.consultantModel
              .find({ _id: { $ne: consultantID } }) // Exclut le consultant ayant cet ID
              .populate('clients'); // Populate les informations des clients associés
        
            return consultants;
          } catch (error) {
            console.log("Erreur lors de la récupération des consultants :", error);
            throw error;
          }
      }

      async transferAllClients(fromConsultantID: string, toConsultantID: string) {
        const session = await this.consultantModel.startSession();
        session.startTransaction();
      
        try {
          const fromConsultant = await this.consultantModel.findById(fromConsultantID).session(session);
          const toConsultant = await this.consultantModel.findById(toConsultantID).session(session);
      
          if (!fromConsultant) {
            throw new NotFoundException("Consultant source non trouvé");
          }
          if (!toConsultant) {
            throw new NotFoundException("Consultant cible non trouvé");
          }
          if (!fromConsultant.clients || fromConsultant.clients.length === 0) {
            throw new NotFoundException("Aucun client à transférer pour ce consultant.");
          }
      
          // Faire une copie de la liste des clients pour éviter les conflits pendant la boucle
          const clientIDs = [...fromConsultant.clients];
      
          for (const clientID of clientIDs) {
            await this.transfertClient(fromConsultantID, toConsultantID, clientID.toString());
          }
      
          await session.commitTransaction();
          session.endSession();
      
          return {
            message: `Tous les clients ont été transférés du consultant ${fromConsultantID} vers le consultant ${toConsultantID}`,
            totalTransferred: clientIDs.length,
          };
        } catch (error) {
          await session.abortTransaction();
          session.endSession();
          console.error("Erreur lors du transfert des clients :", error);
          throw error;
        }
      }
      


      async transfertClients(
        clients: string[], // Required
         toConsultantID: string // Required
      ): Promise<boolean> {
        if (!clients || clients.length === 0) {
          throw new BadRequestException("La liste des clients est obligatoire.");
        }
        if (!toConsultantID) {
          throw new BadRequestException("L'identifiant du consultant de destination est obligatoire.");
        }
      
        const session = await this.consultantModel.startSession();
        session.startTransaction();
        try {
          // Fetch the target consultant
          const toConsultant = await this.consultantModel
            .findById(toConsultantID)
            .session(session);
      
          if (!toConsultant) {
            throw new NotFoundException(
              "Consultant vers lequel transférer les clients non trouvé."
            );
          }
      
          // Fetch the clients and their associated consultants
          const clientsToTransfer = await this.clientModel
            .find({ _id: { $in: clients } })
            .populate("consultant")
            .session(session);
      
          if (clientsToTransfer.length !== clients.length) {
            throw new NotFoundException("Certains clients à transférer sont introuvables.");
          }
      
          // Process each client and their respective consultant
          const updatedConsultants = new Map<string, any>(); // Cache to avoid multiple DB fetches
          await Promise.all(
            clientsToTransfer.map(async (client) => {
              const fromConsultantID = client.consultant.toString();
              if (!fromConsultantID) {
                throw new NotFoundException(
                  `Le client ${client._id} n'a pas de consultant associé.`
                );
              }
      
              // Fetch the fromConsultant if not already in the cache
              let fromConsultant = updatedConsultants.get(fromConsultantID);
              if (!fromConsultant) {
                fromConsultant = await this.consultantModel
                  .findById(fromConsultantID)
                  .session(session);
                if (!fromConsultant) {
                  throw new NotFoundException(
                    `Consultant source pour le client ${client._id} introuvable.`
                  );
                }
                updatedConsultants.set(fromConsultantID, fromConsultant);
              }
      
              // Remove the client from the fromConsultant
              fromConsultant.clients = fromConsultant.clients.filter(
                (clientId) => clientId.toString() !== client._id.toString()
              );
              let toConsultant=await this.consultantModel.findById(toConsultantID);
              // Update the client's consultant
              client.consultant = toConsultant;
              toConsultant.clients.push(client);
              await client.save({ session });
            })
          );
      
          // Save all updated consultants
          await Promise.all(
            Array.from(updatedConsultants.values()).map((consultant) =>
              consultant.save({ session })
            )
          );
      
          // Save the updated target consultant
          await toConsultant.save({ session });
      
          // Commit the transaction
          await session.commitTransaction();
          return true;
        } catch (error) {
          console.error("Erreur lors du transfert de clients :", error);
          await session.abortTransaction();
          throw error;
        } finally {
          session.endSession();
        }
      }
      
      


      async countClientsPerConsultant() {
        try {
          // Agrégation MongoDB pour compter les clients par consultant
          const result = await this.consultantModel.aggregate([
            {
              $lookup: {
                from: 'clients', // Nom de la collection Clients
                localField: 'clients',
                foreignField: '_id',
                as: 'clientDetails',
              },
            },
            {
              $project: {
                firstName: 1,
                lastName: 1,
                email: 1,
                totalClients: { $size: '$clientDetails' }, // Compte le nombre de clients
              },
            },
          ]);
      
          return result;
        } catch (error) {
          console.error("Erreur lors du comptage des clients par consultant :", error);
          throw error;
        }
      }
      

      async toggleConsultantStatus(consultantID: string): Promise<any> {
        try {
          // Récupérer le consultant par ID
          const consultant = await this.consultantModel.findById(consultantID);
          if (!consultant) {
            throw new NotFoundException("Consultant non trouvé");
          }
      
          // Inverser le statut actuel
          consultant.isActive = !consultant.isActive;
      
          // Sauvegarder les modifications
          await consultant.save();
      
          return {
            message: `Statut du consultant ${consultantID} mis à jour avec succès.`,
            isActive: consultant.isActive,
          };
        } catch (error) {
          console.error("Erreur lors de la mise à jour du statut du consultant :", error);
          throw error;
        }
      }
      

      
}