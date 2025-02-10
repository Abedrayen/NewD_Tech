import { BadRequestException, Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { ConsultantService } from "./consultant.service";
import { Role } from "src/shared/types/enums";
import { Roles } from "src/shared/decorators/roles.decorator";
import { AuthGuard } from "src/shared/guards/auth.guard";



@Controller("Consultant")
export class ConsultantController{
    constructor(private readonly consultantService:ConsultantService){}

    @Roles(Role.ADMIN)
    @UseGuards(AuthGuard)
    @Post('addConsultant')
    async addConsultant(@Req() req,@Body() data:any)
    {   
        return this.consultantService.addConsultant(req.user.id,data);
    }
    @Roles(Role.ADMIN)
    @UseGuards(AuthGuard)
    @Patch("updateConsultant/:consultantID")
    async updateConsultantByAdmin(@Param("consultantID") consultantID:string,@Body() data:any)
    {
       return this.consultantService.updateConsultant(consultantID,data);
    }

    @UseGuards(AuthGuard)
    @Patch("updateConsultant")
    async updateConsultant(@Req() req,@Body() data:any)
    {
      return this.consultantService.updateConsultant(req.user.id,data);
    }

    
    @UseGuards(AuthGuard)
    @Roles(Role.ADMIN)
    @Patch('transferClient')
    transferClient(@Req() req,@Body() data)
    {
        return this.consultantService.transfertClient(req.user.id,data.toConsultantID,data.clientID);
    }

    @UseGuards(AuthGuard)
    @Get("getConsultantByID")
    getConsultantWithClients(@Req() req)
    {
        return this.consultantService.getConsultantWithClients(req.user.id);
    }

    @UseGuards(AuthGuard)
    @Roles(Role.ADMIN)
    @Get('getAllConsultants')
     getAllConsultantsWithClients(@Req() req) {
      return this.consultantService.getAllConsultantsWithClients(req.user.id);
    }
    @UseGuards(AuthGuard)
    @Roles(Role.ADMIN)
    @Patch('transferAllClients')  //depends of the params passed to the body of the request
    transferAllClients(
  @Req() req,
  @Body('fromConsultantID') fromConsultantID?: string,
  @Body('toConsultantID') toConsultantID?: string
) {
  // Vérification des combinaisons des paramètres
  if (fromConsultantID && toConsultantID) {
  
    return this.consultantService.transferAllClients(fromConsultantID, toConsultantID);
  } 
  else if (fromConsultantID && !toConsultantID) {
    // Si seul l'ID source est fourni, transférer vers le consultant connecté
    return this.consultantService.transferAllClients(fromConsultantID, req.user.id);
  } 
  else if (!fromConsultantID && toConsultantID) {
    // Si seul l'ID cible est fourni, transférer depuis le consultant connecté
    return this.consultantService.transferAllClients(req.user.id, toConsultantID);
  } 
  else {
    // Aucune combinaison valide
    throw new BadRequestException("Vous devez fournir au moins une combinaison valide d'IDs.");
  }
}



@UseGuards(AuthGuard)
@Roles(Role.ADMIN)
@Patch('transferClients')  //depends of the params passed to the body of the request
transferClients(
@Req() req,
@Body("clients") clients:string[],
@Body('toConsultantID') toConsultantID?: string,
) {
  return this.consultantService.transfertClients(clients,toConsultantID);
}
    @UseGuards(AuthGuard)
    @Roles(Role.ADMIN)
    @Get('countClientsForEachConsultant')
    countClientsPerConsultant() {
        return this.consultantService.countClientsPerConsultant();
}

    @UseGuards(AuthGuard)
    @Roles(Role.ADMIN)
    @Patch("toggleAccountStatus")
    toggleAccountStatus(@Body("consultantID") consultantID)
    {
        return this.consultantService.toggleConsultantStatus(consultantID);
    }
}
