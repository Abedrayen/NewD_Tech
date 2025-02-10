import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { IRPPFoyer } from './IRPP_Foyer.schema';

@Schema()

export class IFI extends IRPPFoyer{}

export const IFISchema=SchemaFactory.createForClass(IFI);