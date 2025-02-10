import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Liquidite } from "./liquidite.schema";



@Schema({versionKey:false,timestamps:true})

export class PlacementFinancier extends Liquidite{}

export const placementFinancierSchema=SchemaFactory.createForClass(PlacementFinancier);