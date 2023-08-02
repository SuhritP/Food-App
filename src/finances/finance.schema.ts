import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FinanceDocument = Finance & Document;

@Schema({
  collection: 'finances'
})
export class Finance {

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  organization: string;

  @Prop()
  amount: string;

}

export const FinanceSchema = SchemaFactory.createForClass(Finance);