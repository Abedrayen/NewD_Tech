import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Consultant, consultantSchema } from "src/modules/consultant/schemas/consultant.schema";
import { JwtService } from "@nestjs/jwt";


@Module({
    imports:[MongooseModule.forFeature(
        [
            {name:Consultant.name,schema:consultantSchema}

        ]
    )],
    controllers:[AuthController],
    providers:[AuthService,JwtService],
    exports:[]
})
export class AuthModule{}