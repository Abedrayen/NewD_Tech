
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class Montant  {
  @Prop({ required: false })
  versementLibre?: number;

  @Prop({ required: false })
  fraisEntreeVersementLibrePourcentage?: number;

  @Prop({ required: false })
  versementProgrameMensuel?: number;

  @Prop({ required: false })
  fraisEntreeProgrammeMensuelPourcentage?: number;

  @Prop({ required: false })
  cash?: number;

  @Prop({ required: false })
  tauxDeFinancement?: number;

  @Prop({ required: false })
  dureeDeCredit?: number;

  @Prop({ required: false })
  forets?: number;

  @Prop({ required: false })
  privateEquity?: number;
}

export const MontantSchema = SchemaFactory.createForClass(Montant);
