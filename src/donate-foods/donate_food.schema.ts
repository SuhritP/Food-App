import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DonateFoodDocument = DonateFood & Document;

@Schema({
  collection: 'donateFoods'
})
export class DonateFood {

  @Prop()
  food_type: string;

  @Prop()
  quantity: string;

  @Prop()
  food_available_date: string;


  @Prop()
  mobile_number: string;

  @Prop()
  transport_details: string;

  @Prop()
  food_image: string;

  @Prop()
  user_id: string;

  @Prop()
  postedName: string;
  @Prop()
  active: boolean;

}

export const DonateFoodSchema = SchemaFactory.createForClass(DonateFood);