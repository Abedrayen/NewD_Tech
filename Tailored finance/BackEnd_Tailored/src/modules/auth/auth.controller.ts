import { Body, Controller, Param, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "src/shared/guards/auth.guard";


@Controller("auth")

export class AuthController{
    constructor(private authService:AuthService){}

    @Post('login')
    async login(@Body() data:any)
    {
        return this.authService.login(data);
    }
    
    // @UseGuards(AuthGuard)
    // @Patch('logout')
    // async logOut(@Req() req)
    // {
    //     const consultantID=req.user.id;
    //     return this.authService.logout(consultantID);
    // }
}