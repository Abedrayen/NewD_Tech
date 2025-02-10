import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { PlacementFinancier } from "./placementFinancier.schema";


@Schema({versionKey:false,timestamps:true})

export class AutrePF extends PlacementFinancier{}

export const autrePFSchema=SchemaFactory.createForClass(AutrePF);