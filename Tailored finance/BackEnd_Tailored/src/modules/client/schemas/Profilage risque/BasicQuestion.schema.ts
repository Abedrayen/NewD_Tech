import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';



export class BasicQuestion
{
    @Prop()
    question:String;

    @Prop()
    reponse:String;
}   