import { Schema,SchemaFactory,Prop } from "@nestjs/mongoose";
import * as mongoose from "mongoose"
import { Client } from "src/modules/client/schemas/client.schema";
import { Role } from "src/shared/types/enums";
@Schema({timestamps:true,versionKey:false})

export class Consultant
{
    @Prop()
    firstName:String;

    @Prop()
    lastName:String;

    @Prop()
    image:String;

    @Prop()
    email:String;

    @Prop() 
    password:string;

    @Prop({type:[mongoose.Schema.Types.ObjectId],ref:"Client"})  ///peut t-il deux consultant ont le meme client pour des affaires differents 
    clients:Client[]

    @Prop()
    role:Role

    @Prop()
    phoneNumber:string;

    @Prop({default:false})
    connected:boolean

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Consultant"})
    addedBy:Consultant

    @Prop({default:true})
    isActive:boolean
}

export const consultantSchema=SchemaFactory.createForClass(Consultant);