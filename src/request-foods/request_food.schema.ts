import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type RequestFoodDocument = RequestFood & Document;

@Schema({
  collection: 'requestFoods'
})
export class RequestFood {

  @Prop()
  food_type: string;

  @Prop()
  quantity_required: string;

  @Prop()
  food_required_date: string;

  @Prop()
  transport_details: string;

  @Prop()
  food_required_location: string;

  @Prop()
  food_image: string;


  @Prop()
  mobile_number: string;

  @Prop()
  user_id: string;

  @Prop()
  acceptedId: string;


  @Prop()
  postedName: string;
  
  @Prop()
  rejectedIds: Array<ObjectId>;
  
  
}

export const RequestFoodSchema = SchemaFactory.createForClass(RequestFood);