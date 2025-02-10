import { Module } from "@nestjs/common";
import { Affaire } from "./schemas/affaire.schema";
import { affaireController } from "./affaire.controller";
import { affaireService } from "./services/affaire.service";



@Module({
    imports:[],
    controllers:[affaireController],
    providers:[affaireService],
    exports:[affaireService]
})
export class AffaireModule{}