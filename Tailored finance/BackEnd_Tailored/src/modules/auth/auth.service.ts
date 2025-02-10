import { BadRequestException, ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Consultant } from "src/modules/consultant/schemas/consultant.schema";
import {Model} from "mongoose"
import * as bcrypt from "bcrypt"
import { JwtService } from "@nestjs/jwt";
import { Role } from "src/shared/types/enums";
@Injectable()
export class AuthService{
    constructor(private readonly jwtService:JwtService
        ,@InjectModel(Consultant.name) private readonly consultantModel:Model<Consultant>){}

        async login(data: any) {
            try {
              // Rechercher le consultant par email
              const consultant = await this.consultantModel.findOne({ email: data.email });
          
              if (!consultant) {
                throw new NotFoundException(`Consultant avec l'email ${data.email} non trouvé`);
              }
          
              // Vérifier si le compte est actif (sauf si c'est un administrateur)
              if (!consultant.isActive && consultant.role !== Role.ADMIN) {
                throw new ForbiddenException("Votre compte est désactivé. Veuillez contacter l'administrateur.");
              }
          
              
              const passwordsMatch = bcrypt.compareSync(data.password, consultant.password);
              if (!passwordsMatch) {
                throw new UnauthorizedException("Mot de passe incorrect");
              }
          
              // Générer le token JWT
              const payload = { id: consultant._id, role: consultant.role };
              const access_token = await this.jwtService.signAsync(payload, {
                secret: process.env.JWT_SECRET,
                expiresIn: "5h",
              });
          
              return { access_token };
          
            } catch (error) {
              console.error("Auth Error :", error);
              throw error;
            }
          }
          

    // async logout(consultantID:string)  need sessions IDs
    // {
    //     try
    //     {
    //         const updated=await this.consultantModel.findByIdAndUpdate(consultantID,{connected:false});
    //         if (!updated)
    //         {
    //             throw new BadRequestException("Error while Logging Out");
    //         }
    //         return true;
    //     }
    //     catch(error)
    //     {
    //         console.log("logout error :"+error)
    //         throw error;
    //     }
    // }

   }