import { Controller,Post,Body, UseGuards, Req, Get, Query, Param } from "@nestjs/common";
import { ClientService } from "./client.service";
import { AuthGuard } from "src/shared/guards/auth.guard";
import { affaireClientService } from "./services/affaireClient.service";



@Controller("client")
export class ClientController
{
    constructor(private readonly clientService:ClientService,
                private readonly affaireClientService:affaireClientService
    ){}
    @UseGuards(AuthGuard)
    @Post('createClient')
    async createNewClient(@Req() req,@Body() data:any)
    {  
       return this.clientService.createClient(req.user.id,data);    
    }
    // @UseGuards(AuthGuard)
    // @Post("addProfilClient")
    // async addProfilClient(@Req() req,@Body() data:any)
    // {
    //     return this.clientService.addProfilClient(req.user.id,data);
    // }
    @UseGuards(AuthGuard)
    
    @Get("getClients")
     async getClients(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
    @Req() req
  ) {
    const pageNumber = parseInt(page, 10) || 1;
    const pageLimit = parseInt(limit, 10) || 10;
    console.log(pageNumber,pageLimit)
    return  this.clientService.findClients(req.user.id,pageNumber, pageLimit);
  }

  @UseGuards(AuthGuard)
  @Get('getClientsCount')
  getClientsCount(@Req() req)
  {
    return this.clientService.getClientsCount(req.user.id);
  }

  @UseGuards(AuthGuard)
  @Get("getClientsDetails")
  getClientsDetails(@Req() req)
  {
    return this.clientService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('getProfilClientById/:clientID')
  getProfilClientByID(@Req() req,@Param('clientID') clientID:string)
  {
    return this.clientService.getProfilClientByID(clientID);
  }

  @UseGuards(AuthGuard)
  @Post("ajouterAffaire")
  AjouterAffaire(@Req()req,@Body() data:any)
  {
    return this.affaireClientService.ajouterAffaire(data);
  }
}